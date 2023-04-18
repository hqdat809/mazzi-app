import { Store } from '@ngrx/store';
import { AppState } from './../../../store/reducers/index';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TWord } from 'src/app/models/word.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.scss'],
})
export class ListWordComponent {
  @Input() listWord: TWord[] = [];
  @ViewChild('detailModal') detailModal!: ElementRef<HTMLElement>;

  selectedWord: TWord | undefined;

  constructor(private store: Store<AppState>, private modalService: NgbModal) {}

  onSelectWord = (word: TWord) => {
    this.selectedWord = word;
    this.openModal();
  };

  openModal = () => {
    this.modalService.open(this.detailModal);
  };

  closeModal = () => {
    this.modalService.dismissAll();
  };
}
