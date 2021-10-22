import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'message',
      storage,
      whitelist: ['message'],
    },
    reducers
  );

  return persistedReducer;
};
