import BankData from "././banks.json"
import UserData from "././users.json"

interface User {
    [key: string]:{
        id: number;
        balance: number;
        pin: string;
    }
}

interface Bank {
    [key: string]:{
        name: string;
        outsideWithdrawalCharge: number;
        outsideBalanceCheckCharge: number;
    }
}

class Users {
    public user: User;

    constructor(user: User) {
        this.user = user;
    }
}

class Banks {
    public bank: Bank;

    constructor(bank: Bank) {
        this.bank = bank;
    }
}

let user : User = UserData;
const userEntity = new Users(user);
console.log(user["user1"].balance)

let bank : Bank = BankData;
const bankEntity = new Banks(bank);
console.log(bank["bank1"].balanceCharge);
