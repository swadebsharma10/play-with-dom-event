const tagList = document.getElementsByTagName('h2');
for(const h2 of tagList){
    // console.log(h2.innerText);

}

const classList = document.getElementsByClassName('test');
for(const classTag of classList){
    // console.log(classTag.innerText);
}

const title = document.getElementById('title');
// title.innerText = 'Playing With Dom';
// title.style.color ='red';
// title.style.textAlign ='center';

// title.classList.add('third');
// title.classList.remove('third');
// console.log(title);

/*QuerySelector*/ 
const element = document.querySelectorAll('.test');
// console.log(element);



/*Create and appendChild*/ 
const div = document.getElementById('container');
const h3 = document.createElement('h3');
h3.innerText =' I am Js Files';
div.appendChild(h3);
console.log(div.innerText)
console.log(div.innerHTML)




