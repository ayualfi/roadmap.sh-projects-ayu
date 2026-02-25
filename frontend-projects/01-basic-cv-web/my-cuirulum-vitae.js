// var konfir = confirm("Kamu yakin ??");
// ulang = true;

// while (ulang){
//     var nama = prompt("Bagaimana aku memanggilmu?")
//     alert("Halo"+nama)

//     ulang=confirm("Coba lagi?")
// }

// alert("Terimakasih "+nama)

var angka = 1
while(angka<=10){
    console.log('Hallo')
    angka++
}

ulang = true
while (ulang){
    prompt("Kamu suka makan apa aja?")
    ulang=confirm("Ada lagi?")
}

var cek = 1
while (cek<=10){
    var cekAngkot=prompt("Angkot "+cek+" aman?")
    cek++
}
if (cek === 10 || cekAngkot==='aman'){
    var jmlAngkot=10
    var angkot = 1
    while (angkot<=jmlAngkot){
    console.log('Angkot No. '+angkot+' beroprasi dengan baik.')
    angkot=angkot + 1 
    }
}else{
    console.log('Beberapa angkot belum beroprasi dengan baik')
}



    var jmlhAngkot=10
    var angkot = 1
    while (angkot<=jmlhAngkot){
    console.log('Angkot No. '+angkot+' beroprasi dengan baik.')
    angkot=angkot + 1 
    }