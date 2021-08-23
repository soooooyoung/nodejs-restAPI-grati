"use strict";
import "reflect-metadata";
import { ScrapeServer } from "./server";
import { MongoRepo } from "./repository/MongoRepository";

async function start(): Promise<void> {
  const scrapeServer = new ScrapeServer();
  await scrapeServer.startServer();
  const response = await MongoRepo.connect();
  console.log(response);
}

start().catch((err) => {
  console.log(
    `SERVER SETUP ERROR
        ${err.message}`
  );
  process.exit(-1);
});
