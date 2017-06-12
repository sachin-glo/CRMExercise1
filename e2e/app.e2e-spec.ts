import { CRMAppPage } from './app.po';

describe('crmapp App', () => {
  let page: CRMAppPage;

  beforeEach(() => {
    page = new CRMAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
