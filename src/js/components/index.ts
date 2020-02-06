import angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';

let componentsModule = angular.module('app.components', []);


import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);


import { ArticleListComponent } from './article-helpers/article-list.component';
import { ArticlePreviewComponent } from './article-helpers/article-preview.component';
import { ListPaginationComponent } from './article-helpers/list-pagination.component';
import { FavoriteBtnComponent } from './buttons/favorite-btn.component';
import { ArticleMetaComponent } from './article-helpers/article-meta.component';
import { FollowBtnComponent } from './buttons/follow-btn.component';
import { ListErrorsComponent } from './list-errors.component'
// import ArticlePreview from './article-helpers/article-preview.component';
// componentsModule.component('articlePreview', ArticlePreview);
// componentsModule.component('articleList', ArticleListComponent);
// componentsModule.component('favoriteBtn', FavoriteBtn);
// componentsModule.component('articleMeta', ArticleMeta);
// componentsModule.component('followBtn', FollowBtn);
// componentsModule.component('listErrors', ListErrors);

componentsModule.directive(
    'articleList',
    downgradeComponent({ component: ArticleListComponent }) as angular.IDirectiveFactory
);

componentsModule.directive(
    'articlePreview',
    downgradeComponent({ component: ArticlePreviewComponent }) as angular.IDirectiveFactory
);

// componentsModule.component('listPagination', ListPagination);

componentsModule.directive(
  'listPagination',
  downgradeComponent({ component: ListPaginationComponent }) as angular.IDirectiveFactory
);

componentsModule.directive(
  'favoriteBtn',
  downgradeComponent({ component: FavoriteBtnComponent }) as angular.IDirectiveFactory
);

componentsModule.directive(
  'articleMeta',
  downgradeComponent({ component: ArticleMetaComponent }) as angular.IDirectiveFactory
);

componentsModule.directive(
  'followBtn',
  downgradeComponent({ component: FollowBtnComponent }) as angular.IDirectiveFactory
);

componentsModule.directive(
  'list-errors',
  downgradeComponent({ component: ListErrorsComponent }) as angular.IDirectiveFactory
);
export default componentsModule;
