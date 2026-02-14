(function () {
    function renderEntry(name, learn) {
        const list = document.getElementById('guest-list');
        const li = document.createElement('li');
        li.className = 'guest-entry';
        li.innerHTML = `<div class="guest-info"><strong>${name}</strong><span>Learned: ${learn}</span></div>`;
        list.appendChild(li);
    }

    window.renderEntry = renderEntry;
})();
