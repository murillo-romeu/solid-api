import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { LocalUsersRepository } from "../../repositories/implementations/LocalUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailTrapMailProvider()
const localUsersRepository = new LocalUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  localUsersRepository,
  mailTrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export {createUserUseCase, createUserController}