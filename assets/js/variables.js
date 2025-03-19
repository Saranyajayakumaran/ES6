// if you did not define them ,they would be assigned to the global object.
// if you use var outside of a function,it belongs to the global scope.
// if you use var inside of a function,it belongs to that function
// if you use var inside of a block, i.e for-loop, the variable is still available outside of te block


let movieName = 'Jailer'//global scope


function changeMovie(){

    console.log(movieName);
}
changeMovie();