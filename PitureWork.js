document.addEventListener('DOMContentLoaded', () => {
    const filterSubject = document.getElementById('filter-subject');
    const filterDate = document.getElementById('filter-date');
    const assignmentCards = document.querySelectorAll('.assignment-card');

    // Filter function to show/hide assignments based on selected subject and date
    function filterAssignments() {
        const selectedSubject = filterSubject.value.toLowerCase();
        const selectedDate = filterDate.value;

        assignmentCards.forEach(card => {
            const cardSubject = card.getAttribute('data-subject');
            const cardDate = card.getAttribute('data-date');

            const isSubjectMatch = selectedSubject === 'all' || cardSubject === selectedSubject;
            const isDateMatch = !selectedDate || cardDate === selectedDate;

            if (isSubjectMatch && isDateMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event listeners for filter inputs
    filterSubject.addEventListener('change', filterAssignments);
    filterDate.addEventListener('input', filterAssignments);

    // Show more details (Modal or redirect to another page)
    const moreDetailsButtons = document.querySelectorAll('.more-details');
    moreDetailsButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.assignment-card');
            const subject = card.querySelector('.subject').textContent;
            const dueDate = card.querySelector('.due-date').textContent;

            alert(`Details:\nSubject: ${subject}\nDue Date: ${dueDate}`);
            // You can replace this alert with a Modal or a redirect to another page for detailed view.
        });
    });
});
   