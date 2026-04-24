// 1. Settings 1-26 ki list
const allSettings = [
    "General", "Account", "Data Saving", "Autoplay", "Video Quality", 
    "Downloads", "Watch on TV", "History & Privacy", "Try New Features",
    "Purchases", "Billing", "Your Data", "Notifications", "Connected Apps", 
    "Live Chat", "Captions", "Accessibility", "About", "Help", "Send Feedback",
    "Your Clips", "Your Movies", "Time Watched", "Break Reminder", "Bedtime", "Creator Studio"
];

// 2. Settings Load Karo
function openPage(id) {
    document.getElementById(id).classList.add('active');
    if(id === 'account-page') loadMainSettings();
}

function loadMainSettings() {
    const list = document.getElementById('full-settings-list');
    list.innerHTML = "";
    allSettings.forEach((item, i) => {
        let action = item === "General" ? "openPage('general-page')" : `alert('${item} coming soon')`;
        let isBlue = (item === "Help" || item === "Send Feedback") ? "blue-text" : "";
        list.innerHTML += `<div class="list-row ${isBlue}" onclick="${action}">${i+1}. ${item}</div>`;
    });
}

// 3. General Settings (With 26th Option: My-Tub Future)
const generalItems = [
    "Remind me to take a break", "Remind me when it's bedtime", "Appearance", 
    "Playback in feeds", "Double-tap to seek", "Uploads", "Voice search language", 
    "Location: India", "Restricted Mode", "Stats for nerds"
];

const genDiv = document.getElementById('general-items');
generalItems.forEach((item, i) => {
    genDiv.innerHTML += `<div class="list-row">${i+1}. ${item}</div>`;
});

// AAPKA MASTER FEATURE
genDiv.innerHTML += `
    <div class="list-row special-future" onclick="triggerFuture()">
        26. 🌟 MY-TUB FUTURE (Master Control)
        <br><small>Kanoon, Granth & Plate Settings</small>
    </div>
`;

function triggerFuture() {
    let key = prompt("Enter Master Key:");
    if(key === "NainaMaster") {
        alert("Success! Owner Dashboard & Plate Script Unlocked.");
        // Yahan se paise kamane wala dashboard khulega
    }
}

function closePage(id) { document.getElementById(id).classList.remove('active'); }
function handleSearch() {
    let q = prompt("Search My-Tub:");
    if(q === "my") triggerFuture();
}
