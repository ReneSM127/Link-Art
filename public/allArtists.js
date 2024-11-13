document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll('#artistList .card');

    cards.forEach(card => {
        let name = card.querySelector('.card-title').textContent.toLowerCase();
        card.style.display = name.includes(filter) ? '' : 'none';
    });
});