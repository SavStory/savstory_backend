# Salvation Story Platform

## Getting Started

To get started with development, run the following commands

```bash
    yarn install
```

Start the application as well as the build process in `watch` mode

```bash
    yarn dev
```

## Initialize Sample Database

You need to initialize a sample database for development. There's a file, `src/helpers/populate_db.ts` that populates a Mongodb instance if you want to create a local one in your machine.

We have MongoDB Cluster available. You can ask @zt4ff for the connection URL.

Once you have a database connection URL, either the one you created or the one gotten from us, create a `.env` file in the root directory of this project and insert the connect string.

```txt
PORT=3000
CONNECTION_STRING=<connection_url>
```

## Contributors

We love contributors! Feel free to contribute to this project but please read the [Contributing Guidelines](CONTRIBUTING.md) before opening an issue or PR so you understand the branching strategy and local development environment.

<a href="https://github.com/SavStory/savstory_backend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SavStory/savstory_backend" />
</a>
