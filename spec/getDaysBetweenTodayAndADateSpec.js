describe('Testing getDaysBetweenTodayAndADate:', () => {
  beforeEach(() => {
    let today = new Date(2017, 11, 22);
    jasmine.clock().mockDate(today);
  });

  it('should throw Error if date argument passed into function is NOT a Date object', () => {
    let date = '2017-12-18';

    expect(() => {
      getDaysBetweenTodayAndADate(date);
    }).toThrowError('date passed to function NOT a Date object');
  });

  it('should return the difference in # of days from today', () => {
    let date = new Date(2017, 11, 18);
    expect(getDaysBetweenTodayAndADate(date)).toEqual(4);
  });

});
