import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login'


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  public rootPage = Login;

  constructor(platform: Platform) {
    platform.ready().then(() => {

      StatusBar.styleDefault();
    });
  }
  toPage(page){
    this.rootPage = page;
  }

}

