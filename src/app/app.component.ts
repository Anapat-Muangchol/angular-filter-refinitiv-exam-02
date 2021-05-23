import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: string[] = [];
  displayCategories: string[] = [];
  filter: string;

  constructor() {}

  ngOnInit() {
    // load data
    this.loadCategories();
  }

  loadCategories() {
    fetch('https://api.publicapis.org/categories')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.categories = data;
        this.displayCategories = data;
      });
  }

  changeFilter() {
    this.displayCategories = [];
    if (!!this.filter) {
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].indexOf(this.filter) >= 0) {
          this.displayCategories.push(this.categories[i]);
        }
      }
    } else {
      this.displayCategories = this.categories;
    }
  }
}
