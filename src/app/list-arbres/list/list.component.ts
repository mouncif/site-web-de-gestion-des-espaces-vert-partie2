import { Component, OnInit } from '@angular/core';
import { Arbre } from '../../Models/abre.model';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { ArbreService } from '../../services/arbre.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  arbres: Arbre[];
  arbreString: string[];
  displayedColumns: string[] = ['id', 'essence', 'variete', 'position', 'action'];
  dataSource;

  constructor(private abreService: ArbreService, private router: Router) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {

      this.abreService.findAll().subscribe(
          (arbres: Arbre[]) => {
              this.arbres = arbres;
              this.dataSource = new MatTableDataSource(this.arbres);
          }
      );
      console.log(this.arbres);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClickConsulter(event, id) {
      this.router.navigate(['/', 'home', 'listAbres', 'detailsArbre', id]);
  }

  onClickModifier(event, id) {
      this.router.navigate(['/', 'home', 'listAbres', 'modifierArbre', id]);
  }

  }
