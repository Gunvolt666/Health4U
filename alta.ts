import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AltaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alta',
  templateUrl: 'alta.html',
})
export class AltaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams.get('val'));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AltaPage');
  }

}
