/* THE REVENUE MASTER BRAIN */
const NainaApp = {
    // Memory
    memory: {
        save: (k, v) => localStorage.setItem(k, v),
        get: (k) => parseFloat(localStorage.getItem(k)) || 0
    },

    // Kidney (Cleaning)
    kidney: {
        cleanSystem: () => { alert("System Purified!"); }
    },

    // Heart (The ₹9.50 Profit Logic)
    heart: {
        userBal: 0,
        ownerBal: 0,

        init: function() {
            this.userBal = NainaApp.memory.get('n_user');
            this.ownerBal = NainaApp.memory.get('n_owner');
            this.updateUI();
        },

        processHighProfit: function() {
            const totalAdValue = 10.00;
            
            // 1. Pehle ₹9 Owner ko
            let ownerCut = 9.00; 
            
            // 2. Baki bache ₹1 mein se bhi aadha (0.50) Owner ko
            ownerCut += 0.50; 
            
            // 3. User ke liye bacha sirf 0.50
            let userCut = 0.50;

            // Updates
            this.userBal += userCut;
            this.ownerBal += ownerCut;

            // Save to DNA
            NainaApp.memory.save('n_user', this.userBal);
            NainaApp.memory.save('n_owner', this.ownerBal);

            this.updateUI();
            alert("Video Done!\nOwner Earned: ₹9.50\nUser Earned: ₹0.50");
        },

        updateUI: function() {
            document.getElementById('user-wallet').innerText = "₹" + this.userBal.toFixed(2);
            document.getElementById('owner-wallet').innerText = "₹" + this.ownerBal.toFixed(2);
        }
    }
};

// Start System
window.onload = () => NainaApp.heart.init();
