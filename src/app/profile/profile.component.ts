import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { UserService } from '../services/user.service';
import { User } from '../models/model.user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private fullname: string;
  private email: string;
  private tel: string;
  private adress: string;
  private ville: string;
  private nom: string;
  private prenom: string;

  private user: User;
  private otheruser: User;

  constructor(private service: UserService) { }

  ngOnInit() {
    /*
    this.adress = localStorage.getItem('adress');
    this.email = localStorage.getItem('email');
    this.tel = localStorage.getItem('tel');
    this.ville = localStorage.getItem('ville');
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
    */
    this.service.findUser(localStorage.getItem('id')).subscribe(
      (user: User) => {
        console.log("here");
        this.fullname = user.nom + " " + user.prenom;
        this.otheruser = user;
        this.adress = user.adress;
        this.email = user.email;
        this.tel = user.tel;
        this.ville = user.ville;
        this.nom = user.nom;
        this.prenom = user.prenom;
      }
    );
  }

  update() {
    this.user = this.service.form.value;
    console.log(this.user.nom);
    console.log(this.user.prenom);
    console.log("id loc " + localStorage.getItem('id'));


    this.service.findUser(localStorage.getItem('id')).subscribe(
      (user: User) => {
        user.nom = this.user.nom;
        user.prenom = this.user.prenom;
        user.ville = this.user.ville;
        user.adress = this.user.adress;
        user.tel = this.user.tel;
        console.log(user.id, " BLALAL");
        this.service.update(user).subscribe();

        this.fullname = user.nom+" "+user.prenom;
        this.email = user.email;
        this.tel = user.tel;
        this.ville = user.ville;
        this.adress = user.adress;
        console.log("Ok");
      }
    );

    //this.user = this.service.form.value;

    //console.log("reached"+ this.user.id);
    //this.service.populateform(this.user);
  }

}
