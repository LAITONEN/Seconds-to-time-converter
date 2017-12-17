/* eslint object-property-newline: 0 */

  const secondsIn = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

export const divideToInteger = (currentSecondsLeft, unitName, output) => {
    let unitCount = Math.floor(currentSecondsLeft / secondsIn[unitName]);
    output.counts.push(unitCount);
    let unitResult = `${unitCount} ${unitName}`;
    return unitCount > 1 ? `${unitResult}s` : unitResult;
};

export const subtractUsedSeconds = (secondsBefore, secondsUsed) => {
    return secondsBefore - secondsUsed;
};

export const doTheMath = (remainingSeconds, unitName, output) => {
  output.results.push(divideToInteger(remainingSeconds, unitName, output));
  const justUsedSeconds = secondsIn[unitName] * output.counts[output.counts.length - 1];
  return subtractUsedSeconds(remainingSeconds, justUsedSeconds);
};

export default (input) => {
  let remainingSeconds = +input;
  const output = { counts: [], results: [] };

  if (remainingSeconds >= secondsIn.year) {
    remainingSeconds = doTheMath(remainingSeconds, 'year', output); // make "year" a value of a prop of secondsIn
  }

  if (remainingSeconds >= secondsIn.month) {
    remainingSeconds = doTheMath(remainingSeconds, 'month', output);
  }

  if (remainingSeconds >= secondsIn.week) {
    remainingSeconds = doTheMath(remainingSeconds, 'week', output);
  }

  if (remainingSeconds >= secondsIn.day) {
    remainingSeconds = doTheMath(remainingSeconds, 'day', output);
  }

  if (remainingSeconds >= secondsIn.hour) {
    remainingSeconds = doTheMath(remainingSeconds, 'hour', output);
  }
  // periods.minutes.value, remainingSeconds, secondsInMinute
  if (remainingSeconds >= secondsIn.minute) {
    remainingSeconds = doTheMath(remainingSeconds, 'minute', output);
  }

  if (remainingSeconds !== 0) {
   remainingSeconds = doTheMath(remainingSeconds, 'second', output);
  }

  return output.results.join(', ');
};