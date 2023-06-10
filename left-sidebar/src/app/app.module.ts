import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [AppComponent, ThirdComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'a', component: FirstComponent },
      { path: 'b', component: SecondComponent },
      { path: 'd', component: ThirdComponent },
    ]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  private myrouter: Router;
  constructor(router: Router) {
    this.myrouter = router;
  }
  goToItems = (path: string) => {
    this.myrouter.navigate([path]);
  };

  addListener = (onNavigate: any) => {
    // console.log(this.myrouter); //.subscribe(onNavigate);
    this.myrouter.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        onNavigate(e.url);
      }
    });
  };
}
