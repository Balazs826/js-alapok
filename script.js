console.log("Sikeres összekötés ✅");

// // const Surname = "Dávid"

// // console.log(Surname);

// // let eves3 = "davidka"

// // console.log(eves3);

// // let korabbimunka = "asztalos"

// // let jelenlegimunka ="programozó"

// // console.log(korabbimunka , jelenlegimunka);

// // console.log(typeof 23)
// // console.log(typeof 3.5)
// // console.log(typeof "3.5")
// // console.log(typeof talabér)

// // let firstName;
// // console.group(typeof firstName);

// // const fruitArray = ["alma", "banán", "cseresznye", "dinnye", "eper"];

// // console.log(fruitArray[2]);


// // const egyedinevek = new Set(["talabér","teofil", "dávid"]);
// // console.log(egyedinevek);

// // const now = 2026;
// // const eletkordavid = now - 2009;
// // const eletkortalaber = now - 2009;

// // console.log(eletkordavid, eletkortalaber);

// // console.log(eletkordavid * eletkortalaber / 10, 2** 3);

// // const familyName = "Bellai"
// // const lastname = "Dávid"

// // console.log(familyName + ' ' + lastname);

// // let x = 10;

// // x += 10;
// // x *= 4;

// // x++;    

// // console.log(x);

// // // összehasonlító operatorok


// // console.log(eletkordavid > eletkortalaber);


// // const keresztnev = "Balázs";
// // const  foglalkozasszeretne = "Kezdő programozó";

// // const foglalkozasmarad = "Kezdő Kábeldugdosó";

// // const szuletesiev = 2009;
// // const jelenlegiev = 2026;

// // const balazs = keresztnev + "vagyok," + (jelenlegiev - szuletesiev) + "éves vagyok, és" + foglalkozasszeretne + "szeretnék lenni, de jelenleg" + foglalkozasmarad + "vagyok.";

// // console.log(balazs);

// // const balazsuj = `${keresztnev} vagyok, ${jelenlegiev - szuletesiev} éves vagyok, és ${foglalkozasszeretne} szeretnék lenni, de jelenleg ${foglalkozasmarad} vagyok.`;

// // console.log(balazsuj);

// // // console.log("Talabér vagyok \n\ haladó programozó")

// // // const kor = 19

// // // const elegidos = kor >= 18;

// // // if (elegidos) {
// // //     console.log("Beléphetsz a klubba ✅");
// // // } else {
// // //     console.log("Sajnálom, még nem léphetsz be ❌");
// // // }

// // const szuletesiEv = 2002
// // let szazad;

// // if (szuletesiEv <= 2000) {
// //     szazad = 20
// //     console.log(`${szazad}. században születtél`)
// // } else {
// //     szazad = 21
// //     console.log(`${szazad}. században születtél`)
// // }

// // console.log(szazad);

// // const bekertev = "1991"

// // console.log(bekertev+18);

// // const szuletesi_ev = Number(bekertev);

// // console.log(szuletesi_ev + 18);

// // console.log(Number("Talaber"));
// // console.log(typeof szuletesi_ev)


// // console.log("Én " + 23 + " éves vagyok");

// // console.log("23" - "10" -3)

// // console.log("talabér" - "olivér")

// // console.log("23" * "2")

// // console.log("24" / "2")

// // console.log(Boolean(undefined))
// // console.log(Boolean({}))
// // console.log(Boolean(Number("Talabér")))


// // const kor = 18;

// // if (kor === 18) 
// //     console.log("most lettél nagykorú!")


// // console.log(18 === 18);
// // console.log(18 == 18);
// // console.log(18 === "18");
// // console.log(18 == "18");

// // const kedvenc = Number(prompt("Mi a kedvenc számod?"));

// // console.log(kedvenc, typeof kedvenc);

// // if (kedvenc === 23) {
// //     console.log("A 23 egy nagyszerű szám!");

// // } else if (kedvenc === 7) {
// //     console.log("A 7 is egy nagyszerű szám!");

// // } else if (kedvenc === 27) {
// //     console.log("A 27 legjobb szám!");

// // } else {
// //     console.log("Más számot választottál.");
// // }

// // if (kedvenc !== 27) {
    
// //     console.log("nem értem miert nem 27-et valaszottad.");
// // }

// const age = 16;

// const a = age >= 20 ;
// const b = age <= 30;

// console.log(a);
// console.log(b);

// // // // // // // // // // // // // logikai operatorok

// console.log(!a)
// console.log(a && b)
// console.log(a || b)
// console.log(!a && b) 
// console.log(a && !b) 

// const hasDriversLicense = true;
// const hasGoodEyesight = true;
// const isTired = false;
// const canDrive = hasDriversLicense && hasGoodEyesigh && isTired; ;
 
// if (canDrive) {
//     console.log("Vezethetsz!");
// } else {
//     console.log("Nem vezethetsz!");
// }


// const day = "hétfő"


// switch (day) {

//     case "hétfő":
//         console.log("Kezdődik a hét dupla tjvel")
//         break;
//     case "kedd":
//         console.log("Dupla adatbázis")
//         break;
//     case "szerda":
//         console.log("fizika elso ora")
//         break;
//     case "csütörtök":
//         console.log("Dupla magyar")
//         break;
//     case "péntek":
//         console.log("Kis szombat")
//         break;
//     case "szombat":
//         console.log("Ma szombat van")
//         break;
//     case "vasárnap":
//         console.log("Ma vasárnap van")
//         break;
//     default:
//         console.log("Érvénytelen nap")
// }

const age = 23;

age >= 18 ? console.log("Nagykorú vagy") : console.log("Kiskorú vagy");

const drink = age >= 18 ? "Sört ihatsz" : "kólát ihatsz";

console.log(drink);