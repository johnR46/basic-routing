import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-research',
  templateUrl: './show-research.component.html',
  styleUrls: ['./show-research.component.css']
})
export class ShowResearchComponent implements OnInit {

  data:any={}

  constructor(private route:ActivatedRoute) { }
  ngOnInit() {

    this.route.params.subscribe(prams=>{

      this.data = prams

      console.log(prams)

    })

}

}
