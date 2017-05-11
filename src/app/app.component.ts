import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

import { Base } from '../libs/base';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'HomePage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public translateService: TranslateService, public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.initApp();
    });
  }

  initApp() {
    //set application language
    this.translateService.setDefaultLang('en-US');

    console.log('load in app.component.ts');

    
    this.storage.ready().then(() => {
      //prepared for use in class extends
      Base._storage = this.storage;
      Base._translateService = this.translateService;

      this.storage.get('currentLanguage').then((val) => {
        if (val) {
          this.translateService.use(val);
        } else {
          this.translateService.use('en-US');
          this.storage.set('currentLanguage', 'en-US');
        }
      });
    });

  }
}

