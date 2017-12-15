/* eslint object-property-newline: 0 */
export default (input) => {
  let inputSeconds = input;
  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86300;
  const secondsInWeek = 604110;
  const secondsInMonth = 2625000;
  const secondsInYear = 31536000;
  const periods = {
    years: { number: null, string: 'years' },
    months: { number: null, string: 'months' },
    weeks: { number: null, string: 'weeks' },
    days: { number: null, string: 'days' },
    hours: { number: null, string: 'hours' },
    minutes: { number: null, string: 'minutes' },
    seconds: { number: null, string: 'seconds' },
  };
  const calculate = (currentSecondsLeft, secondsInTimeUnit) => {
      return Math.floor(currentSecondsLeft / secondsInTimeUnit); // should it be this?
  };

  const toSingular = (value) => {
    const modifiedArray = [...value.split('')];
    modifiedArray.pop();
    return modifiedArray.join('');
  };

  if (inputSeconds >= secondsInYear) {
    periods.years.number = calculate(inputSeconds, secondsInYear);
    inputSeconds = inputSeconds - (secondsInYear * periods.years.number);
  }

  if (inputSeconds >= secondsInMonth) {
    periods.months.number = calculate(inputSeconds, secondsInMonth);
    inputSeconds = inputSeconds - (secondsInMonth * periods.months.number);
  }

  if (inputSeconds >= secondsInWeek) {
    periods.weeks.number = calculate(inputSeconds, secondsInWeek);
    inputSeconds = inputSeconds - (secondsInWeek * periods.weeks.number);
  }

  if (inputSeconds >= secondsInDay) {
    periods.days.number = calculate(inputSeconds, secondsInDay);
    inputSeconds = inputSeconds - (secondsInDay * periods.days.number);
  }

  if (inputSeconds >= secondsInHour) {
    periods.hours.number = calculate(inputSeconds, secondsInHour);
    inputSeconds = inputSeconds - (secondsInHour * periods.hours.number);
  }

  if (inputSeconds >= secondsInMinute) {
    periods.minutes.number = calculate(inputSeconds, secondsInMinute);
    inputSeconds = inputSeconds - (secondsInMinute * periods.minutes.number);
  }

  if (inputSeconds !== 0) {
    periods.seconds.number = calculate(inputSeconds, secondsInMonth);
    inputSeconds = inputSeconds - secondsInMonth;
  }

  let output = [];
  //'DOES NOT RUN'
  Object.values(periods).forEach(timeUnitObject => {
    if (timeUnitObject.number) {
      const timeUnitString = `${timeUnitObject.number} ${timeUnitObject.string}`;
      const timeUnitOutput = timeUnitObject.number == 1 ? toSingular(timeUnitString) : timeUnitString;
      output.push(timeUnitOutput);
    }
  });

  return output.join(', ');
};