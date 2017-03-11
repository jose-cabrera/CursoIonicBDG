import { CurApp2Page } from './app.po';

describe('cur-app2 App', () => {
  let page: CurApp2Page;

  beforeEach(() => {
    page = new CurApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
