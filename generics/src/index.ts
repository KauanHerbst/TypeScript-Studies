type CallBackFilterFn<T> = (value: T, index?: number, array?: T[]) => boolean;

function myFilter<U>(array: U[], callback: CallBackFilterFn<U>): U[] {
  const newArray: U[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayFilted = myFilter(arrayNumbers, (value) => value < 8);
console.log(arrayFilted);
