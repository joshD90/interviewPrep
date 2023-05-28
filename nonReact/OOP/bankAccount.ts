class BankAccount {
  private balance: number;
  private accountNumber: string;

  constructor(balance: number, accountNumber: string) {
    this.balance = balance;
    this.accountNumber = accountNumber;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public withdraw(amount: number): string {
    if (this.balance - amount < 0)
      return "Failure, You do not have enough funds in your account";
    return `Success. You have withdrawn €${amount}`;
  }
  public getBalance() {
    return this.balance;
  }
}

const jamesAccount = new BankAccount(200, "abcde");

jamesAccount.deposit(100);
jamesAccount.withdraw(150);
console.log(jamesAccount.getBalance());
