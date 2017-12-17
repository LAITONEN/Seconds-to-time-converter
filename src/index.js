/* eslint object-property-newline: 0 */

export const calculate = (currentSecondsLeft, secondsInTimeUnit) => {
    return Math.floor(currentSecondsLeft / secondsInTimeUnit);
};

export const subtractUsedSeconds = (secondsBefore, secondsUsed) => {
    return secondsBefore - secondsUsed;
};

// move everything from if statements to a separate function?

export default (input) => {
  let remainingSeconds = +input;
  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInWeek = 604800;
  const secondsInMonth = 2592000;
  const secondsInYear = 31536000;
  const periods = {
    years: { value: null, string: 'year' },
    months: { value: null, string: 'month' },
    weeks: { value: null, string: 'week' },
    days: { value: null, string: 'day' },
    hours: { value: null, string: 'hour' },
    minutes: { value: null, string: 'minute' },
    seconds: { value: null, string: 'second' },
  };

  if (remainingSeconds >= secondsInYear) {
    periods.years.value = calculate(remainingSeconds, secondsInYear);
    const justUsedSeconds = secondsInYear * periods.years.value;
    remainingSeconds = subtractUsedSeconds(remainingSeconds, justUsedSeconds);
  }

  if (remainingSeconds >= secondsInMonth) {
    periods.months.value = calculate(remainingSeconds, secondsInMonth);
    const justUsedSeconds = secondsInMonth * periods.months.value;
    remainingSeconds = subtractUsedSeconds(remainingSeconds, justUsedSeconds);
  }

  if (remainingSeconds >= secondsInWeek) {
    periods.weeks.value = calculate(remainingSeconds, secondsInWeek);
    const justUsedSeconds = secondsInWeek * periods.weeks.value;
    remainingSeconds = subtractUsedSeconds(remainingSeconds, justUsedSeconds);
  }

  if (remainingSeconds >= secondsInDay) {
    periods.days.value = calculate(remainingSeconds, secondsInDay);
    const justUsedSeconds = secondsInDay * periods.days.value;
    remainingSeconds = subtractUsedSeconds(remainingSeconds, justUsedSeconds);
  }

  if (remainingSeconds >= secondsInHour) {
    periods.hours.value = calculate(remainingSeconds, secondsInHour);
    const justUsedSeconds = secondsInHour * periods.hours.value;
    remainingSeconds = subtractUsedSeconds(remainingSeconds, justUsedSeconds);
  }
  // periods.minutes.value, remainingSeconds, secondsInMinute
  if (remainingSeconds >= secondsInMinute) {
    periods.minutes.value = calculate(remainingSeconds, secondsInMinute);
    const justUsedSeconds = secondsInMinute * periods.minutes.value;
    remainingSeconds = subtractUsedSeconds(remainingSeconds, justUsedSeconds);
  }

  if (remainingSeconds !== 0) {
    periods.seconds.value = remainingSeconds;
    const justUsedSeconds = periods.seconds.value;
    remainingSeconds = subtractUsedSeconds(remainingSeconds - justUsedSeconds);
  }

  let output = [];
  Object.values(periods).forEach(timeUnitObject => {
    if (timeUnitObject.value) {
      const timeUnitString = `${timeUnitObject.value} ${timeUnitObject.string}`;
      const timeUnitOutput = timeUnitObject.value != 1 ? `${timeUnitString}s` : timeUnitString;
      output.push(timeUnitOutput);
    }
  });

  return output.join(', ');
};