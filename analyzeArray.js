export default function analyzeArray(array) {
 let average = 0,
  min = array[0],
  max = array[0],
  length = array.length;
 for (let i = 0; i < array.length; i++) {
  if (array[i] < min) min = array[i];
  if (array[i] > max) max = array[i];
  average += array[i];
 }
 average = average / length;
 return {
  average,
  min,
  max,
  length,
 };
}
