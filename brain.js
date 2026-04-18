/* THE UNLIMITED REVENUE ENGINE - NAINA MASTER */
const NainaApp = {
    memory: {
        save: (k, v) => localStorage.setItem(k, v),
        get: (k) => parseFloat(localStorage.getItem(k)) || 0
    },

    heart: {
        userBal: 0,
        ownerBal: 0,

        init: function() {
            this.userBal = NainaApp.memory.get('n_user');
            this.ownerBal = NainaApp.memory.get('n_owner');
            this.updateUI();
        },

        // UNLIMITED REVENUE LOGIC
        processUnlimitedProfit: function() {
            // Kamai ki koi hadd nahi: ₹10 se ₹1000 tak kuch bhi ho sakta hai
            const totalRevenue = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
            
            // USER SHARE: Hamesha fix (0.50)
            let userShare = 0.50;

            // OWNER SHARE: Baaki bacha poora "Jackpot" aapka!
            let ownerShare = totalRevenue - userShare;

            this.userBal += userShare;
            this.ownerBal += ownerShare;

            NainaApp.memory.save('n_user', this.userBal);
            NainaApp.memory.save('n_owner', this.ownerBal);

            this.updateUI();
            
            alert("🚀 JACKPOT ALERT!\nTotal Ad Value: ₹" + totalRevenue + 
                  "\nOwner Profit: ₹" + ownerShare.toFixed(2) + 
                  "\nUser Share: ₹0.50");
        },

        updateUI: function() {
            document.getElementById('user-wallet').innerText = "₹" + this.userBal.toFixed(2);
            document.getElementById('owner-wallet').innerText = "₹" + this.ownerBal.toFixed(2);
        }
    }
};
window.onload = () => NainaApp.heart.init();
