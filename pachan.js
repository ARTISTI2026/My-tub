/* VISHWA GYAAN KOSH - MASTER DATABASE (Pachan.js) */
const WorldKnowledge = {
    openLibrary: function() {
        // Asli Kitabon ka Data
        let books = [
            "📜 Shrimad Bhagavad Gita (Pura Gyaan)",
            "⚖️ Bhartiya Samvidhan (Indian Constitution)",
            "📖 Vishwa Itihas (World History)",
            "🌍 Duniya ke Har Desh ka Kanoon"
        ];

        let message = "--- 📚 NAINA MASTER LIBRARY ---\n\n";
        books.forEach((book, index) => {
            message += (index + 1) + ". " + book + "\n";
        });
        message += "\nConnecting to Millions of more pages...";

        alert(message);
    }
};

console.log("Library System: Active and Connected.");
