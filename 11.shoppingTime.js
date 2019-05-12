function shoppingTime(memberId, money) {

var harga = 
[['Sepatu Stacattu',1500000],
['Baju zoro',500000],
['Baju H&N',250000],
['Sweater Uniklooh',175000],
['Casing Handphone',50000]]

var temp = {};
var list = [];
var change = money;


if ( money < 50000){
 return 'Mohon maaf, uang tidak cukup'
}else if ( memberId === '' && money > 50000){
  return 'Mohon maaf, toko X hanya berlaku untuk member saja'
}else if ( memberId === undefined && money === undefined ){
  return 'Mohon maaf, toko X hanya berlaku untuk member saja'
}

for ( var x = 0; x < harga.length; x++ ){
  if ( money > harga[x][1]){
    list.push(harga[x][0])
    change -= harga[x][1]
  }
}
 temp.memberiD = memberId
 temp.money = money
 temp.listPurchased = list
 temp.changeMoney =  change
 return temp
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja