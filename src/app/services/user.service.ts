import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/model.user';

import { PeriodicUser } from '../periodics/periodic.user';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000/users"
  private logUrl = "http://localhost:3000/users/?id=2&nom=Rehaimi"


  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl('', Validators.email),
    tel: new FormControl('', [Validators.minLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    ville: new FormControl(''),
    adress: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom: '',
      prenom: '',
      email: '',
      tel: '',
      password: '',
      ville: '',
      adress: ''
    });
  }
  findAll() {
    return this.http.get<User[]>(this.url);
  }
  add(user) {
    return this.http.post<User>(this.url, user);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  update(user) {
    return this.http.put(`${this.url}/${user.id}`, user);
  }

  populateform(row) {
    this.form.setValue(row);
  }

  getAll() {
    return this.http.get<PeriodicUser>(this.url);
  }

  loginUser(user) {
    //return this.http.post<User>(("http://localhost:3000/users/?email=" + user.email + "&password="+ user.password )) ;
    return null;
  }

  isLoggedIn() {
    if (localStorage.getItem('fullname') == null) {
      return false;
    } else {
      return true;
    }
  }


  findUser(id){
    return this.http.get<User>(`${this.url}/${id}`);
  }






}
