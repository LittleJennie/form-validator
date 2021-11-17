const _ = require('lodash');

const EmailRegEx = new RegExp([
  '^(([^<>()\\\[\\\]\\\\.,;:\\s@"]+(\\.[^<>()\\\[\\\]\\\\.,;:\\s@"]+)*)|(".+"))@((',
  '\\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])',
  '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
].join(''), 'i');

/**
 * Validate an email address (max char of 100)
 *
 * @param {String} email
 * @return {Boolean}
 */

function isEmailValid(email) {
  return _.isString(email) && _.size(email) <= 100 && EmailRegEx.test(email);
}

/**
 * Validate the provided string is a valid phone number
 *
 * @param {String | Number | Null} phoneNumber
 * @return {Boolean}
 */

// ten numbers, no characters allowed, no leading zero, OR eleven numbers with leading one
const validPhoneNumberRegex = /^[1]{0,1}[1-9]{1}[0-9]{9}$/;

function isValidPhoneNumber(phoneNumber) {
  if (_.isNil(phoneNumber)) return true;
  const strippedNumber = _.toString(phoneNumber).replace(/[^0-9]/g, '');
  return validPhoneNumberRegex.test(strippedNumber);
}

module.exports = isEmailValid;
module.exports = isValidPhoneNumber;

