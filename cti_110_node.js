const express = require('express');
const app = express();
const path = require('path');
const { Pool } = require('pg');

app.use(express.static(path.join(__dirname, 'public')));

const connectionString = 'postgres://postgres:CTI_110_WakeTech@localhost/Gradebook';
const pool = new Pool({ connectionString });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'gradebook.html'));
});

app.get('/api/grades', function (req, res) {
  pool.query(
    `SELECT 
      students.first_name || ' ' || students.last_name AS student_name,
      MAX(CASE WHEN assignments.title = 'Assignment 1' THEN assignments.grade END) AS assignment_1,
      MAX(CASE WHEN assignments.title = 'Assignment 2' THEN assignments.grade END) AS assignment_2,
      MAX(CASE WHEN assignments.title = 'Assignment 3' THEN assignments.grade END) AS assignment_3
     FROM students
     LEFT JOIN assignments ON assignments.student_id = students.student_id
     GROUP BY students.student_id
     ORDER BY student_name`,
    [],
    function (err, result) {
      if (err) {
        console.error('Full query error:', err);
        res.status(500).json({ error: 'Database query failed' });
        return;
      }

      result.rows.forEach(row => {
        console.log(`${row.student_name} → ${row.assignment_1}, ${row.assignment_2}, ${row.assignment_3}`);
      });

      res.status(200).json(result.rows);
    }
  );
});

app.listen(3000, function () {
  console.log("Server listening on http://localhost:3000");
});
