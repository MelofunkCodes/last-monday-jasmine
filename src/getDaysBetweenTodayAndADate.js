function getDaysBetweenTodayAndADate(date){
  if(Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error('date passed to function NOT a Date object');
  } else {
    const dayOfWeekOfToday = new Date().getDay();
    const dayOfWeekOfDate = date.getDay();

    return dayOfWeekOfToday - dayOfWeekOfDate;
  }

}
