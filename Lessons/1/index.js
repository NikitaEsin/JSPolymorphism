import Node from './Node'

export default function reverse(node) {
  let current = node;
  let prev = null;
  let next = null;

  while (current !== null) {
    next = current.getNext();
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

let current = reversedNumbers;
while (current !== null) {
  console.log(current.getValue());
  current = current.getNext();
}

const numbers = new Node(1, new Node(2, new Node (3)));
const reversedNumbers = reverse(numbers)