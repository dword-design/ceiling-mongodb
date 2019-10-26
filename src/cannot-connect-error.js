class CannotConnectError extends Error {

  constructor(url) {
    super(`Cannot connect to database ${url}.`);
  }
}
module.exports = CannotConnectError;