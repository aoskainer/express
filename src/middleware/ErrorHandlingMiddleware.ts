import { NextFunction, Request, Response } from 'express';

const ErrorHandlingMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(
    `[${new Date().toISOString().replace('T', ' ').replace('Z', '')}] `
    + `Error: ${err.message}`
  );
  res.status(500).json({ message: err.message });
}

export default ErrorHandlingMiddleware;
