const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const userFirstNameSchema = joi.string().min(5).max(15);
const userLastNameSchema = joi.string().min(5).max(15);
const userUserNameSchema = joi.string().min(3).max(10);
const userEmailSchema = joi.string().email();
const userPasswordSchema = joi.string().regex(/^[a-zA-Z0-9]{3,30}$/);
const userAdminSchema = joi.boolean().default(false);
const userApiKeyTokenSchema = joi.string();

const userSchema = {
  first_name: userFirstNameSchema.required(),
  last_name: userLastNameSchema.required(),
  user_name: userUserNameSchema.required(),
  email: userEmailSchema.required(),
  password: userPasswordSchema.required(),
};
const createUserSchema = {
  ...userSchema,
  isAdmin: userAdminSchema
};

const createProviderUserSchema = {
  ...userSchema,
  apiKeyToken: userApiKeyTokenSchema.required(),
}

const updateUserSchema = {
  first_name: userFirstNameSchema,
  last_name: userLastNameSchema,
  user_name: userUserNameSchema,
  email: userEmailSchema,
  password: userPasswordSchema,
};

module.exports = {
  userIdSchema,
  createUserSchema,
  updateUserSchema,
  createProviderUserSchema
};
