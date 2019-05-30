import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() setCurrentPage = new EventEmitter<string>();

  onSetCurrentPage(page: string) {
    this.setCurrentPage.emit(page);
  }
}
