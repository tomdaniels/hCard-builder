# hCard-builder

A real team hCard builder/updater in React.
Ready for deployment with a small express server `server/server`.

## Start it up: 
```bash
    git clone https://github.com/tomdaniels/hCard-builder.git && cd hCard-builder && yarn install && yarn watch
```

Don't forget to point your browser to [localhost:8080](localhost:8080)

**Alternatively:**
Kick off the node server (after the repo is cloned and installed):
```bash
    yarn build:dev && yarn start
```

this will point to [localhost:3000](localhost:3000)

### Under the hood?

- React.js 
- The aforemention dash of node
- Sass (scss)
- Webpack and babel
- Babel-polyfill is also set up to handle the older browsers. 

![Screenshot](./docs/screenshot.png)