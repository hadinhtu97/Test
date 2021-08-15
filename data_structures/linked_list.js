// A linked list is a linear collection of data elements,
// called 'nodes', each of which points to the next.
// Each node in a linked list contains two key pieces of information: the element itself,
// and a reference to the next node.

const LinkedList = function () {
    let length = 0;
    let head = null;

    const Node = function (ele) {
        this.ele = ele;
        this.next = null;
    }

    this.size = () => length
    this.head = () => head
    this.isEmpty = () => length == 0

    this.add = (ele) => {
        let node = new Node(ele)
        if (head == null) {
            head = node
        } else {
            let current = head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        length++
        return
    }

    this.addAt = (index, ele) => {
        if (index < 0 || index > length - 1) return false
        let current = head
        let node = new Node(ele)
        let i = 0
        while (i != index) {
            current = current.next;
            i++
        }
        let x = current.next
        current.next = node
        node.next = x
        length++
        return
    }

    this.remove = (ele) => {
        if (head.element == ele) {
            head = head.next
            length--
            return
        } else {
            let current = head
            while (current) {
                if (current.next && current.next.element == element) {
                    current.next = current.next.next
                    length--
                    return
                } else {
                    current = current.next
                }
            }
            return
        }
    }

    this.removeAt = (index) => {
        if (index < 0 || index > length - 1) return null
        length--
        let current = head
        if (index == 0) {
            head = head.next
            return current.element
        } else {
            let i = 0
            while (i + 1 != index) {
                current = current.next
                i++
            }
            let del = current.next.element
            current.next = current.next.next
            return del
        }

    }

    this.indexOf = (ele) => {
        let count = 0
        let current = head
        while (current) {
            if (current.element == ele) {
                return count
            } else {
                count++
                current = current.next
            }
        }
        return -1
    }

    this.elementAt = (index) => {
        if (index < 0 || index > length - 1) return undefined
        if (index = 0) return head.element
        let current = head
        for (let i = 0; i <= index; i++) {
            current = current.next
        }
        return current.element
    }
}

// DoublyLinkedList

var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
    let length = 0;

    this.add = (data) => {
        if (length == 0) {
            let node = new Node(data, null)
            this.head = node
            this.tail = node
        } else {
            let lastNode = this.tail
            let newNode = new Node(data, lastNode)
            lastNode.next = newNode
            this.tail = newNode
        }
        length++
    }

    this.remove = (data) => {
        if (length == 0) {
            return null
        } else {
            if (this.head.data == data) {
                this.head = this.head.next
                length--
            } else if (this.tail.data == data) {
                this.tail = this.tail.prev
                this.tail.next = null
                length--
            } else {
                let current = this.head
                while (current) {
                    if (current.next && current.next.data == data) {
                        current.next = current.next.next
                        current.next.prev = current
                    } else {
                        current = current.next
                    }
                }
            }
        }
    }

};
