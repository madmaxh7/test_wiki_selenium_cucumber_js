import { baseWikiPageSteps } from '../pom';
import { Given, When, Then } from '@wdio/cucumber-framework';



Given(
    /^I open main Wiki Page$/,
    async () => {
        return baseWikiPageSteps.open_url('https://en.wikipedia.org/wiki/Main_Page')
});

// When(
//     /^I open main Wiki Page$/,
//     async () => {
//         return baseWikiPageSteps.searchFor('Robert Williams');
//     });