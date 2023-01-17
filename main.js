function rot13(str) {
  //65 - 90 for ASCII Codes
  let changeStr = "";
  let regex = new RegExp(/(\s|\W)/g); //Regex to check for special characters.
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(regex)) { //If it is punctuation or space, skip and add it to the string.
      changeStr += str[i]
    }
    else { //If not a special character.
      let currentIndex = str.charCodeAt(i) - 13;
      if (currentIndex < 65) {
        currentIndex += 26;
      }
      changeStr += String.fromCharCode(currentIndex);
    }
  }
  return changeStr;
}

rot13("SERR PBQR PNZC");
