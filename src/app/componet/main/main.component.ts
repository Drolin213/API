import { Component, OnInit } from '@angular/core';
import { APIservicioService } from 'src/app/Service/apiservicio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
public postpages27 = new Array();
public getPosts = new Array();

constructor(private ApiServicio: APIservicioService) { }

ngOnInit(): void {
        

  // this.ApiServicio.getPosts().subscribe(
  //   result => {

  //     this.postpages27.push(result);

  //     console.log(this.postpages27)
  //   }
  // )
}
}