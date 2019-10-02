import { Request, Response } from 'express';
import fooHandler from './foo';

exports.test = (req: Request, res: Response) => {
  fooHandler();

  res.sendStatus(200).end();
};
