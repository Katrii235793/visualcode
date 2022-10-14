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
  listd:any[]=[];
   add(item:String,date:any)
    {
      if(item!='')
      {
this.list.push({item});
this.listd.push({date})
      }
console.log(this.list)

  }
  remove(i:number)
  {
this.list.splice(i,1);
  }

}
