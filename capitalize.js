export default function capitalize(string) {
 var [a, ...rest] = string;
 a = a.toUpperCase();
 return [a, ...rest].join("");
}
