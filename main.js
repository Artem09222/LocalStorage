let a = prompt('Enter your name:');
let b = prompt('Enter your city:');
let c = Number(prompt('Enter your age:'));
let d = Number(prompt('Enter your mark:'));

let playObj = {
    name: a, 
    city: b, 
    age: c,
    mark: d
}

let object = JSON.stringify(playObj);
localStorage.setItem('play', object);
