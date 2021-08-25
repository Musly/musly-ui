import { isObject } from './validation';

export const logger = console;

const KEY_COLOR = 'gray';

/**
 * Repeats a string by a given number of times.
 * @param {string} str The string that will be repeated.
 * @param {number} times The number of times, the string is repeated.
 * @return {string} A new string that containes the input string the given number of times.aqua
 */
function repeat (str, times) {
  return (new Array(times + 1)).join(str);
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num;
}

function formatTime () {
  const time = new Date();
  return `${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}:${pad(time.getSeconds(), 2)}.${pad(time.getMilliseconds(), 3)}`;
}

function maxKeysLength (prop) {
  let maxLength = 0;

  Object.keys(prop).forEach((key) => {
    if ((key.length + 1) > maxLength) {
      maxLength = key.length + 1;
    }
  });

  return maxLength;
}

function style (color = 'gray', fontWeight = 'lighter') {
  return `color: ${color}; font-weight: ${fontWeight || 'lighter'};`;
}

export function logGroup (title, actionName, content = {}, actionColor = 'gray') {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const time = formatTime();

  logger.groupCollapsed(
    ` %c${title} %c${actionName} %c@ ${time}`,
    style(actionColor),
    style('inherit'),
    style()
  );

  if (Object.keys(content).length) {
    const maxLength = maxKeysLength(content) + 2;

    Object.keys(content).forEach((key) => {
      const value = content[key] || null;
      const action = (`${key}:`).padEnd(maxLength);

      // If the content is an object, log all keys individually.
      if (typeof value === 'object' && value !== null && value.constructor === Object) {
        if (!Object.keys(value).length) {
          logger.log(` %c ${action}`, style(KEY_COLOR, 'bold'), 'undefined');
        } else logger.log(` %c ${action}`, style(KEY_COLOR, 'bold'), value);
      } else logger.log(` %c ${action}`, style(KEY_COLOR, 'bold'), value);
    });
  }

  logger.groupEnd();
}

export function logSimple (title, actionName, content = {}, actionColor = 'gray') {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const time = formatTime();

  logger.log(
    ` %c${title} %c${actionName}: %c${content} %c@ ${time}`,
    style(actionColor),
    style('inherit'),
    style('inherit'),
    style()
  );
}

export function getGroupLogger (subject, color, responseColor = null) {
  function log (action, data = null) {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    const logFunc = isObject(data) ? logGroup : logSimple;
    logFunc(subject.replace('%t', 'REQUEST'), action, data, color);
  }

  function logResponse (action, data) {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    const logFunc = isObject(data) ? logGroup : logSimple;

    logFunc(subject.replace('%t', 'RESPONSE'), action, data, responseColor || color);
  }

  function logError (action, error) {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    const logFunc = isObject(error) ? logGroup : logSimple;

    logFunc(subject.replace('%t', 'ERROR'), action, error, '#ff0000');
  }

  return {
    log,
    logResponse,
    logError,
  };
}
