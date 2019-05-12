function ubahHuruf(kata) {
    var real = ('abcdefghijklmnopqrstuvwxyz')
    var temp = '';
   for ( var x = 0; x < kata.length; x++ ){
      for ( var y = 0; y < real.length; y++){ 
        if ( kata[x] === real[y]){
          temp += real[y+1]
        }
      }
    }return temp
  }
  
  
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu