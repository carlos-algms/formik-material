/**
 * Delays a function call by a given milliseconds.
 * @returns Resolves with the callback value or rejects with the error
 */
export const delay = (cb?: CallableFunction | null, ms = 100) =>
  new Promise((done) => {
    setTimeout(() => {
      const result = cb && cb();
      done(result);
    }, ms);
  });
