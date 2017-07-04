import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './compOne.component.html',
  styleUrls: ['./compOne.component.css']
})
export class CompOneComponent implements OnInit {

  constructor(private _modalService: ModalService) { }

  ngOnInit() {
  }

  loadingTest() {
    this._modalService.showLoading();
    console.log("in click funtion");
  }

}
