//BaseWikiPageSteps.js
import { wikiMainPageLocator } from '../pom';
import { browser } from "@wdio/globals";
class BaseWikiPageSteps{
    async open_url(path) {
        await browser.url(path);
    }
    async searchFor(query){
        await wikiMainPageLocator.searchInput.setValue(query);
        await wikiMainPageLocator.searchButton.click();
    }
}

export default new BaseWikiPageSteps;