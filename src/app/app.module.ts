import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login'
import {HomePage} from '../pages/home/home'

@NgModule({
  declarations: [
    MyApp,
    Login,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    HomePage
  ],
  providers: []
})
export class AppModule { }
