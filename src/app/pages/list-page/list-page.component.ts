import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsListComponent } from '../cards-list/cards-list.component';

@Component({
  selector: 'app-list-page',
  imports: [CardsListComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent { }
