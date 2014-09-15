
Titanium.UI.setBackgroundColor('#d4d4d4');

// Array information

var comMovies = [{title: "Raising Arizona", description: "Raising Arizona is my favorite Cohen Brothers movie. They have many great comedies but this is the best. It follows the life of a hilariously tragic couple and their quest to kidnap a baby. It is a heartwarming story as well as a comic tale because the characters are so well written and acted."}, {title: "Dirty Rotten Scoundrels", description: "This gem is directed by Frank Oz - A truly hilarious comedy about two con men fighting each other for the heart and fortune of a young American tourist. Michael Caine and Steve Martin play excellent off of each other and the adventure is a blast to behold."}, {title: "Groundhog Day", description: "This is one of the best Bill Murray comedies. It is a comedic adventure centered around his character and the different ways he changes and confronts a supernatural change of events."}];


var DramaMovies = [{title: "Rocky Balboa", description: "This Rocky movie has the most heart and soul of them all. It is the last one (perhaps?) and is the story of Rocky fighting when he is truly past his prime. What does it take for a man to give it all he has and still inspire those who don't believe he can do it?"}, {title: "Fight Club", description: "Fight Club is hard to classify, but as a drama, it is the story of a man taking on the system. It is part deconstructionist, antisocial and anarchist but there is real heart in this film that seeks to give voice to the cube-raised conformist in society, and how to find balance."}, {title: "Eternal Sunshine of the Spotless Mind", description: "This is nearly a love story, but it is about the kind of relationships that come and go and are hard to let go of. The amazing direction and special effects capture so beautifully how dreams form and effortlessly make sense and no sense at the same time."}];


var RomMovies = [{title: "Moulin Rouge", description: "An amazing original musical with great visuals and vocals. A heartwrenching love story that will bring tears to your eyes."}, {title: "Enchanted", description: "Enchanted is an amazing spin on the traditional Disney fairy tale run amok within it's own constructs. Can love really form when everything goes against plan? "}, {title: "Romeo and Juliet", description: "The 1996 version. This retelling of the Shakespeare classic is set in a modern alternate universe. Great fun for people who can understand the language. The beautiful visuals are enough for those who can't."}];


var SciFiMovies = [{title: "Serenity", description: "Serenity is based on the short lived series 'Firefly'. However this film is much better than the series was. Great story telling and character development. An exciting ride from start to finish."}, {title: "Terminator 2", description: "This movie was way ahead of it's time. Literally. A great franchise full of excitement and action. Humans versus computers--It doesn't get better than that."}, {title: "12 Monkeys", description: "An epic Terry Gilliam movie about an apocalyptic future that fatefully captures a man's journey to save the world. He tragically falls in love along the way yet he has to choose to be the unwilling hero or lose everything."}];


//
// create base UI tab and root window
//

var window1 = Ti.UI.createWindow({  
	backgroundImage: "BGImage2.png",
	title: 'Movies Window 1',
});


var mainView = Ti.UI.createView({
	height: 65,
	//backgroundImage: "BGImage2.png", //green,
	top: 6
	
});

var border1 = Ti.UI.createView({
	backgroundColor: "#d4d4d4",
	height: 1,
	top: mainView.height + mainView.top
	
});

var label1 = Ti.UI.createLabel({
	color: '#d4d4d4',
	text: 'My Top 3 Movies by Genre',
	font: {fontSize:20,fontFamily:'Helvetica Neue'},
	top: 30,
	textAlign: 'center',
	width: "100%",
	//zIndex: 6
});


var movies = Ti.UI.createTableView({
	top: border1.top + border1.height
	
});


if(Ti.Platform.name === "iPhone OS"){
	movies.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	
};




var comedySection = Ti.UI.createTableViewSection({
	headerTitle: "Favorite Comedy Movies",
	//footerTitle: "Best Comedies"
});

var dramaSection = Ti.UI.createTableViewSection({
	headerTitle: "Favorite Drama Movies",
	//footerTitle: "Best Dramas"
	
});

var romanceSection = Ti.UI.createTableViewSection({
	headerTitle: "Favorite Romance Movies",
	//footerTitle: "Best Romances"
});

var scifiSection = Ti.UI.createTableViewSection({
	headerTitle: "Favorite Sci-Fi Movies",
	//footerTitle: "Best Sci-Fi"
	
});




var getDetails = function(){
	var detailsWindow = Ti.UI.createWindow({
		backgroundImage: "BGImage2.png"
	});
		var DeetMainView = Ti.UI.createView({
			height: 65,
			//backgroundColor: "#d4d4d4",
			top: 6
			
		});

		var DeetBorder1 = Ti.UI.createView({
			//backgroundColor: "#d4d4d4",
			height: 1,
			top: DeetMainView.height + DeetMainView.top
			
		});

		var DeetLabel1 = Ti.UI.createLabel({
			color:'#d4d4d4',
			text: this.title,
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			top: 20,
			textAlign: 'center',
			width: "100%",
			//zIndex: 6
		});

			var detailText = Ti.UI.createLabel({
				text: this.desc,
				font: {fontSize:20,fontFamily:'Helvetica Neue'},
				top: DeetBorder1.height + DeetBorder1.top + 45,

			});


			var closebutton = Ti.UI.createLabel({
			backgroundColor: "#d4d4d4",
			color: "#333",
			text: "Back",
			height: 55,
			left: 10,
			right: 10,
			font:{fontSize: 18, fontFamily:'Helvetica Neue'},
			width: "100%",
			bottom: 0,
			textAlign: "center"

			});

			var closeWindow = function(){
				detailsWindow.close();


			};

			closebutton.addEventListener("click", closeWindow);

			DeetMainView.add(DeetLabel1);
			detailsWindow.add(DeetMainView, DeetBorder1, detailText, closebutton);

			detailsWindow.open();

	};



for(var i=0, j=comMovies.length; i<j; i++){
		var aRow = Ti.UI.createTableViewRow({
		title: comMovies[i].title,
		desc: comMovies[i].description,
		hasChild: true
		});
		comedySection.add(aRow);
		aRow.addEventListener("click", getDetails);
}

for(var i=0, j=DramaMovies.length; i<j; i++){
		var aRow = Ti.UI.createTableViewRow({
		title: DramaMovies[i].title,
		desc: DramaMovies[i].description,
		hasChild: true
		});
		dramaSection.add(aRow);
		aRow.addEventListener("click", getDetails);
}

for(var i=0, j=SciFiMovies.length; i<j; i++){
		var aRow = Ti.UI.createTableViewRow({
		title: SciFiMovies[i].title,
		desc: SciFiMovies[i].description,
		hasChild: true
		});
		scifiSection.add(aRow);
		aRow.addEventListener("click", getDetails);
}

for(var i=0, j=RomMovies.length; i<j; i++){
		var aRow = Ti.UI.createTableViewRow({
		title: RomMovies[i].title,
		desc: RomMovies[i].description,
		hasChild: true
		});
		romanceSection.add(aRow);
		aRow.addEventListener("click", getDetails);
};

var movieSections = [comedySection, dramaSection, romanceSection, scifiSection];

movies.setData(movieSections);

window1.add(movies);
mainView.add(label1);
window1.add(mainView, border1, label1, movies);
window1.open();



//
// create controls tab and root window
//

var window2 = Ti.UI.createWindow({  
    title:'Movies Window 2',
    backgroundColor:'#d4d4d4'
});




var label2 = Titanium.UI.createLabel({
	color:'#dbdbdb',
	text:'favorite movies 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign: 'center',
	width: 'auto'
});




//
//  add tabs
//
//tabGroup.addTab(tab1);  
//tabGroup.addTab(tab2);  


// open tab group
//tabGroup.open();
