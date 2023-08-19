import Joi from "joi";

//User registration validation rules
const userRegisterValidation = async (field: object) => {
  const schema = Joi.object({
    firstName: Joi.string().alphanum().required(),
    lastName: Joi.string().alphanum().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(1024),
  });
  try {
    return await schema.validateAsync(field, { abortEarly: false });
  } catch (err) {
    return err;
  }
};

export { userRegisterValidation };