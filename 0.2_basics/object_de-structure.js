// OBJECT DESTRUCTURING
const course = {
    coursename: "Learning JavaScript",
    price: "100",
    courseMentor: "John"
}
//course.courseMentor // its a good method to print values like this. However, there is another way to print values too.

const {courseMentor: Mentor} = course 
console.log(Mentor)
