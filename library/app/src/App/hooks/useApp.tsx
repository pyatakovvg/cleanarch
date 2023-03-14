
import { UserDto } from '@library/kernel';
import appController from "@controllers/AppController";


interface IUseApp {
  user: UserDto;
  isAuth: boolean;
  setAuth: typeof appController.setAuth;
  resetAuth: typeof appController.resetAuth;
}


function useApp(): IUseApp {
  return {
    user: appController.user,
    isAuth: appController.isAuth,
    setAuth: appController.setAuth,
    resetAuth: appController.resetAuth,
  };
}

export default useApp;
