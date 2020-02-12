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
  private username: string;
  private usera: User[] ;
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
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }


  onLogin(): void {

    this.service.getAll().subscribe((data: any) =>{
      //this.username = res.nom;
      this.users = data;

      for ( var val of this.users){
        console.log(val['email']);
        if(this.user.email == val['nom']){
          console.log("got it");
        }else{
          console.log("Not yet");
        }
      }
      //console.log("Yeep" + data);
    });

    /*this.usera.forEach(function (value) {
      console.log(value.adress);
    });*/

    //console.log("vad: "+this.user.email+"  More to get: "+this.usera);

    //console.log(this.service.loginUser(this.user));
    //if (this.service.loginUser(this.user)) {

    /* if (this.service.form.valid) {
       this.user = this.service.form.value;
       console.log("email: " + this.user.email + " and password: " + this.user.password);
       if (this.user.email == "admin@mail.com" && this.user.password == "admin1234") {
         console.log("reached")
         this.router.navigateByUrl("/home");
       } else {
         this.router.navigateByUrl("/register");
       }
     } else {
       console.log("Invalid Identifiant Sir !!! ")
     }*/
  }

}
