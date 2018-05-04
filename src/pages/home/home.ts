import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppVersion} from "@ionic-native/app-version";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public AppVersion: string;
  constructor(public navCtrl: NavController, private appVersion: AppVersion) {
    this.appVersion.getVersionNumber().then(appVersion => {
      this.AppVersion = appVersion;
    })
  }

}
