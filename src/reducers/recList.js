import { LIST_SEARCH } from '../constants';

const recentInState = {
  recentArray: [],
  list: []
};

export default (recentLastState = recentInState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_SEARCH:
      if (recentLastState.recentArray.length > 3) {
        recentLastState.recentArray.splice(4, 1);
        recentLastState.list.splice(4, 1);
      }
      return {
        ...recentLastState,
        recentArray: [payload, ...recentLastState.recentArray],
        list: [payload.location, ...recentLastState.list]
      };
  }
  return recentLastState;
};
