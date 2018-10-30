import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CommonProvider } from '../../providers/common/common';
import { EmpdashboardPage } from '../employee/empdashboard/empdashboard';
import { HoddashboardPage } from '../hod/hoddashboard/hoddashboard';
import { DriverPage } from '../driver/driver';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  userDetails: any;
  isLoggedIn: boolean = false;
  users: any = [];

  constructor(public navCtrl: NavController,
    public serviceProvider: ServiceProvider,
    public commonProvide: CommonProvider
  ) {
  }

  ngOnInit() {
      this.createFormControls();
      this.createForm();
  }

  createFormControls() {
      this.email = new FormControl(this.email, [
          Validators.required,
          Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
      ]);
      this.password = new FormControl('', [
          Validators.required,
          Validators.minLength(4)
      ]);
  }


  createForm() {
      this.loginForm = new FormGroup({
          email: this.email,
          password: this.password
      });
  }

  loginAction(){
    console.log('this.loginForm ',this.email.value);
    if(this.email.value=='driver' || this.email.value=='Driver'){
       this.navCtrl.setRoot(DriverPage ,{});
    }
    else if(this.email.value){
      this.navCtrl.setRoot(HoddashboardPage, {});
    }else{
      this.navCtrl.setRoot(EmpdashboardPage, {});
    }
  }
}
