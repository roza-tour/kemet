// ---------------------------------------------------------------------------
// /search-index.txt — the same corpus as /search-index.json, byte for byte,
// under a name the host will compress.
//
// WHY A SECOND NAME. The server (LiteSpeed, shared hosting) compresses text,
// HTML, CSS, JavaScript and XML, but sends application/json as it is: on
// 17 Nov 2026 the live index left the server as 323 KB raw, where llms-full.txt
// — the same kind of content, served as text/plain — travelled at a quarter of
// its size. The compression list is the host's, not .htaccess's, so the fix
// that cannot fail is to ask for the index as text. fetch().json() reads the
// body, not the type, so the search script is otherwise unchanged
// (scripts/search.client.js).
//
// /search-index.json stays exactly where it was for anything that already
// knows that address.
// ---------------------------------------------------------------------------
export { GET } from "./search-index.json";
