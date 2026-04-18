/* THE CENTRAL NERVOUS SYSTEM */
const NainaApp = {
    // Yaaddasht (Memory)
    memory: {
        saveBalance: (val) => localStorage.setItem('naina_money', val),
        getBalance: () => parseFloat(localStorage.getItem('naina_money')) || 0
    },

    // Khoon ka Daura (Video/Money Flow)
    heart: {
        balance: 0,
        init: function() {
            this.balance = NainaApp.memory.getBalance();
            document.getElementById('wallet').innerText = "₹" + this.balance.toFixed(2);
        },
        addProfit: function() {
            this.balance += 1.00;
            NainaApp.memory.saveBalance(this.balance);
            document.getElementById('wallet').innerText = "₹" + this.balance.toFixed(2);
            alert("System: Energy processed. ₹1 added to DNA.");
        }
    },

    // Safai (Kidney/Cleaning)
    kidney: {
        cleanSystem: function() {
            console.log("Purifying Cache...");
            alert("App Cleaned!");
        }
    }
};
window.onload = () => NainaApp.heart.init();
