import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentCompleteComponent } from './payment-complete/payment-complete.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [

  { path: 'invoice',component: InvoiceComponent},
  { path: 'payment-complete',component: PaymentCompleteComponent},
  { path: 'checkout', component: CheckoutComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
