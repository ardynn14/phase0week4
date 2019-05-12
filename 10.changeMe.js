function changeMe(arr) {
    var temp ={};
    for ( var x = 0; x < arr.length; x++ ){
      console.log( (x+1) + '. ' + arr[x][0] + ' ' + arr[x][1] )
      for ( var y = 0; y < arr[x].length; y++ ){     
            temp.firstName = arr[x][0] 
            temp.lastName = arr[x][1]
            temp.gender = arr[x][2]
            if ( arr[x][3] === undefined){
              temp.age = 'Invalid Birth Year'
            }else{
              temp.age = (2019-arr[x][3])
            }
         } console.log(temp)
       }
     }
   
   
   // TEST CASES
   changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
   // { firstName: 'Christ',
   //   lastName: 'Evans',
   //   gender: 'Male',
   //   age: 37 }
   // 2. Robert Downey:
   // { firstName: 'Robert',
   //   lastName: 'Downey',
   //   gender: 'Male',
   //   age: 'Invalid Birth Year' }
   changeMe([]); // 