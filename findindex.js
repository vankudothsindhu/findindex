//map
let array1 = [10,9,8,7,6]
let map_array = array1.map((itr,index) =>{
    return (itr*2)
})
console.log("Original array: ",array1)     
console.log("Map method: ",map_array)

//filter
let array2 = [1,2,3,4,5,6,7,8,9,10]
let filter_array  = array2.filter((itr,index) =>{
    if(itr%2===0)
        return itr
})

console.log("Original array: ",array2)
console.log("Filter method: ",filter_array)

//forEach
let array3 = [1,2,3,4,5]
array1.forEach((itr,index) => {
    console.log(itr)
})


console.log("Original array: ",array3)
console.log("Filter method: ",filter_array)

//reduce
let array4 = [1,2,3,4,5]
let sum = array4.reduce((acc,itr) => {
    return acc = acc + itr
},0)
console.log("Reduce method: ",sum)

//find
let persons = [
    {
        name: "sindhu",
        age: 20
    },
    {
        name: "bujji",
        age: 19
    },
    {
        name: "sai",
        age: 22
    },
    {
        name: "nani",
        age: 28
    },
    
]

let result_find = persons.find((person) => person.age > 25)
        console.log(result_find.name)
        
//findIndex
let result_findIndex = persons.findIndex((person) => person.age < 18)
        console.log(result_findIndex)


