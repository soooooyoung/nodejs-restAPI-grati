import { Service, Inject } from "typedi";

@Service()
export class SignupService {
  public async signupUser(
    username: string,
    password: string,
    nickname: string,
    photo?: string
  ) {
    console.log("beginning signup");
  }
}
