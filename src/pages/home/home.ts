import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { ModalPage } from '../../pages/modal/modal'; // la page modale est dans le même dossier que la principale

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  transactions : any;

  constructor(public navCtrl: NavController, public modalCtrl : ModalController) {
   this.transactions = [
     {
       'sender': 'charles',
       'recipient': 'maxime',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'raphael',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'doreen',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'louis-joseph',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'elise',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'germain',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'anthony',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'pol',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'vincent',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'nicolas',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'kevin',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'willy',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'elodie',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'adrien',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'romain',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'quentin',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'jean-etienne',
       'amount': 100,
     },
     {
       'sender': 'charles',
       'recipient': 'gael',
       'amount': 100,
     }
   ];
 } // constructor end

  presentModal(transaction) {
    let modal = this.modalCtrl.create(ModalPage, transaction);
    modal.present();
  }
} //end export class HomePage
