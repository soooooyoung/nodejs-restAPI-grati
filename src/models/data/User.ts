export default interface User {
  code: string;
  username: string;
  password: string;
  profile: {
    nickname: string;
    photo?: string;
  };
}
