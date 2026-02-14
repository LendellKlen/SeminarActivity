(function () {
    function loadFromStorage() {
        const savedData = localStorage.getItem('guestbook_entries');
        return savedData ? JSON.parse(savedData) : [];
    }

    function saveToStorage(name, learn) {
        const entries = loadFromStorage();
        entries.push({ name: name, learn: learn });
        localStorage.setItem('guestbook_entries', JSON.stringify(entries));
    }

    window.loadFromStorage = loadFromStorage;
    window.saveToStorage = saveToStorage;
})();
