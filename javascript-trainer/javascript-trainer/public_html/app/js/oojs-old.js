/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var input = document.querySelector('input');
var btn = document.querySelector('button');
var para = document.querySelector('p');
var person = {
    name: {
        first: 'Bob',
        last: 'Smith'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function () {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function () {
        alert('Hi! I\'m ' + this.name.first + '.');
    }
};
btn.onclick = function () {
    var code = input.value;
    para.textContent = eval(code);
};


