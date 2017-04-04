veclib
======

This is a fork of [gl-matrix](https://github.com/toji/gl-matrix), with the following changes:

- Converted to TypeScript
- Added a few vector methods (mix, clamp, clamp01, zero, one)
- Added an ELEMENT_COUNT constant to all types
- Changed the forEach method to accept a vararg list
- Extracted out the SIMD mat4 functions, they are presently not used in SD, also there is no
  useful support for it in browsers. Because of this they are _excluded_ from this build at
  this time.

All current and future changes are there to facilitate integration with or utility for the
[Stardazed](https://github.com/stardazed/stardazed/) library, not to preserve compatibility
with the original code or its clients.

There is no support for any usage or build setup other than what is used by SD. It is a
seperate, but internal module of SD.
