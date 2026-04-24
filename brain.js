const NainaApp = {
    // 26 Settings List
    settingsList: ["General", "Account", "Data Saving", "Autoplay", "Video Quality", "Downloads", "Watch on TV", "History & Privacy", "Try New Features", "Purchases", "Billing", "Your Data", "Notifications", "Connected Apps", "Live Chat", "Captions", "Accessibility", "About", "Help", "Send Feedback", "Your Clips", "Your Movies", "Time Watched", "Break Reminder", "Bedtime", "Creator Studio"],

    init: function() {
        this.loadSettings();
        console.log("My-Tub Engine Started");
    },

    loadSettings: function() {
        const container = document.getElementById('panel-container');
        // Account Panel banayein
        let html = `<div id="account-panel" class="full-panel">
            <div class="panel-header" onclick="document.getElementById('account-panel').classList.remove('active')"><i class="fas fa-arrow-left"></i> Settings</div>`;
        
        this.settingsList.forEach((item, i) => {
            let color = (item === "Help" || item === "Send Feedback") ? "color:#065fd4;font-weight:bold;" : "";
            html += `<div style="padding:15px; border-bottom:1px solid #f1f1f1; ${color}" onclick="NainaApp.openDetail('${item}')">${i+1}. ${item}</div>`;
        });
        html += `</div>`;
        container.innerHTML = html;
    },

    openDetail: function(name) {
        if(name === "General") {
            alert("Inside General: 10 YouTube Options + 26. My-Tub Future Active!");
            // Yahan hum 26th option dikhayenge
        } else {
            alert("Opening " + name + " internal settings...");
        }
    }
};

function openPanel(id) { document.getElementById(id).classList.add('active'); }
function openSearch() {
    let q = prompt("Search My-Tub:");
    if(q === "my") alert("Secret Owner Dashboard Unlocked!");
}

window.onload = () => NainaApp.init();
