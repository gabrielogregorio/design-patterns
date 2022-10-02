interface IObserver {
  run: () => void;
}

export class Subscriber {
  observers: IObserver[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver): void {
    this.observers.push(observer);
  }

  unsubscribe(observerToRemove: IObserver): void {
    this.observers = this.observers.filter((observer: IObserver): boolean => observer !== observerToRemove);
  }

  notifyAll(): void {
    this.observers.forEach((observer: IObserver) => observer.run());
  }
}

export class Observer implements IObserver {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  run(): void {
    console.log(`subscriber ${this.name}`);
  }
}

const sub: Subscriber = new Subscriber();

const maria: Observer = new Observer('Maria');
sub.subscribe(maria);
sub.subscribe(new Observer('Marcos'));
sub.subscribe(new Observer('Julia'));

sub.notifyAll();
console.log('-------');
sub.unsubscribe(maria);
sub.notifyAll();
