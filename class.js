(function() {
    "use strict";

    class Task {
        constructor(name) {
            this.name = name;
            this.completed = false;
        }
        complete() {
            console.log('Completing Task: ' + this.name);
            this.completed = true;
        }
        save() {
            console.log('Saving Task ' + this.name);
        }
    }
})();
