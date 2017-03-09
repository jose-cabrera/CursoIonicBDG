import { JuanAppPage } from './app.po';

describe('juan-app App', () => {
  let page: JuanAppPage;

  beforeEach(() => {
    page = new JuanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
