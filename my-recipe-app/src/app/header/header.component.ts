import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.onFetchData();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
    this.dataStorageService.storeShoppingList();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
    this.dataStorageService.fetchShoppingList().subscribe();
  }
}
