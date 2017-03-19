/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var input = document.querySelector('input');
var btn = document.querySelector('button');
var para = document.querySelector('p');

/*function createNewPerson(name) {
 var obj = {};
 obj.name = name;
 obj.greeting = function() {
 alert('Hi! I\'m ' + this.name + '.');  
 };
 return obj;
 }*/

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.'
                + greetingGender(this.gender) + ' likes ' + loopInterests(this.interests) + '.');
    },
    this.greeting = function () {
        alert('Hi! I\'m ' + this.name.first + '.');
    }
};

Person.prototype.farewell = function () {
     alert(this.name.first + ' has left the building. Bye for now!');
}

function greetingGender(gender) {
    var genderString = '';
    if (gender === 'Male' || gender === 'male'|| gender === 'M'|| gender === 'm') {
        genderString = ' He';
    } else if (gender === 'Female' || gender === 'female' || gender === 'F' || gender === 'f') {
        genderString = ' She';
    } else {
        genderString = ' They';
    }
    return genderString;
}

function loopInterests(interests) {
    var stringInterests = '';
    var interestsAux = '';
    for (i = 0; i < interests.length; i++) {
        interestsAux = interests[i];
        stringInterests += interestsAux;
        if (i < interests.length - 1) {
            stringInterests +=  ' and ';
        }
    }
    return stringInterests;
}

var person1 = new Person('Juan', 'Ballesteros', 38, 'male', ['soccer', 'play guitar', 'movies','gym']);

btn.onclick = function () {
    var code = input.value;
    para.textContent = eval(code);
};


