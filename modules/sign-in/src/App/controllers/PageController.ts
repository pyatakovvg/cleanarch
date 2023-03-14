
import { UserService, UserRepository, UserDto } from '@library/kernel';

import { observable, action, makeObservable } from 'mobx';


class PageController {
  @observable public inProcess: boolean = false;

  private readonly userService: UserService = new UserService(new UserRepository());

  constructor() {
    makeObservable(this);
  }

  @action.bound
  processState(state: boolean) {
    this.inProcess = state;
  }

  @action.bound
  async login(login: string, password: string): Promise<UserDto | null> {
    try {
      this.processState(true);

      await this.userService.login(login, password);
      return await this.userService.get();
    }
    catch(error) {
      return null;
    }
    finally {
      this.processState(false);
    }
  }
}

export default new PageController();
