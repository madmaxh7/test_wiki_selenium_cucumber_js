// WikiMainPageLocator.js

import {$} from '@wdio/globals';
class WikiMainPageLocator {
  get searchInput() {
    return $('#searchInput');
  }

  get searchButton() {
    return $('#searchButton');
  }
}

export default new WikiMainPageLocator();