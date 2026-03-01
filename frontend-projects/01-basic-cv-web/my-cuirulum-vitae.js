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
// var jmlAngkot=10
// var angkotBeroprasi=6
// var noangkot=1

// for (noangkot=noangkot;noangkot<=jmlAngkot; noangkot=noangkot+1){
//     if (noangkot<=angkotBeroprasi){
//         console.log('angkot no. '+noangkot+' beroprasi dengan baik')
//     }else if(noangkot===8){
//     console.log("Angkot no. "+ noangkot+" lembur")
//     }else{
//     console.log("Angkot no. "+ noangkot+" tidak beroprasi")   
//     }}

// //===============================tugas 5 by pak sandhika===========================================
// var jmlAngkot=10
// var angkotBeroprasi=6
// var noangkot=1

// for (noangkot=noangkot;noangkot<=jmlAngkot; noangkot=noangkot+1){
//     if (noangkot<=angkotBeroprasi){
//         console.log('angkot no. '+noangkot+' beroprasi dengan baik')
//     }else if(noangkot===8 || noangkot===10){
//     console.log("Angkot no. "+ noangkot+" lembur")
//     }else{
//     console.log("Angkot no. "+ noangkot+" tidak beroprasi")   
//     }}
    
    // //===============================tugas 5 by pak sandhika===========================================
    // var jmlAngkot=10
    // var angkotBeroprasi=6
    // var noangkot=1
    
    // for (noangkot=noangkot;noangkot<=jmlAngkot; noangkot=noangkot+1){
    //     if (noangkot<=angkotBeroprasi && noangkot!==5){
    //         console.log('angkot no. '+noangkot+' beroprasi dengan baik')
    //     }else if(noangkot===8 || noangkot===10){
    //     console.log("Angkot no. "+ noangkot+" lembur")
    //     }else{
    //     console.log("Angkot no. "+ noangkot+" tidak beroprasi")   
    //     }}
 // //===============================tugas 5 by pak sandhika===========================================
// var jmlAngkot=10

// var cek = 1
// while(cek<=10){
//     var kondisiAngkot=prompt("Bagaimana keaadaan angkot nomer "+ cek+ " ?")
//     if (kondisiAngkot==='baik'){
//         console.log('angkot no. '+cek+' beroprasi dengan baik')
//     }else if(kondisiAngkot==='lembur'){
//     console.log("Angkot no. "+ cek+" lembur")
//     }else{
//     console.log("Angkot no. "+ cek+" tidak beroprasi")   
//     }
//     cek++
// }

// var angka =parseInt(prompt("Masukkan angka"))
// if (angka===5){
//     alert("angka yang di masukkan adalah 5")
// }else if (angka===2){
//     alert("Angka yang dimasukkan adalah 2")
// }else{
//     alert("Angka yang dimasukkan bukan 5 atau 2")
// }

// var angka=prompt('Masukkan angka (2 / 4 / 6 / 3 / 5')
// switch (angka){
//     case '2':
//     case '4':
//     case '6':
//         alert('Anda memasukkan angka genap')
//         break;
//     case '3':
//     case '5':
//         alert('Anda memasukkan angka ganjil')
//         break;
//     default:
//         alert('Angka yang anda masukkan bukan 2 / 4 / 6 / 3 / 5 ')
//         break;
// }

