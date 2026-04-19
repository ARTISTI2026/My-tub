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
        processUnlimitedProfit: function() {
            // Asli Calculation: Har click par ₹10 se ₹1000 tak ki kamai
            const totalRevenue = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
            let userShare = 0.50; 
            let ownerShare = totalRevenue - userShare;

            this.userBal += userShare;
            this.ownerBal += ownerShare;

            NainaApp.memory.save('n_user', this.userBal);
            NainaApp.memory.save('n_owner', this.ownerBal);
            this.updateUI();
            alert("Video Finished! Revenue Distributed.");
        },
        updateUI: function() {
            if(document.getElementById('user-wallet')) {
                document.getElementById('user-wallet').innerText = "₹" + this.userBal.toFixed(2);
                document.getElementById('owner-wallet').innerText = "₹" + this.ownerBal.toFixed(2);
            }
        }
    }
};
window.onload = () => NainaApp.heart.init();
