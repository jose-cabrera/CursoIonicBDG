import { CurAppPage } from './app.po';

describe('cur-app App', () => {
  let page: CurAppPage;

  beforeEach(() => {
    page = new CurAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
