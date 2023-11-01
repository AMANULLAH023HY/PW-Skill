class BankAccount {
    constructor() {
      this.balance = 0;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        return `Deposited $${amount}. New balance: $${this.balance}`;
      } else {
        return 'Deposit amount must be positive.';
      }
    }
  
    withdraw(amount) {
      if (amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
          return `Withdrawn $${amount}. New balance: $${this.balance}`;
        } else {
          return 'Insufficient funds for withdrawal.';
        }
      } else {
        return 'Withdrawal amount must be positive.';
      }
    }
  
    checkBalance() {
      return `Current balance: $${this.balance}`;
    }
  }
  
  const account = new BankAccount();
  console.log(account.deposit(100)); 
  console.log(account.withdraw(50)); 
  console.log(account.checkBalance()); 
  console.log(account.withdraw(-10)); 
  console.log(account.deposit(-20));  
  console.log(account.withdraw(60));  
  