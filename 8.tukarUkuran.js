function tukarBesarKecil(kalimat) {
    var kecil = (' -!1234567890abcdefghijklmnopqrstuvwxyz');
    var besar = (' -!1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    var temp = '';
    for ( var x = 0; x < kalimat.length; x++ ){
      for ( var y = 0; y < kecil.length; y++){
          if ( kalimat[x] === kecil[y]){
            temp += besar[y]
        }else if (kalimat[x] === besar[y] ){
          temp+= kecil[y]
        }
      }
    }return temp
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"