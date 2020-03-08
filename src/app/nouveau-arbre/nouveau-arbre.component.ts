import { Component, OnInit } from '@angular/core';
import { Arbre } from '../Models/abre.model';
import { Router } from '@angular/router';
import { ArbreService } from '../services/arbre.service';

@Component({
  selector: 'app-nouveau-arbre',
  templateUrl: './nouveau-arbre.component.html',
  styleUrls: ['./nouveau-arbre.component.css']
})
export class NouveauArbreComponent implements OnInit {
  arbre: Arbre = new Arbre();
  nombreArbre: number;

  constructor(private arbreService: ArbreService, private router: Router) { }

  ngOnInit() {
    this.arbreService.findAll().subscribe(
      (arbres: Arbre[]) => {
        this.nombreArbre = arbres.length;
        if (arbres.length == 0) {
          this.arbre.id = "id" + (this.nombreArbre + 1);
        }
        else {
          let idnumber = arbres[arbres.length - 1].id.replace('id', '');
          this.arbre.id = "id" + ((+idnumber) + 1);
        }
      }
    );
  }

  onClickCancel() {
    this.router.navigate(['/', 'home', 'listAbres']);
  }

  onClickSave() {
    this.arbreService.add(this.arbre).subscribe();
    this.router.navigate(['/', 'home', 'listAbres']);
  }

  onFileSelected(event) {
    console.log(event);
    for (let i = 0; i < event.target.files.length; i++) {
      this.arbre.photos.push('../../../assets/img/' + event.target.files[i].name);
    }
    for (let i = 0; i < this.arbre.photos.length; i++) {
      if (this.arbre.photos[i] == "../../../assets/img/placeholder.png") {
        this.arbre.photos.splice(i, 1);
      }
    }
    console.log(this.arbre);
  }
  /*
  onFileSelected(event){
    console.log(event.target.files[0].name);
    this.arbre.photos.push('../../../assets/img/' + event.target.files[0].name);
    for(let i = 0; i < this.arbre.photos.length; i++){
        if(this.arbre.photos[i] == "../../../assets/img/placeholder.png"){
            this.arbre.photos.splice(i, 1);
        }
    }
    console.log(this.arbre);
  }
*/
  onClickRemovePhoto(event, photoLink) {
    this.arbre.photos.splice(this.arbre.photos.indexOf(photoLink), 1);
    if (this.arbre.photos.length == 0) {
      this.arbre.photos.push('../../../assets/img/placeholder.png');
    }
  }

}
