import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/model.user';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  private password: string;
  private confpass: string;
  private newpass: string;
  private email: string;

  private user: User = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    ville: '',
    adress: '',
    tel: ''
  };

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.findUser(localStorage.getItem('id')).subscribe(
      (user: User) => {
        this.password = user.password;
        this.email = user.email;
      }
    );
  }

  updatePassword(){
    this.user = this.service.form.value;
    console.log(this.user.password);

    this.service.findUser(localStorage.getItem('id')).subscribe(
      (user: User) => {
        user.password = this.user.password;
        this.service.update(user).subscribe();

        /*if((this.confpass == this.newpass) && (this.password == user.password)){
          user.password = this.user.password;
          console.log(user.password );
          //this.service.update(user).subscribe();
          console.log("ok");
        }else{
          console.log("Not identique !!")
        }*/
      }
    );
  }


  updateEmail(){
    this.user = this.service.form.value;

    console.log(this.email)
    this.service.findUser(localStorage.getItem('id')).subscribe(
      (user: User) => {
        user.email = this.user.email;
        this.email = this.user.email;
        this.service.update(user).subscribe();
      }
    );
  }

}
