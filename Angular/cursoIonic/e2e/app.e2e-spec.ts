import { CursoIonicPage } from './app.po';

describe('curso-ionic App', function() {
  let page: CursoIonicPage;

  beforeEach(() => {
    page = new CursoIonicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
