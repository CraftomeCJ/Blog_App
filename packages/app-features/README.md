https://nx.dev/structure/library-types#feature-libraries

## Feature Libraries
### What is it?

A feature library contains a set of files that configure a business use case or a page in an application. Most of the components in such a library are smart components that interact with data sources. This type of library also contains most of the UI logic, form validation code, etc. Feature libraries are almost always app-specific and are often lazy-loaded.

### Naming Convention

feature (if nested) or feature-\* (e.g., feature-home).

### Dependency Constraints

A feature library can depend on any type of library.


libs/
└── my-app/
    └── feature-home/
        └── src/
            ├── index.ts
            └── lib/
feature-home is the app-specific feature library (in this case, the "my-app" app).

