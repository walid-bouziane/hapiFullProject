# hapivuemango

> Nuxt.js project

# init a new project

## download nuxt

installer en global vue-cli (permet d'avoir la commande vue pour executer des fichier vue dans votre terminal)

```
$ npm install -g vue-cli
$ vue init nuxt-community/starter-template <project-name>
```

installer les dependences

```
$ cd <nom-du-projet>
$ npm install
```

## Build Setup

```bash
# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

# use this project

```
$ git clone https://github.com/waiss67/hapiVueMango.git

$ npm i

$ npm run dev
```

## route

les routes correspondent au dossier et au vichier index.vue
Nuxt permet de créer un routing très simplement

le dossier pages contient toutes les routes que vous créez

https://fr.nuxtjs.org/guide/routing

très bon guide

un dossier correspond a une route et le fichier index.vue correspond au point d'entrée de votre dossier.

par exemple :

```json
    http://localhost:3000/connexion
    {
      folderName: 'connexion',
      URLpath: '/connexion',
      component: 'pages/connexion/index.vue'
    },
```

## use vue material

https://www.npmjs.com/package/nuxt-vue-material
https://vuematerial.io/components/input

```
    npm i nuxt-vue-material --save
    npm i nuxt-material-design-icons --save
```

nuxt.config.js

```
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "hapivuemango",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },

  modules: [
    "nuxt-material-design-icons",
    [
      "nuxt-vue-material",
      {
        theme: "default"
      }
    ]
  ]
};
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

### if you get an error magic command

```
Error: watch /home/baka/Documents/hapiVueMango/git/hapiVueMango/nuxt.config.js ENOSPC
```

do

```
    echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## Astuce

Pour vous simplifier la vie je vous invite a utiliser visual studio code et installer quelques plugin et configuration

commencez par installer les dependences dans le projets

```
npm i --save-dev eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue
```

en bas a gauche de vs code dans les paramettre

-> settings

il y a deux fenettres, sur celle de droite je vous invite a ajouter cette config :

il suffit juste de copier coller ces config et effacer les précedentes (au pire y a toujours le ctrl-z donc fermez pas la page)

```
    {
    "workbench.startupEditor": "newUntitledFile",
    "git.ignoreLegacyWarning": true,
    "window.zoomLevel": -1,
    "window.menuBarVisibility": "toggle",
    "workbench.colorTheme": "Atom One Dark",
    "editor.fontSize": 14,
    "editor.tabSize": 2,
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.mouseWheelZoom": true,
    "editor.snippetSuggestions": "top",
    "psi-header.templates": [
        {
            "language": "*",
            "template": [
                "Copyright 2018 SpinalCom - www.spinalcom.com",
                "",
                "This file is part of SpinalCore.",
                "",
                "Please read all of the following terms and conditions",
                "of the Free Software license Agreement (\"Agreement\")",
                "carefully.",
                "",
                "This Agreement is a legally binding contract between",
                "the Licensee (as defined below) and SpinalCom that",
                "sets forth the terms and conditions that govern your",
                "use of the Program. By installing and/or using the",
                "Program, you agree to abide by all the terms and",
                "conditions stated or referenced herein.",
                "",
                "If you do not agree to abide by these terms and",
                "conditions, do not demonstrate your acceptance and do",
                "not install or use the Program.",
                "You should have received a copy of the license along",
                "with this file. If not, see",
                "<http://resources.spinalcom.com/licenses.pdf>."
            ]
        }
    ],
    "git.confirmSync": false,
    "sync.removeExtensions": true,
    "sync.syncExtensions": true,
    "prettier.eslintIntegration": false,
    "eslint.options": {
        "extensions": [
            ".js",
            ".vue"
        ]
    },
    "eslint.validate": [
        "javascript",
        {
            "autoFix": true,
            "language": "vue"
        }
    ],
    "beautify.config": {
        "editorconfig": true,
        "indent_size": 2,
        "wrap_attributes": "force-aligned",
        "wrap_attributes_indent_size": 2,
        "wrap_line_length": 80
    },
    "beautify.language": {
        "html": [
            "htm",
            "html"
        ]
    },
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "editorconfig": true,
            "indent_size": 2,
            "wrap_attributes": "force-aligned",
            "wrap_attributes_indent_size": 2,
            "wrap_line_length": 80
        }
    },
    "attrsSorter.order": [
        "is",
        "v-for",
        "v-if",
        "v-else-if",
        "v-else",
        "v-show",
        "v-cloak",
        "v-once",
        "v-pre",
        "id",
        "ref",
        "key",
        "slot",
        "v-model",
        "v-model.+",
        "v-bind",
        "v-bind.+",
        ":.+",
        "v-text",
        "v-text.+",
        "v-html",
        "v-html.+",
        "class",
        "v-on.+",
        "@.+",
        "name",
        "data-.+",
        "ng-.+",
        "src",
        "for",
        "type",
        "href",
        "values",
        "title",
        "alt",
        "role",
        "aria-.+",
        "$unknown$"
    ],
    "eslint.autoFixOnSave": true,
    "editor.renderWhitespace": "all",
    "editor.renderControlCharacters": true,
    "remote.port": 52698,
    "remote.onstartup": true,
    "remote.host": "127.0.0.1",
    "remote.dontShowPortAlreadyInUseError": false,
    "docker.showExplorer": false,
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.formatOnType": false
}
```
