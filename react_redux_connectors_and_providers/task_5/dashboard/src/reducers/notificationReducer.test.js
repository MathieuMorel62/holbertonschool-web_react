import notificationReducer from '../reducers/notificationReducer';
import { fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    const expectedState = fromJS({
      notifications: [],
      filter: 'DEFAULT',
      loading: false,
    });
    expect(state).toEqual(expectedState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    const state = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data });
    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: data.map(notification => ({ ...notification, isRead: false })),
      loading: false,
    });
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle MARK_AS_READ action', () => {
    const initialState = fromJS({
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      ],
      filter: 'DEFAULT',
      loading: false,
    });
    const state = notificationReducer(initialState, { type: MARK_AS_READ, index: 1 });
    const expectedState = initialState.setIn(['notifications', 0, 'isRead'], true);
    expect(state).toEqual(expectedState);
  });
  
  it('should handle SET_TYPE_FILTER action', () => {
    const state = notificationReducer(undefined, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    const expectedState = fromJS({
      notifications: [],
      filter: 'URGENT',
      loading: false,
    });
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_LOADING_STATE action', () => {
    const state = notificationReducer(undefined, { type: SET_LOADING_STATE, loading: true });
    const expectedState = fromJS({
      notifications: [],
      filter: 'DEFAULT',
      loading: true,
    });
    expect(state).toEqual(expectedState);
  });
});
