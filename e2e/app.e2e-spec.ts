import { DtChallengePage } from './app.po';

describe('dt-challenge App', () => {
  let page: DtChallengePage;

  beforeEach(() => {
    page = new DtChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
