import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstQuestionsPage } from '../pages/first-questions/first-questions';
import { SecondQuestionsPage } from '../pages/second-questions/second-questions';
import { ThirdQuestionsPage } from '../pages/third-questions/third-questions';
import { FourthQuestionsPage } from '../pages/fourth-questions/fourth-questions';
import { FiveQuestionsPage } from '../pages/five-questions/five-questions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstQuestionsPage,
    SecondQuestionsPage,
    ThirdQuestionsPage,
    FourthQuestionsPage,
    FiveQuestionsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstQuestionsPage,
    SecondQuestionsPage,
    ThirdQuestionsPage,
    FourthQuestionsPage,
    FiveQuestionsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
