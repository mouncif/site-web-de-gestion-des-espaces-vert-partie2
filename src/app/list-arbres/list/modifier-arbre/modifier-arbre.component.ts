import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Arbre } from 'src/app/Models/abre.model';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ArbreService } from 'src/app/services/arbre.service';

@Component({
  selector: 'app-modifier-arbre',
  templateUrl: './modifier-arbre.component.html',
  styleUrls: ['./modifier-arbre.component.css']
})
export class ModifierArbreComponent implements OnInit {
  temp: Arbre;
  arbre: Arbre;
  id: string;
  hidePhotos = false;

  constructor(
    private arbreService: ArbreService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) {}

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params.id;
      this.arbreService.findArbre(this.id).subscribe(
        (arbre: Arbre) => {
            this.arbre = arbre;
        }
      );
      console.log('params: ' + this.activatedRoute.snapshot.params.id);
  }

  onClickSave() {
      const dialogRef = this.dialog.open(SaveDialogComponent, {
        width: '250px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.arbreService.update(this.arbre).subscribe();
    });
  }

  onClickReset() {
      this.arbreService.findArbre(this.arbre.id).subscribe(
          (arbre: Arbre) => {
              this.arbre = arbre;
          }
      );
  }

  onDelete() {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
          width: '250px',
        });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.arbreService.delete(this.arbre.id).subscribe();
          this.router.navigate(['/', 'home', 'listAbres']);
      });
  }

  onFileSelected(event){
    console.log(event.target.files[0].name);
    this.arbre.photos.push('../../../assets/img/' + event.target.files[0].name);
    for(let i = 0; i < this.arbre.photos.length; i++){
        if(this.arbre.photos[i] == "../../../assets/img/placeholder.png"){
            this.arbre.photos.splice(i, 1);
            this.hidePhotos = false;
        }
    }
    console.log(this.arbre);
  }

  onClickRemovePhoto(event, photoLink){
    this.arbre.photos.splice(this.arbre.photos.indexOf(photoLink), 1);
    if(this.arbre.photos.length == 0){
        this.arbre.photos.push('../../../assets/img/placeholder.png');
        this.hidePhotos = true;
    }
  }

}


@Component({
  selector: 'app-save-dialog',
  templateUrl: 'save-dialog.html',
})
export class SaveDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SaveDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: 'delete-dialog.html',
})
export class DeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
  animal: string;
  name: string;
}
