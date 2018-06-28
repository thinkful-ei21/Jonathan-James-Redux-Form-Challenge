export const isNotEmpty = value => {
  return value.trim() !== '' ? undefined : 'Cannot be empty';
};

export const required = value => {
  return value ? undefined : 'Required';
};

export const isFiveChar = value => {
  return value.length === 5 ? undefined : 'Must be exactly 5 characters';
};

export const allNums = value => {
  return isNaN(Number(value)) ? 'Numbers only' : undefined;
};
