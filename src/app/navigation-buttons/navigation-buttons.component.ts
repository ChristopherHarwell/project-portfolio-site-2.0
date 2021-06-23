import { Component, OnInit } from '@angular/core';
import {NavigationButton} from '../interfaces/navigationButton';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss']
})
export class NavigationButtonsComponent implements OnInit {
  button: NavigationButton = {
    buttonText: 'Home'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
