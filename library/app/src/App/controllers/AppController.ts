
import { UserService, UserRepository, UserDto } from '@library/kernel';

import { observable, action, makeObservable } from 'mobx';


class AppController {
  @observable user: UserDto = new UserDto();
  @observable isAuth: boolean = false;
  @observable isInit: boolean = false;

  private readonly userService = new UserService(new UserRepository());

  @action.bound
  async checkAuth() {
    try {
      this.user = await this.userService.get();
      this.isAuth = true;
    }
    catch(error) {
      this.isAuth = false;
    }
    finally {
      this.isInit = true;
    }
  }

  @action.bound
  async setAuth(user: UserDto) {
    this.user = user;
    this.isAuth = true;
  }

  @action.bound
  async resetAuth() {
    this.user = new UserDto();
    this.isAuth = false;
  }

  constructor() {
    makeObservable(this);
  }
}

export default new AppController();
