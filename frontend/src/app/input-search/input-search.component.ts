import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
data:any={}

  constructor(private router:Router) {

   }

  ngOnInit() {
  }

  SubmitdData(){
    console.log(this.data)

    const data  = this.data

    this.router.navigate(['show',{first:data.first,last:data.last}])

  }

}
