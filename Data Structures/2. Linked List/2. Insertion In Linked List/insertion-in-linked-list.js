var head;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function push(new_data) {
    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}

function insertAfter(prev_node, new_data) {
    if (prev_node == null) {
        document.write("The given previous node cannot be null");
        return;
    }
    var new_node = new Node(new_data);
    new_node.next = prev_node.next;
    prev_node.next = new_node;
}

function append(new_data) {
    var new_node = new Node(new_data);
    if (head == null) {
        head = new Node(new_data);
        return;
    }
    new_node.next = null;
    var last = head;
    while (last.next != null) {
        last = last.next;
    }
    last.next = new_node;
    return;
}

function printList() {
    var tnode = head;
    while (tnode != null) {
        document.write(tnode.data + " ");
        tnode = tnode.next;
    }
}

append(6);
push(7);
push(1);
append(4);
insertAfter(head.next, 8);