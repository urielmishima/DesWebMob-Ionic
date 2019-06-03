import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import{ AngularFireDatabaseModule} from 'angularfire2/database'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SalaService } from './sala.service';

export const firebaseConfig = {
  apiKey: "AIzaSyCJtLOKFJJEAP6Eu0RuWkLYBbCgCzHm7P8",
  authDomain: "ccp3anmca-deswebmob-chat.firebaseapp.com",
  databaseURL: "https://ccp3anmca-deswebmob-chat.firebaseio.com",
  projectId: "ccp3anmca-deswebmob-chat",
  storageBucket: "ccp3anmca-deswebmob-chat.appspot.com",
  messagingSenderId: "600615808229",
  appId: "1:600615808229:web:c63a2d69ca9f33cd"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SalaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
