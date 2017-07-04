import { Component, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ModalService]
})
export class AppComponent implements OnInit {
  title = 'KORE Angular Starter';
  currentTab: number = 1;
  loading: boolean = false;

  constructor(private _modalService: ModalService) {
    _modalService.loading.subscribe(loading => {this.loading = loading});
  }

  ngOnInit() {
    
  }

  public setCurrentTab = function(tab) {
    this.currentTab = tab; 
    console.log("Current Tab: " + this.currentTab);
  }
}
