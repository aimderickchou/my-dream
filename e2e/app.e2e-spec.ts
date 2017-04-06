import { MyDreamJobPage } from './app.po';

describe('my-dream-job App', () => {
  let page: MyDreamJobPage;

  beforeEach(() => {
    page = new MyDreamJobPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
