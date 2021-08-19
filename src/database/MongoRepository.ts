import mongoose from "mongoose";
import { env } from "../env";

class MongoRepository {
  private HEADERS: {
    db_url: string;
  };
  constructor() {
    this.HEADERS = {
      db_url: env.mongoose.url,
    };
  }

  connect = async () => {
    try {
      return await mongoose.connect(this.HEADERS.db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      console.log("DB Connectivity Error", error);
      throw error;
    }
  };
}

export const MongoRepo = new MongoRepository();
