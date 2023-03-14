
import ArticleDto from '@models/ArticleDto';
import AbstractArticleRepository, { IFilter } from '@repositories/classes/AbstractArticleRepository';


class ArticleRepository extends AbstractArticleRepository {
  async getAll(filter?: IFilter): Promise<ArticleDto[]> {
    return new Promise((resolve) => {
      const result = [
        {
          uuid: '111',
          title: 'Описание 1',
          content: 'Контент для описания 1',
          author: {
            uuid: '666666',
            email: 'zemlya@mail.ru',
            name: 'Viktor',
          },
          createdAt: new Date().toString(),
        },
        {
          uuid: '222',
          title: 'Описание 2',
          content: 'Контент для описания 2',
          author: {
            uuid: '666666',
            email: 'zemlya@mail.ru',
            name: 'Viktor',
          },
          createdAt: new Date().toString(),
        },
        {
          uuid: '333',
          title: 'Описание 3',
          content: 'Контент для описания 3',
          author: {
            uuid: '666666',
            email: 'zemlya@mail.ru',
            name: 'Viktor',
          },
          createdAt: new Date().toString(),
        }]
        .filter((item) => {
          if (filter?.uuid) {
            return item.uuid === filter.uuid;
          }
          return true;
        })
        .map((item) => new ArticleDto().fromJSON(item));

      setTimeout(() => resolve(result), 1000);
    });
  }
}

export default ArticleRepository;
