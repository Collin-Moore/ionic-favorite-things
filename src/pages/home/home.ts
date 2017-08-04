import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";

import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  public favoriteColor: string;
  public favoriteNumber: number;

  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {

  }
  
  ngOnInit(): void {
    firebase.database().ref("/color").on("value", (snapShot: firebase.database.DataSnapshot) => {
      this.favoriteColor = snapShot.val();
    });
    firebase.database().ref("/number").on("value", (snapShot: firebase.database.DataSnapshot) => {
      this.favoriteNumber = snapShot.val();
    });
  }

  setColor(selectedColor: string): void {
    firebase.database().ref("/color").set(selectedColor);
  }

  setNumber(newNumber: number): void {
    firebase.database().ref("/number").set(newNumber);
  }
}
