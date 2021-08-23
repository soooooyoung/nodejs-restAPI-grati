export default interface Journal {
  code: string;
  title: string;
  created: number;
  published: boolean;
  content: string;
  photo?: string;
}
