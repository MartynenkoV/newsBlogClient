import { NewsBlogPage } from './app.po';

describe('news-blog App', function() {
  let page: NewsBlogPage;

  beforeEach(() => {
    page = new NewsBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
