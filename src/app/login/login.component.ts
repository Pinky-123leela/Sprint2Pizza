import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../service/authentication.service";

export class JwtResponse{

    jwtToken!:string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
  })

  export class LoginComponent implements OnInit{
    email=''
    password=''
    invalidLogin=false
    response !:JwtResponse  
    
    constructor(private router:Router,private loginService:AuthenticationService){}
    ngOnInit(){
    }
    checkLogin() {
        (this.loginService.authenticate(this.email, this.password).subscribe(
          data => {
            console.log(data)
            this.router.navigate([''])
            this.invalidLogin = false
          },
          error => {
            this.invalidLogin = true
    
          }
        )
        );
    
      }
    
      setValues(data:any){
        console.log("in set values",data)
        sessionStorage.setItem('email',this.email);
            sessionStorage.setItem('token',data.token)
    
          console.log('data set')
    
    
    
      }
  }