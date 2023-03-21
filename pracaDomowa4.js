// //--------------------------
// // 1. ZMIENNE I TYPY
// //--------------------------
// ​
// //a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych

const a = true
const b=23
const c="to jest string"
console.log(a)
console.log(typeof a)
console.log(b)
console.log(typeof b)
console.log(c)
console.log(typeof c)
// ​
// //b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
// // 2 + "2"
// // 2 + 2
// // 2 * "2"
// // 2 * 2
// // 1 == true
// // 0 == false
// // 0 == null
// // null == undefined
// ​
console.log(2 + "2")
console.log("typ number + typ string zwraca string")
console.log(2 + 2) 
console.log("number + number zwraca number")
console.log(2 * "2")
console.log("typ number * typ string zwraca number") 
console.log(2 * 2) 
console.log("typ number *typ number zwraca number")
console.log(1 == true)  
console.log("1 ma z defaultu przypisaną wartośc true")
console.log(0 == false) 
console.log("0 ma z defaultu przypisana wartośc false")
console.log(0 == null) 
console.log("0 to wartosc numeryczna, a null nie odnosi się do niczego")
console.log(null == undefined)
console.log("== nie sprawdza typów wiec skoro oba sa false, console.log zwraca true?")
console.log(null === undefined) 
console.log("ten już zwroci false, bo porownuje typy, a te sa rózne dla undefined i null?")

// //napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="
// ​
console.log("= operator przypisania wartości do zmiennej; == - operator przyrownania wartości, jesli porownywane są dwa różne typy, to js zrobi koercję typów a potem je porówna, ===  operator przyrównania wartości i typu zmiennej")

// //c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli


console.log("typ prosty przechowuje dane u siebie (np number, string, boolean, undefined, null), a typ referencyjny przechowuje jakby odnośnik do innego miejsca w którym są zawarte dane (np. tablica, obiekt)")
const one=1
const two=one
console.log(one)
console.log(two)

const arr=[1,2,3,4,5]
const arr2=arr
arr[0]=2
console.log(arr)
console.log(arr2)

// //d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości: 
// // let val = 0 (przekonwertuj na typ Boolean)
// // let num = "2137" (przekonwertuj na typ Number)
// // let str = 007 (przekonwertuj na String)
// // let und = undefined (przekonwertuj na Boolean)
// ​
let val = 0 
val = true
let num = "2137" 
num=2137
let str = 007
str= "007"
let und = undefined 
und=true
console.log(val)
console.log(num)
console.log(str)
console.log(und)


//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli

const arr3=new Array()
arr3.push('marysia','gosia','zosia')
console.log(arr3)

// ​
// //f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli
// ​
const obj=new Object()
obj.name='kasia'
obj.age=21
obj.profession='teacher'
console.log(obj)

function osoba() {
    this.imię = 'Karol',
    this.wiek = 28,
    this.wzrost = 178,
      console.log(`${this.imię}, ma ${this.wiek}lat i ${this.wzrost} cm`);

  }
osoba()
// //g)* opisz krótko czym dokładnie jest typ NaN
console.log("NaN to typ number, pojawia się gdy zwracany wynik  nie jest liczbą, np console.log(42*'liczba') zwroci NaN, choć console.log (428*'42') zwroci . 1764NaN===NaN zwraca false, bo każdy NaN jest unikalny?")
// ​
// //h)** znajdź w sieci informacje o typie Symbol i opisz go krótko 
console.log("SYmbol to ​prymitywny typ danych, zawsze unikalny. A więc dwa symbole nigdy nie będą sobie równe")
// //--------------------------
// //2. FUNKCJE & WARUNKI
// //--------------------------
// ​
// //a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb

function sum (a,b,c){
    return a+b+c
}
console.log(sum(1,2,3))
// ​
// //b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik

const triangleArea =(a,b)=> {return 1/2 *(a*b)}
console.log(triangleArea(2,3))

// //c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację

const yearsPassed = age => {
    if (age<18){console.log("Podany wiek jest mniejszy od 18")}
    else return( age-18)}

yearsPassed(17)
// //d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości
// ​
const arrOfNames=['kasia', 'basia', 'ola']
function showItems (arrOfNames){
        return (`Przekazana tablica ma ${arrOfNames.length-1} elementów a elementem numer 3 jest ${arrOfNames[2]}`)
    }
console.log(showItems(arrOfNames))
// //e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.
// ​
let testPerson = {
    name: "Jan",
    surname: "Kowalski",
    age: 20,
    height: 180
}

function presentPerson ({}){
    return `Pan/i ${testPerson.name} ${testPerson.surname} ma ${testPerson.age} lat oraz ${testPerson.height} cm wzrostu`
}

console.log (presentPerson(testPerson))

// //f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.

function changeKeyValue (testPerson, age2){
  for(let key in testPerson)
    if (key==='age'){
       testPerson[key]=age2
       return testPerson
    }
    
}

console.log(changeKeyValue(testPerson, 34))

// //g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// // - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// // - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// // - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"
// ​

const num2= a =>{
  
    if (typeof a ==='number'){
        if(a%5===0 && a%3===0){
            return("FizzBuzz")
        }
        else if (a%3===0){
            return("Fizz")
        }
        else if (a%5===0){
            return("Buzz")
        }
    }
    else{
      return("Podaj liczbę")
    }
}

console.log(num2(9))

// //h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego

const ifEven = a => {
    a%2===0 ? console.log ("Ta liczba jest parzysta"): console.log ("Ta liczba jest nieparzysta")
}
ifEven(3)
// ​
// //i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10

function randomNum (){
    const num= Math.floor(Math.random()*10)
    return num
}

console.log(randomNum())
// ​
// //j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu

const randomNumber = (min,max)=> {

    if( typeof min==="number" && typeof max ==="number"){
const num =Math.round((Math.random()*(max-min)) + min)
    return num}
else {console.log("Podaj liczbę")}

}
console.log(randomNumber(0,-2))
// ​
// //k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu. 


// //--------------------------
// // FUNKCJE & PĘTLE
// //--------------------------
// ​
// //uwaga! Możesz spróbować każdą z pętli napisać w funkcji
// ​
// //a) napisz pętlę która odliczy od 1 do 9
for (let i=1; i<=9; i++){console.log(i)}

// //b) napisz pętlę która odliczy od 9 do 1
for (let i=9; i>=1; i--){console.log(i)}
//c) napisz pętlę która odliczy od 5 do 15
for (let i=5; i<=15; i++){console.log(i)}
//d) napisz pętlę która odliczy od 0 do -10
for (let i=0; i>=-10; i--){console.log(i)}
//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2
for (let i=1; i<=20; i=i+2){console.log(i)}

//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
for (let i=10; i>=-10; i=i-4){console.log(i)}
//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
for (let i=1; i<=100; i=i*2){console.log(i)}

// //h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
for (let i=1; i<=10; i++){if(i%2!==0){console.log(i)}}
//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego
for (let i=1; i<=10; i++){if(i%2===0){
    console.log(i) 
    console.log("Ta liczba jest parzysta")}
    else {
        console.log(i)
        console.log("Ta liczba jest nieparzysta")
    }
}
for (let i=1; i<=10; i++){
    i%2===0 ? console.log(i, "Ta liczba jest parzysta"): console.log(i, "Ta liczba jest nieparzysta")
    }

// //Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości

const count = a=>{
    for(let i=1;i<=a;i++){  
       console.log( i)
    }
}
count(3)
// //k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)

const count1 = a=>{
    for(let i=1;i<=50;i=i+a){
        console.log(i)
    }
}
count1(3)
// ​
// //l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób

const arrayOfNames = ["Ksawery", "Zenobiusz", "Klementyna", "Apolonia", "Jeremiasz", "Bernadetta"]
const greet = arrayOfNames => {
    for (let i=0;i<arrayOfNames.length;i++){
        console.log(`Cześć ${arrayOfNames[i]}`)
    }
}
greet(arrayOfNames)
// ​
// //ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
const arrObjects = [{   //PODWOJNIE SIE WYSWIETLA!!!!!!//
    brand: "Mustang",
    color: "niebieski"
}, {
    brand: "Tesla",
    color: "czarna"
}, {
    brand: "Polonez",
    color: "żółty"
}, {
    brand: "Toyota",
    color: "fioletowa"
}]

const showCars=arrObjects=>{
    for (let item of arrObjects){
    
console.log(`Przed Toba stoi ${item.color} ${item.brand}`)
    }}

showCars(arrObjects)
// ​
// //m) napisz funkcję która przyjmie tablic arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy
// ​
const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ​
const showEven = arrOfNumbers=>{
    for(let i=1;i<=arrOfNumbers.length;i++){
        if(i%2===0){
            console.log (i)
        }
    }
}

showEven(arrOfNumbers)
// ​
// //n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// // - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// // - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// // - za pomocą push umieści numery parzyste w tablicy arrEven
// // - na końcu zwróci obiekt z tymi trzema tablicami
// ​
const arrTypes = [2,4,5,undefined, null, "val", NaN, 7, 10, 333, "874", 22, 21, 400, "400", "undefined" ]

const arrOther = []
const arrNumbers = []
const arrEven = []

const sort = arrTypes=>{
    for(let i=0;i<arrTypes.length;i++){
        if(typeof arrTypes[i] ==='number'){
            if(arrTypes[i]%2===0){
                arrEven.push(arrTypes[i])
            }
            else{arrNumbers.push(arrTypes[i])}}
            else {arrOther.push(arrTypes[i])}
        }
   
    return {arrEven,arrNumbers,arrOther}
}
console.log(sort(arrTypes))

// ​
// //--------------------------
// // METODY
// //--------------------------
// ​
// //a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names
// ​
const names = ["Seba", "Kari", "Mati", "Andżi"]
const newNames=names.map(function (person){
    return (`cześć ${person}`)
})
console.log(newNames)
// ​
// //b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami
// ​
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNum = array10.filter(function(item){
    return item%2===0}
    )
 console.log(evenNum)
// ​
// //c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami
// ​
const people = [{
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
}, {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
}, {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
}, {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
}]

const women=people.filter(function(person){
    return person.gender==='female'
})
console.log(women)
// ​
// //d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.
const shopping = "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny"
const shopping2=shopping.toLowerCase().split(' ').sort()

console.log(shopping2)
//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const newAlphabet = alphabet.reverse().join('')
console.log(newAlphabet)