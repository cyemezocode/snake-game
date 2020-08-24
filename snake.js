function Snake(){
    this.y = 0;
    this.x = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    let dir= 'Right';
    this.draw = function(){
        ctx.fillStyle = "#FFFFFF";

        for(let i=0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);

        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }
    this.update = function(){

        for(let i=0; i<this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total - 1] = {x: this.x, y:this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x>canvas.width){
            this.x=0;
        }
        if(this.x<0){
            this.x=canvas.width;
        }
        if(this.y>canvas.height){
            this.y=0;
        }
        if(this.y<0){
            this.y=canvas.height;
        }
    }

    this.eat = function(fruit){
        if(this.x === fruit.x && this.y === fruit.y){
            this.total++;
            score.innerText = this.total;
            let s = this.total * 5;
            if(s % 5 == 0){
                speed=s;
            }
            return  true;
        }else{
            return false;
        }
    }
    this.collision = function(){
        for(let i=0; i<this.tail.length - 1; i++){
            if(this.x == this.tail[i].x && this.y == this.tail[i].y){
                return  true;
            }
            else{
                return false;
            console.log(this.tail[i]);
        }
        }
    }
    this.changeDirection = function(direction){
        if(direction=='Up' && dir!='Down'){
            this.xSpeed=0;
            this.ySpeed = -scale*1;
            dir = direction;
        }else if(direction=='Down' && dir!='Up'){        
            this.xSpeed=0;
            this.ySpeed = scale*1;
            dir = direction;

        }else if(direction=='Left' && dir!='Right'){        
            this.xSpeed=-scale*1;
            this.ySpeed = 0;
            dir = direction;

        }else if(direction=='Right' && dir!='Left'){        
            
            this.xSpeed=scale*1;
            this.ySpeed = 0;
            dir = direction;

        }
       
                
    }
}