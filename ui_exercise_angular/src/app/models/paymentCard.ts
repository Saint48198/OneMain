export class PaymentCard {
  constructor(
    public accountNumber: number,
    public cardNumber: number,
    public nameOnCard: string,
    public expDate: number,
    public cvv: number

  ) {
  }
}
