export default class HashTable {
  constructor() {
    this.array = [];
  }

  hash(key) {
    return key.charAt(0).toLowerCase().charCodeAt(0) - 97;
  }

  set(key, value) {
    const index = this.hash(key);
    if (this.array[index] === undefined) {
      this.array[index] = []
    }
    this.array[index].push([key, value]);
  }
  
  get(key) {
    const element = this.hash(key);
    const bucket = this.array[element];
    if (bucket != undefined) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return null;
  }
}

