//forEach
const coding =["html", "css", "js", "python"]

coding.forEach( (item) => {
    console.log(item);
})



function printMe(item){
    console.log(item);
}
coding.forEach(printMe)




coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "JS"
    },

     {
        languageName: "Python",
        languageFileName: "PY"
    },

     {
        languageName: "Java",
        languageFileName: "Java"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})