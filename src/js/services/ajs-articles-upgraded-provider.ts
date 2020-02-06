import Articles from './articles.service';

export function articlesFactoryProvider(i: any) {
  console.log('articlesFactoryProvider', i);
  return i.get('Articles');
}

export const articlesServiceProvider = {
  provide: Articles
}
