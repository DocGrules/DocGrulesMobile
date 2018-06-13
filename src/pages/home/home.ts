import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { FeedeventoPage } from '../feedevento/feedevento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;

  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  public login(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };

    this.nativePageTransitions.slide(options);
    this.navCtrl.setRoot(FeedeventoPage);
  }
}
