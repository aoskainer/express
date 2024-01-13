import { NextFunction, Request, Response } from 'express';
import logger from '../logger';

const ErrorHandlingMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  res.status(500).json({ message: err.message });
}

export default ErrorHandlingMiddleware;
