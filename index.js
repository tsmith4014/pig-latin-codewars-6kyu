function pigLatin(string){
  let arr = string.toLowerCase().split('');
  let arrC = arr.slice();
  let regX = /[a-z]/i;
  let vol = 'aeiou';
    for (let i in arr) {
      if (regX.test(arr[i]) == false) {
      return null
      } 
    } 
  
      if (vol.includes(arr[0])) {
        return string.toLowerCase() + 'way'
      }
      let noVowel = true
      for(let i in arr){
        if(vol.includes(arr[i]) == true){
          noVowel = false
        }
      } 
  
        if (noVowel == true){
        return string.toLowerCase() + 'ay'
      }
      
        let ans = '';
        for(let i in arr){
          if(vol.includes(arr[i]) == false) {
            ans += arrC.shift()
          } else if (vol.includes(arr[i]) == true) {
            return arrC.join("") + ans + 'ay'
            }
        } 
}

//console.log(pigLatin("map"))
console.log(pigLatin("ppegg"))
console.log(pigLatin("tes3t5"))


// Pig Latin is an English language game where the goal is to hide the meaning of a word from people not aware of the rules.

// So, the goal of this kata is to wite a function that encodes a single word string to pig latin.

// The rules themselves are rather easy:

// The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".

// The word starts with a consonant -> move consonants from the beginning of the word to the end of the word until the first vowel, then return it plus "ay".

// The result must be lowercase, regardless of the case of the input. If the input string has any non-alpha characters, the function must return None, null, Nothing (depending on the language).

// The function must also handle simple random strings and not just English words.

// The input string has no vowels -> return the original string plus "ay".

// For example, the word "spaghetti" becomes "aghettispay" because the first two letters ("sp") are consonants, so they are moved to the end of the string and "ay" is appended.



// function pigLatin(string){
//   string=string.toLowerCase();
//   if (string.search(/[^a-z]/)!=-1) return null;
//   pos=string.search(/[aeiou]/)
//   if (pos==-1) return string+"ay";
//   if (pos==0) return string+"way";
//   else return string.slice(pos,string.length)+string.slice(0,pos)+"ay";
// }



// const pigLatin = string =>
//   /[^a-z]/i.test(string) ? null : string.toLowerCase().replace(/(^[^aeiou]*)(\w*$)/, (_, $1, $2) => $2 + ($1 || `w`) + `ay`);




// function pigLatin(s) {
//   s = s.toLowerCase()
//   if (/[^a-z]/.test(s)) return null
//   if ("aeiou".indexOf(s[0]) >= 0) return s + "way"
//   return s.replace(/^([bcdfghjklmnpqrstvwxyz]+)(.*)/i, "$2$1ay")
// }


// function pigLatin(s){
//   s=s.toLowerCase();
//   return /[^a-z]/.test(s) ? null : /^[aeiou]/.test(s) ? s+"way" : s.replace(/^[^aeiou]+/,"")+s.match(/^[^aeiou]+/)+"ay";
// }