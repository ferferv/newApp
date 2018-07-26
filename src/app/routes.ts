import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CardProductComponent } from './card-product/card-product.component';
import { DetailComponent } from './detail/detail.component';
import { ProductListService } from './product-list.service';
import { EditProductComponent } from './edit-product/edit-product.component'

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'products', component: ProductPageComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: 'products/detail/:id',
      component: DetailComponent,
      children: [
        {
            path: 'edit',
            component: EditProductComponent
        }
      ]
    }
  ];

export default routes