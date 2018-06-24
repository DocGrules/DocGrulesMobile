import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApresentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apresentacao',
  templateUrl: 'apresentacao.html',
})
export class ApresentacaoPage {

  apresentacao = [
    { dia: "Apresentações dia 1",
      grupos: [
        { curso:"Sistemas de Informação", assunto:"Cidadania", integrantes:[ "Thayrone", "Josi", "Trouxa" ] },
        { curso:"Administração", assunto:"Cidadania", integrantes:[ "Burro", "Paulo", "Sasci" ] },
        { curso:"Matemática", assunto:"Cidadania", integrantes:[ "sgasgasgyasThayrone", "Josi", "Trouxa" ] }
      ],
    },
    { dia: "Apresentações dia 2",
      grupos: [
        { curso:"Pedagogia", assunto:"Cidadania", integrantes:[ "Thayrone", "Josi", "Trouxa" ] },
        { curso:"Letras", assunto:"Cidadania", integrantes:[ "Burro", "Paulo", "Sasci" ] },
        { curso:"Sistemas de Informação", assunto:"Cidadania", integrantes:[ "sgasgasgyasThayrone", "Josi", "Trouxa" ] }
      ],
    },
  ];

  shownGroup = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApresentacaoPage');
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

  topage(){
    this.navCtrl.setRoot(HomePage);
  }
}
