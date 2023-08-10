import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { HmaService } from 'src/app/service/hma.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm : FormGroup
  checkForm = false;

  constructor(
    private _fb : FormBuilder,
    private _serv : HmaService,
    private _router : Router
  ){
    this.loginForm = this._fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  submit(){
    if( this.loginForm.invalid){
      this.checkForm = true;
      return;
    }
    this._serv.addUser(this.loginForm.value).subscribe(data =>{ console.log(data)
      localStorage.setItem("token" , data.token )
      this._router.navigate(['dashboard'])
    })
  }
}
