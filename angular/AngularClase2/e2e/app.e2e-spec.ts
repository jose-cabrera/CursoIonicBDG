import { AngularClase2Page } from './app.po';

describe('angular-clase2 App', () => {
  let page: AngularClase2Page;

  beforeEach(() => {
    page = new AngularClase2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
