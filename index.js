const fs = require('fs');
const path = require('path');

//Ambil Path dari argumen CLI
const filePath = process.argv[2];

if(!filePath){
    console.error('❌ Tolong masukkan path file sebagai argumen!');
    console.log('Contoh: node index.js ./contoh.txt');
    process.exit(1);
}

const full_path = path.resolve(__dirname, filePath);

fs.promises.readFile(full_path, 'utf-8').then((data)=>{
    console.log('\n📄 Isi file:\n');
    console.log(data);

    //statistik tambah
    const baris = data.split('\n').length;
    const kata = data.split(/\s+/).filter(Boolean).length;
    const karakter = data.length;

    console.log('\n📊 Statistik:');
    console.log(`\n📚 Jumlah Baris: ${baris}`);
    console.log(`📚 Jumlah Kata: ${kata}`);
    console.log(`📚 Jumlah Karakter: ${karakter}`);
})
.catch((err)=>{
    console.error('❌ Gagal membaca file:', err.message);
})