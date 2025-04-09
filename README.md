# BoostCart

Supercharge your online presence with BoostCart, the solution for selling online.

## Getting Started

First, clone the repo

```shell
$ git clone https://github.com/boostcart/boostcart
Cloning into boostcart...
```

Second, install the depenencies (we recommend using `bun`, however you can use any other package manager)

```shell
$ bun install
Running bun install...
```

Third, add the connection strings for your database in the `.env` file and run the migrations

```shell
$ bunx prisma migrate
Migrating the database schema...
```

Finally, start the development server

```shell
$ bun dev
Starting next development server...
```

Open your new online store in your browser at [http://localhost:3000](http://localhost:3000)

## About

BoostCart is a platform built using [Next.js](https://nextjs.org), made to lower difficulty of creating online stores.

## Features

Here's a list of our main features:

- Multiple languages
- PPR (Partial Prerendering) - Combine static and dynamic components together for the best performance
- Server actions - Use the server, make your life easier
- PrismaORM - Talk to your database easily
- Biome - Formater and linter so good it's out of this world.
- Optimized Images - Using the built-in `next/image` package for optimized images so you don't have to worry about them and if your store will run fast
- Made for SEO - Our engineers have made SEO a breeze, why - because we know what a pain it is

## Requirements

- [Node.js](https://nodejs.org) v20.17
- [Bun](https://bun.sh) or your preferred package manager. (We recommend using Bun as it's faster, more stable and we know that our app WILL build and run smoothly!)

## Learn more

If you want to learn more about BoostCart and how it works feel free to open our [documentation](https://docs.boostcart.dev). (Coming soon)
Here's the [Next.js documentation](https://nextjs.org/docs/) aswell.

## Deploying

We recommend using [Vercel](https://vercel.com) as your hosting provider.
Why? Because after all they are the creators of [Next.js](https://nextjs.org) and they do know what's best for hosting your Next app.
