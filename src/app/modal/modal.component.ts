import { ModalService } from './../modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  show: boolean = false;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.watch().subscribe((state) => this.show = state);
  }

}
