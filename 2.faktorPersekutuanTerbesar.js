function fpb(angka1, angka2) {
    for ( x = 1; x < angka1; x++){
      if ( angka1% x === 0 && angka2% x === 0){
          i = x
        } 
      }return i
    }
    
    // TEST CASES
    console.log(fpb(12, 16)); // 4
    console.log(fpb(50, 40)); // 10
    console.log(fpb(22, 99)); // 11
    console.log(fpb(24, 36)); // 12
    console.log(fpb(17, 23)); // 1