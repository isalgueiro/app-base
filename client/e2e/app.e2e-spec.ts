import { RedeFpHostalariaPage } from './app.po';

describe('rede-fp-hostalaria App', () => {
  let page: RedeFpHostalariaPage;

  beforeEach(() => {
    page = new RedeFpHostalariaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to rh!!');
  });
});
