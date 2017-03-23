import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  user: any;
  
  constructor(private service: GithubService){
    
  }
  
  ngOnInit(){
   this.getData('thomascsd');
  }
  
  getData(username: string){
    this.service
    .getUser(username)
    .subscribe((data) => {
      this.user = data;
    });
  }
  
 
}
