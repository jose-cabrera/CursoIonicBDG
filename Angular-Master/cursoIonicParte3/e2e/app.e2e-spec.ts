import { CursoIonicParte3Page } from './app.po';

describe('curso-ionic-parte3 App', () => {
  let page: CursoIonicParte3Page;

  beforeEach(() => {
    page = new CursoIonicParte3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
