<h1 align="center"> Express API Project Template - TypeScript </h1>

> Backend entry point for almost any project based on Express and TypeScript

## Installation

Clone the project and change the name in `app/package.json`

```sh
$ cd app
$ npm install
$ npm start
```

## Usage example

The `server.ts` is the entry point, here you can configure your server.
`ServerConstants.ts` defines all the constants in your project.
The `api` folder contains all the API modules, all the routes are instantiated in the `APIConstants.ts` file, each "route" should be added in a proper module.

A module is not just a single `Module.ts`, but a bunch of files that compose the module itself. If you want to make a new module in a whistle, we suggest to install and use the [JS GraphQL Module Template](https://github.com/vidiemme/JS-GraphQL-Module-Template).

When you want to add and expose a new module, just add it to the `APIConstants.ts`, following the `Actor` example module.

## Release History

* 0.1.0
    * Upgraded dependencies
    * CHANGE: Readme.md

* 0.0.1
    * Work in progress

## Meta
Vidiemme - [www.vidiemme.it](https://www.vidiemme.it) - info@vidiemme.it

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/vidiemme/](https://github.com/vidiemme/)

## Contributing

1. Fork it (<https://github.com/vidiemme/TS-Express-Project-Template/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
