import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore'
import{ FormsModule } from '@angular/forms'

var firebaseConfig = {
  apiKey: "AIzaSyDg32tgB04SUq68_CvgvYmtuIk2pqF2Th4",
  authDomain: "chatapp-fbbac.firebaseapp.com",
  databaseURL: "https://chatapp-fbbac.firebaseio.com",
  projectId: "chatapp-fbbac",
  storageBucket: "",
  messagingSenderId: "329348039297"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
