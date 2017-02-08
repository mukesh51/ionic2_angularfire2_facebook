import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AuthService } from '../../providers/auth-service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: FirebaseListObservable<any[]>;
  displayName = '';

  constructor(public navCtrl: NavController,af: AngularFire,private _auth: AuthService) {
    this.items = af.database.list('/item');
  }

  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    this.displayName = this._auth.displayName();
    console.log("Facebook display name ",this._auth.displayName());
  }

}
