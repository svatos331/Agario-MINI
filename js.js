var player = document.getElementsByClassName("player")[0]
var map = document.getElementsByClassName("map")[0]
var bot;
var dumpBotItem;
var SpeedDumpBot = 222
var boolBox = true
createBot_1()
dampBot()


player.setAttribute('data-eposiftion-x', 0)
player.setAttribute('data-eposiftion-y', 0)

var stepEat = 4


document.addEventListener('keydown', function (event) {
    //вверх 
    if (event.code == 'KeyW') {
    if (player.getAttribute('data-eposiftion-y') > 0){
        var y = player.getAttribute('data-eposiftion-y')
        var step = y - 50
        player.setAttribute('style', 'transform: translate('+ player.getAttribute('data-eposiftion-x') +'px,'+ step + 'px);')
        player.setAttribute('data-eposiftion-y', step)
    }
    }
    //влево
    if (event.code == 'KeyA') {
    if (player.getAttribute('data-eposiftion-x') > 0){
        var x = player.getAttribute('data-eposiftion-x')
        var step = parseInt(x) - 50
        player.setAttribute('style', 'transform: translate('+ step +'px, '+ player.getAttribute('data-eposiftion-y') + 'px);')
        player.setAttribute('data-eposiftion-x', step)
        }
    }
    //вправо
    if (event.code == 'KeyD') {
    if (player.getAttribute('data-eposiftion-x') < 450){
        var x = player.getAttribute('data-eposiftion-x')
        var step = parseInt(x) + 50
        player.setAttribute('style', 'transform: translate('+ step +'px, '+ player.getAttribute('data-eposiftion-y') + 'px);')
        player.setAttribute('data-eposiftion-x', step)
        }
    }
    //вниз
    if (event.code == 'KeyS') {
    if (player.getAttribute('data-eposiftion-y') < 450) {
    var y = player.getAttribute('data-eposiftion-y')
    var step = parseInt(y) + 50
    player.setAttribute('style', 'transform: translate('+ player.getAttribute('data-eposiftion-x') +'px, '+ step + 'px);')
    player.setAttribute('data-eposiftion-y', step)}
    }


    corection();

  });
    

  function createBot_1(){
    var botdiv = document.createElement('div')
    botdiv.classList.add('bot1')
    var y = (Math.random() * (9 - 0) + 0).toFixed(0)
    var x = (Math.random() * (9 - 0) + 0).toFixed(0)

    var red = (Math.random() * (255 - 0) + 0).toFixed(0)
    var green = (Math.random() * (255 - 0) + 0).toFixed(0)
    var blue = (Math.random() * (255 - 0) + 0).toFixed(0)
    
    botdiv.setAttribute('style', 'transform: translate('+ x * 50 +'px, '+ y * 50 + 'px); background: rgb('+red+' '+green+' '+blue+');')
    botdiv.setAttribute('data-eposiftion-y', y * 50)
    botdiv.setAttribute('data-eposiftion-x', x * 50)
    map.append(botdiv)
    bot = document.getElementsByClassName('bot1')[0]

    // увуеличение скорпости
    if(parseInt(document.getElementById('scoreValue').innerText) == stepEat){
        SpeedDumpBot = SpeedDumpBot - parseInt(10)
        stepEat = stepEat + parseInt(2)
        console.log(SpeedDumpBot)
        boolBox = false;
        clearInterval(intervalData);
        
        var intervalData = setInterval(funcStepBot,SpeedDumpBot);
    }
  }

  function dampBot(){

    var dampBotdiv = document.createElement('div')
    dampBotdiv.classList.add('bot2')
    var y = (Math.random() * (9 - 0) + 0).toFixed(0)
    var x = (Math.random() * (9 - 0) + 0).toFixed(0)

    dampBotdiv.setAttribute('style', 'transform: translate('+ x * 50 +'px, '+ y * 50 + 'px);')
    dampBotdiv.setAttribute('data-eposiftion-y', y * 50)
    dampBotdiv.setAttribute('data-eposiftion-x', x * 50)
    map.append(dampBotdiv)

    dumpBotItem = document.getElementsByClassName('bot2')[0]
    }
    // запуск бота
     var intervalData = setInterval(funcStepBot,SpeedDumpBot);


                function funcStepBot(){
                    var dumpBotItemX = parseInt(dumpBotItem.getAttribute('data-eposiftion-x'))
                    var dumpBotItemY = parseInt(dumpBotItem.getAttribute('data-eposiftion-y'))
                
                    var posItemEatX = parseInt(document.getElementsByClassName('bot1')[0].getAttribute("data-eposiftion-x"))
                    var posItemEatY = parseInt(document.getElementsByClassName('bot1')[0].getAttribute("data-eposiftion-y"))
            
                
                    // Умный ботa
                        if (dumpBotItemX < posItemEatX) {
                            dumpBotItem.setAttribute('data-eposiftion-x', parseInt(dumpBotItem.getAttribute('data-eposiftion-x')) + 1)
                        }
                        if (dumpBotItemX > posItemEatX) {
                            dumpBotItem.setAttribute('data-eposiftion-x', parseInt(dumpBotItem.getAttribute('data-eposiftion-x')) - 1)
                        }
                        if (dumpBotItemY < posItemEatY) {
                            dumpBotItem.setAttribute('data-eposiftion-y', parseInt(dumpBotItem.getAttribute('data-eposiftion-y')) + 1)
                        }
                        if (dumpBotItemY > posItemEatY) {
                            dumpBotItem.setAttribute('data-eposiftion-y', parseInt(dumpBotItem.getAttribute('data-eposiftion-y')) - 1)
                        }
                        
                
                
                    dumpBotItem.setAttribute('style', 'transform: translate('+ dumpBotItem.getAttribute('data-eposiftion-x') +'px, '+dumpBotItem.getAttribute('data-eposiftion-y') + 'px);')
                
                
                    corection();
                }
      
    
    
    
    


    

function corection(){
 if ((player.getAttribute('data-eposiftion-y') == bot.getAttribute('data-eposiftion-y')) 
 && (player.getAttribute('data-eposiftion-x') == bot.getAttribute('data-eposiftion-x'))) 
{
    document.getElementsByClassName('bot1')[0].remove()
    createBot_1()
if (document.getElementById('scoreValue') != undefined) {
    document.getElementById('scoreValue').innerText = parseInt(document.getElementById('scoreValue').innerText) + parseInt(1)
}
}


var dumpBotItemX = parseInt(dumpBotItem.getAttribute('data-eposiftion-x'))
var dumpBotItemY = parseInt(dumpBotItem.getAttribute('data-eposiftion-y'))




if ((dumpBotItemY == bot.getAttribute('data-eposiftion-y')) 
&& (dumpBotItemX == bot.getAttribute('data-eposiftion-x'))) 
{
   document.getElementsByClassName('bot1')[0].remove()
   createBot_1()
if (document.getElementById('scoreValue') != undefined) {

    if(parseInt(document.getElementById('scoreValue').innerText) == 0){
        alert('Game OVER')
        // window.location = 'file:///C:/Users/User/Desktop/Portfolio/Агарио%20на%20минр/html.html'
    }


   document.getElementById('scoreValue').innerText = parseInt(document.getElementById('scoreValue').innerText) - parseInt(1)
}
}


}
