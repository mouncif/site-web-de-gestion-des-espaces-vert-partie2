import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'
import { User } from '../models/model.user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



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
  }
  add() {
    this.service.add(this.user)
      .subscribe((user) => {
        this.users = [user, ...this.users];
      });
  }

  update() {
    this.service.update(this.user).subscribe(() => this.router.navigateByUrl("/login"));
  }

  onRegister() {
    if (this.service.form.valid) {
      this.user = this.service.form.value;
      if (this.service.form.value.id == null) {
        console.log(this.user);
        this.add();
        this.service.form.reset();
        this.router.navigateByUrl("/login");
      } else {
        console.log(this.user);
        this.update();
        this.service.form.reset();
      }
      this.service.initializeFormGroup();
    }
  }
}
