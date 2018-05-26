import { SELECT_REALTY } from '../constants';

export default function selectedRealty(realtyState = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SELECT_REALTY:
    realtyState = payload.selectedRealty;
    return realtyState;
  }
  return realtyState;
}
