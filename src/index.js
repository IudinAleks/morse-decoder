const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function wordDecToWord(wordDec) {
  if (wordDec == "**********") return " ";
  return wordDec
    .match(/\d{10}/g)
    .map((symbBinar) => {
      let symbMorze = symbBinar
        .match(/\d{2}/g)
        .map((symb) => {
          if (symb == 10) {
            return ".";
          } else if (symb == 11) {
            return "-";
          } else return "";
        })
        .join("");
      return MORSE_TABLE[symbMorze];
    })
    .join("");
}

function decode(expr) {
  return expr
    .split(/(\*{10})/)
    .map((wordDec) => {
      return wordDecToWord(wordDec);
    })
    .join("");
}

module.exports = {
  decode,
};
