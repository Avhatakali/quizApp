import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstQuestionsPage } from './first-questions';

@NgModule({
  declarations: [
    FirstQuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(FirstQuestionsPage),
  ],
})
export class FirstQuestionsPageModule {}
