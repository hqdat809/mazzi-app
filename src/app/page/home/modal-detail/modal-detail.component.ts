import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TWord } from 'src/app/models/word.model';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss'],
})
export class ModalDetailComponent {
  @Input() detailWord: TWord | undefined;
  @Output() onClose = new EventEmitter<void>();

  close(): void {
    this.onClose.emit();
  }
}
