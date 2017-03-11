import { AngularAppParte2Page } from './app.po';

describe('angular-app-parte2 App', () => {
  let page: AngularAppParte2Page;

  beforeEach(() => {
    page = new AngularAppParte2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
