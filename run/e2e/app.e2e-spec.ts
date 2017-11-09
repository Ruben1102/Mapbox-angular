import { RunPage } from './app.po';

describe('run App', () => {
  let page: RunPage;

  beforeEach(() => {
    page = new RunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
