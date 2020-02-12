import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
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
  private address: string;
  private ville: string;
  private nom: string;
  private prenom: string;

  private user: User = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    ville: '',
    adress: '',
    tel: ''
  };

  constructor(private service: UserService ) {}

  ngOnInit() {
    this.fullname = localStorage.getItem('fullname');
    this.address = localStorage.getItem('adress');
    this.email = localStorage.getItem('email');
    this.tel = localStorage.getItem('tel');
    this.ville = localStorage.getItem('ville');
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
  }

  update(){
    this.user = this.service.form.value;
    this.user.id = Number(localStorage.getItem('id'));
    //this.service.update(this.user );
    this.service.populateform(this.user);
  }

}
