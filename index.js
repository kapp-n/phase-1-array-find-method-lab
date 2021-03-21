function superbowlWin(game){
    const winner = game.find(w => w.result ==='W')
     if (winner === undefined){
       return undefined
     } else return winner.year 
  }
    
  
superbowlWin(record);
superbowlWin(sadReality);




