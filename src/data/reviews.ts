// ---------------------------------------------------------------------------
// Guest reviews.
//
// ⚠️ THIS FILE IS EMPTY ON PURPOSE. DO NOT FILL IT WITH ANYTHING INVENTED.
//
// Every entry here must be a real thing a real guest actually wrote. Not a
// paraphrase, not a composite of several guests, not something written in the
// voice of a plausible customer. Fabricated reviews are against Google's
// policy, they are illegal advertising in most of the markets this site
// targets, and the penalty falls on the DOMAIN — it is one of the few
// mistakes on a site like this that cannot be undone by editing a file.
//
// If there are no real reviews yet, the right number of entries is zero. The
// components and the structured data below all render nothing at all when this
// array is empty, so an empty file is a complete, correct state — not a
// placeholder waiting to be filled.
//
// ---------------------------------------------------------------------------
// WHAT TO EXPECT WHEN THESE ARE ADDED — read this before expecting stars
//
// Google does NOT show star ratings for reviews a business publishes about
// ITSELF on its own site. Its rich-results guidance excludes "self-serving"
// reviews for LocalBusiness and Organization, which is exactly what these are.
// Marking them up is not penalised, but nobody should add ten reviews here and
// then wonder for a month why no stars appeared in the search results.
//
// That is why this file emits Review nodes and deliberately emits NO
// aggregateRating. An aggregate rating on the organisation would be the
// self-serving signal Google discounts, and publishing an average that can
// never be shown is a claim made for no reader.
//
// What these reviews are actually worth:
//   · CONVERSION. Someone deciding whether to send €4,000 to a company they
//     found yesterday reads what other guests said. This is the largest of
//     the three by a distance.
//   · ANSWER ENGINES. An assistant asked "is Kemet any good" reads structured
//     Review nodes with a named author and a date. It cannot cite what is not
//     there.
//   · COMPLETENESS of the entity in the graph.
//
// STARS IN SEARCH COME FROM SOMEWHERE ELSE: a Google Business Profile, with
// reviews left by guests on Google rather than sent to us. That is a business
// task, not a code one, and it is the higher-value half of this.
// ---------------------------------------------------------------------------

export interface Review {
  /**
   * The guest's name as THEY agreed it could be published. A first name and a
   * country ("Anna, Sweden") is fine and is often what people prefer; an
   * invented surname to make it look more solid is not.
   */
  author: string;
  /** Where they are from, shown after the name. Optional. */
  from?: string;
  /** ISO date the review was given. Real date — this is published in the graph. */
  date: string;
  /**
   * 1-5. Record what they actually gave. If a guest wrote warmly but never
   * gave a score, leave this undefined rather than inferring one: an invented
   * number is an invented review.
   */
  rating?: number;
  /** Their words, quoted. Trim for length if you must; never rewrite. */
  body: string;
  /** Which journey they travelled on, if known — slug from data/tours. */
  tourSlug?: string;
  /**
   * Where this came from: an email, a WhatsApp message, a Google review, a
   * TripAdvisor post. Not published — it is here so that any entry can be
   * traced back and verified by whoever maintains this later.
   */
  source: string;
}

export const reviews: Review[] = [];

/** Reviews that carry a numeric rating, for anything that needs a score. */
export const ratedReviews = reviews.filter(
  (r) => typeof r.rating === "number" && r.rating >= 1 && r.rating <= 5,
);

// Guard rails, enforced at build time rather than trusted.
for (const r of reviews) {
  if (r.rating !== undefined && (r.rating < 1 || r.rating > 5)) {
    throw new Error(`reviews.ts: "${r.author}" has a rating of ${r.rating}; must be 1-5.`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date)) {
    throw new Error(`reviews.ts: "${r.author}" has date "${r.date}"; must be YYYY-MM-DD.`);
  }
  if (Date.parse(r.date) > Date.now()) {
    throw new Error(`reviews.ts: "${r.author}" is dated in the future ("${r.date}").`);
  }
  if (!r.source.trim()) {
    throw new Error(`reviews.ts: "${r.author}" has no source. Every entry must be traceable.`);
  }
}
