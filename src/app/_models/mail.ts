import { User } from "./user";

export class Mail {
  id: number;
  subject: string;
  body: string;
  dateSent: Date;
  sender: User;
  receivers: User[];
}
