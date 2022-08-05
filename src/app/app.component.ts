import { Component } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Baekhyun'),
    new Hero(2, 'Chen'),
    new Hero(3, 'Xiumin'),
    new Hero(4, 'Kai')];
  myHero = this.heroes[0].name;
}
