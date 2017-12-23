/*
lastMonday function

when called it gets the date in Epoch time today
1. Answer should be in date format
2. It should return the last Monday from today in date format
 */


describe('lastMonday function', () => {
 beforeEach(() => {
   let today = new Date(2017, 11, 22);
   jasmine.clock().mockDate(today);
 });

  it('should return the last Monday from today', () => {
    expect(lastMonday(this.today)).toEqual('Mon Dec 18 2017');
  });

  it('if Sunday... it should return the Monday of 6 days ago', () => {
    expect(lastMonday(new Date(2017, 11, 17))).toEqual('Mon Dec 11 2017');
  });
});