### Introducion

In this soluiton I spent more time on architecture things to make a solution testable.
We can mock getPartners method or send invitation, and test business logic even without real requestion to API server or json file.
In the same time we can test a real provider method, or create own data source.
To make models more clean, I had added a normalization methods, that removes unused properties, replace undefined props with blank etc. We have more controle over input data.

- `test`: Run tests

### Execute project

To start project execute:
npm i
npm run start

To start tests run
npm run test

### Todo
- Add linter
- Implement send invitation method
- Improve calcDistance method and calculate earth radius based on latitude of point cooridnates.