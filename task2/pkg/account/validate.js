const { Validator } = require("node-input-validator");

const AccoutLogin = {
  email: "required|string",
  password: "required|string",
};

const AccoutRegister = {
  username: "required|string",
  email: "required|string",
  password: "required|string",
  confirmPassword: "required|string",
};

const validateAccount = async (data, schema) => {
  const validator = new Validator(data, schema);
  const err = await validator.check();

  if (!err) {
    throw {
      code: 400,
      error: "Nasa greska",
    };
  }
};

module.exports = {
  AccoutLogin,
  AccoutRegister,

  validateAccount,
};
