import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.css']
})
export class CctvComponent implements OnInit {

  constructor() { }
currentVal = ' ' ;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

// tslint:disable-next-line:typedef
getVal(val)
{
  this.currentVal = val;
}

  ngOnInit(): void {
  }

}
