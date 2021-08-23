import { Request, Response } from 'express';
import { info, cards } from '../services/cards';

export function getInfo(_: Request, res: Response): Promise<Response | void> {
  return info().then((response: Response) => res.send(response));
}

export function getCards(_: Request, res: Response): Promise<Response | void> {
  return cards().then((response: Response) => res.send(response));
}
