// js file is designed ONLY to make pop up modals functional

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// There is endless possibilites we can make UX experience to move up next level. I am limiting here myself with basic example, so that newbee can understand & pickup from this point, who wants to contribute & give back to community to make this application more appealing & very useful to end users.  Thanks -Bal.
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

$(document).ready(function () {
  const title = document.querySelector('#card_title');
  const info = document.querySelector('#card_info');
  const link = 'dbms.html';

  // let newCard = document.querySelector('.new-card');
  let newCard = document.querySelector('.row-card');
  // console.log(newCard)
  // let html = '';
  $('.modal').modal();

  $('#card-modal').on('click', function (e) {
    e.preventDefault();
    // console.log(newCard.length)
    if (title.value && info.value) {
      newCard.innerHTML += `
      <div class="col m4"> 
         <div class="card blue-grey center-align darken-1">
          <div class="card-content white-text">
            <div class="card-image">
              <img src="./css/book.jpg" class="responsive-img">
            </div>
            <h5>${title.value}</h5>          
            ${info.value}
          </div>
          <div class="card-action">
            <a href="${link}">
              <button class="waves-effect waves-light btn">Click Here</button>
            </a>
          </div>
        </div>
      </div>
    </div>
      `
      title.value = '';
      info.value = '';
    }
  })
});

