import Joi from 'joi';
import {generate} from '../utils/utils';

export default generate('text', {
  unresolved: {
    data: Joi.array().items({
      conversation: Joi.string().required(),
      assignedUser: Joi.string().required(),
      direction: Joi.string().required(),
      from: Joi.string().required(),
      to: Joi.string().required(),
    }).required(),
  },
});