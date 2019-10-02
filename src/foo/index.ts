import { methodA, methodB, methodC } from './service';
import schema from './schema';

const handler = () => {
  const data = methodC('test');

  methodA(data);

  schema.validate({});
};

export default handler;
