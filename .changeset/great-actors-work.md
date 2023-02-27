---
'@udecode/plate-core': minor
'@udecode/plate-link': major
---

`@udecode/plate-core`:

- Add `sanitizeUrl` util to check if URL has an allowed scheme

`@udecode/plate-link`:

- Add `allowedSchemes` plugin option
- Breaking change to the interface of `upsertLink`:
  - Removed `isUrl`
  - Added `skipValidation`
- Check that URL scheme is valid when:
  - Upserting links
  - Deserializing links from HTL
  - Passing `href` to `nodeProps`
  - Rendering the `OpenLinkButton` in `FloatingLink`
