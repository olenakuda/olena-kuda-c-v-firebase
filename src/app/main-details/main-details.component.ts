import { Component, OnInit } from '@angular/core';

interface IReference {
  text: string;
  href: string;
  label: string;
}

@Component({
  selector: 'app-main-details',
  templateUrl: './main-details.component.html',
  styleUrls: ['./main-details.component.css'],
})
export class MainDetailsComponent implements OnInit {
  name: string = 'Olena Kuda';

  references: IReference[] = [
    {
      text: "elenakuda@gmail.com",
      href: "mailto:elenakuda@gmail.com",
      label: "E-mail",
    },
    {
      text: "github.com/olenakuda",
      href: "https://github.com/olenakuda",
      label: "Github",
    },
  ];

  //<li>Github: <a href="https://github.com/olenakuda" target="_blank">github.com/olenakuda</a></li>
  
  constructor() {
  }

  ngOnInit(): void {}
}
