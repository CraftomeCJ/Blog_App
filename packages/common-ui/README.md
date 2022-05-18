https://nx.dev/structure/library-types#ui-libraries

## UI Libraries
### What is it?

A UI library is a collection of related presentational components. There are generally no services injected into these components (all of the data they need should come from Inputs).

### Naming Convention

ui (if nested) or ui-\* (e.g., ui-buttons)

### Dependency Constraints

A ui library can depend on ui and util libraries.