/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
const {Given, When} = require('cucumber');
import {
  checkElementExist,
  clickElementTwice,
  clickElementOnce,
  enterText,
} from '../support/commonHelpers';
const testid = require('../support/testid');
import {getCredentials} from '../support/commonHelpers';
import {credentials} from '../support/credentials';
import {login} from '../support/commonHelpers';

Given(
  'User has navigated to Login page and username and password texts are visible and data is entered in both fields',
  async () => {
    await checkElementExist(testid.SIGN_IN_BUTTON);
    await clickElementOnce(testid.SIGN_IN_BUTTON);
    await login(credentials.login.email, credentials.login.password);
  },
);
