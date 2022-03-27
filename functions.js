function initCanvas(){
	var ctx = document.getElementById("icanvas").getContext("2d");
	var backgrounImage = new Image();
	var miner1 = new Image();
	var stalactites1 = new Image();
	var stalactites2 = new Image();

    backgrounImage.src = "imagenes/cavereal.jpg";
	miner1.src = "imagenes/miner.png";


	stalactites1.src = "imagenes/estalactita1.png";
	stalactites2.src = "imagenes/estalactita2.png";

	var cW = ctx.canvas.width;
	var cH = ctx.canvas.heigth;

    timer = true;

	var stalactites = function(options){
		return{
			id: options.id || "",
			x: options.x || "",
			y: options.y || "",
			w: options.w || "",
			h: options.h || "",
			image: options.image || stalactites1
		}
	}
	var enemies = [
       new stalactites({id: "enemy1", x:(Math.random()* (420+340)-340 ) , y: -70, w: 800, h: 380}),
       ];

	var renderEnemies = function(enemyList){
		for (var i = 0; i < enemyList.length; i++){
			var enemy = enemyList[i];
			ctx.drawImage(enemy.image, enemy.x, enemy.y += 2.5, enemy.w, enemy.h);
            this.destroy(i, 1);
            launcher.detectMiner(enemy);
	  }
    }
    function addEnemies(){
        enemies.push(new stalactites({id: "enemy1", x:(Math.random()* (420+340)-340 ) , y: -70, w: 800, h: 380}),
    )}

    setInterval(()=>{
        if (enemies.length <= 1) {
        addEnemies();
      }},100);
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 2) {
        addEnemies();
      }},100);
},10000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 3) {
        addEnemies();
      }},100);
},15000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 4) {
        addEnemies();
      }},100);
},20000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 5) {
        addEnemies();
      }},100);
},25000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 6) {
        addEnemies();
      }},100);
},35000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 7) {
        addEnemies();
      }},100);
},45000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 8) {
        addEnemies();
      }},100);
},55000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 9) {
        addEnemies();
      }},100);
},60000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 10) {
        addEnemies();
      }},100);
},70000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 11) {
        addEnemies();
      }},100);
},80000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 12) {
        addEnemies();
      }},100);
},85000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 13) {
        addEnemies();
      }},100);
},90000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 14) {
        addEnemies();
      }},100);
},95000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 15) {
        addEnemies();
      }},50);
},100000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 16) {
        addEnemies();
      }},50);
},105000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 17) {
        addEnemies();
      }},50);
},110000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 18) {
        addEnemies();
      }},50);
},115000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 19) {
        addEnemies();
      }},50);
},120000)
    setTimeout(()=>{
    setInterval(()=>{
        if (enemies.length <= 20) {
        addEnemies();
      }},100);
},125000)



        function Launcher(){
    	this.y = 390,
    	this.x = 0,
    	this.w = 0,
    	this.h = 0,
    	this.direction,
    	this.bg = "white";


    	document.addEventListener("keydown", function(e){
    		if (e.keyCode == "65") {
    			if (launcher.x > -375) {
    			moveLefth();
    		}}
    		else if (e.keyCode == "68") {
    			if (launcher.x < 350) {
    			moveRigth();
    		}}
    	})


    	function moveRigth(){
    		launcher.x += 25;
    	}
    	function moveLefth(){
    		launcher.x -= 25;
    	}


    	this.render = function(){
    		ctx.fillStyle = this.bg;
    		ctx.drawImage(backgrounImage, 0, 0);
    		ctx.drawImage(miner1, this.x, this.y, 900, 500);
    	}

        this.detectMiner = function(enemy){
            if ((enemy.y > this.y + 62) && (enemy.x  <= this.x + 80 && enemy.x >= this.x + 43)) {
                clearInterval(animateInterval);
                timer = false;

                setTimeout(()=>{
                  location.href = location.href;
                    },2000)
            }
        }
    }


    this.destroy = function(){
        for (var i = 0; i < enemies.length; i++) {
            var e = enemies[i];
        if (e.y > 540) {
            enemies.splice(i, 1);
        }
      }
    }


    var launcher = new Launcher();
    function animate(){
	  ctx.clearRect(0, 0, cW, cH);
	  launcher.render();
	  renderEnemies(enemies);
    }
    var animateInterval = setInterval(animate, 6);



}


 

var start = document.querySelector(".start");
start.addEventListener("click", function(e){
  window.load(initCanvas());
  });

start.addEventListener("click", function(e){
  document.querySelector(".enter").style.zIndex = "-1";
  start.style.opacity = "0";
})



let timeRef = Date.now();
let accumulated = 0;
let timer = false;


setInterval(() => {
          let times = document.getElementById("time")
          if (timer) {
              accumulated += Date.now() - timeRef
          }
          timeRef = Date.now()
          times.innerHTML = formatMS(accumulated)
      }, 1000 / 60);

      function formatMS(time_ms) {
          let MS = time_ms % 1000
          let St = Math.floor(((time_ms - MS) / 1000))
          let S = St%60
          let M = Math.floor((St / 60) % 60)
          let H = Math.floor((St/60 / 60))
          Number.prototype.ceros = function (n) {
              return (this + "").padStart(n, 0)
          }

          return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2)
              + "." + MS.ceros(3)
      }
