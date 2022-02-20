
function getFullMonth(a){
  switch(a){
    case 0:
      return "janvier";
    case 1:
      return "fevrier";
    case 2:
        return "mars";
    case 3:
      return "avril";
    case 4:
      return "mai";
    case 5:
        return "juin";
    case 6:
      return "juillet";
    case 7:
      return "aout";
    case 8:
        return "septembre";
    case 9:
      return "octobre";
    case 10:
      return "novembre";
    case 11:
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

function normalizeDay(d){
  switch(d){
    case 0:
      return "lun";
    case 1:
      return "mar";
    case 2:
      return "mer";
    case 3: 
      return "jeu";
    case 4:
      return "ven";
    case 5:
      return "sam";
    case 6:
      return "dim";
    default:
      return "err";
  }
}

function normalizeType(t){
  switch(t){
    case "final":
      return "Finale";
    case "semi-finals":
      return "Demi-finale";
    case "quarter-finals":
      return "Quart de finale";
    case "round of 16": 
      return "Huitième de finale";
    case "group stage":
      return "Phase de poule";
    default:
      return "err";
  }
}


export {getFullMonth, normalizeValue, isPassed, normalizeDay, normalizeType };