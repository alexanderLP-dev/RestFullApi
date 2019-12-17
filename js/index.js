import DB from './db.js';
import { studentsListElement } from './variables.js';
import { appendStudent } from './utils.js';

let database = new DB('https://frontend-lectures.firebaseio.com');

console.log('database', database);

let studentsList = [];

database.getStudents().then(result => {
	studentsList = Object.values(result);

	console.log('studentsList', studentsList);
	studentsList.forEach(student => appendStudent(student, studentsListElement));
});