import { CursoIonicParte2Page } from './app.po';

describe('curso-ionic-parte2 App', () => {
  let page: CursoIonicParte2Page;

  beforeEach(() => {
    page = new CursoIonicParte2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
