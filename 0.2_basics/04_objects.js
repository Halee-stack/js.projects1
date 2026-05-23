//const book_club_User = new Object()

const book_club_User = {}
book_club_User.id = "2c3"
book_club_User.name = "Jane"
book_club_User.isLoggedIn = false    

//console.log(book_club_User);

const studyMate = {
    email: "anyone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kate",
            lastname: "Adam"
        }

    }

}
// toaccess name of any nesting or deep nesting you have to do through . dot notation.
console.log(studyMate.fullname.userfullname.lastname);

// combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = {...obj1, ...obj2, ...obj3} // the use of spread operator
console.log(obj4)

// most common syntax that will be used when the value comes from the datbase.

const users = [
    {
        id: 1,
        email: "kdam@aol.com"
    },
     {
        id: 2,
        email: "aghj@aol.com"
    },
     {
        id: 3,
        email: "rty@aol.com"
    },
]
users[1].email
console.log(book_club_User);
console.log(Object.keys(book_club_User));
console.log(Object.values(book_club_User));
console.log(Object.entries(book_club_User));

console.log(book_club_User.hasOwnProperty('isLoggedIn'));
