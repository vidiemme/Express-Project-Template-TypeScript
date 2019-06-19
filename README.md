# TS Express API Project Template

Backend entry point for almost any project based on Express and TypeScript

## Install

- Clone the project and change the name in `app/package.json`
- `cd app`
- `npm install`
- `npm start`

## Usage

The `server.ts` is the entry point, here you can configure your server.
`ServerConstants.ts` defines all the constants in your project.
The `api` folder contains all the API modules, all the routes are instantiated in the `APIConstants.ts` file, each "route" should be added in a proper module.

A module is not just a single `Module.ts`, but a bunch of files that compose the module itself. If you want to make a new module in a whistle, we suggest to install and use the [JS GraphQL Module Template](https://github.com/vidiemme/JS-GraphQL-Module-Template).

When you want to add and expose a new module, just add it to the `APIConstants.ts`, following the `Actor` example module.
