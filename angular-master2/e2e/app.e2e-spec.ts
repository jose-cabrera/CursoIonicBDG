import { AngularMaster2Page } from './app.po';

describe('angular-master2 App', () => {
  let page: AngularMaster2Page;

  beforeEach(() => {
    page = new AngularMaster2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
