//Task src https://docs.google.com/document/d/1ptHMRiS6A_k3t67VV1JbuTyv5hfxoBLu1RucCJjTyl4/edit

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
  static visiAkmenys = 0;
  prideti1Akmeni() {
    this.akmenuKiekis++;
    Kibiras1.bendrasAkmenuSkaicius(1);
  }
  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
    Kibiras1.bendrasAkmenuSkaicius(kiekis);
  }
  kiekPririnktaAkmenu() {
    console.log("Akmeų kibire yra", this.akmenuKiekis);
  }
  static akmenuSkaiciusVisuoseKibiruose(){
    console.log('Bendras akmenų skaičius viuose kibiruose yra: ', Kibiras1.visiAkmenys);
  }
  static bendrasAkmenuSkaicius(akmenuSkaicius){
    Kibiras1.visiAkmenys += akmenuSkaicius;
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
    this.paperMoneyCounter = 0;
    this.coinsCounter = 0;
  }
  ideti(kiekis) {
    if(kiekis > 2){
      this.popieriniaiPinigai += kiekis;
      this.paperMoneyCounter++;
    }else{
      this.metaliniaiPinigai += kiekis
      this.coinsCounter++;
    }
  }
  skaiciuoti() {
    const sum = this.popieriniaiPinigai + this.metaliniaiPinigai;
    console.log("Piniginėje yra: ", sum);
  }
  monetos(){
    if(this.coinsCounter === 1){
      console.log(`Piniginėje yra: `, this.coinsCounter, ` moneta, ${this.metaliniaiPinigai} nominalo`);
    }else if(this.coinsCounter > 1 && this.coinsCounter < 10){
      console.log(`Piniginėje yra: `, this.coinsCounter, ` monetos, kurių suma yra ${this.metaliniaiPinigai}`);
    }else{
      console.log(`Piniginėje yra: `, this.coinsCounter, ` monetų, kurių suma yra ${this.metaliniaiPinigai}`);
    }
  }
  banknotai(){
    if(this.paperMoneyCounter === 1){
      console.log(`Piniginėje yra: `, this.paperMoneyCounter, ` banknotas, ${this.popieriniaiPinigai} nominalo`);
    }else if(this.paperMoneyCounter > 1 && this.paperMoneyCounter < 10){
      console.log(`Piniginėje yra: `, this.paperMoneyCounter, ` banknotai, kurių suma yra ${this.popieriniaiPinigai}`);
    }else{
      console.log(`Piniginėje yra: `, this.paperMoneyCounter, ` banknotų, kurių suma yra ${this.popieriniaiPinigai}`);
    }
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
  static visiKeleiviai = 0;
  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
    Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius);
  }
  islipa(keleiviuSkaicius) {
    if (this.keleiviuSkaicius - keleiviuSkaicius < 0) {
      Troleibusas.bendrasKeleiviuSkaicius(-this.keleiviuSkaicius);
      this.keleiviuSkaicius = 0;
    } else {
      Troleibusas.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
      this.keleiviuSkaicius - keleiviuSkaicius;
    }
  }
  vaziuoja() {
    console.log("Troleibuse važiuoja: ", this.keleiviuSkaicius);
  }
  static keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log(">>>>> Troleibusuose važiuoja: ", Troleibusas.visiKeleiviai);
  }
  static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
    Troleibusas.visiKeleiviai += keleiviuSkaicius;
  }
}
const troleibusas1 = new Troleibusas();
troleibusas1.ilipa(10);
troleibusas1.vaziuoja();
troleibusas1.islipa(5);
troleibusas1.vaziuoja();
troleibusas1.ilipa(10);
troleibusas1.vaziuoja();

/*Task4 (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), 
kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose.
Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), 
kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). 
Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). */

const troleibusas2 = new Troleibusas();
troleibusas2.ilipa(10);
troleibusas2.islipa(5);
troleibusas2.ilipa(20);
Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();

/* Task5 (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. 
Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), 
kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, 
tokiu atveju produktų kiekis turėtų sumuotis. */

class PirkiniuKrepselis {
  constructor() {
    this.turinys = new Map();
    this.turinys.set("Surelis", 0);
    this.turinys.set("Pienas", 0);
    this.turinys.set("Duona", 0);
  }
  idetiSureli(kiekis) {
    this.turinys.set("Surelis", this.turinys.get("Surelis") + kiekis);
  }
  idetiPieno(kiekis) {
    this.turinys.set("Pienas", this.turinys.get("Pienas") + kiekis);
  }
  idetiDuonos(kiekis) {
    this.turinys.set("Duona", this.turinys.get("Duona") + kiekis);
  }
  krepselioTurinys(){
      let basket = 'Krepšelyje yra:';
      this.turinys.forEach(function(value, key) {
        basket += ` ${key} - ${value}`;
    });
    console.log(basket)
  }
}

const basket = new PirkiniuKrepselis();
basket.idetiSureli(10);
basket.idetiSureli(10);
basket.idetiPieno(5);
basket.idetiDuonos(6);
basket.krepselioTurinys();

/* Task6 Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų.
Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. 
Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.*/

wallet1.monetos();
wallet1.banknotai();
for(let i = 0; i < 7; i++){
  wallet1.ideti(rand(1, 2));
  wallet1.ideti(rand(3, 100));
}
wallet1.monetos();
wallet1.banknotai();
for(let i = 0; i < 100; i++){
  wallet1.ideti(rand(1, 2));
  wallet1.ideti(rand(1, 100));
}
wallet1.monetos();
wallet1.banknotai();

/* Task7 (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), 
kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). 
Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius), 
kuris pridėtų prie statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). 
Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis). */

const objBucket1 = new Kibiras1();
objBucket1.prideti1Akmeni();
objBucket1.pridetiDaugAkmenu(rand(2, 99));
objBucket1.pridetiDaugAkmenu(rand(2, 99));
const objBucket2 = new Kibiras1();
objBucket2.prideti1Akmeni();
objBucket2.pridetiDaugAkmenu(rand(2, 99));
objBucket2.pridetiDaugAkmenu(rand(2, 99));
Kibiras1.akmenuSkaiciusVisuoseKibiruose();

/* Task8 Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu.
Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis.
Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(),
kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(),
kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100.
Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę. */

class Stikline{
  constructor(turis){
    this.turis = turis;
    this.kiekis = 0;
  }
  ipilti(kiekis){
    (kiekis + this.kiekis < this.turis) ? this.kiekis += kiekis : this.kiekis = this.turis;
  }
  ispilti(){
    const kiekis = this.kiekis;
    this.kiekis = 0;
    return kiekis;
  }
  stiklinejeYra(){
    console.log('Stiklinėje yra: ', this.kiekis);
  }
}

const stikline1 = new Stikline(200);
const stikline2 = new Stikline(150);
const stikline3 = new Stikline(100);
stikline1.ipilti(999);
console.log(stikline1, stikline2, stikline3);
stikline2.ipilti(stikline1.ispilti());
console.log(stikline1, stikline2, stikline3);
stikline3.ipilti(stikline2.ispilti());
console.log(stikline1, stikline2, stikline3);
stikline3.stiklinejeYra();

/* Task9 Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,
kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). 
Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. 
Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, 
sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, 
jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys 
nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis). */

class Grybas{
  constructor(){
    this.valgomas = (this.rand(0, 1)) ? true : false;
    this.sukirmijes = (this.rand(0, 1)) ? true : false;
    this.svoris = this.rand(5, 45);
  }
  rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
class Krepsys{
  constructor(){
    this.dydis = 500;
    this.prikrauta = 0;
    this.mushroomsInBasket = [];
  }
  deti(grybas){
    if(grybas.valgomas && !grybas.sukirmijes){
      this.prikrauta += grybas.svoris;
      this.mushroomsInBasket.push(grybas);
    }  
  }
}

function grybauti(){
  const basket = new Krepsys();
  const allMushrooms = [];
  while(basket.prikrauta < basket.dydis){
    const mushroom = new Grybas();
    allMushrooms.push(mushroom);
    basket.deti(mushroom);
    console.log("a");
  }
  console.log(`Krepšlis pilnas: Jame yra ${basket.mushroomsInBasket.length} grybų, kurių bendras svoris ${basket.prikrauta}`);
  console.log('Krepšelio turinys: ', basket.mushroomsInBasket);
  console.log('Visi rasti grybai: ', allMushrooms);

}
grybauti();



