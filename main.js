var Task = require('./task');

var taskOne = new Task('Create a demo for Constructors'),
    taskTwo = new Task('Create a demo for Modules'),
    taskThr = new Task('Create a demo for Singltons'),
    taskFor = new Task('Create a demo for Prototypes');
console.log(taskOne);
console.log(taskOne.__proto__);
console.log(taskTwo);
console.log(taskTwo.__proto__);
console.log(taskThr);
console.log(taskThr.__proto__);
console.log(taskFor);
console.log(taskFor.__proto__);
console.log(taskTwo.__proto__ === taskThr.__proto__);

taskOne.complete();
taskTwo.save();
taskThr.save();
taskFor.save();
