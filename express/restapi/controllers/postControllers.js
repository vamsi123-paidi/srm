const User = require('../models/User')
let students = [
  { id: 1, name: "Anjali", course: "Math" },
  { id: 2, name: "Ravi", course: "Science" },
];
const addStudent = (req,res)=>{
    const {name,course} = req.body
    const newStudent = {
        id:students.length+1,
        name,
        course
    }
    if(newStudent){
        students.push(newStudent)
        res.json(newStudent)
    }
}

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, course } = req.body;
  const student = students.find(s => s.id === id);
  if (student) {
    student.name = name || student.name;
    student.course = course || student.course;
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
}


const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index !== -1) {
    const deleted = students.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).send('Student not found');
  }
}

const addUser = async (req, res) => {
  try {
    const student = new User(req.body);
    const saved = await student.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {addStudent,updateStudent,deleteStudent,addUser}