
let students = [
  { id: 1, name: "Anjali", course: "Math" },
  { id: 2, name: "Ravi", course: "Science" },
];

const getAllStudents = (req,res)=>{
    res.json(students)
}
const getStudentById = (req,res)=>{
    const id = Number(req.params.id)
    if(students){
        const student = students.find(s=>s.id===id)
        res.json(student)
    }else{
        res.status(404)
    }
}

module.exports = {getAllStudents,getStudentById}