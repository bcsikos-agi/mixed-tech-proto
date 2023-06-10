import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const mount = (ref: any, params: any) => {
  console.log(params);
  let goTo: any;
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((app) => {
      console.log(app);
      goTo = app.instance.goToItems;
    })
    .catch((err) => console.error(err));
  return {
    // MF API upstream
    onParentNavigate(params: any) {
      console.log(`onParentNavAng: ${JSON.stringify(params)}`);
      goTo(params.pathname);
    },
  };
};

export { mount };
