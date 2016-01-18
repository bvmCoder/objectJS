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
	allows to configure property name and set the value
	writable: which means I can create constant something that can't be change
	enumerable: means either in for in loop or if I do the keys function then 
	it will show up or it won't show up
	configurable: means I am not allowed to change the configuration of these 
	iteams, so once I set it I am not allowed to set it to something different

    */
    var task = Object.create(Object.prototype);

    task.title = 'My Task';
    task.description = 'My Description';
    console.log(task.title);
    /*task.toString = function toString() {
        return this.title + ' ' + this.descrption;
    };*/
    Object.defineProperty(task, 'toString', {
        value: function toString() {
            return this.title + ' ' + this.descrption;
        },
        writable: true, // false to prevent to override this property later
        enumerable: true,
        configurable: true
    });
    //task.toString = 'Patel'; // toString is no longer a function

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
