import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import firebase from "firebase";

/**
 * Generated class for the FirebaseAuthenPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-firebase-authen',
  templateUrl: 'firebase-authen.html',
})
export class FirebaseAuthenPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirebaseAuthenPage');
  }

  loginAnonymous() {
    const loading = this.loadingCtrl.create();
    loading.present();
    firebase.auth().signInAnonymously().then(()=>{
      loading.dismiss();
    });
  }

  loginEmail() {
    this.navCtrl.push('LoginEmailPage');
  }
}
