import { NgExamsPage } from './app.po';

describe('ng-exams App', () => {
  let page: NgExamsPage;

  beforeEach(() => {
    page = new NgExamsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
