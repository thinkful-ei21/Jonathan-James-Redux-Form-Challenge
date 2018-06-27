export const isNotEmpty = value => {
    return value.trim() !== '' ? undefined : 'cannot be empty';
};

export const required = value => {
    return value ? undefined : 'required';
};

export const isFiveChar = value => {
    return value.length === 5 ? undefined : 'Must be exactly 5 characters';
};

export const allNums = value => {
    return isNaN(Number(value)) ? 'Must be all numbers' : undefined;
};
