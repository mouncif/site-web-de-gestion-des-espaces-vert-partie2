import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'
import { User } from '../models/model.user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  private user: User = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    ville: '',
    adress: '',
    tel: ''
  };

  users: User[] = [];

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  ngOnInit() {
    if (localStorage.getItem('fullname') == null){
      console.log("Everything fine");
    }else{
      this.router.navigate(['/home']);
    }
  }

  onResetEmail(){
      this.user = this.service.form.value;
      console.log("email: " + this.user.email);
  }
}
