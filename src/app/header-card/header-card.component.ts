import { Component, OnInit } from '@angular/core';
import {HeaderCard} from "../interfaces/headerCard";

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss']
})
export class HeaderCardComponent implements OnInit {
  card: HeaderCard = {
    firstName: 'Christopher',
    lastName: 'Harwell',
    jobTitle: 'Full Stack Developer',
    aboutMe: 'lorem ipsum dollar'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
