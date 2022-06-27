"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount!');
        this.balance += amount;
    }
}
let account = new Account(1, 'combo', 0);
account.deposite(100);
console.log(account.balance);
//# sourceMappingURL=index.js.map