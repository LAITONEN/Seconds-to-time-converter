/* eslint object-property-newline: 0 */

export const divideToInteger = (remainingSeconds, timeUnit, output) => {
    let timeUnitCount = Math.floor(remainingSeconds / timeUnit.inSeconds);
    output.counts.push(timeUnitCount);
    let resultString = `${timeUnitCount} ${timeUnit.name}`;
    return timeUnitCount > 1 ? `${resultString}s` : resultString;
};

export const subtractUsedSeconds = (secondsBefore, secondsUsed) => {
    return secondsBefore - secondsUsed;
};

export const doTheMath = (remainingSeconds, timeUnit, output) => {
  output.results.push(divideToInteger(remainingSeconds, timeUnit, output));
  const usedSeconds = timeUnit.inSeconds * output.counts[output.counts.length - 1];
  return subtractUsedSeconds(remainingSeconds, usedSeconds);
};

export default (input) => {
  let remainingSeconds = +input;
  const output = { counts: [], results: [] };
  const year = { inSeconds: 31536000, name: 'year' };
  const month = { inSeconds: 2592000, name: 'month' };
  const week = { inSeconds: 604800, name: 'week' };
  const day = { inSeconds: 86400, name: 'day' };
  const hour = { inSeconds: 3600, name: 'hour' };
  const minute = { inSeconds: 60, name: 'minute' };
  const second = { inSeconds: 1, name: 'second' };

  if (remainingSeconds >= year.inSeconds) {
    remainingSeconds = doTheMath(remainingSeconds, year, output);
  }

  if (remainingSeconds >= month.inSeconds) {
    remainingSeconds = doTheMath(remainingSeconds, month, output);
  }

  if (remainingSeconds >= week.inSeconds) {
    remainingSeconds = doTheMath(remainingSeconds, week, output);
  }

  if (remainingSeconds >= day.inSeconds) {
    remainingSeconds = doTheMath(remainingSeconds, day, output);
  }

  if (remainingSeconds >= hour.inSeconds) {
    remainingSeconds = doTheMath(remainingSeconds, hour, output);
  }
  if (remainingSeconds >= minute.inSeconds) {
    remainingSeconds = doTheMath(remainingSeconds, minute, output);
  }

  if (remainingSeconds !== 0) {
   remainingSeconds = doTheMath(remainingSeconds, second, output);
  }

  return output.results.join(', ');
};