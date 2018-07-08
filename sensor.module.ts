import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorPage } from './sensor';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
@NgModule({
  declarations: [
    SensorPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorPage),
  ],
})
export class SensorPageModule {}
