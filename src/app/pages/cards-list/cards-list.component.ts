import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  imports: [],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsListComponent { }
