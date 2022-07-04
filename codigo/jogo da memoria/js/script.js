(function(){
	
	var images = [];
	var matchSign = document.querySelector("#match");
	var modal = document.querySelector("#gameOver");
	var flippedCards = [];
	var matches = 0;

	for(var i = 0; i < 16; i++){
		var img = {
			src: "img/" + i + ".jpg",
			id: i%8
		};
		images.push(img);
	}

	startGame();
	function startGame(){
		flippedCards = [];
		matches = 0;
		images = randomSort(images);
		var backFaces = document.getElementsByClassName("back");
		var frontFaces = document.getElementsByClassName("front");
		for(var i = 0; i < 16; i++){
			backFaces[i].classList.remove("match","flipped");
			frontFaces[i].classList.remove("match","flipped");
			
			var card = document.querySelector("#card" + i);
			card.style.left = (i % 8) === 0 ? 5 + "px" : 5 + ((i % 8) * 165) + "px";
			card.style.top = i/8 >= 1 ? 250 + "px" : 5 + "px";
		
			card.addEventListener("click",flipCard,false);
		
			frontFaces[i].style.background = "url('" + images[i].src + "')";
			frontFaces[i].setAttribute("id",images[i].id);
		}
		
		modal.style.zIndex = "-2";
		
		modal.removeEventListener('click',function(){
			startGame();
		},false);
	}
	
	function flipCard(){
		if(flippedCards.length < 2){
			var faces = this.getElementsByClassName("face");
			
			if(faces[0].classList[2]){
				return;
			}
			
			faces[0].classList.toggle("flipped");
			faces[1].classList.toggle("flipped");
			
			flippedCards.push(this);
			
			if(flippedCards.length === 2){
				if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){
					flippedCards[0].childNodes[1].classList.toggle("match");
					flippedCards[0].childNodes[3].classList.toggle("match");
					flippedCards[1].childNodes[1].classList.toggle("match");
					flippedCards[1].childNodes[3].classList.toggle("match");
					
					matchCardsSign();
					
					flippedCards = [];
					
					matches++;
					
					if(matches >= 8){
						gameOver();
					}
				} 
			} 
		} else {
			
			flippedCards[0].childNodes[1].classList.toggle("flipped");
			flippedCards[0].childNodes[3].classList.toggle("flipped");
			flippedCards[1].childNodes[1].classList.toggle("flipped");
			flippedCards[1].childNodes[3].classList.toggle("flipped");
			
			flippedCards = [];
		}
	}
	
	
	function randomSort(array){
		var newArray = [];
		
		while(newArray.length !== array.length){
			var i = Math.floor(Math.random()*array.length);
			
			if(newArray.indexOf(array[i]) < 0){
				//caso não exista é inserido
				newArray.push(array[i]);
			}
		}
		
		return newArray;
	}
	
	function matchCardsSign(){
		matchSign.style.zIndex = "1";
		
		matchSign.style.opacity = "0";
		
		matchSign.style.top = "150px";
		
		setTimeout(function(){
			matchSign.style.zIndex = "-1";
			
			matchSign.style.opacity = "1";
			
			matchSign.style.top = "250px";
		},1500);
	}
	
	function gameOver(){
		modal.style.zIndex = "99";
		
		modal.addEventListener('click',function(){
			startGame();
		},false);
	}
}());
