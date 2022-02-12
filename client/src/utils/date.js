
function getFullMonth(a){
  switch(a){
    case 1:
      return "janvier";
    case 2:
      return "fevrier";
    case 3:
        return "mars";
    case 4:
      return "avril";
    case 5:
      return "mai";
    case 6:
        return "juin";
    case 7:
      return "juillet";
    case 8:
      return "aout";
    case 9:
        return "septembre";
    case 10:
      return "octobre";
    case 11:
      return "novembre";
    case 12:
        return "décembre";
    default:
      return "err";
  }

}

function normalizeValue(a){
  if (a < 10){
    return "0" + a;
  }
  return a;
}

function isPassed(date){
  var actual = new Date(Date.now());
  if (actual > date){
    return "yes";
  }
  else 
    return "";
}

export {getFullMonth, normalizeValue, isPassed };