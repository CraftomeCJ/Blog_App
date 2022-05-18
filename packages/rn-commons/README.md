# utilities

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test utilities` to execute the unit tests via [Jest](https://jestjs.io).


## Utility Libraries
### What is it?

A utility library contains low level code used by many libraries. Often there is no framework-specific code and the library is simply a collection of utilities or pure functions.

### Naming Convention

util (if nested), or util-\* (e.g., util-testing)

### Dependency Constraints

A utility library can depend only on utility libraries.

An example ui lib module: libs/shared/util-formatting
