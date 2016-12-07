import { WebmailAuthPage } from './app.po';

describe('webmail-auth App', function() {
  let page: WebmailAuthPage;

  beforeEach(() => {
    page = new WebmailAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
