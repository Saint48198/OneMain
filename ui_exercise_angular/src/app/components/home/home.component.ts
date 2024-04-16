import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'One-time Loan Payment';

  isChecking: boolean =  true;
  paymentForm: FormGroup = this.formBuilder.group({
    loanAcctNum: ['', Validators.required],

    // form controls for bank account
    routNum: ['', Validators.required],
    bankAcctNum: ['', Validators.required],
    confirmBankAcctNum: ['', Validators.required],

    // form controls for card
    ccNum: ['', Validators.required],
    ccName: ['', Validators.required],
    exp: ['', Validators.required],
    cvv: ['', Validators.required]
  })

  public ngOnInit() {

  }

  constructor(private formBuilder: FormBuilder) {

  }

  get f(){
    return this.paymentForm.controls;
  }

  handleFormSubmit(e: Event) {
    e.preventDefault();
    console.log('submit');
  }

  handlePaymentTypeChange(e:Event) {
    this.isChecking = 'bankAccountInfo' === ((e.currentTarget) as HTMLInputElement).value;
  }
}
