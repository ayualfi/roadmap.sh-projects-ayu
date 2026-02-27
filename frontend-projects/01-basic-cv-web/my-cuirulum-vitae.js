// var konfir = confirm("Kamu yakin ??");
// ulang = true;

// while (ulang){
//     var nama = prompt("Bagaimana aku memanggilmu?")
//     alert("Halo"+nama)

//     ulang=confirm("Coba lagi?")
// }

// alert("Terimakasih "+nama)
//======================================
// Ini tentang windows kecil (alert, prompt, confirm)
// var angka = 1
// while(angka<=10){
//     console.log('Hallo')
//     angka++
// }

// ulang = true
// while (ulang){
//     prompt("Kamu suka makan apa aja?")
//     ulang=confirm("Ada lagi?")
// }
//===================================================
// var cek = 1
// while (cek<=10){
//     var cekAngkot=prompt("Angkot "+cek+" aman?")
//     cek++
// }
// if (cek === 10 || cekAngkot==='aman'){
//     var jmlAngkot=10
//     var angkot = 1
//     while (angkot<=jmlAngkot){
//     console.log('Angkot No. '+angkot+' beroprasi dengan baik.')
//     angkot=angkot + 1 
//     }
// }else{
//     console.log('Beberapa angkot belum beroprasi dengan baik')
// }

//===============================tugas 2===========================================
// var jmlhAngkot=10
// var angkotBeroprasi =6
// var noangkot = 1

// while (noangkot<=angkotBeroprasi){
// console.log('Angkot No. '+noangkot+' beroprasi dengan baik.')
// noangkot=noangkot + 1 
// }
// for(noangkot; noangkot>angkotBeroprasi && noangkot<=jmlhAngkot ;noangkot=noangkot+1){
// console.log('Angkot no. '+noangkot+ ' tidak beroperasi dengan baik')
// }
// //===============================tugas 2 by pak sandhika===========================================
// var jmlhAngkot=10
// var angkotBeroprasi =6
// var noangkot = 1

// while (noangkot<=angkotBeroprasi){
    // console.log('Angkot No. '+noangkot+' beroprasi dengan baik.')
    // noangkot=noangkot + 1 
    // }
    // for(noangkot=angkotBeroprasi+1; noangkot<=jmlhAngkot ;noangkot=noangkot+1){
        // console.log('Angkot no. '+noangkot+ ' tidak beroperasi dengan baik')
        // }
        
//coba if else
// var angka = prompt("Masukkan angka")
// if (angka > 5){
//     alert(angka+" lebih besar dari pada lima")}
// else{
//     alert(angka+" tidak lebih besar dari pada lima")
//     }

 // //===============================tugas 3 by pak sandhika===========================================
// var jmlAngkot=10
// var angkotBeroprasi=6
// var noangkot=1

// for (noangkot=noangkot;noangkot<=jmlAngkot; noangkot=noangkot+1){
//     if (noangkot<=angkotBeroprasi){
//         console.log('angkot no. '+noangkot+' beroprasi dengan baik')
//     }else{
//     console.log("Angkot no. "+ noangkot+" tidak beroprasi dengan baik")
// }}
 // //===============================tugas 4 by pak sandhika===========================================
var jmlAngkot=10
var angkotBeroprasi=6
var noangkot=1

for (noangkot=noangkot;noangkot<=jmlAngkot; noangkot=noangkot+1){
    if (noangkot<=angkotBeroprasi){
        console.log('angkot no. '+noangkot+' beroprasi dengan baik')
    }else if(noangkot===8){
    console.log("Angkot no. "+ noangkot+" lembur")
    }else{
    console.log("Angkot no. "+ noangkot+" tidak beroprasi")   
    }}