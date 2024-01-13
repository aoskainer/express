import { Request, Response, NextFunction } from 'express';

const RequestLoggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `[${new Date().toISOString().replace('T', ' ').replace('Z', '')}] `
    + `Request: ${req.method} ${req.path} | `
    + `Query: ${JSON.stringify(req.query)} | `
    + `FormData: ${JSON.stringify(req.body)}`
  );
  next();
  console.log(
    `[${new Date().toISOString().replace('T', ' ').replace('Z', '')}] `
    + `Request: ${req.method} ${req.path} | `
    + `Status: ${res.statusCode}`
  );
}

export default RequestLoggingMiddleware;
