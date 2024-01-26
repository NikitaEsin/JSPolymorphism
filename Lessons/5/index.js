class InMemoryKV {
    constructor(initialData = {}) {
      this.data = JSON.parse(JSON.stringify(initialData));
    }

    get(key, defaultValue = null) {
      const value = this.data[key];
      return value !== undefined ? value : defaultValue;
    }

    set(key, value) {
      this.data = JSON.parse(JSON.stringify({ ...this.data, [key]: value }));
    }

    unset(key) {
      const newData = JSON.parse(JSON.stringify(this.data));
      delete newData[key];
      this.data = newData;
    }

    toObject() {
      return JSON.parse(JSON.stringify(this.data));
    }
  }

export default InMemoryKV;



function swapKeyValue(kv) {
    const newData = {};
    const entries = Object.entries(kv.toObject());

    for (const [key, value] of entries) {
      newData[value] = key;
    }

    kv.data = newData;
}