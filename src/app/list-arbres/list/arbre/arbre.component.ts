import { Component, OnInit, Input } from '@angular/core';
import { Arbre } from 'src/app/Models/abre.model';
import { Router } from '@angular/router';
import { ArbreService } from 'src/app/services/arbre.service';

@Component({
  selector: 'app-arbre',
  templateUrl: './arbre.component.html',
  styleUrls: ['./arbre.component.css'],
})

export class ArbreComponent implements OnInit {
  @Input() arbre: Arbre;

  constructor(private arbreService: ArbreService, private router: Router) { }

  ngOnInit() {
  }

  onClickConsulter() {
      //home/listAbres/detailsArbre/:id
      this.router.navigate(['/', 'home', 'listAbres', 'detailsArbre', this.arbre.id]);
      console.log("clicked");
  }

  onClickModifier() {
      this.router.navigate(['/', 'home', 'listAbres', 'modifierArbre', this.arbre.id]);
      console.log("clicked");
  }

}
