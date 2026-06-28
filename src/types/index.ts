// ---------------------------------------------------------------------------
// Public type barrel — the single import surface for the whole project
// (`import type { Tour, Ref, … } from "@/types"`).
//
//   primitives.ts  — ids, refs, SEO meta, ContentEntity base, view-model types
//   taxonomy.ts    — reusable filter/search vocabulary (regions, styles, …)
//   content.ts     — content domain entities and their relationship shapes
// ---------------------------------------------------------------------------
export type * from "@/types/primitives";
export type * from "@/types/taxonomy";
export type * from "@/types/content";
export type * from "@/types/trust";
export type * from "@/types/conversion";
