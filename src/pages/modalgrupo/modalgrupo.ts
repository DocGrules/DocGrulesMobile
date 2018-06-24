import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalgrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalgrupo',
  templateUrl: 'modalgrupo.html',
})
export class ModalgrupoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  ionViewWillLoad() {
    const data =this.navParams.get('data');
    console.log(data);
  }

  fecharModal(){
    this.view.dismiss();
  }

}
