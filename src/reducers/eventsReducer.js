import * as constants from '../constants';
import events from '../data/events.json';

const initialState = {
  events
};

export function eventsReducer(state = initialState, action) {
  switch(action.type) {
    case constants.EVENTS_CLEAR_LIST:
      return { ...state, events: [] };
    case constants.EVENTS_DELETE_EVENT:
      const id = action.payload.id;
      const filteredEvents = state.events.filter(item => item.id !== id);

      return { ...state, events: filteredEvents };
    default:
      return state;
  }
}
