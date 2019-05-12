function urutkanAbjad(str) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var temp = '';
    for ( var x = 0; x < abjad.length; x++ ){
        for ( var y = 0; y < str.length; y++){
          if ( abjad[x] === str[y] ){
            temp += abjad[x]
        }
      }
    }return  temp
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'