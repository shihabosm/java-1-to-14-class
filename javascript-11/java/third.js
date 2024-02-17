const  main=document.getElementById('main-container');
const section=document.createElement('section')
section.innerHTML=`
<h1>my dynmic section </h1>
<p>Extra text added inside paragraph</p>
<ul>
<li>first items</li>
<li>second items</li>
<li>third items</li>


</ul>
`

main.appendChild(section)