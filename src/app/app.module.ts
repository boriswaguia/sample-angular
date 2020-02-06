import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { ArticleListComponent } from '../js/components/article-helpers/article-list.component';
import { ArticlePreviewComponent } from '../js/components/article-helpers/article-preview.component';
import { ListPaginationComponent } from '../js/components/article-helpers/list-pagination.component';
import { FavoriteBtnComponent } from '../js/components/buttons/favorite-btn.component';
import { ArticleMetaComponent } from '../js/components/article-helpers/article-meta.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    ArticleListComponent,
    ArticlePreviewComponent,
    ListPaginationComponent,
    FavoriteBtnComponent,
    ArticleMetaComponent
  ],
  entryComponents: [
    ArticleListComponent,
    ArticlePreviewComponent,
    ListPaginationComponent,
    FavoriteBtnComponent,
    ArticleMetaComponent
  ],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['app'], { strictDi: false });
  }
}

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
