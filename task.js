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
	
	Creational Design Pattern: Used to Construct New Objects
	Adapting Creation to the Situation

	Used to create new objects with their own object scope
	The new Keyword and create a constructor function
	Creates a Brand New Object
	Links to an object prototype
	Binds `this` keyword to the new object scope
	Implicitly return `this` 
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
        writable: false, // false to prevent to override this property later
        enumerable: false, // false will not show up this key from an Object
        configurable: false // false
    });

    var urgentTask = Object.create(task);
    Object.defineProperty(urgentTask, 'toString', {
        value: function toString() {
            return this.title + ' is urgent!';
        },
        writable: true, // false to prevent to override this property later
        enumerable: true, // false will not show up this key from an Object
        configurable: true // false
    });

    console.log(urgentTask.toString());

    //task.toString = 'Patel'; // toString is no longer a function

    /*
	Later we can change it if configurable is true 
	can't Redefine property if configurable is set to false
    Object.defineProperty(task, 'toString', {
        enumerable: false
    });*/
    console.log(Object.keys(task)); // ['title', 'description', 'toString']

    console.log(task.toString());

    // constuctor design pattern

    function ObjectName(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
        this.toString = function toString() {
            return this.param1 + ' ' + this.param2;
        };

        // return `this` the entire object implicitly with the new keyword
    }

    var Task = function Task(name) {
        this.name = name;
        this.completed = false;
    };

    Task.prototype.complete = function complete() {
        console.log('Completing Task: ' + this.name);
        this.completed = true;
    };
    Task.prototype.save = function save() {
        console.log('Saving Task ' + this.name);
    };

    module.exports = Task;

    // Prototype is An encapsulation of properties that an object links to

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

})();
