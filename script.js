const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const colums = canvas.width / scale;
const score = document.querySelector('b');
let speed = 100;

var snake;

(function setup(){
    snake = new Snake();
    fruit = new Fruit()

    fruit.pickLocation();

    let move = window.setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        snake.draw();
        fruit.draw();

        if(snake.eat(fruit)){
            fruit.pickLocation();
        }
        if(snake.collision()){
            alert('You fail!\nYour score is:'+this.total+'\n'+'Replay?');
            location.reload();
        }
    },speed);
}());

window.addEventListener('keydown',((event) =>{
    const direction = event.key.replace('Arrow','');
    snake.changeDirection(direction);
}))

$('#up').click(function(e){
    dir = 'Up';
    snake.changeDirection(dir);
}) 
$('#down').click(function(e){
    dir = 'Down';
    snake.changeDirection(dir);
}) 
$('#left').click(function(e){
    dir = 'Left';
    snake.changeDirection(dir);
}) 
$('#right').click(function(e){
    dir = 'Right';
    snake.changeDirection(dir);
}) 
