import Joi from 'joi';
import {generate} from '../utils/utils';

const u = {
  active: Joi.boolean().required(),
  company: Joi.string().required(),
  email: Joi.string().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  locale: Joi.object().required(),
  photo: Joi.string().required(),
  settings: Joi.object().required(),
  sip: Joi.object().required(),
  verified: Joi.boolean().required(),
  _id: Joi.string().required(),
};

export default generate('user', {
  create: u,
  update: u,
  updateAll: {
    updated: Joi.date().required(),
    users: Joi.array().required(),
  },
});