//Script used to take user input and generate list of articles related to the input on a seperate page

articleElements=[0,0,0,0,0,0,0,0,0,0,0,1]; //array used to determine which articles to display

function saveVariable(){ //store value initially to use after loading search page
    var store = document.getElementById("searchBar").value; //get value of input
    localStorage.setItem("searchPassValue", store) //function used to store input
}

function beginSearch(){ //main function that calls other functions
    var searchString = retrieveSearchQuery();
    if (searchString!= ''){
        match(tags,searchString);
    }
    else{
        articleElements=[0,0,0,0,0,0,0,0,0,0,0,1];
    }
    display();
}


function retrieveSearchQuery(){ //retrieve stored value
    var searchString = localStorage.getItem("searchPassValue"); //function that retrieves the value
    return searchString;
}

//variable to hold many key words and phrases to relate articles
tags = [['universe', 'galaxy', 'space', 'galaxies','planets', 'recent events', 'article', 'exoplanet', 'mission', 'lightyears', 'TESS', 'discovering new worlds', 'telescope', 'habitable', 'solar system', 'world' , 'aliens' ,'discovery'],
['universe', 'deep space atomic clock','recent events','space', 'article', 'atomic clock', 'discovery', 'experiment', 'mission' , 'NASA', 'satellite','spacecraft','calculation','orbit','GPS signal'],
['universe', 'first black hole confirmed','galaxy', 'galaxies', 'space','black hole', 'historical progression', 'article', 'gravity', 'solar mass','einstein','theory of relativity','astrophysicists','xrays','constellation','telescope','EHT'],
['universe', 'expanding universe, and the big bang','big bang', 'black hole', 'space','historical progression', 'article','scientists','paradox','astronomers','law of gravity','Isaac Newton','redshifts','Edwin Hubble','galaxy','Heinrich Olbers'],
['universe', 'galaxy', 'space','galaxies','explore','article','milky way','andromeda','stars','spiral','elliptical','irregular','Sagittarius','dark matter','large'],
['universe', 'galaxy','space', 'planets','explore','article','mercury','venus','earth','mars','jupiter','saturn','uranus','neptune','milky way','sun','mass','temperature','distance','moons','atmosphere','orbit','volcanoes','gaseous','rocky','magnetic field','solar system','dust storms','mountains','rings','rotation','axis','ice','diameter','core'],
['universe', 'space','stars','explore','article','plasma','hydrogen','helium','lifespan','telescope','white dwarf','Sirius','nebula','gravity','proto','temperature','gas','sun','dwarf star','core','explosion','supernova'],
['universe', 'asteroids','space','explore','article','dinosaur','rock','metal','orbit','debris','sun','galaxies','belt','galaxy','Ceres','gravity','Mesozoic','environment','explosion','crater','climate','game','diameter'],
['universe','future events','article','scientific theories','planets','astrophysics','quantum','space','physics','atmosphere','mars','rover','lunar eclipse','Antares','constellations','supernova','tides','asteroid','betelgeuse','mount rushmore','gamma radiation','rings','saturn','roation','tidal','acceleration','temperature','andromeda','milky way','milkdromeda'],
['universe','gallery','space','pictures','images','aurora','landscape'],
['help','about us','faq','contact','motivation','feedback','form','questions','concerns','comments']]

function match(x,y){ //takes the tag array and the input value to proceed with checking for matching
    var newSearch = y.split(" "); //split input to check for each word individually to increase results
    for(var i = 0;i<newSearch.length;i++){
        for(var j=0;j<tags.length;j++){
            for(var k=0;k<tags[j].length;k++){
                if((tags[j][k].indexOf(newSearch[i]) > -1 ) || (newSearch[i].indexOf(tags[j][k]) > -1)){ //if input is contained in tag or vice versa, then consider it a match
                    articleElements[j] = 1;
                }
            }
        }
    }
}

function display(){ //deciding which articles to display
    var counter = 0;
    var arraylikeObject = document.getElementsByClassName("singleResults"); //obtain array-like object with all articles
    arraylikeObject[11].style.display = "none"; //set "No results have been found" to none
    for(var i = 0;i<articleElements.length-1;i++){ //loop through array
        if(articleElements[i] == 0){ //0 means no match, 1 means match, so if its 0, then do NOT display
            arraylikeObject[i].style.display = "none";
            counter+=1; 
        }
        if(counter == 11){ //counter used only if all 11 other articles are not displaying
            arraylikeObject[11].style.display = "block"; //display "No Results have been found"
        }
    }
}
