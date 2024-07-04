### UI Test

The solution provided to the test uses [Vite](https://github.com/vitejs/vite) to build the frontend and [json-server](https://github.com/typicode/json-server), as an API token-free and easy to get running-up solution to handle persistance of data. After installing dependencies, the command **'npm run dev'** will [concurrently](https://github.com/open-cli-tools/concurrently) run the Vite build and the json server. The project includes unit tests with [Vitest](https://github.com/vitest-dev/vitest).

Start by cloning the repository of the project:

```sh
$ git clone git@github.com:SanZLan/ui-test.git
$ cd ui-test
```

Install dependencies with npm:

```sh
$ npm install
```

Execute the `dev` script configured to concurrently run the json-server and the Vite dev server:

```sh
$ npm run dev
```

Execute the vitest `test` scripts with the command:

```sh
$ npm test
```