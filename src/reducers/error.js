
export default function errorList(errorState = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ERROR_CODE':
    errorState = payload;
    return errorState;
  }
  return errorState;
}
