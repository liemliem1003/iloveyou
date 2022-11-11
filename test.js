function createParticle(no,number,leftforone){
	
	var marginLeft = 320;
	var fireworks = document.getElementById("fireworks");
	var particle = document.getElementById("particle");
	var animation =[]
	var timing = []
	const size = Math.floor(Math.random() * 20 + 5);
	var child = particle.cloneNode(true)
	child.lastChild.style.fill = Bg();
	child.style.display = "block";
	child.style.opacity = 0;
	fireworks.appendChild(child);
	duration = 0;
	if(no==1){
		console.log(leftforone);
		duration = 3000 + Math.random() * 1000 
		child.style.width = 20 + Math.random() * 50
		leftforone > 0 ? child.style.left = leftforone+"%" : true
		child.style.transform = `rotate(${40 + Math.random()*50}deg)`
		var destination = {
			x: Math.floor((Math.random() * 2 - 1) * 150),
			y: Math.floor((Math.random() * 2 - 1) * 150),
		}
		animation =[
			{
				transform: `translate(${0}px,${0}px)`,
				opacity: 1
			},
			{
				transform: `translate(${destination.x}px, ${destination.y}px)`,
				opacity: 1,
				offset:0.5
			},
			{
				transform: `translate(${destination.x > 0 ? destination.x + 30: destination.x -30}px, ${destination.y+40}px)`,
				opacity: 0
			}
		]
		timing = {
			duration: duration,
			iterations: 1
		}
	}
	else if(no==2){
		duration = 4000 + Math.random() * 1000;
		child.style.top = Math.random()*100
		child.style.left = marginLeft;
		child.style.transform = `rotate(${40 + Math.random()*50}deg)`
		timing = {
			duration: duration,
			iterations: 1
		}
		animation =[
			{
				opacity:1
			},
			{
				opacity:0,
				transform: `translate(${0}px, ${150}px)`
			}
		]
	}
	else if(no==3){
		duration = 4000 + Math.random() * 1000;
		var top = Math.random()*100;
		child.style.top = top;
		child.style.left = marginLeft - 50;
		maxTop > top ? true : maxTop = top;
		child.style.transform = `rotate(${40 + Math.random()*50}deg)`
		if(currenNo >= number * 0.7){
			child.style.top = maxTop;
			child.style.left = marginLeft + Math.random()*80
		}
		timing = {
			duration: duration,
			iterations: 1
		}
		animation =[
			{
				opacity:1
			},
			{
				opacity:0,
				transform: `translate(${0}px, ${150}px)`
			}
		]
	}
	else if(no==4){
		duration = 4000 + Math.random() * 1000;
		var top = Math.random()*100;
		var left = Math.random()*80;
		child.style.top = top;
		child.style.left = marginLeft + 120;
		maxTop > top ? true : maxTop = top;
		maxLeft > left ? true : maxLeft = left;
		child.style.transform = `rotate(${40 + Math.random()*50}deg)`
		if(currenNo >= number * 0.25 && currenNo < number * 0.5){
			child.style.top = maxTop;
			child.style.left = marginLeft + 120 + left
		}
		else if(currenNo >= number * 0.5 && currenNo < number * 0.75){
			child.style.top = top;
			child.style.left = marginLeft + 120 + maxLeft;
		}
		else if(currenNo >= number * 0.75 && currenNo < number){
			child.style.left = marginLeft + 120 + left;
			child.style.top = 0;
		}
		timing = {
			duration: duration,
			iterations: 1
		}
		animation =[
			{
				opacity:1
			},
			{
				opacity:0,
				transform: `translate(${0}px, ${150}px)`
			}
		]
	}else if(no==5){
		duration = 4000 + Math.random() * 1000;
		var top = Math.random()*35 + 2.5*currenNo;
		child.style.top = top;
		child.style.left = marginLeft + 230 + 1.5*currenNo;
		child.style.transform = `rotate(${40 + Math.random()*50}deg)`
		if(currenNo >= number * 0.5){
			child.style.top = Math.random()*40 + 2.5*(number - currenNo);
			currenNo == 119? child.style.display = "none" : true

		}
		timing = {
			duration: duration,
			iterations: 1
		}
		animation =[
			{
				opacity:1
			},
			{
				opacity:0,
				transform: `translate(${0}px, ${150}px)`
			}
		]
	}
	else if(no==6){
		duration = 4000 + Math.random() * 1000;
		var top = Math.random()*100;
		var left = Math.random()*80;
		child.style.top = top;
		child.style.left = marginLeft + 350;
		maxTop > top ? true : maxTop = top;
		maxLeft > left ? true : maxLeft = left;
		child.style.transform = `rotate(${40 + Math.random()*50}deg)`

		if(currenNo >=number*0.25 && currenNo < number*0.5){
			child.style.top = 0;
			child.style.left = marginLeft + 350 + left
		}else if(currenNo >=number*0.5 && currenNo < number*0.75){
			child.style.top = maxTop/2;
			child.style.left = marginLeft + 350 + Math.random()*60
		}else if(currenNo >=number*0.75 && currenNo < number){
			child.style.top = maxTop;
			child.style.left = marginLeft + 350 + left
		}

		animation =[
			{
				opacity:1
			},
			{
				opacity:0,
				transform: `translate(${0}px, ${150}px)`
			}
		]
	}else if(no==7){
		duration = 4000 + Math.random() * 1000;
		var top = Math.random()*40 + 2.5*(currenNo);
		child.style.top = top;
		child.style.left = marginLeft + 470 + 2.5*currenNo;
		child.style.transform = `rotate(${40 + Math.random()*50}deg)`
		if(currenNo >= number * 0.3){
			child.style.top = Math.random()*40 + 2.5*(number- currenNo);
			currenNo == 119? child.style.display = "none" : true

		}
		timing = {
			duration: duration,
			iterations: 1
		}
		animation =[
			{
				opacity:1
			},
			{
				opacity:0,
				transform: `translate(${0}px, ${150}px)`
			}
		]
	}else if(no==8){
		duration = 4000 + Math.random() * 1000;
		var top = Math.random()*100;
		var left = Math.random()*80;
		child.style.top = top;
		child.style.left = marginLeft + 650;
		maxTop > top ? true : maxTop = top;
		maxLeft > left ? true : maxLeft = left;
		child.style.transform = `rotate(${40 + Math.random()*50}deg)`
		if(currenNo >= number * 0.25 && currenNo < number * 0.5){
			child.style.top = maxTop;
			child.style.left = marginLeft + 650 + left
		}
		else if(currenNo >= number * 0.5 && currenNo < number * 0.75){
			child.style.top = top;
			child.style.left = marginLeft + 650 + maxLeft;
		}
		else if(currenNo >= number * 0.75 && currenNo < number){
			child.style.left = marginLeft + 650 + left;
			child.style.top = 0;
		}
		timing = {
			duration: duration,
			iterations: 1
		}
		animation =[
			{
				opacity:1
			},
			{
				opacity:0,
				transform: `translate(${0}px, ${150}px)`
			}
		]
	}else if(no==9){
		duration = 4000 + Math.random() * 1000;
		var top = Math.random()*100;
		var left = Math.random()*80;
		child.style.top = top;
		child.style.left = marginLeft + 760;
		maxTop > top ? true : maxTop = top;
		maxLeft > left ? true : maxLeft = left;
		child.style.transform = `rotate(${40 + Math.random()*50}deg)`
		if(currenNo >= number * 0.25 && currenNo < number * 0.5){
			child.style.top = maxTop;
			child.style.left = marginLeft + 760 + left
		}
		else if(currenNo >= number * 0.5 && currenNo < number * 0.75){
			child.style.top = top;
			child.style.left = marginLeft + 760 + maxLeft;
		}
		timing = {
			duration: duration,
			iterations: 1
		}
		animation =[
			{
				opacity:1
			},
			{
				opacity:0,
				transform: `translate(${0}px, ${150}px)`
			}
		]
	}
	setTimeout(function(){
		child.remove()
	},duration)
	child.animate(animation,duration)
}

function firstExploding(no,number,leftforone){
	for (let i = 0; i < number; i++) {
		createParticle(no,number,leftforone);
		currenNo = i
	}
	currenNo,maxTop,maxBottom,maxLeft = 0
}

var currenNo = 0
var maxTop,maxBottom,maxLeft = 0
// firstExploding(2,30)
// firstExploding(3,60)
// firstExploding(4,120)
// firstExploding(5,60)
// firstExploding(6,120)
// firstExploding(7,60)
// firstExploding(8,120)
// firstExploding(9,90)
function fire(x,y){
	var bullet = document.getElementById("bullet");
	var container = document.getElementById("bulletContainer");
	var child = bullet.cloneNode(true)
	child.style.left = x > 0 ? x +'%' : true

	child.style.display = "block"
	container.appendChild(child);

	var animation =[
		{
			bottom:`-10px`,
			opacity: 1
		},
		{
			height:`60px`,
			offset:0.3
		},
		{
			opacity: 1,
			offset: 0.7
		},{
			bottom: y > 0 ? `${y}%`:true,
			height:`6px`,
			offset: 1
		}
	]

	child.animate(animation,3000)
	console.log(child);
	setTimeout(function(){
		child.remove()
	},3000)
}

// setTimeout(function(){
// 	fire(0,80)
// },3000)
// setTimeout(function(){
// 	firstExploding(1,80)
// },6500)
// setTimeout(function(){
// 	fire(16,80)
// },9000)
// setTimeout(function(){
// 	fire(32,70)
// },10000)
// setTimeout(function(){
// 	fire(48,75)
// },10500)
// setTimeout(function(){
// 	fire(60,80)
// },11000)
// setTimeout(function(){
// 	fire(72,75)
// },11500)
// setTimeout(function(){
// 	fire(84,70);
// 	firstExploding(1,20,16)
// },12000)
// setTimeout(function(){
// 	firstExploding(1,20,32)
// 	firstExploding(2,30)
// },13000)
// setTimeout(function(){
// 	firstExploding(3,60)
// 	firstExploding(1,20,48)
// },13500)
// setTimeout(function(){
// 	firstExploding(4,120)
// 	firstExploding(1,20,60)
// },14000)
// setTimeout(function(){
// 	firstExploding(5,60)
// 	firstExploding(1,20,72)
// },14500)
// setTimeout(function(){
// 	firstExploding(6,120)
// 	firstExploding(1,20,84)
// },15000)
// setTimeout(function(){
// 	firstExploding(7,60)
// },15000)
// setTimeout(function(){
// 	firstExploding(8,120)
// },15500)
// setTimeout(function(){
// 	firstExploding(9,90)
// },16000)
// setTimeout(function(){
// },1000)






function Bg(){
	var x = Math.floor(44);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(220);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
	return bgColor
}