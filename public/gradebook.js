fetch('/api/grades')
  .then(response => response.json())
  .then(data => {
    console.log("Populating gradebook with data:", data);

    const tbody = document.querySelector('#gradebook tbody');
    tbody.innerHTML = '';

    data.forEach(student => {
      const row = document.createElement('tr');

      const nameCell = document.createElement('td');
      nameCell.textContent = student.student_name;

      const a1 = document.createElement('td');
      a1.textContent = student.assignment_1 ?? '';

      const a2 = document.createElement('td');
      a2.textContent = student.assignment_2 ?? '';

      const a3 = document.createElement('td');
      a3.textContent = student.assignment_3 ?? '';

      row.appendChild(nameCell);
      row.appendChild(a1);
      row.appendChild(a2);
      row.appendChild(a3);
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching grade data:", err);
  });