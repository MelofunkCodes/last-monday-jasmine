/*
Sun: 0,   subtract 6
Mon: 1,   subtract 7
Tues: 2,  subtract 1
Wed: 3,   subtract 2
Thurs: 4, subtract 3
Fri: 5,   subtract 4
Sat: 6    subtract 5

=== Caesar Cipher ===

var key = 6;

(0 + 6) % 7 ==> 6
(1 + 6) % 7 ==> 0 ---> will still have to specify subtract value for Monday
(2 + 6) % 7 ==> 1
 */

/**
 * lastMonday returns last Monday in Date String format
 * @param baseDate {object} // must be passing argument like `new Date(2017, 11, 22)`
 * @returns {string}
 */
function lastMonday(baseDate){
  baseDate = baseDate || new Date();
  /*
  todo: if baseDate passed is not the proper Date object format, transform to Date object in local timezone, else assign baseDate = today
   */

  const dayOfBaseDate = baseDate.getDay();

  /*
  if dayOfBaseDate === 1, that is equivalent to Monday, so subtract 7 days from today,
  else, use the Caesar Cipher to figure out how many days to subtract to get to last Monday

  Caesar Cipher ref: http://jakepruitt.com/2014/11/12/modulo.html
   */
  const subtract = (dayOfBaseDate === 1) ? 7 : (dayOfBaseDate + 6) % 7;
  const daysToEpoch = 24 * 60 * 60 * 1000;

  const lastMondayInEpochFormat = Date.parse(baseDate) - subtract * daysToEpoch;


  return new Date(lastMondayInEpochFormat).toDateString();
}
