function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var temp = [];
    var b = 0;
    var c= 0;
    for ( var x = 0; x < arrPenumpang.length; x++ ){
      for ( var y = 0; y < rute.length; y++){     
        if ( arrPenumpang[x][1] === rute[y]){
         b = y
        }
        if ( arrPenumpang[x][2] === rute[y]){
         c = y 
        }
      }
      temp.push({penumpang: arrPenumpang[x][0], naikDari: arrPenumpang[x][1], tujuan: arrPenumpang[x][2], bayar: (c-b)*2000})
      
    }
    return temp
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]