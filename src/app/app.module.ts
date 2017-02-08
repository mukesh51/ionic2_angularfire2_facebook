import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth-service';

export const firebaseConfig = {
  apiKey: "AIzaSyBuKpB_Giclwxl1BknyZjOrk7nfIgI44QI",
  authDomain: "flickering-heat-8853.firebaseapp.com",
  databaseURL: "https://flickering-heat-8853.firebaseio.com",
  storageBucket: "flickering-heat-8853.appspot.com",
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [AuthService]
})
export class AppModule {}
