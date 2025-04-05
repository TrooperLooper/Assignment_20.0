//let accountHolder = "Bertil";

const account = {
    accountName : "BertilSparkonto",
    balance : Math.floor(Math.random() *10000),
    getBalance () {
    console.log(`Your balance is ${this.balance}`);
    },
    deposit() {
            const depositAmount = parseFloat
            (prompt("how much would you like to deposit?","0"));
            if (!isNaN(depositAmount) && depositAmount > 0 && depositAmount <= this.balance) {
            this.balance += depositAmount;
            console.log(`You have deposited ${depositAmount}. New balance is ${this.balance}.`);
            }
        },
           

    withdraw() {
        const withdrawAmount = parseFloat
            (prompt("how much would you like to withdraw?","0"));
            if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= this.balance) {
            this.balance -= withdrawAmount;
            console.log(`You have withdrawn ${withdrawAmount}. New balance is ${this.balance}.`);
            }
        },
            

    exit() {
        console.clear();
        console.log("Thank you for using my bank!");
        }
};


function atm() {
    const message = parseFloat(
        prompt(
            "Select a choice 1.) See Balance 2.) Make a deposit 3.) Make withdrawal 4.) Get account name 5.) Exit"
        )
    );
    switch (message) {
        case 1: account.getBalance();
        break;

        case 2: account.deposit();   
        break;
        
        case 3: account.withdraw();   
        break;

        case 4:  console.log(`Account Name: ${account.accountName}`);
        break;

        case 5: account.exit();
        break;
        
        default:
        console.log("Invalid choice. Please try again.");
}

};
