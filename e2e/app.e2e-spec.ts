import { TrackingMyPortfolioPage } from './app.po';

describe('tracking-my-portfolio App', function() {
  let page: TrackingMyPortfolioPage;

  beforeEach(() => {
    page = new TrackingMyPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
