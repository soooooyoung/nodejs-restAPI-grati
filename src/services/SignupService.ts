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
      // 아이디 중복 확인
      const existingUser = await UserModel.findOne({
        username,
      });
      if (existingUser) {
        throw Error("Username is already taken");
      }

      // 회원 모델 생성
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

      // 회원 가입
      return await newUser.save();
    } catch (error) {
      console.log("Something went wrong: Service: Signup: signupUser", error);
      throw error;
    }
  }
}
