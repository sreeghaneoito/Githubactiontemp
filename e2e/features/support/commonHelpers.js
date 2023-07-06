import {credentials} from './credentials';
const testid = require('../support/testid');

/**
 *
 * @param {*} name
 * @returns test id of the button
 */
export const checkElementExist = async name =>
  await waitFor(element(by.id(name)))
    .toBeVisible()
    .withTimeout(5000);

/**
 *
 * @param {*} name
 * @returns test id of the button
 */
export const clickElementOnce = async name => await element(by.id(name)).tap();

/**
 *
 * @param {*} name
 * @returns test id of the button
 */
export const clickElementTwice = async name =>
  await element(by.id(name)).multiTap(2);

/**
 *
 * @param {*} name
 * @returns test id of the button
 * @param {*} value
 * @returns text to be entered in field
 */
export const enterText = async (name, value) => {
  await element(by.id(name)).typeText(value);
};

/**
 *
 * @param {*} name
 */
export const elementScrollTOVIew = async name => {
  await element(by.id(name)).elementScrollTOVIew();
};

// export const getCredentials = async credtype => {
//   if (credtype == 'login') {
//     return credentials.login;
//   } else if (credtype == 'profile') {
//     return credentials.profile;
//   } else credtype == 'resetpassword';
//   {
//     return credentials.resetpassword;
//   }
// };

export const login = async (username, password) => {
  await checkElementExist(testid.USERNAME_BEFORE);
  await clickElementTwice(testid.USERNAME_BEFORE);
  await checkElementExist(testid.USERNAME_FIELD);
  await enterText(testid.USERNAME_FIELD, username);

  // await clickElementOnce(testid.USERNAME_FIELD);

  await checkElementExist(testid.PASSWORD_BEFORE);
  await clickElementTwice(testid.PASSWORD_BEFORE);
  await checkElementExist(testid.PASSWORD_FIELD);
  await enterText(testid.PASSWORD_FIELD, password);
  await clickElementOnce(testid.SIGN_IN_BUTTON);
};
