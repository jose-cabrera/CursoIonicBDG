import { AngularClaseMGPage } from './app.po';

describe('angular-clase-mg App', () => {
  let page: AngularClaseMGPage;

  beforeEach(() => {
    page = new AngularClaseMGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
