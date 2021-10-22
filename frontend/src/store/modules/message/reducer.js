import produce from 'immer';

const INITIAL_STATE = {
  messages: [],
};

export default function message(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@message/READ_MESSAGE':
      return produce(state, draft => {
        draft.messages = action.payload.messages;
      });
    default:
      return state;
  }
}
