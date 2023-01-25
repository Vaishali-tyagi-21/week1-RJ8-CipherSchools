

class Listnode { 
    val;
    next;

    // constructor
    constructor(val, next = null) { 
        this.val = val; 
        this.next = next; 
    } 
}

class TestClass {
    head;

    constructor(head = null) {
        this.head = head;
    }

    haslast() {
        return this.head !== null;
    }
    getlast() {  
        if (!this.haslast()) {   
            return null;  
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        let finalValue = current.val;

        current = this.head;
        while (current.next !== null && current.next.next !== null) {
            // 1 2 3 4 5
            current = current.next;
        }
        if (current.next === null ) {
            this.head = null;
        }
        current.next = null;
        return finalValue;
    }
}

let myVariable = new TestClass(
    new Listnode(
        1,
         new Listnode(2, new Listnode(3, new Listnode(4, new Listnode(5))))
        )
    ); // [1, 2, 3, 4, 5]

console.log(myVariable.getlast()); // 5
console.log(myVariable.getlast());
console.log(myVariable.getlast());
console.log(myVariable.getlast());
console.log(myVariable.getlast());


// ----------------------------END OF SESSION--------------------------- //
