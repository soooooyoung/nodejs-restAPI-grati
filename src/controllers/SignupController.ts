//modules
import { Request, Response } from "express";
import {
  JsonController,
  HttpCode,
  Post,
  Body,
  Res,
  Req,
  Param,
} from "routing-controllers";
import { Inject } from "typedi";
import { SignupService } from "../services/SignupService";
import { SignupParams } from "../models";

@JsonController("/api/v1/signup")
export class SignupController {
  @Inject()
  private signupService: SignupService;

  /**
   * 회원가입
   */
  @HttpCode(201)
  @Post("")
  public async signup(
    @Body() data: SignupParams,
    @Req() req: Request,
    @Res() res: Response
  ) {
    try {
      const { username, password, nickname } = data;
      const response = await this.signupService.signupUser(
        username,
        password,
        nickname
      );
      return res.status(200).json({
        status: "success",
        result: response,
      });
    } catch (e) {
      if (e instanceof Error) {
        return res.status(200).json({
          status: "fail",
          result: {
            message: e.message,
          },
        });
      }
      return res.status(500).json({
        status: "fail",
        result: {
          message: "회원가입에 문제가 발생했습니다",
        },
      });
    }
  }
}
