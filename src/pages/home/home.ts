import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstQuestionsPage } from '../first-questions/first-questions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

start (){
  this.navCtrl.push(FirstQuestionsPage);
}

}
