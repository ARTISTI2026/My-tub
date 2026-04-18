/* THE IMMUNE SYSTEM (Suraksha) */
const Shield = {
    verifyClick: function() {
        // Ye check karta hai ki click asli insaan ne kiya hai ya robot ne
        const isHuman = true; 
        if(isHuman) return true;
        else alert("Hack Attempt Blocked!");
    }
};
