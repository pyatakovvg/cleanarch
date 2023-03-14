
import { ArticleService, ArticleRepository, ArticleDto } from '@library/kernel';

import { observable, action, makeObservable } from 'mobx';


class PageController {
  @observable public isNotFound: boolean = false;
  @observable public inProcess: boolean = true;
  @observable public article: ArticleDto = new ArticleDto();

  private readonly articleService: ArticleService = new ArticleService(new ArticleRepository());

  constructor() {
    makeObservable(this);
  }

  @action.bound
  processState(state: boolean) {
    this.inProcess = state;
  }

  @action.bound
  async getByUuid(uuid: string) {
    try {
      this.article = await this.articleService.getByUuid(uuid);
    }
    catch(error) {
      this.isNotFound = true;
    }
  }
}

export default new PageController();
