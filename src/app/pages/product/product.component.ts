import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/models.interfaces';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit { 

  product!: Product;

  appService = inject(AppService);
  cdr = inject(ChangeDetectorRef);
  route = inject(ActivatedRoute)

ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    const id = params.get('id');
    this.getProductById(id);
    this.cdr.markForCheck();
  })
}


getProductById(id: any){
  this.appService.getProductAsById(id).subscribe((product)=> {
    this.product = product;
    console.log('Producto', this.product);
    this.cdr.detectChanges();
  })
}
}
