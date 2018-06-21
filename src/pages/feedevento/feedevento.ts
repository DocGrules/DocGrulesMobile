import { EventoPage } from './../evento/evento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedeventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedevento',
  templateUrl: 'feedevento.html',
})
export class FeedeventoPage {

  imagens: Array<{titulo: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imagens = [
      {titulo: "assets/imgs/docgrules1.jpg"},
      {titulo: "assets/imgs/docgrules2.jpg"},
      {titulo: "assets/imgs/docgrules3.jpg"},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedeventoPage');
  }

  evento(){
    this.navCtrl.setRoot(EventoPage);
  }
}
