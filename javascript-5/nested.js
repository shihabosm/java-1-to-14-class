const collage={
name:'vnc',
class:['11','12'],
event:['science fair','bijoy dibos','21 feb'],
unique:{
color:'blue',
result:{
    gpa:5,
    merit:'top',
}

}
}

collage.unique.result.merit="top top most"
console.log(collage.unique.result.merit)
collage.event[1]='1 dec'
console.log(collage.event[1])
delete collage.class
console .log(collage)