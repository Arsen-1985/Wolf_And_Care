const canvas = document.querySelector ( "canvas" ) ;
const context = canvas.getContext ( "2d" ) ;
   const backgroundImg = document.createElement ( "img" ) ;
   backgroundImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZ3-2hWPvym5BvYptCBhjKkwUnTqot_55I7v62ENT0Thx1TJMG1PQgKjOqPknQUxsvZQ&usqp=CAU" ;
   const RabbitImg = document.createElement ( "img" ) ;
   RabbitImg.src = "https://i.guim.co.uk/img/media/891e0c9fb79e98c560b2f2008ebd8fafcf470468/0_0_2592_1555/master/2592.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=10aee7cdb068e7481fd56a4a6093e2ed" ;

const Rabbit_homeImg = document.createElement ( "img" ) ;
Rabbit_homeImg.src = "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AN48KU/551772c317544a7fb579b41c9989ce8f.png/f/outdoor-rabbit-hutch-small-animal-house-pet-cage-3-doors-wood.png" ;

 const WolfImg = document.createElement ( "img" ) ;
   WolfImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTecCFdVkrnKv13vw_Hqun2MAiJdlpLYa0euA&usqp=CAU" ;

const Wolf1Img = document.createElement ( "img" ) ;
   Wolf1Img.src = "https://pngimg.com/uploads/wolf/wolf_PNG23216.png" ;

const Wolf2Img = document.createElement ( "img" ) ;
   Wolf2Img.src = "https://i.pinimg.com/1200x/81/25/14/81251400141db52010df490e31852358.jpg" ;

const Wolf3Img = document.createElement ( "img" ) ;
   Wolf3Img.src = "https://i.guim.co.uk/img/media/d6d6712ae7c88452e30a3f7627e534aa995f74db/0_75_5931_3559/master/5931.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=37ef4214bfc468494c33db118048b6ee" ;
const Wolf4Img = document.createElement ( "img" ) ;
   Wolf4Img.src = "https://i.pinimg.com/564x/e6/b1/e7/e6b1e7c19b4249a840d7c18b8088a762.jpg" ;


let data = {
    Rabbit: {
    xDelta: 0,
    yDelta: 0,
    x:  10,
    y:  10,
    width: 60,
    height:60,
    }
} ;

let home = {
    Rabbit_home: {
    xhome: 0,
    yhome: 0,
    x:  385,
    y:  310,
    width: 60,
    height:60,
    }
} ;


let wata = {
    wolf: {
    xwolf: 0,
    ywolf: 0,
    x: 460,
    y: 160,
    width: 60,
    height: 60,
    }
} ;
let wata1 = {
    wolf1: {
    xwolf1: 0,
    ywolf1: 0,
    x: 235,
    y: 235,
    width: 60,
    height: 60,
    }
} ;

let wata2 = {
    wolf2: {
    xwolf2: 0,
    ywolf2: 0,
    x: 385,
    y: 385,
    width: 60,
    height: 60,
    }
} ;

let wata3 = {
    wolf3: {
    xwolf3: 0,
    ywolf3: 0,
    x: 460,
    y: 310,
    width: 60,
    height: 60,
    }
} ;

let wata4 = {
    wolf4: {
    xwolf4: 0,
    ywolf4: 0,
    x: 310,
    y: 460,
    width: 60,
    height: 60,
    }
} ;


function update () {
    if( data.Rabbit.x > canvas.width ) {
    data.Rabbit.x = data.Rabbit.xDelta + 10 ;
    }   else if( data.Rabbit.x < 0 ){
        data.Rabbit.xDelta = canvas.width ;
        }

    if( data.Rabbit.y > canvas.height ) {
    data.Rabbit.y = data.Rabbit.yDelta + 10 ;
    }   else if( data.Rabbit.y < 0 ) {
        data.Rabbit.yDelta = canvas.height ;
        }

data.Rabbit.x += data.Rabbit.xDelta ;
data.Rabbit.y += data.Rabbit.yDelta ;

   data.Rabbit.xDelta = 0 ;
   data.Rabbit.yDelta = 0 ;

    if( wata.wolf.x > canvas.width ) {
    wata.wolf.x = canvas.width -65 ;
    }   else if( wata.wolf.x < 0 ){
        wata.wolf.xwolf = 15 ;
        }

    if( wata.wolf.y > canvas.height ) {
    wata.wolf.y = canvas.height -65 ;
    }   else if( wata.wolf.y < 0 ) {
        wata.wolf.ywolf = 15 ;
        }

wata.wolf.x += wata.wolf.xwolf ;
wata.wolf.y += wata.wolf.ywolf ;

    wata.wolf.xwolf = 0;
    wata.wolf.ywolf = 0;

       if( wata1.wolf1.x > canvas.width ) {
    wata1.wolf1.x = canvas.width -65 ;
    }   else if( wata1.wolf1.x < 0 ){
        wata1.wolf1.xwolf1 = 15 ;
        }

    if( wata1.wolf1.y > canvas.height ) {
    wata1.wolf1.y = canvas.height -65 ;
    }   else if( wata1.wolf1.y < 0 ) {
        wata1.wolf1.ywolf1 = 15 ;
        }

wata1.wolf1.x += wata1.wolf1.xwolf1 ;
wata1.wolf1.y += wata1.wolf1.ywolf1 ;

    wata1.wolf1.xwolf1 = 0;
    wata1.wolf1.ywolf1 = 0;


    if( wata2.wolf2.x > canvas.width ) {
    wata2.wolf2.x = canvas.width -65 ;
    }   else if( wata2.wolf2.x < 0 ){
        wata2.wolf2.xwolf2 = 15 ;
        }

    if( wata2.wolf2.y > canvas.height ) {
    wata2.wolf2.y = canvas.height -65 ;
    }   else if( wata2.wolf2.y < 0 ) {
        wata2.wolf2.ywolf2 = 15 ;
        }

wata2.wolf2.x += wata2.wolf2.xwolf2 ;
wata2.wolf2.y += wata2.wolf2.ywolf2 ;

    wata2.wolf2.xwolf2 = 0;
    wata2.wolf2.ywolf2 = 0;

    if( wata3.wolf3.x > canvas.width ) {
    wata3.wolf3.x = canvas.width -65 ;
    }   else if( wata3.wolf3.x < 0 ){
        wata3.wolf3.xwolf3 = 15 ;
        }

    if( wata3.wolf3.y > canvas.height ) {
    wata3.wolf3.y = canvas.height -65 ;
    }   else if( wata3.wolf3.y < 0 ) {
        wata3.wolf3.ywolf3 = 15 ;
        }

wata3.wolf3.x += wata3.wolf3.xwolf3 ;
wata3.wolf3.y += wata3.wolf3.ywolf3 ;

    wata3.wolf3.xwolf3 = 0;
    wata3.wolf3.ywolf3 = 0;


    if( wata4.wolf4.x > canvas.width ) {
    wata4.wolf4.x = canvas.width -65 ;
    }   else if( wata4.wolf4.x < 0 ){
        wata4.wolf4.xwolf4 = 15 ;
        }

    if( wata4.wolf4.y > canvas.height ) {
    wata4.wolf4.y = canvas.height -65 ;
    }   else if( wata4.wolf4.y < 0 ) {
        wata4.wolf4.ywolf4 = 15 ;
        }

wata4.wolf4.x += wata4.wolf4.xwolf4 ;
wata4.wolf4.y += wata4.wolf4.ywolf4 ;

    wata4.wolf4.xwolf4 = 0;
    wata4.wolf4.ywolf4 = 0;

}

function draw() {
    context.drawImage( backgroundImg, 0, 0, canvas.width, canvas.height ) ;
    context.drawImage( RabbitImg, data.Rabbit.x, data.Rabbit.y, data.Rabbit.width, data.Rabbit.height ) ;
    context.drawImage( Rabbit_homeImg, home.Rabbit_home.x, home.Rabbit_home.y, home.Rabbit_home.width, home.Rabbit_home.height) ;
    context.drawImage( WolfImg, wata.wolf.x, wata.wolf.y, wata.wolf.width, wata.wolf.height);
    context.drawImage( Wolf1Img, wata1.wolf1.x, wata1.wolf1.y, wata1.wolf1.width, wata1.wolf1.height ) ;
    context.drawImage( Wolf2Img, wata2.wolf2.x, wata2.wolf2.y, wata2.wolf2.width, wata2.wolf2.height ) ;
    context.drawImage( Wolf3Img, wata3.wolf3.x, wata3.wolf3.y, wata3.wolf3.width, wata3.wolf3.height ) ;
    context.drawImage( Wolf4Img, wata4.wolf4.x, wata4.wolf4.y, wata4.wolf4.width, wata4.wolf4.height ) ;
}

function loop() {
    requestAnimationFrame( loop ) ;
    update() ;
    draw() ;
}
loop() ;

document.addEventListener ( "keydown", function( evt ) {

    if ( evt.code === "ArrowRight" ) {
          data.Rabbit.xDelta = 75 ;

          wata.wolf.xwolf = 0;
          wata.wolf.ywolf = 75;

          wata1.wolf1.xwolf1 = 75;
          wata1.wolf1.ywolf1 = 0;

          wata2.wolf2.xwolf2 = 0;
          wata2.wolf2.ywolf2 = 75;

          wata3.wolf3.xwolf3 = 0;
          wata3.wolf3.ywolf3 = -75;

          wata4.wolf4.xwolf4 = -75;
          wata4.wolf4.ywolf4 = 0;


    }  else if ( evt.code === "ArrowLeft" ) {
          data.Rabbit.xDelta = -75 ;

          wata.wolf.xwolf = 0;
          wata.wolf.ywolf = -75;

          wata1.wolf1.xwolf1 = -75;
          wata1.wolf1.ywolf1 = 0;

          wata2.wolf2.xwolf2 = 75;
          wata2.wolf2.ywolf2 = 0;

          wata3.wolf3.xwolf3 = 0;
          wata3.wolf3.ywolf3 = 75;

          wata4.wolf4.xwolf4 = 75;
          wata4.wolf4.ywolf4 = 0;


    }  else if ( evt.code === "ArrowDown" ) {
          data.Rabbit.yDelta = 75 ;

          wata.wolf.xwolf = 75;
          wata.wolf.ywolf = 0;

          wata1.wolf1.xwolf1 = -75;
          wata1.wolf1.ywolf1 = 0;

          wata2.wolf2.xwolf2 = -75;
          wata2.wolf2.ywolf2 = 0;

          wata3.wolf3.xwolf3 = -75;
          wata3.wolf3.ywolf3 = 0;

          wata4.wolf4.xwolf4 = 0;
          wata4.wolf4.ywolf4 = -75;


    }  else if ( evt.code === "ArrowUp" ) {
          data.Rabbit.yDelta = -75 ;

          wata.wolf.xwolf = -75;
          wata.wolf.ywolf = 0;

          wata1.wolf1.xwolf1 = 0;
          wata1.wolf1.ywolf1 = -75;

          wata2.wolf2.xwolf2 = 0;
          wata2.wolf2.ywolf2 = -75;

          wata3.wolf3.xwolf3 = 75;
          wata3.wolf3.ywolf3 = 0;

          wata4.wolf4.xwolf4 = 0;
          wata4.wolf4.ywolf4 = 75;
      }
    x.wolf
    })
document.addEventListener("keyup", function( evt ) {

    if ( evt.code === "ArrowRight" ){

      if ((wata.wolf.x === home.Rabbit_home.x) && (wata.wolf.y === home.Rabbit_home.y)){
          wata.wolf.xwolf -= 0;
          wata.wolf.ywolf -= 75;
      }
      }
    else if( evt.code === "ArrowLeft" ){

         if ((wata.wolf.x === home.Rabbit_home.x) && (wata.wolf.y === home.Rabbit_home.y)){
          wata.wolf.xwolf += 0;
          wata.wolf.ywolf += 75;
      }
    }
    else if( evt.code === "ArrowDown" ){

         if ((wata.wolf.x === home.Rabbit_home.x) && (wata.wolf.y === home.Rabbit_home.y)){
          wata.wolf.xwolf -= 75;
          wata.wolf.ywolf -= 0;
      }
    }
else if( evt.code === "ArrowUp" ){

         if ((wata.wolf.x === home.Rabbit_home.x) && (wata.wolf.y === home.Rabbit_home.y)){
          wata.wolf.xwolf += 75;
          wata.wolf.ywolf += 0;
      }
    }



        if ( evt.code === "ArrowRight" ){

      if ((wata1.wolf1.x === home.Rabbit_home.x) && (wata1.wolf1.y === home.Rabbit_home.y)){
          wata1.wolf1.xwolf1 -= 75;
          wata1.wolf1.ywolf1 -= 0;
      }
      }
    else if( evt.code === "ArrowLeft" ){

         if ((wata1.wolf1.x === home.Rabbit_home.x) && (wata1.wolf1.y === home.Rabbit_home.y)){
          wata1.wolf1.xwolf1 += 75;
          wata1.wolf1.ywolf1 += 0;
      }
    }
    else if( evt.code === "ArrowDown" ){

         if ((wata1.wolf1.x === home.Rabbit_home.x) && (wata1.wolf1.y === home.Rabbit_home.y)){
          wata1.wolf1.xwolf1 -= 0;
          wata1.wolf1.ywolf1 -= 75;
      }
    }
else if( evt.code === "ArrowUp" ){

         if ((wata1.wolf1.x === home.Rabbit_home.x) && (wata1.wolf1.y === home.Rabbit_home.y)){
          wata1.wolf1.xwolf1 += 0;
          wata1.wolf1.ywolf1 += 75;
      }
    }


    if ( evt.code === "ArrowRight" ){

      if ((wata2.wolf2.x === home.Rabbit_home.x) && (wata2.wolf2.y === home.Rabbit_home.y)){
          wata2.wolf2.xwolf2 -= 0;
          wata2.wolf2.ywolf2 -= 75;
      }
      }
    else if( evt.code === "ArrowLeft" ){

         if ((wata2.wolf2.x === home.Rabbit_home.x) && (wata2.wolf2.y === home.Rabbit_home.y)){
          wata2.wolf2.xwolf2 -= 75;
          wata2.wolf2.ywolf2 -= 0;
      }
    }
    else if( evt.code === "ArrowDown" ){

         if ((wata2.wolf2.x === home.Rabbit_home.x) && (wata2.wolf2.y === home.Rabbit_home.y)){
          wata2.wolf2.xwolf2 += 75;
          wata2.wolf2.ywolf2 += 0;
      }
    }
else if( evt.code === "ArrowUp" ){

         if ((wata2.wolf2.x === home.Rabbit_home.x) && (wata2.wolf2.y === home.Rabbit_home.y)){
          wata2.wolf2.xwolf2 += 0;
          wata2.wolf2.ywolf2 += 75;
      }
    }



    if ( evt.code === "ArrowRight" ){

      if ((wata3.wolf3.x === home.Rabbit_home.x) && (wata3.wolf3.y === home.Rabbit_home.y)){
          wata3.wolf3.xwolf3 += 0;
          wata3.wolf3.ywolf3 += 75;
      }
      }
    else if( evt.code === "ArrowLeft" ){

         if ((wata3.wolf3.x === home.Rabbit_home.x) && (wata3.wolf3.y === home.Rabbit_home.y)){
          wata3.wolf3.xwolf3 -= 0;
          wata3.wolf3.ywolf3 -= 75;
      }
    }
    else if( evt.code === "ArrowDown" ){

         if ((wata3.wolf3.x === home.Rabbit_home.x) && (wata3.wolf3.y === home.Rabbit_home.y)){
          wata3.wolf3.xwolf3 += 75;
          wata3.wolf3.ywolf3 += 0;
      }
    }
else if( evt.code === "ArrowUp" ){

         if ((wata3.wolf3.x === home.Rabbit_home.x) && (wata3.wolf3.y === home.Rabbit_home.y)){
          wata3.wolf3.xwolf3 -= 75;
          wata3.wolf3.ywolf3 -= 0;
      }
    }



    if ( evt.code === "ArrowRight" ){

      if ((wata4.wolf4.x === home.Rabbit_home.x) && (wata4.wolf4.y === home.Rabbit_home.y)){
          wata4.wolf4.xwolf4 += 75;
          wata4.wolf4.ywolf4 += 0;
      }
      }
    else if( evt.code === "ArrowLeft" ){

         if ((wata4.wolf4.x === home.Rabbit_home.x) && (wata4.wolf4.y === home.Rabbit_home.y)){
          wata4.wolf4.xwolf4 -= 75;
          wata4.wolf4.ywolf4 -= 0;
      }
    }
    else if( evt.code === "ArrowDown" ){

         if ((wata4.wolf4.x === home.Rabbit_home.x) && (wata4.wolf4.y === home.Rabbit_home.y)){
          wata4.wolf4.xwolf4 += 0;
          wata4.wolf4.ywolf4 += 75;
      }
    }
else if( evt.code === "ArrowUp" ){

         if ((wata4.wolf4.x === home.Rabbit_home.x) && (wata4.wolf4.y === home.Rabbit_home.y)){
          wata4.wolf4.xwolf4 -= 0;
          wata4.wolf4.ywolf4 -= 75;
      }
    }




        for(var i = 10; i < 540; i+=75){
           for( var j = 10; j < 540; j+=75){

               if(data.Rabbit.x === i && wata.wolf.x === i && data.Rabbit.y === j && wata.wolf.y === j){
        alert( " you lose " );

        setTimeout(function(loop){
            alert( " try again " );
            window.location.reload();
           }, 1000);
    }
    else if (data.Rabbit.x === i && wata1.wolf1.x === i && data.Rabbit.y === j && wata1.wolf1.y === j){
        alert(" you lose ");

        setTimeout(function(loop){
            alert( " try again " );
            window.location.reload();
           }, 1000);
    }
    else if (data.Rabbit.x === i && wata2.wolf2.x === i && data.Rabbit.y === j && wata2.wolf2.y === j){
        alert( " you lose" );

        setTimeout(function(loop){
            alert( " try again " );
            window.location.reload();
           }, 1000);
    }
    else if (data.Rabbit.x === i && wata3.wolf3.x === i && data.Rabbit.y === j && wata3.wolf3.y === j){
        alert( " you lose " );

        setTimeout(function(loop){
            alert( " try again " );
            window.location.reload();
           }, 1000);
    }
    else if (data.Rabbit.x === i && wata4.wolf4.x === i && data.Rabbit.y === j && wata4.wolf4.y === j){
        alert( " you lose " );

        setTimeout(function(loop){
            alert( " try again " );
            window.location.reload();
            }, 1000);

    }
           }

        }

if((data.Rabbit.x === home.Rabbit_home.x) && (data.Rabbit.y===home.Rabbit_home.y)){
    alert("YOU WIN");
}
})
