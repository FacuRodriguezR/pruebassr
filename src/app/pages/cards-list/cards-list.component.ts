import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { map, Observable } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards-list',
  imports: [CurrencyPipe],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsListComponent implements OnInit { 

  products: any[] = [];

  appService = inject(AppService);
  route = inject(ActivatedRoute);
  cdr = inject(ChangeDetectorRef)
  
  ngOnInit(): void {
    this.getProducts();

    // Detectar cambios en la ruta y recargar los productos
    this.route.params.subscribe(() => {
      this.getProducts();
     this.cdr.markForCheck(); // 👈 Forzar la detección de cambios
    });
  }

  getProducts() {
    return this.appService.getProductAs().pipe(
      map((data: any[]) => data.slice(0, 20))
    ).subscribe(
      (filteredData) => {
        this.products = filteredData;
        console.log(this.products);
        this.cdr.markForCheck(); 
        // 👈 Forzar la actualización de la vista
      }
    );
  }
}

