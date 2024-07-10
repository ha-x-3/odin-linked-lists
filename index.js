import LinkedList from "./linkedList.js";

const linkedList = LinkedList();

linkedList.prepend("Item 1");
linkedList.append("Item 2");
linkedList.append("Item 3");
console.log(linkedList.toString());
console.log(linkedList.getSize());
console.log(linkedList.getHead());
console.log(linkedList.getTail());
console.log(linkedList.at(2));
console.log(linkedList.at(4));
linkedList.pop();
console.log(linkedList.toString())
console.log(linkedList.contains("Item 1"))
console.log(linkedList.find("Item 2"));
linkedList.prepend("Item 3");
console.log(linkedList.toString());
linkedList.insertAt("Item 4",2);
console.log(linkedList.toString());
linkedList.insertAt("Item 5",8);
console.log(linkedList.toString());
linkedList.removeAt(2);
console.log(linkedList.toString());