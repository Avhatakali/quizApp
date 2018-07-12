import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FiveQuestionsPage } from '../five-questions/five-questions';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the FourthQuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fourth-questions',
  templateUrl: 'fourth-questions.html',
})
export class FourthQuestionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FourthQuestionsPage');
  }

  Q1;
  Q2;
  Q3;
  Q4;
  Q5;
  
  score1 = 0;
  score2 = 0;
  score3 = 0;
  score4 = 0;
  score5 = 0;
  
  AnswerTotal = 0;
  
  submitAnswer (){
  
    console.log(this.Q1)
    if(this.Q1=="1945"){
      this.score1=this.score1 +20;
      console.log(this.score1);
    }
    else{
     this.score1=0;
     console.log(this.score1);
    }
   
    console.log(this.Q2)
    if(this.Q2=="Jamaica"){
      this.score2=this.score2 +20;
      console.log(this.score2);
    
    }
    else{
     this.score2=0;
     console.log(this.score2);
   
    }
  
    console.log(this.Q3)
    if(this.Q3=="St. Ann's Parish"){
      this.score3=this.score3 +20;
      console.log(this.score3);
    }
    else{
     this.score3=0;
     console.log(this.score3);
   
    }
  
    console.log(this.Q4)
   if(this.Q4=="Robert Nesta Marley"){
     this.score4=this.score4 +20;
     console.log(this.score4);
   }
   else{
    this.score4=0;
    console.log(this.score4);
  
   } 
  
   console.log(this.Q5)
   if(this.Q5=="Trenchtown"){
     this.score5=this.score5 +20;
     console.log(this.score5);
   }
   else{
    this.score5=0;
    console.log(this.score5);
  
   }
  
   this.AnswerTotal = this.score1 + this.score2 + this.score3 + this.score4 + this.score5 ;
  
   console.log(this.AnswerTotal)
   
    if(this.AnswerTotal == 100){
  
  
      const confirm = this.alertCtrl.create({
        title: 'CONGRADULATION !',
        subTitle: ' go to next level !',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
              this.navCtrl.push(FourthQuestionsPage);
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
              this.navCtrl.push(FiveQuestionsPage);
            }
          }
        ]
      });
      confirm.present();
  
    }else{
      const alert = this.alertCtrl.create({
        title: 'FAILED !',
        subTitle: ' try again !',
        buttons: ['OK']
  
      });
      alert.present();
      this.navCtrl.push(FourthQuestionsPage);
    }  

  }  

}
