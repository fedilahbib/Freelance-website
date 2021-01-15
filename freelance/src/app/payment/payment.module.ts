import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentCompleteComponent } from './payment-complete/payment-complete.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';


@NgModule({
  declarations: [CheckoutComponent, PaymentCompleteComponent, InvoiceComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class PaymentModule { }
