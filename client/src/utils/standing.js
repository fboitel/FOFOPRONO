
function sortPlayers(a){
  for (let i = 0; i < a.length - 1; i++){
    for (let j = i; j < a.length; j++){
      if (a[i].points < a[j].points){
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
    }
  }
}


export { sortPlayers };