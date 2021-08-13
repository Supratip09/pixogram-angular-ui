import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private loginServiceService : LoginServiceService) { }

  ngOnInit(): void {
  }

  btnClick= function () {
    this.loginServiceService.login('supratip09','12343').subscribe(data => {
     console.log(data);
     this.router.navigate(["/home"])
    });;
};

}
