# Kemet — Information Architecture & Content Model

This document defines the long-term information architecture the site grows into:
content domains, relationships, taxonomy, URL strategy, navigation, and how the
model stays ready for search, filtering, multi-language and an API — **without
structural refactoring later**.

It describes architecture only. No pages, URLs, styling, SEO or functionality
were changed in this phase; the build output is byte-for-byte identical.

---

## 1. Content domains (the IA)

Each domain has one responsibility and a dedicated home. Adding content means
adding files inside a domain, never reorganising.

| Domain | Responsibility | Stable id | Data home | Route convention |
| --- | --- | --- | --- | --- |
| **Tour** | A bookable itinerary | `slug` (= `id`) | `src/data/tours.ts` (+ `tours.taxonomy.ts`) | `/<slug>.html` *(existing, flat)* |
| **Destination** | A place (city/region anchor) | `id` | `src/data/destinations.ts` *(future)* | `/destinations/<slug>.html` |
| **Experience** | A single thing to do | `id` | `src/data/experiences.ts` *(future)* | `/experiences/<slug>.html` |
| **Guide** | Editorial travel guide | `id` | `src/data/guides.ts` *(future)* | `/guides/<slug>.html` |
| **Activity** | A packaged activity | `id` | `src/data/activities.ts` | `/activities/<slug>.html` *(future detail)* |
| **Category** | A grouping of tours/experiences | `id` | `src/data/categories.ts` *(future)* | `/categories/<slug>.html` |
| **Seasonal collection** | A time-bound edit | `id` | `src/data/collections.ts` *(future)* | `/collections/<slug>.html` |
| **Identity** | Cultural lens (the 8) | `id` | `src/data/identities.ts` | `/identities.html` |
| **Page** | Company / Legal / Support | `slug` | per-page `.astro` | `/<name>.html`, `/company/…`, `/legal/…`, `/support/…` |

**No overlap by design:** Tours are *itineraries*; Experiences are *single
activities*; Guides are *editorial*; Categories and Identities are *lenses* over
content (they never hold copies of it); Company/Legal/Support are *non-catalogue*
pages. Each entity type is defined once in `src/types/content.ts`.

---

## 2. Relationship model

Relationships are stored as **typed references by id** (`Ref<domain, id>`), never
as embedded objects. This keeps the graph **serialisable (API-ready)** and
**acyclic**, and avoids duplicated content.

```
                ┌─────────────┐   belongs to   ┌──────────────┐
                │    Tour     │ ─────────────▶ │ Destination  │
                │             │ ◀ ─ derived ─ ─│              │
                └─────────────┘                └──────────────┘
                  │   │   │                      │        │
       categories │   │   │ relatedTours         │ nearby │ guides
                  ▼   │   ▼ (symmetric)           ▼        ▼
            ┌──────────┐│┌──────────┐      ┌──────────────┐
            │ Category ││ │  Tour…   │      │ Destination… │
            └──────────┘│ └──────────┘      └──────────────┘
                        │
          experiences   ▼
            ┌──────────────┐      ┌──────────┐
            │ Experience   │ ───▶ │ Category │
            └──────────────┘      └──────────┘

  Guide ──▶ Tours · Destinations · Activities · Categories
  Activity ──▶ Destinations · Categories
```

**Canonical direction rule (prevents cycles & duplication):** every conceptual
edge is authored on **one** side only — the "belongs-to" side. A Tour stores its
destinations and categories; a Destination's tour list and a Category's members
are **derived** at build time, never hand-maintained. The derivation primitive is
`deriveInverse()` in `src/utils/relationships.ts`; reference resolution is
`ContentRegistry.resolve()`.

| Edge | Stored on | Inverse (derived) |
| --- | --- | --- |
| Tour ↔ Destination | Tour | Destination → Tours |
| Tour ↔ Category | Tour | Category → Tours |
| Experience ↔ Destination | Experience | Destination → Experiences |
| Guide → Tours/Destinations/Activities/Categories | Guide | (as needed) |
| Tour ↔ Tour ("related") | Tour | symmetric, authored both ways or mirrored |
| Destination ↔ Destination ("nearby") | Destination | symmetric |

Because edges only ever point from the specific to the general (or are explicit
symmetric lists), **there are no circular dependencies**.

These relationships are what later power *related content*, *recommendations*,
*"tours in this destination"*, breadcrumbs and internal-link blocks — all from the
same data, no per-feature restructuring.

---

## 3. Taxonomy

A single controlled vocabulary (`src/config/taxonomy.ts`) backs faceting, search
and landing pages. Types live in `src/types/taxonomy.ts`.

- **Categorical facets:** `regions`, `difficulties`, `travelStyles`,
  `budgetLevels`, `seasons`, `guideLanguages`.
- **Logistical/binary facets** (`TourFeatures`): private/group, family-friendly,
  walking required, boat/flight/accommodation/transfer included, accessible.
- **Thematic dimensions** (luxury, adventure, cultural, historical, nature,
  photography, family) live **only** in `travelStyles` — never duplicated as
  parallel booleans.

Each term is `{ id, label }`. The **`id` is stable and language-independent** and
is what gets stored on entities; the `label` is the default-locale display string
and moves into translation files when i18n lands. Entities reference taxonomy by
id (see `src/data/tours.taxonomy.ts`, which enriches all 12 tours), so a new facet
is "add a term + tag content", never a schema change.

---

## 4. URL strategy

Defined in `src/config/routes.ts`. Hosting is static `.html` on cPanel
(`build.format: "file"`).

- **Existing URLs are frozen.** Main pages stay flat (`/tours.html`), tours stay
  flat (`/tour-7-day.html`, the slug carries the `tour-` prefix). Grandfathered.
- **Every future domain is namespaced under its own segment:**
  `/destinations/…`, `/experiences/…`, `/guides/…`, `/categories/…`,
  `/collections/…`, plus `/company/…`, `/legal/…`, `/support/…`.
- **Collision safety:** namespacing guarantees no future route can collide with
  the root tour namespace, the main pages, or another domain — at any scale.
  `RESERVED_ROOT_SLUGS` + `isReservedRootSlug()` protect the flat root namespace
  from a tour/page slug shadowing a section.
- **One catch-all only.** The root `[slug].astro` is reserved for tours; all new
  dynamic domains live in their own subfolders, so two catch-alls never compete.
- `routeFor(domain, slug)` is the single source for an entity's path; canonical
  URLs, breadcrumbs and the sitemap all derive from it.
- **i18n-ready:** `localizedPath(file, locale)` prefixes non-default locales
  (`/fr/…`); the default locale stays unprefixed so current URLs never change.

---

## 5. Navigation architecture

Defined in `src/config/navigation.ts`; components render from it.

- **Primary nav** (`primaryNav`): `NavItem` already carries optional `children`,
  so a **mega-menu** is purely additive (populate `children`) — no component or
  data-contract change. Rendered by `Nav.astro`.
- **Footer nav** (`footerExplore`): the static link group is now data-driven; the
  Journeys column stays derived from tour data and Contact from link helpers.
- **Breadcrumb strategy:** `SECTION_HUB` maps every domain to its hub, and
  `trailFor(domain, leaf)` builds `Home › Section › Leaf` consistently. Tour pages
  already use it via the JSON-LD breadcrumb builder; future pages reuse it
  unchanged.
- **Contextual / cross-navigation:** powered by the relationship model (§2) —
  e.g. a destination page lists its derived tours; a tour links related tours,
  destinations, experiences and guides. The data exists now; UI attaches later.

No visual navigation change was made — only the underlying source of truth.

---

## 6. Search readiness

- Every entity has a **stable, language-independent id** and **consistent field
  names** (`id`, `slug`, `title`, `summary`/`description`).
- Structured, reusable **metadata** (taxonomy + relationships) is attached to
  tours today and modelled for every domain.
- A future index builds from `ContentRegistry.all(domain)` + each entity's
  taxonomy/relationships — **no content reshaping required**. Labels for synonyms
  come from the taxonomy vocabulary.

## 7. Filtering readiness

- All filterable dimensions are first-class taxonomy fields (`TourTaxonomy`),
  stored as ids, multi-valued where appropriate (`travelStyles`, `seasons`,
  `regions`).
- Facets and their labels already exist in `src/config/taxonomy.ts`, so a filter
  UI reads options from one place. **No data restructuring** is needed to add
  filtering — only UI.

## 8. API readiness

- Models are **transportable**: plain ids, slugs and `Ref` objects; no functions,
  DOM or presentation concerns in the data layer.
- Relationships are by reference, so any entity serialises to JSON cleanly and a
  REST/GraphQL response maps 1:1 onto these types.
- The editorial/structured split (`tours.ts` vs `tours.taxonomy.ts`) mirrors how an
  API would return a merged record; `[slug].astro` already merges them at build.

## 9. Multi-language readiness

- `Locale` type + `locales?` on `ContentEntity`; taxonomy stores **ids, not
  labels**, so translating is "swap the label table", not "re-tag content".
- Routing supports locale prefixes (`localizedPath`) with the default locale
  unprefixed (existing URLs unaffected).
- Shared models carry **no language-dependent assumptions**; display strings are
  the only thing a translation layer needs to localise.

## 10. SEO scalability

- `src/utils/seo.ts` (`buildPageSeo`, `entitySeo`) centralises title/description/
  canonical/OG resolution; `Base.astro` already inherits it, so **every future
  page type gets correct meta with no bespoke head logic**.
- `src/schemas/jsonld.ts` exposes `entitySchema(domain, entity)` — a dispatcher
  that returns the right structured data per domain (tours wired; others slot in
  with no caller changes) — plus a shared `breadcrumb()` fed by `trailFor()`.
- Canonical, breadcrumbs and the sitemap all derive from `routeFor()`, so a new
  domain inherits them automatically.

---

## 11. Where things live

```
src/
  types/        primitives.ts · taxonomy.ts · content.ts · index.ts (barrel)
  config/       site.ts · taxonomy.ts · routes.ts · navigation.ts
  data/         tours.ts · tours.taxonomy.ts · identities.ts · activities.ts · cuisine.ts · culture.ts
  schemas/      jsonld.ts (breadcrumb · tourSchema · entitySchema · siteSchema)
  utils/        links.ts · format.ts · seo.ts · relationships.ts
  components/   …unchanged render layer (Nav/Footer now read config)
  layouts/      Base.astro (inherits SEO via utils/seo)
  pages/        6 main + [slug].astro (tours)
```

**Adding a future domain** (e.g. destinations) is now mechanical:
1. add data in `src/data/destinations.ts` (typed by `Destination`);
2. register it for relationship resolution;
3. add `src/pages/destinations/[slug].astro` using `routeFor`, `buildPageSeo`,
   `entitySchema` and `trailFor`.

No types, routing, navigation, taxonomy or SEO core needs to change.

---

## 12. Validation

- **No routing conflicts:** one root catch-all (tours); all future domains
  namespaced; reserved-slug guard in place.
- **No duplicated content domains:** each domain has a single responsibility and
  home (§1).
- **No unnecessary coupling:** data layer imports no rendering; utils/config are
  generic; types are leaf modules.
- **No circular relationships:** edges are single-direction (specific→general) or
  explicit symmetric lists; inverses are derived (§2).
- **No scalability blockers:** adding content = adding files; facets/relationships
  extend without schema changes.
- **Build proof:** `astro check` → 0 errors / 0 warnings / 0 hints; production
  build → 18 pages; **all 18 pages byte-identical** to the pre-phase build;
  sitemap and robots unchanged.
