# Guide to create an angular 8 library

### Using the angular-cli

Create a new empty angular workspace

```bash
ng new asi-esir-lib --create-application=false
```

Open the workspace, and generate a new project

```bash
ng generate library asi-esir-lib
```

Edit the archive

- package.json : add author for exemple
- modify angular.json et tslint, to change the prefix 
- create your first component : ng g component components/asi-esir-input
- In the same directory create a new module for the component
- taking exemple on the existing file exports in public-api.ts
- import the commonModule to make the component working
- Dont forget to export you component !

- Modify ts-config and add some compilation rules

``` typescript
    "allowSyntheticDefaultImports": true,
    "alwaysStrict": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noUnusedParameters": true,
    "noUnusedLocals": true,
```

- Modify ts-lint to allow leading-underscore (you will have probleme cause of the "noUnusedParameters" if you dont do that)

```
    "variable-name": {
      "options" : [
        "allow-leading-underscore"
      ]
    },
```

- Check if test is working

```
npm run test
```

- A chrome error ? perhaps you need to export CHROME_BIN var

```shell
export CHROME_BIN=/usr/bin/chromium-browser
```

- remove chrome display and watch mode and add coverage

```shell
"test:lib": "ng test asi-esir-lib --browsers ChromeHeadless --watch false --code-coverage=true",
```

- try to build the application

### create a new application to  test your component

```shell
ng generate application asi-esir
```

- modify npm script

```
    "start": "ng serve asi-esir",
    "build:lib": "ng build asi-esir-lib",
    "build:lib:watch": "ng build asi-esir-lib --watch",
    "test:lib": "ng test asi-esir-lib --browsers ChromeHeadless --watch false --code-coverage=true",
    "lint:lib": "ng lint asi-esir-lib",
```

- import your component module and test your component on the website

```
import { AsiEsirInputModule} from 'asi-esir-lib';
```

### Manage style

* add a new folder for your less or sass application in your library

* add copyfiles to copy this folder during the build process

```
npm i --save-dev copyfiles
```

* update packages.json  (add copy:style and update build:lib)

```
"copy:style": "./node_modules/.bin/copyfiles -u 3 projects/asi-esir-lib/style/**/* dist/asi-esir-lib/lib/style",
"build:lib": "ng build asi-esir-lib && npm run copy:style",
```

### Push on github and add travis configuration to manage ci ! https://travis-ci.com

- add travis.yml

```yml
language: node_js
node_js:
  - "12.4"

script: 'true'

jobs:
  include:
    - stage: compile
      script : npm run lint:lib
    - script : npm run build:lib
    - stage: test
      script :
        - npm run test:lib
```

- connect on travis-ci with your account and check your build after push


### Add coveralls ! https://coveralls.io/

- add coverolls dependencie

```bash
npm i --save-dev coveralls
```

```
"coveralls" : "cat ./coverage/asi-esir-lib/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
```

update travis.yml  to add coveralls script

```yml
language: node_js
node_js:
  - "12.4"

script: 'true'

jobs:
  include:
    - stage: compile
      script : npm run lint:lib
    - script : npm run build:lib
    - stage: test
      script :
        - npm run test:lib
        - npm run coveralls
```

- Check your report on coveralls after travis build :)
