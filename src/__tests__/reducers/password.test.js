import passwordReducer from '../../reducers/user/passwordReducer';
import initialState from '../../store/initialState';
import { userActionsTypes } from '../../actions-types';
import { matchedResetPassword, mismatchedResetPassword } from '../../__mocks__/user';

describe('Password reducer', () => {
  test('FORGOT_PASSWORD_START', () => {
    const reducer = passwordReducer(initialState, {
      type: userActionsTypes.FORGOT_PASSWORD_START,
      payload: { loading: true }
    });
    expect(reducer.forgotPassword).toHaveProperty('loading');
    expect(reducer.forgotPassword.loading).toBeTruthy();
  });

  test('EMAIL_SENT_SUCCESSFULLY', () => {
    const reducer = passwordReducer(initialState, {
      type: userActionsTypes.FORGOT_PASSWORD_SUCCESS,
      payload: { message: { sendEmail: 'luctunechi45@gmail.com' } }
    });
    expect(reducer.forgotPassword.message).toHaveProperty('sendEmail');
  });

  test('ERROR', () => {
    const reducer = passwordReducer(initialState, {
      type: userActionsTypes.FORGOT_PASSWORD_FAILURE,
      payload: { errors: { sendEmail: 'qweqwewqew@gmail' } }
    });
    expect(reducer.forgotPassword.errors).toHaveProperty('sendEmail');
  });

  test('FORGOT_PASSWORD_END', () => {
    const reducer = passwordReducer(initialState, {
      type: userActionsTypes.FORGOT_PASSWORD_END,
      payload: { loading: false }
    });

    expect(reducer.forgotPassword).toHaveProperty('loading');
    expect(reducer.forgotPassword.loading).toBeFalsy();
  });

  test('UPDATE_PASSWORD_START', () => {
    const reducer = passwordReducer(initialState, {
      type: userActionsTypes.RESET_PASSWORD_START,
      payload: { loading: true }
    });
    expect(reducer.updatePassword).toHaveProperty('loading');
    expect(reducer.updatePassword.loading).toBeTruthy();
  });

  test('UPDATE_SUCCESSFULLY_PASSWORD', () => {
    const reducer = passwordReducer(initialState, {
      type: userActionsTypes.RESET_PASSWORD_SUCCESS,
      payload: { message: { matchedResetPassword } }
    });
    expect(reducer.updatePassword).toHaveProperty('message');
  });

  test('ERROR', () => {
    const reducer = passwordReducer(initialState, {
      type: userActionsTypes.RESET_PASSWORD_FAILURE,
      payload: { errors: { mismatchedResetPassword } }
    });
    expect(reducer.updatePassword).toHaveProperty('errors');
  });

  test('UPDATE_PASSWORD_END', () => {
    const reducer = passwordReducer(initialState, {
      type: userActionsTypes.RESET_PASSWORD_END,
      payload: { loading: false }
    });

    expect(reducer.updatePassword).toHaveProperty('loading');
    expect(reducer.updatePassword.loading).toBeFalsy();
  });
});
