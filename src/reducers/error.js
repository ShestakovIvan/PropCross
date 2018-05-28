const errorInState = {
  errorList: []
};

export default (errorState = errorInState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ERROR_CODE':
    return {...errorInState, errorList: [payload]}

  }
  return errorState;
}


      /* errorState = payload;
    return errorState; */