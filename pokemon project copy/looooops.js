let my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //list of 10 numbers
let random_list = [4, 1, 8, 3, 7, 2, 9, 10, 6, 5] //randomer list

console.log(my_list[4])
console.log(random_list[4])

for(let i = 0; i < 9; i++){
    console.log(my_list[i])
}

for(let i = (my_list.length-1); i >= 0; i--){
    console.log(my_list[i])
}