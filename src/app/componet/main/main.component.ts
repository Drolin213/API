import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { from } from 'rxjs';
import { APIservicioService } from 'src/app/Service/apiservicio.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  constructor(private ApiServicio: APIservicioService) { }

  ngOnInit(): void {
    
  }

 


}