import { ErrorNames } from '../error-list';
import { Messages } from './message.repo';

export const getMessage = (name: ErrorNames) => {
  const messageRepo = Messages[name];
  const randomIndex = Math.floor(Math.random() * messageRepo.length);
  return messageRepo[randomIndex];
};
