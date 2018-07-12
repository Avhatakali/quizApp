import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondQuestionsPage } from './second-questions';

@NgModule({
  declarations: [
    SecondQuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondQuestionsPage),
  ],
})
export class SecondQuestionsPageModule {}
