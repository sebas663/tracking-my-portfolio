export class Dictionary<T> {

    private items: { [index: string]: T } = {};
 
    private countItems: number = 0;
    
    constructor(items: { [index: string]: T }) {
      // const data = JSON.stringify(items)
      // console.log("items" + data);
       this.items = items;
    }

    public containsKey(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }
 
    public count(): number {
        return this.countItems;
    }
 
    public add(key: string, value: T) {
        this.items[key] = value;
        this.countItems++;
    }
 
    public remove(key: string): T {
        var val = this.items[key];
        delete this.items[key];
        this.countItems--;
        return val;
    }
 
    public item(key: string): T {
        return this.items[key];
    }
 
    public keys(): string[] {
        var keySet: string[] = [];
 
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
 
        return keySet;
    }
 
    public values(): T[] {
        var values: T[] = [];
 
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
 
        return values;
    }
}