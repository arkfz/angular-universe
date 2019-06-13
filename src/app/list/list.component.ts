import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  planets: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPlanets().subscribe(data => {
      this.planets = data
      console.log(this.planets)
    })
  }

}
