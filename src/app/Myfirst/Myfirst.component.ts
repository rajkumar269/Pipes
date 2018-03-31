import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './Myfirst.component.html',
  styleUrls: ['./Myfirst.component.css']
})
export class MyfirstComponent implements OnInit {

public name: string = "MyfirstComponent";

  constructor() { }

  ngOnInit() {
  }

}
