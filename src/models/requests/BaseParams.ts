import {
  IsString,
  IsNotEmpty,
  IsIn,
  ValidateIf,
  Length,
  IsOptional,
  isNotEmpty,
  Contains,
} from "class-validator";

/**
 * 모두 상속받는 필수 프로퍼티 요소
 */
export default class BaseParams {
  @Contains("USER", {
    message: "bucketId must contain USER string",
  })
  @Length(25, 25, {
    message: "userCode is too long, check userCode",
  })
  @IsString()
  @IsNotEmpty({ message: "userCode is required" })
  public userCode: string;
}
