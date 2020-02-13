import { Component, OnInit } from '@angular/core';
import { Arbre } from '../Models/abre.model';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { ArbreService } from '../services/arbre.service';

@Component({
  selector: 'app-list-arbres',
  templateUrl: './list-arbres.component.html',
  styleUrls: ['./list-arbres.component.css']
})
export class ListArbresComponent {

constructor(private abreService: ArbreService, private router: Router) {}

}
