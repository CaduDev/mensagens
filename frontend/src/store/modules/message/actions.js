export function readMessageReducer(data) {
  return {
    type: '@message/READ_MESSAGE',
    payload: { data },
  };
}
