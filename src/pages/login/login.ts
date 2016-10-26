import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home'
import {MyApp} from '../../app/app.component'


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  home: any = HomePage;
  respose: string = "";
  username: string = "";
  senha: string = "";
  myapp: any = MyApp;

  setUsername(username) {
    this.username = username;
  }
  constructor(public navCtrl: NavController) {
  }
  submit(username, senha) {
    if (username === "lucas" && senha === "1234") {
      this.navCtrl.push(HomePage);
      this.respose = "Login correto!"
      //  this.myapp.toPage(HomePage);

    } else {
      this.respose = "Login errado!"
    }

  }


}
