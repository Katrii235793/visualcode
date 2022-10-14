import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'first_project';
  list:any[]=[];
   add(item:String)
    {
      
this.list.push({item});
console.log(this.list)

  }
  remove(i:number)
  {
this.list.splice(i,1);
  }

}
