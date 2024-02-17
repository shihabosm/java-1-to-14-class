// 1.where to add  

const placesList=document.getElementById('places-list');
// 2.what to be addede 
const li=document.createElement('li');
li.innerText='pahartoli bon'

// 3.add the child
placesList.appendChild(li);

// 1. where to add 
const mainContainer=document.getElementById('main-conteiner');
// 2. whate to be added 
const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='my food list';
section.appendChild(h1)
mainContainer.appendChild(section)

const ul=document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText='biriyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText='lemon juis';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText='coke';
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerText='borhani';
ul.appendChild(li4);
section.appendChild(ul);

// set innerHtml directly  
const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1>my dress section </h1>
<ul>
<li>T-shart</li>
<li>lungi</li>
<li>sendo genji</li>
</ul>
`
mainContainer.appendChild(sectionDress)