import Joi from '@hapi/joi';

import { EBar } from '../types';

const BAR_A = EBar.a;
const BAR_B = EBar.b;

const schema = Joi.object().keys({
  bar: Joi.string().valid(BAR_A, BAR_B),
  baz: Joi.array().items()
});

export default schema;
