import { IsString, IsNotEmpty, Length } from "class-validator";

export default class SignupParams {
  @Length(5, 12, {
    message: "username is too long or too short",
  })
  @IsString()
  @IsNotEmpty({ message: "username is required" })
  public username: string;

  @Length(5, 12, {
    message: "password is too long or too short",
  })
  @IsString()
  @IsNotEmpty({ message: "password is required" })
  public password: string;

  @Length(2, 6, {
    message: "nickname is too long or too short",
  })
  @IsString()
  @IsNotEmpty({ message: "nickname is required" })
  public nickname: string;

  public photo?: string;
}
