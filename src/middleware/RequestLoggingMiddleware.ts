import { Request, Response, NextFunction } from 'express';
import logger from '../logger';

const RequestLoggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`Request: ${req.method} ${req.path} | Query: ${JSON.stringify(req.query)} | FormData: ${JSON.stringify(req.body)}`);
  next();
  logger.info(`Request: ${req.method} ${req.path} | Status: ${res.statusCode}`);
}

export default RequestLoggingMiddleware;
