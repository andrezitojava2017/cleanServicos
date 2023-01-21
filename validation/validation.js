const regexEmail = /^[a-zA-Z-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexName = /^[a-zA-Z\u00C0-\u017F\s]+$/;
const regexPassword = /^[a-zA-Z0-9]{6,}$/;

const emailValidation = email => {
  //console.log(regexEmail.test(email));
  return regexEmail.test(email);
};

const nameValidation = name => {
  return regexName.test(name);
};

const passwordValidation = password => {
  return regexPassword.test(password);
};

export default {emailValidation, passwordValidation, nameValidation};
