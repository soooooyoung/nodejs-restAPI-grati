import express from "express";
import { Container } from "typedi";
import {
  useContainer,
  createExpressServer,
  useExpressServer,
} from "routing-controllers";
import compression from "compression";
import bodyParser from "body-parser";
import { routingControllerOptions } from "./configs/RoutingConfig";

export class ScrapeServer {
  public PORT: number = Number(process.env.PORT) || 9000;
  private readonly app: express.Application;

  constructor() {
    this.app = express();
    this.setConfig();
  }

  /**
   * Start scrape server.
   */
  public async startServer(): Promise<void> {
    useContainer(Container);
    useExpressServer(this.app, routingControllerOptions);
    return new Promise<void>((resolve, reject) => {
      this.app
        .listen(this.PORT, () => {
          console.log(`SERVER START ON PORT : ${this.PORT}`);
          return resolve();
        })
        .on("error", (e) => {
          console.log("SERVER START ERROR : ", e);
          return reject(e);
        });
    });
  }

  /**
   * set express app config
   */
  private async setConfig() {
    this.app.use(compression());
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(
      bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 100000,
      })
    );
  }
}
