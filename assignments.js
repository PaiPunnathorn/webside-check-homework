document.addEventListener('DOMContentLoaded', function () {
    const sortSelect = document.getElementById('sort');
    const filterSubjectSelect = document.getElementById('filter-subject');
    const assignmentCards = document.querySelectorAll('.assignment-card');

    // Function to sort assignments by due date
    function sortAssignments() {
        const sortValue = sortSelect.value;

        if (sortValue === 'due-date') {
            const sortedAssignments = Array.from(assignmentCards).sort((a, b) => {
                const dateA = new Date(a.getAttribute('data-due-date'));
                const dateB = new Date(b.getAttribute('data-due-date'));
                return dateA - dateB;
            });

            const assignmentsGrid = document.querySelector('.assignments-grid');
            assignmentsGrid.innerHTML = ''; // Clear existing cards
            sortedAssignments.forEach(card => assignmentsGrid.appendChild(card));
        }
    }

    // Function to filter assignments by subject
    function filterAssignmentsBySubject() {
        const selectedSubject = filterSubjectSelect.value;

        assignmentCards.forEach(card => {
            const cardSubject = card.getAttribute('data-subject');

            if (selectedSubject === 'all' || cardSubject === selectedSubject) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Check for expired assignments and mark them
    function markExpiredAssignments() {
        const currentDate = new Date();

        assignmentCards.forEach(card => {
            const dueDate = new Date(card.getAttribute('data-due-date'));

            if (dueDate < currentDate) {
                card.classList.add('expired');
            }
        });
    }

    // Event listeners
    sortSelect.addEventListener('change', sortAssignments);
    filterSubjectSelect.addEventListener('change', filterAssignmentsBySubject);

    // Initial function calls
    sortAssignments();
    filterAssignmentsBySubject();
    markExpiredAssignments();
});
