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

$(document).ready(() => {
  // have fun!
  getTopword();

})
