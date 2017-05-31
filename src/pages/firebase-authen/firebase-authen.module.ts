import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseAuthenPage } from './firebase-authen';

@NgModule({
  declarations: [
    FirebaseAuthenPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseAuthenPage),
  ],
  exports: [
    FirebaseAuthenPage
  ]
})
export class FirebaseAuthenPageModule {}
