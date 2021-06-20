import { Component, OnInit } from '@angular/core';
import { LogindataService} from '../logindata.service'

@Component({
  selector: 'app-comp-service', 
  templateUrl: './comp-service.component.html',
  styleUrls: ['./comp-service.component.css']
})

export class CompServiceComponent implements OnInit {
  data : any;
  constructor(private user:LogindataService) { 
    this.user.getData().subscribe(data=>{
      console.warn(data)
      this.data=data
    })
  }

  ngOnInit(): void {
  }

}
