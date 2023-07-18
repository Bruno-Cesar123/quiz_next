export function shuffle(elements: any[]): any[] {
  return elements
    .map(value => ({ value, aleatory: Math.random() }))
    .sort((obj1, obj2) => obj1.aleatory - obj2.aleatory)
    .map(obj => obj.value)
}