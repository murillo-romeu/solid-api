import { IMailProvider, IMessage } from "../IMailProvider";

export class MailTrapMailProvider implements IMailProvider{
  async sendMail(message: IMessage): Promise<void> {
    throw new Error("Method not implemented.");
  }
}