import { Arbre } from '../Models/abre.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArbreService {
    selectedArbre = new Subject<Arbre[]>();
    private url = 'http://localhost:3000/Arbres';

    constructor(private http: HttpClient) { }

    findAll() {
      return this.http.get<Arbre[]>(this.url);
    }

    add(arbre) {
      return this.http.post<Arbre>(this.url, arbre);
    }

    delete(id) {
      return this.http.delete(`${this.url}/${id}`);
    }

    update(arbre) {
      return this.http.put(`${this.url}/${arbre.id}`, arbre);
    }

    findArbre(id) {
      return this.http.get<Arbre>(`${this.url}/${id}`);
    }
}
