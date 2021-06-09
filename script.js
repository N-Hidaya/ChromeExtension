
(function(){
    //array of colors
    var color = [
      "#d1495b",
      "#edae49",
      "#003d5b", 
      "#00509d", 
      "#3a5a40", 
      "#1f7a8c", 
      "#588157", 
    ];

//randomize function
function randomize(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//loads the external json file
fetch('./data.json')
.then((response) => {
    return response.json();
}).then((data) => {
    //work with JSON data here
    var random = randomize(data);
    //display the elements on the html
    document.getElementById('hangeul').innerHTML = random.hangeul;
    document.getElementById('definition').innerHTML = random.definition;
    document.getElementById('romaja').innerHTML = random.romaja;
}).catch((err) => {
    //do something for an error here
    console.log(err);
    alert("An error has occured");
});
//pick a random background color
window.onload = function() {
    var randomColor = randomize(color);
    document.getElementsByTagName("body")[0].style.background = randomColor;
};

})();