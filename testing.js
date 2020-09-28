/*
Taking the below variable, using the postcode, 
- copy the user element into the relevant state
SA = 5000, Qld = 4000 , Vic = 3000, NSW = 2000
*/

const users = [
    {
        id: 1,
        name: "Name 1",
        group: "Educator",
        location: {
                Street: "1 Dutch Lane",
                Suburb: "Biscuit",
                postcode: 4324
        }
    },
    {
        id: 2,
        name: "Name 2",
        group: "Educator",
        location: {
            Street: "1 chocolate Lane",
            Suburb: "cookie",
            postcode: 5431
        }
    },
    {
        id: 3,
        name: "Name 3",
        group: "Student",
        location: {
            Street: "1 Wagon Street",
            Suburb: "Wheel",
            postcode: 2334
        }
    },
    {
        id: 4,
        name: "Name 4",
        group: "Student",
        location: {
            Street: "1 Strawberry Circuit",
            Suburb: "Sundae",
            postcode: 3321
        }
    },
    {
        id: 5,
        name: "Name 5",
        group: "Mentor",
        location: {
            Street: "1 Inspiration Way",
            Suburb: "Turn it Around",
            postcode: 3333
        }
    }
]



queensland = []
newSouthWales = []
victoria = []
southAustralia = []


function sortUsers(user){
    if (user.location.postcode >= 2000 && user.location.postcode < 3000){
        // var nswUser = user
        // console.log(user)
        newSouthWales.push(user)
        // console.log(nswUser)
    } else if (user.location.postcode >= 3000 && user.location.postcode < 4000) {
        victoria.push(user)
    } else if (user.location.postcode >= 4000 && user.location.postcode < 5000) {
        queensland.push(user)
    } else if (user.location.postcode >= 4000 && user.location.postcode < 6000) {
        southAustralia.push(user)
    } else {
        console.log("invalid")
    }
          
}


users.forEach(sortUsers)
console.log(queensland)
console.log(newSouthWales)
console.log(victoria)
console.log(southAustralia)





// switch (user) {
//     case (user.location.postcode >= 2000 && user.location.postcode < 3000):
//         var nswUser = user
//         newSouthWales.push(user)
//         console.log(nswUser)
//         break;
//     case (user.postcode >= 3000 && user.postcode < 4000):
//         victoria.push(user)
//         break;
//     case (user.postcode >= 4000 && user.postcode < 5000):
//         queensland.push(user)
//         break;
//     case (user.postcode >= 4000 && user.postcode < 6000):
//         southAustralia.push(user)
//         break;
//     default: 
//         return ("invalid")

//     } 
