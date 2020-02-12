import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { ProfileComponent } from "../profile/profile.component";
import { ParametreComponent } from "../parametre/parametre.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router, public notification: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
  }

  showProfile(){
    const dialConfig = new MatDialogConfig();
    dialConfig.disableClose=false;
    dialConfig.autoFocus=true;
    dialConfig.width ='60%';
    //this.dialog.open(ProfileComponent, dialConfig).afterClosed().subscribe(data => this.fetchElements());
    this.dialog.open(ProfileComponent, dialConfig).afterClosed();
  }

  showSettings(){
    const dialConfig = new MatDialogConfig();
    dialConfig.disableClose=false;
    dialConfig.autoFocus=true;
    dialConfig.width ='60%';
    //this.dialog.open(ProfileComponent, dialConfig).afterClosed().subscribe(data => this.fetchElements());
    this.dialog.open(ParametreComponent, dialConfig).afterClosed();

  }

}
