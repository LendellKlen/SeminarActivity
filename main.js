(function () {
    function addEntry() {
        const nameEl = document.getElementById('nameInput');
        const learnEl = document.getElementById('learnInput');
        const name = nameEl.value.trim();
        const learn = learnEl.value.trim();

        if (name === '' || learn === '') {
            alert("Please fill in both fields!");
            return;
        }

        renderEntry(name, learn);
        saveToStorage(name, learn);

        nameEl.value = '';
        learnEl.value = '';
    }

    window.addEntry = addEntry;

    document.addEventListener('DOMContentLoaded', function () {
        const entries = loadFromStorage();
        entries.forEach(entry => renderEntry(entry.name, entry.learn));
    });
})();
