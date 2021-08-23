import { UserModel } from "../models";
import { Service, Inject } from "typedi";
import moment from "moment";

@Service()
export class SignupService {
  public async signupUser(
    username: string,
    password: string,
    nickname: string,
    photo?: string
  ) {
    try {
      const created = moment().unix();
      const newUser = new UserModel({
        created,
        username,
        password,
        profile: {
          nickname,
          photo,
        },
      });
      return await newUser.save();
    } catch (error) {
      console.log("Something went wrong: Service: Signup: createUser", error);
      throw error;
    }
  }
}
