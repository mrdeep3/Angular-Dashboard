import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  config: any;
  collection = { count: 9, data: [] }; // 9 values in table
 
  constructor() {
    function myfunc()
    {
      var loc_list=['Milling','Packaging','Processing','Extracting'];
      var loc = loc_list[Math.floor(Math.random()*loc_list.length)];
      return loc;
    } 
    //hardcoded data
    var loc_list=['Milling','Packaging','Processing','Extracting'];
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          name: "ABC " + (i + 1),
          type:"Type " + (i+1),
          performance: i,
          efficiency: i+1,
          location: myfunc()
        }
      );
    }
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
  ngOnInit() {
  }
}
