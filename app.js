'use strict'

angular.module('Euclid',
        ['ui.bootstrap',
        'ngRoute'])
.controller('mainController', function($scope){
    var self = this; // Avoid scope soup

    self.quotients = []; // These are arrays so that we can display the equation step by step
    self.remainders = [];
    self.a = [];
    self.b = [];
    var a, b;
    var flag = false;
    self.getGCD = function(x, y){
        if (!flag){
            self.aconst = x; // These are here so the values at the bottom of the screen always respect the order in which the user entered them, and are not dynamic with the input field
            self.bconst = y;
            x = parseInt(x);
            y = parseInt(y);
            self.clear();
            flag = true;
        }
        a = x;
        b = y;
        if(!self.answerGen){
            self.answerGen = true; // Used to display the answer box
        }
        if(a < b){
            self.swap(a, b); // Algorithm only works if the larger number is the dividend
        }

        self.a.push(a);
        self.b.push(b);
        self.quotients.push(Math.floor(a/b));
        if(a%b === 0){
            self.remainders.push(0);
            self.answer = b;
            flag = false;
        } else{
            self.remainders.push(a%b);
            self.getGCD(b, a%b);
        }
    };

    self.clear = function(){
        self.quotients = [];
        self.remainders = [];
        self.a = [];
        self.b = [];
    }

    self.swap = function(atmp, btmp){
        a = btmp;
        b = atmp;
    };
})
