import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { from } from 'rxjs';
import { APIservicioService } from 'src/app/Service/apiservicio.service';
import {LoginI} from '../../modulo/loguin.interative';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  loginForm = new FormGroup({
     usuario : new FormControl('', Validators.required),
     password : new FormControl('', Validators.required)
  })


  constructor(private ApiServicio: APIservicioService) { }

  ngOnInit(): void {
    
  }

  onLogin(from:LoginI){
    this.ApiServicio.loginByEmail(from).subscribe(data =>{
      console.log(data);
    })
    
  }


}