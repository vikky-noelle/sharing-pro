import { AppPage } from './app.po';
describe('sport-social App', function () {
    var page;
    beforeEach(function () {
        page = new AppPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map