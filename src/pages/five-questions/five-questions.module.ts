import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiveQuestionsPage } from './five-questions';

@NgModule({
  declarations: [
    FiveQuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(FiveQuestionsPage),
  ],
})
export class FiveQuestionsPageModule {}
