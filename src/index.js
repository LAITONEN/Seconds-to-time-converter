/* eslint object-property-newline: 0 */

export const calculate = (currentSecondsLeft, secondsInTimeUnit) => {
    return Math.floor(currentSecondsLeft / secondsInTimeUnit);
};

export const toSingular = (value) => {
  const modifiedArray = [...value.split('')];
  modifiedArray.pop();
  return modifiedArray.join('');
};

export default (input) => {
  let inputSeconds = +input;
  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86300;
  const secondsInWeek = 604110;
  const secondsInMonth = 2625000;
  const secondsInYear = 31536000;
  const periods = {
    years: { value: null, string: 'years' },
    months: { value: null, string: 'months' },
    weeks: { value: null, string: 'weeks' },
    days: { value: null, string: 'days' },
    hours: { value: null, string: 'hours' },
    minutes: { value: null, string: 'minutes' },
    seconds: { value: null, string: 'seconds' },
  };

  if (inputSeconds >= secondsInYear) {
    periods.years.value = calculate(inputSeconds, secondsInYear);
    inputSeconds = inputSeconds - (secondsInYear * periods.years.value);
  }

  if (inputSeconds >= secondsInMonth) {
    periods.months.value = calculate(inputSeconds, secondsInMonth);
    inputSeconds = inputSeconds - (secondsInMonth * periods.months.value);
  }

  if (inputSeconds >= secondsInWeek) {
    periods.weeks.value = calculate(inputSeconds, secondsInWeek);
    inputSeconds = inputSeconds - (secondsInWeek * periods.weeks.value);
  }

  if (inputSeconds >= secondsInDay) {
    periods.days.value = calculate(inputSeconds, secondsInDay);
    inputSeconds = inputSeconds - (secondsInDay * periods.days.value);
  }

  if (inputSeconds >= secondsInHour) {
    periods.hours.value = calculate(inputSeconds, secondsInHour);
    inputSeconds = inputSeconds - (secondsInHour * periods.hours.value);
  }

  if (inputSeconds >= secondsInMinute) {
    periods.minutes.value = calculate(inputSeconds, secondsInMinute);
    inputSeconds = inputSeconds - (secondsInMinute * periods.minutes.value);
  }

  if (inputSeconds !== 0) {
    periods.seconds.value = calculate(inputSeconds, secondsInMonth);
    inputSeconds = inputSeconds - secondsInMonth;
  }

  let output = [];
  Object.values(periods).forEach(timeUnitObject => {
    if (timeUnitObject.value) {
      const timeUnitString = `${timeUnitObject.value} ${timeUnitObject.string}`;
      const timeUnitOutput = timeUnitObject.value == 1 ? toSingular(timeUnitString) : timeUnitString;
      output.push(timeUnitOutput);
    }
  });

  return output.join(', ');
};