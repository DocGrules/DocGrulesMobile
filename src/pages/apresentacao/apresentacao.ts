import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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

  index:any;

  shownGroup = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApresentacaoPage');
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
        this.index = this.shownGroup;
        console.log(this.index);
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

  openModalGrupo(){
    const minhaModal = this.modal.create('ModalgrupoPage', {data: this.apresentacao[this.index]} );
    minhaModal.present();
  }
}
