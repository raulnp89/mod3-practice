/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/


let text = "Hi, I am learning Javascript";
const vowels = "aeiouAEIOU";
for (let i = 0; i < vowels.length; i++) {
  const vowel = vowels[i];
  text = text.replaceAll(vowel, "");
}

showContent(4, text);
