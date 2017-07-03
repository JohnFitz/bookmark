# Bookmark

> Bookmark is simple desktop application example for organizing and storing bookmarked links in one place made using [Vue.js](https://vuejs.org), [Atom Electron](https://electron.atom.io/) and [Firebase](https://firebase.google.com). 

[Chrome extension](https://github.com/mrgodhani/bookmarkextension) to make bookmark links easier directly from browser coming soon.

![img](screenshot.png)

#### Build Setup

``` bash

# Make sure in your firebase console under database you set rules for read and write to true

# Set firebase database url in either src/renderer/db.js file

# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


# lint all JS/Vue component files in `src/`
npm run lint

```

### Features

- [x] Offline
- [x] Categories
- [x] Marking as Favourite
- [ ] Rich Text Media for each link bookmarked
- [ ] Export/Import


### License

[MIT License](https://github.com/mrgodhani/bookmark/blob/master/LICENSE)

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue).
