import { Schema, model } from "mongoose";

export default interface User {
  created: number;
  username: string;
  password: string;
  profile: {
    nickname: string;
    photo?: string;
  };
}

const userSchema = new Schema<User>({
  created: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  profile: {
    nickname: { type: String, required: true },
    photo: { type: String, required: false },
  },
});
export const UserModel = model<User>("users", userSchema);
