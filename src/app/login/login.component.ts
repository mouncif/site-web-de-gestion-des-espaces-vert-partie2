import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'
import { User } from '../models/model.user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


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

  users: any;



  ngOnInit() {

    if (localStorage.getItem('fullname') == null){
      console.log("Everything fine");
    }else{
      this.router.navigate(['/home']);
    }
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
    this.resetLocalStorage();
  }

  resetLocalStorage() {
    localStorage.removeItem('id');
    localStorage.removeItem('fullname');
    localStorage.removeItem('email');
    localStorage.removeItem('tel');
    localStorage.removeItem('ville');
    localStorage.removeItem('username');
    localStorage.removeItem('adress');
    localStorage.removeItem("nom");
    localStorage.removeItem("prenom");
  }

  onLogin(): void {
    this.resetLocalStorage();
    this.user = this.service.form.value;

    if (this.service.form.valid) {
      this.user = this.service.form.value;
      this.service.getAll().subscribe((data: any) => {
        for (var val of data) {
          if (this.user.email == val['email'] && this.user.password == val['password']) {
            localStorage.setItem("id", val["id"]);
            localStorage.setItem("nom", val["nom"]);
            localStorage.setItem("prenom", val["prenom"]);
            localStorage.setItem("fullname", val["nom"] + " " + val["prenom"]);
            localStorage.setItem("email", val["email"]);
            localStorage.setItem("tel", val["tel"]);
            localStorage.setItem("ville", val["ville"]);
            localStorage.setItem("adress", val["adress"]);
            break;
          } else {
            this.resetLocalStorage();
          }
        }
        console.log("full name: " + localStorage.getItem("fullname"));
        if (localStorage.getItem("fullname") == null) {
          console.log("reached")
          this.router.navigateByUrl("/register");
        } else {
          this.router.navigateByUrl("/home");
        }
      });
    } else {
      console.log("Invalid !")
    }
  }




}
