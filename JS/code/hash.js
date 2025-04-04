class HashTable {
  constructor(size) {
    this.size = size
    this.table = new Array(size)
  }

  hash(key) {
    let total = 0;
    for(let i=0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    // console.log(total, total % this.size)
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if(!this.table[index]) {
      this.table[index] = [[key, value]]
    } else {
      const old = this.table[index]
      this.table[index] = [...old, [key, value]]
    }
  }
  
  get(key) {
    const index = this.hash(key);
    for(let [k, v] of this.table[index]) {
      if( k === key) {
        console.log(v)
        return
      }
    }
  }

  delete(key) {
    const index = this.hash(key);
    const data = this.table[index]
    const found = data.find(item => item[0] === key);
    if(found) {
      data.splice(data.indexOf(found), 1)
    }
  }
}

const h = new HashTable(50);

h.set('name', 'sanjeevi');
h.set('nema', 'sanjeevi 1');
h.set('naem', 'dev');
h.set("test", 'test value')
h.set('name1', 'ranj');

// h.get("naem");
h.delete('naem')
h.get('naem')
h.get("name")

console.log(h);

