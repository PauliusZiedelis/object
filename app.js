function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*Task1 Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
  Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis)
  ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
  Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą. */

class Kibiras1 {
  constructor() {
    this.akmenuKiekis = 0;
  }
  prideti1Akmeni() {
    this.akmenuKiekis++;
  }
  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
  }
  kiekPririnktaAkmenu() {
    console.log("Akmeų kibire yra", this.akmenuKiekis);
  }
}
const objBucket = new Kibiras1();
objBucket.kiekPririnktaAkmenu();
objBucket.prideti1Akmeni();
objBucket.kiekPririnktaAkmenu();
objBucket.pridetiDaugAkmenu(rand(2, 99));
objBucket.kiekPririnktaAkmenu();

/*Task2 Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. 
  Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, 
  tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(),
  kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą 
  ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje. */

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
  }
  ideti(kiekis) {
    kiekis > 2
      ? (this.popieriniaiPinigai += kiekis)
      : (this.metaliniaiPinigai += kiekis);
  }
  skaiciuoti() {
    const sum = this.popieriniaiPinigai + this.metaliniaiPinigai;
    console.log("Piniginėje yra: ", sum);
  }
}
const wallet1 = new Pinigine();
wallet1.ideti(rand(1, 2));
wallet1.skaiciuoti();
wallet1.ideti(rand(3, 100));
wallet1.skaiciuoti();

/*Task3 Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. 
  Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). 
  O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. 
  Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali. */

class Troleibusas {
  constructor() {
    this.keleiviuSkaicius = 0;
  }
  static bendrasKeleiviuSkaicius = 0;
  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
    this.bendrasKeleiviuSkaicius += keleiviuSkaicius;
  }
  islipa(keleiviuSkaicius) {
    if (this.keleiviuSkaicius - keleiviuSkaicius < 0) {
      this.bendrasKeleiviuSkaicius - this.keleiviuSkaicius;
      this.keleiviuSkaicius = 0;
    } else {
      this.bendrasKeleiviuSkaicius - keleiviuSkaicius;
      this.keleiviuSkaicius - keleiviuSkaicius;
    }
  }
  vaziuoja() {
    console.log("Troleibuse važiuoja: ", this.keleiviuSkaicius);
  }

  static keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log(">>>>> Troleibusuose važiuoja: ", this.bendrasKeleiviuSkaicius);
  }
}
const troleibusas1 = new Troleibusas();
troleibusas1.ilipa(10);
troleibusas1.vaziuoja();
troleibusas1.islipa(15);
troleibusas1.vaziuoja();
troleibusas1.ilipa(19);
troleibusas1.vaziuoja();

/*Task4 (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), 
kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose.
 Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), 
 kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). 
 Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). */

const troleibusas2 = new Troleibusas();
troleibusas2.ilipa(10);
troleibusas2.islipa(15);
troleibusas2.ilipa(19);
Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();
