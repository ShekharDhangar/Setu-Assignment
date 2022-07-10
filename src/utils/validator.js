const regex = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  number: /^[0-9]+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};
export const validator = {
  email: (value) => {
    const result = regex.email.test(value);
    if (result) return false;
    return true;
  },
  number: (value, minLength = 0) => {
    const length = value ? value.toString().length : 0;
    if (length > 0) {
      const result = regex.number.test(value);
      if (result && length > minLength) return false;
    }
    return true;
  },
  required: (value) => {
    if (!value || !value.toString().trim().length) {
      return true;
    }
    return false;
  },
  password: (value) => {
    const result = regex.password.test(value);
    if (result) return false;
    return true;
  },
};
