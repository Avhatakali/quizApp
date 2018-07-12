import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ThirdQuestionsPage } from '../third-questions/third-questions';

/**
 * Generated class for the SecondQuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second-questions',
  templateUrl: 'second-questions.html',
})
export class SecondQuestionsPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondQuestionsPage');
  }

  Q1;
  Q2;
  Q3;
  Q4;
  Q5;
  
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  
  AnswerTotal = 0;
  
  submitAnswer (){
  
    console.log(this.Q1)
    if(this.Q1=="Krugar National Park"){
      this.count1=this.count1 +20;
      console.log(this.count1);
    }
    else{
     this.count1=0;
     console.log(this.count1);
    }
   
    console.log(this.Q2)
    if(this.Q2=="JHB"){
      this.count2=this.count2 +20;
      console.log(this.count2);
    
    }
    else{
     this.count2=0;
     console.log(this.count2);
   
    }
  
    console.log(this.Q3)
    if(this.Q3=="Robben Island"){
      this.count3=this.count3 +20;
      console.log(this.count3);
    }
    else{
     this.count3=0;
     console.log(this.count3);
   
    }
  
    console.log(this.Q4)
   if(this.Q4=="1994"){
     this.count4=this.count4 +20;
     console.log(this.count4);
   }
   else{
    this.count4=0;
    console.log(this.count4);
  
   } 
  
   console.log(this.Q5)
   if(this.Q5=="African National Congress"){
     this.count5=this.count5 +20;
     console.log(this.count5);
   }
   else{
    this.count5=0;
    console.log(this.count5);
  
   }
  
 
   this.AnswerTotal = this.count1 + this.count2 + this.count3 + this.count4 + this.count5 ;
  
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
              this.navCtrl.push(SecondQuestionsPage);
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
              this.navCtrl.push(ThirdQuestionsPage);
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
      this.navCtrl.push(SecondQuestionsPage);
    }
  }
  
}
