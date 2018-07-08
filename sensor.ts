import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SensorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensor',
  templateUrl: 'sensor.html',
})
export class SensorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  sensor()
  {

  	function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}
function onError() {
    alert('onError!');
}
var options = { frequency: 3000 };  // Update every 3 seconds
var watchID = window.navigator['accelerometer'].watchAcceleration(onSuccess, onError, options);
window.addEventListener("compassneedscalibration",function(event) {
      // ask user to wave device in a figure-eight motion .   
      event.preventDefault();
}, true);}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorPage');
  }

}
