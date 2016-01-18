(function() {
    "use strict";
    /* Run this using node
    Three ways to create an Object
    var task = {};  create a new object

    var obj = {};
    obj.param = 'New Value';
    obj['newParam'] = 'Old Value';
    console.log(obj['newParam']);
	// you can use bracket notation using variable
	var task = {};
	var task = new Object();
	var task = {
		title: 'My Title',
		description: 'My Description'
	};

	Object.defineProperty(obj, 'name', {
		value: 'My Name',
		writable: true,
		enumerable: true,
		configurable: true
	});

	Defining Properties
	ECMAScript 5 introduces defineProperty
    */
    var task = Object.create(Object.prototype);

    task.title = 'My Task';
    task.description = 'My Description';
    console.log(task.title);
    Object.defineProperty(task, 'toString', {
        value: function toString() {
            return this.title + ' ' + this.descrption;
        },
        writable: true,
        enumerable: true,
        configurable: true
    });
    /*task.toString = function toString() {
        return this.title + ' ' + this.descrption;
    };*/

    console.log(task.toString());

    // constuctor design pattern

    var Task = function Task(name) {
        this.name = name;
        this.completed = false;
    }

    Task.prototype.complete = function complete() {
        console.log('Completing Task: ' + this.name);
        this.completed = true;
    };
    Task.prototype.save = function save() {
        console.log('Saving Task ' + this.name);
    };

    var taskOne = new Task('Create a demo for constructors');
    var taskTwo = new Task('Create a demo for modules');
    var taskThree = new Task('Create a demo for singltons');
    var taskFour = new Task('Create a demo for prototypes');
    console.log(taskOne);
    console.log(taskTwo);
    console.log(taskThree);
    console.log(taskFour);

    taskOne.complete();
    taskTwo.save();

})();
