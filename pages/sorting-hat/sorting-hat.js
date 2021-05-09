let count = 0;
let randomHouse;

     $('.hat').click(()=>{
          if(count == 0){
          var houses = [
               "Gryffindor",
               "Hufflepuff",
               "Ravenclaw",
               "Slytherin"
             ];
          //    $('.hat').css('display','none')
             randomHouse = houses[Math.floor(Math.random()*houses.length)];
             $('.hatResult').css('display','block')
            $('.hatResult').append(`<p class="text-light text-center display-4 font-2 glow">  Congratulation You Are Selected in ${randomHouse}</p>`);
            count++;}
            else if (count > 0){
               alert(`You Are Already Selected in ${randomHouse}`);
          }
     })
    
