// Toggle settings menu
document.querySelector('.settings-btn').addEventListener('click', function() {
    const menu = document.querySelector('.settings-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function(e) {
    const menu = document.querySelector('.settings-menu');
    if (!menu.contains(e.target) && !document.querySelector('.settings-btn').contains(e.target)) {
        menu.style.display = 'none';
    }
});

// Open the add task modal
document.getElementById('addTaskButton').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('addTaskModal'));
    myModal.show();
});

// Add new task on form submission
document.getElementById('submitTask').addEventListener('click', function(event) {
    event.preventDefault();
    const taskDay = document.getElementById('taskDay').value;
    const taskNote = document.getElementById('taskNote').value;

    // Validate inputs
    if (taskDay === '' || taskNote === '') {
        alert('Please fill out both fields.');
        return;
    }

    // Create a new card element
    const taskCard = document.createElement('div');
    taskCard.innerHTML = `
        <div class="container mt-5">
            <div class="card rounded-lg shadow-lg">
                <div class="card-body">
                    <h3 class="card-title mb-2 text-muted">${taskDay}</h3>
                    <h5 class="card-subtitle mb-2 text-muted">${taskNote}</h5>
                </div>
            </div>
        </div>
    `;

    document.getElementById('taskContainer').appendChild(taskCard);

    // Clear form inputs
    document.getElementById('taskDay').value = '';
    document.getElementById('taskNote').value = '';

    // Close the modal
    var myModal = bootstrap.Modal.getInstance(document.getElementById('addTaskModal'));
    myModal.hide();
});
