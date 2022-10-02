class MyIterator<T> {
  items: T[];

  index: number;

  constructor(items: T[]) {
    this.items = items;
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.items.length;
  }

  next(): T {
    const item: T = this.items[this.index];
    this.index += 1;
    return item;
  }
}

const iter: MyIterator<string> = new MyIterator(['abc', 'def']);
console.log(iter.next(), iter.hasNext());
console.log(iter.next(), iter.hasNext());
console.log(iter.next(), iter.hasNext());

console.log('----------------');

const iter2: MyIterator<string | boolean> = new MyIterator(['abc', 'def']);
while (iter2.hasNext()) {
  console.log(iter2.next(), iter2.hasNext());
}
