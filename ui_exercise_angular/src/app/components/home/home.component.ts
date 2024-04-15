import { Component } from '@angular/core';
import {PaymentBankAccount} from "../../models/paymentBankAccount";
import {PaymentCard} from "../../models/paymentCard";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'One-time Loan Payment';

  selectedPaymentType: string = 'bankAccountInfo';

  handleFormSubmit(e: Event) {
    e.preventDefault();
    console.log('submit');
  }

  handlePaymentTypeChange(e:Event) {
    this.selectedPaymentType = ((e.currentTarget) as HTMLInputElement).value;
  }
}
