import $ from 'jquery'

function getTopword() {
fetch(`https://wordwatch-api.herokuapp.com/api/v1/top_word`)
  .then(response => response.json())
  .then(word => appendTopword(word))
  .catch(error => console.error({ error }));
}

function appendTopword (word) {
  let theWord = Object.keys(word.word)[0];
  let theCount = Object.values(word.word)[0];
  $('#topword').append(`
      Top Word: "<span class="name">${theWord}"</span></br>
      Count: <span class="name">${theCount}</span>
  `);
};

function breakDown() {
  var allText = document.getElementById("tx").value;
  var splitText = allText.split(" ");
  console.log(splitText);
  splitText.forEach(function(splitWord) {
    postThis(splitWord);
  });
  alert(`Posted ${splitText.length}`)
}

function postThis(word_in){
  var requestUrl = `https://wordwatch-api.herokuapp.com/api/v1/words`;
  var hash_in = { "word": { "value": word_in } }
  var json = JSON.stringify(hash_in);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", requestUrl, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
     if (xhr.readyState == 4 && xhr.status == "201") {
       console.log("Post worked!")
     } else {
       console.log(`Add failed`);
     }
  }
  xhr.send(json);
}



$(document).ready(() => {
  getTopword();

  $( "#bk" ).click(function() {
  breakDown();
  });

})
