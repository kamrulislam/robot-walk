# Robot Walk

It is a console application that will ensure a robot will walk on a defined grid

## Setup

Clone this repo and move into the folder. Run the following commands.

Before running this project you need to have `node` installed. I have used node version `10.13`. If you are using `nvm`, run `nmv use` inside the folder.

```
# nvm use 
npm i
npm run build
npm start
```

to see debug message

```
npm run start-debug
```


## Test

This project uses `jest` for unit and integration test. To run test, run the following command

```
npm run test
```

To see debug log run

```
npm run test-debug
```

## Input

Two different input options are available.

### Read from file

The application will read from file if there exists a file in `input` folder with name `input.txt`. The file name is configurable, please see `src/config.ts` file.

### Read from stdin

If no input file is present, the application will read from `stdin`.

## Additional

- This project also includes some vscode extensions suggestions.
- Fully enforced `tslint` 
- Configurable table size (see `src/robot/table-config.ts`)
- Latest testing framework (`jest`) has been used with 
  - mock function
  - async function 
  - iterable test
  - deep object equality test

