export default function CaesarCipher(string, key) {
 const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
 ];
 let sarr = [...string];
 for (let i = 0; i < sarr.length; i++) {
  let index = alphabet.findIndex((element) => element == sarr[i]);
  let j = (index + key) % 26;
  sarr[i] = alphabet[j];
 }
 return sarr.join("");
}
