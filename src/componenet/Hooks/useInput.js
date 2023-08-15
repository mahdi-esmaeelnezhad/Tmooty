import validator from 'validator';
const required = (value) => {
  if (!value.toString().trim().length) {
    return 'require';
  }
};
 
const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};
 
const lt = (value, props) => {
  if (!value.toString().trim().length > props.maxLength) {
    return <span className="error">The value exceeded {props.maxLength} symbols.</span>
  }
};
 
const password = (value, props, components) => {
  if (value !== components['confirm'][0].value) {
    return <span className="error">Passwords are not equal.</span>
  }
};