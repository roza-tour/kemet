/// <reference path="../.astro/types.d.ts" />
// WebMCP (Chrome's agent-tools trial, developer.chrome.com/docs/ai/webmcp):
// the attributes that turn a form into a tool an AI agent can call. Used on
// ContactForm, UltraBrief, the nav search and the footer's "Travelling from"
// (TravellingFrom.astro); not yet in Astro's HTML types.
declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    toolname?: string;
    tooldescription?: string;
    toolautosubmit?: boolean;
    toolparamdescription?: string;
  }
}
