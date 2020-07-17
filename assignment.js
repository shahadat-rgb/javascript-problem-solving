function feetToMile(feet) {
     var maile=feet/5280;
      maile = parseInt(maile);
      return maile;
}
   var roadMile = feetToMile(5050000);
   console.log(roadMile);




   function woodCalculator(chair,table,bed) {
    var chairWood=   chair*1;
    var tableWood=   table*3;
    var bedWood  =   bed*5;
    var total=   chairWood +tableWood + bedWood;
       return total; 
    }
      var total= woodCulculator(2,3,4);
      console.log(total);


     
     
     
      function tinyFriend(names){
        var shortName = names[0];
    for (var i = 1;    i<names.length;  i++ ) {

        if  (names[i].length <shortName.length){
             shortName=names[i];
    }
        return shortName;  
      }
   
    }  
     var result = tinyFriend(['rohima','tanbirslam','shahadat']);   
      console.log(result);    
   


  
  

      function brickCalculator(bulildingFloor) {
       if (bulildingFloor >=1 && bulildingFloor <=10) {
           var brick = bulildingFloor * 15 * 1000;
           return brick;
       }
       else if (bulildingFloor >=11 && bulildingFloor <=20) {
              bulildingFloor =bulildingFloor-10;
              var brick=(bulildingFloor *12 * 1000)+150000;
              return brick;
       }
       else if (bulildingFloor >=21) {
           bulildingFloor=bulildingFloor-20;
         var brick=(bulildingFloor * 10 *1000)+150000+120000;
         return brick;
        }
    }
       var totalResult= brickCalculator(31);
       console.log(totalResult);


      

