import { Component } from '@angular/core';
import { DummyService } from './services/dummy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data : any;
  constructor(private service :DummyService) { }

  getData(){
   this.service.getData().subscribe(res => {
    this.data=res;
    console.log(res);
    
   })
  }
}
