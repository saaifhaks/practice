import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table = [

    {
      id: 1,
      name: 'Sarif Khan',
      mail: 'sarifkhanngn02@gmail.com',
      pin: 782003
    },
      {
      id: 2,
      name: 'Sarif ',
      mail: 'sarifknngn02@gmail.com',
      pin: 78200323
    },
      {
      id: 3,
      name: ' Khan',
      mail: 'safkhanngn02@gmail.com',
      pin: 7820332
    },
      {
      id: 1,
      name: 'Sarif an',
      mail: 'sarifkhanng2@gmail.com',
      pin: 782003323
    },
      {
      id: 1,
      name: 'Sarif32 Khan',
      mail: 'sarifkh32anngn02@gmail.com',
      pin: 782003232
    },
      {
      id: 13,
      name: 'S32arif Khan',
      mail: 'sar323ifkhanngn02@gmail.com',
      pin: 78200323242
    },
      {
      id: 132,
      name: 'Sa323rif Khan',
      mail: 'sarif2323khanngn02@gmail.com',
      pin: 78200334
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
