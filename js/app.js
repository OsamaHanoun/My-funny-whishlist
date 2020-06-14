'use strict';
if(JSON.parse(localStorage.getItem('Wish.all'))){
    renderTablet();
    
}
function Wish(wishTitle, expectedDate) {
    this.wishTitle = wishTitle;
    this.expectedDate = expectedDate;
    this.wishComeTrue;
    this.randomYear(1, 99);
    this.updateLS(this);
}
Wish.prototype.randomYear = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    this.wishComeTrue = randomNum;
};
Wish.prototype.updateLS = function () {

    if (JSON.parse(localStorage.getItem('Wish.all'))) {
        let wishArr = JSON.parse(localStorage.getItem('Wish.all'));
        wishArr.push(this);
        localStorage.setItem('Wish.all', JSON.stringify(wishArr));
    } else {
        let wishArr =[];
        wishArr.push(this);
        localStorage.setItem('Wish.all', JSON.stringify(wishArr));
    }


}
document.getElementById('wishesForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let wishTitle = event.target.wishTitle.value;
    let expectedDate = event.target.expectedDate.value;
    new Wish(wishTitle, expectedDate);
    if(JSON.parse(localStorage.getItem('Wish.all'))){
        renderTablet();
    }
    document.getElementById("wishesForm").reset();
});


function renderTablet() {
    let tableE = document.getElementById('wishesTable');
    let wishArr =JSON.parse(localStorage.getItem('Wish.all'));
    let tdE =document.getElementsByTagName('td');
    console.log(tdE);
    for (let index = 0; index < tdE.length; index++) {
        tdE[index].remove();        
    }
    for (let index = 0; index < wishArr.length; index++) {
        let trE = document.createElement('tr');
        tableE.appendChild(trE);
        trE.class ='r' + index;

        let tdE1 = document.createElement('td');
        trE.appendChild(tdE1);
        tdE1.innerText = wishArr[index].wishTitle;

        let tdE2 = document.createElement('td');
        trE.appendChild(tdE2);
        tdE2.innerText = wishArr[index].expectedDate;

        let tdE3 = document.createElement('td');
        trE.appendChild(tdE3);
        tdE3.innerText = wishArr[index].wishComeTrue;

        let tdE4 = document.createElement('td');
        trE.appendChild(tdE4);
        tdE4.innerText = 'X';
        tdE4.class=('r' + index);
    }
}
