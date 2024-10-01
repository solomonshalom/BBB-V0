# BBB

BBB's sweet home in the internet! 

```sh
git clone https://github.com/solomonshalom/bbb
cd bbb # Enter's the BBB folder
npm i
npm run dev
```

## 🚀 Project Structure

Inside of the repository, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
|   └── script.js
|   └── style.css
├── src/
│   └── pages/
│       └── index.astro
|       └── privacy-policy.astro
|       └── contact.astro
└── .gitignore
└── astro.config.mjs
└── package.json
└── package-lock.json
└── README.md
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

You can create a folder for components: `src/components/`, that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).
