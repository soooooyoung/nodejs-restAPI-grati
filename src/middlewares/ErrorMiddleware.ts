import {
  Middleware,
  ExpressErrorMiddlewareInterface,
} from "routing-controllers";
import { Request, Response, NextFunction } from "express";
import { BaseException } from "../exceptions/BaseException";

@Middleware({ type: "after" })
export class ErrorMiddleware implements ExpressErrorMiddlewareInterface {
  error(error: Error, req: Request, res: Response, next: NextFunction): void {
    if (error instanceof BaseException) {
      res.status(500).send({
        error: {
          status: error.status,
          message: error.message,
        },
      });
    } else {
      res.status(500).send({
        error: {
          status: 500,
          message: error.message,
        },
      });
      next();
    }
  }
}
