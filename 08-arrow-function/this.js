// Konsep this pada arrow function

// Contructor function
const MahasiswaConstructor = function () {
  this.nama = 'Shandika';
  this.umur = 33;
  this.sayHello = function () {
    console.log(`Halo saya ${this.nama}, dan saya ${this.umur} tahun`);
  }
}

const shandikaConstructor = new MahasiswaConstructor();

// arrow function pada contractor function
const MahasiswaArrowFunc = function () {
  this.nama = 'Shandika';
  this.umur = 33;
  this.sayHello = () => {
    console.log(`Halo saya ${this.nama}, dan saya ${this.umur} tahun`);
  }
}

const shandika = new MahasiswaArrowFunc();

// arrow function tidak bisa digunakan dalam object literal

const mhs1 = {
  nama: 'Shandika',
  umur: 32,
  sayHello: () => `Halo saya ${this.nama}, dan saya ${this.umur} tahun`

}

console.log(mhs1.sayHello());


