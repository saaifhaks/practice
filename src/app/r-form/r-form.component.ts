import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent  {
  submit(login){
    console.log("Form Submitted",login)
  }

 
}
