veclib
======

This is a fork of [gl-matrix](https://github.com/toji/gl-matrix), with the following changes:

- Converted to TypeScript
- Added a few vector methods (mix, clamp, clamp01, zero, one)
- Added an ELEMENT_COUNT constant to all types
- Changed the forEach method to accept a vararg list
- Removed the SIMD mat4 functions, most browsers never had SIMD support at all and Chrome
  recently removed support for these methods in non-WASM execution contexts, so having
  them here in JS-land is pointless.

All current and future changes are there to facilitate integration with or utility for the
[Stardazed](https://github.com/stardazed/stardazed/) library, not to preserve compatibility
with the original code or its clients.

There is no support for any usage or build setup other than what is used by SD. It is a
seperate, but internal module of SD.
