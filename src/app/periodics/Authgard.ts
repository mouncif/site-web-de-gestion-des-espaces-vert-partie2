import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from "../services/user.service";

@Injectable()
export class Authgard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {}

  canActivate() {
    /*if (this.userService.isLoggedIn){
      console.log("fucked true");
      return true;

    }else{
      this.router.navigate(['/login']);
      console.log("fucked false");
      return false;
    }*/
    console.log("can activate Reached  !!")
    this.router.navigate(['/login']);
    return false;
  }
}
