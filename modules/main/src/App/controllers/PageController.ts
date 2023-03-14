
import { ArticleService, ArticleRepository, ArticleDto } from '@library/kernel';

import { observable, action, makeObservable } from 'mobx';


class PageController {
  @observable public inProcess: boolean = true;
  @observable public articles: ArticleDto[] = [];

  private readonly articleService: ArticleService = new ArticleService(new ArticleRepository());

  constructor() {
    makeObservable(this);
  }

  @action.bound
  processState(state: boolean) {
    this.inProcess = state;
  }

  @action.bound
  async getAll() {
    this.articles = await this.articleService.getAll();
  }
}

export default new PageController();
