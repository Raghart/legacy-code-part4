export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class testShop {
  constructor(items = []) {
    this.items = items;
  };

  updateQuality() {
    for (let i=0; i < this.items.length; i++) {
      this.updateItem(this.items[i]);
    }
    console.log(this.items);
    return this.items;
  }

  updateItem(item) {
    switch(item.name) {
      case("Aged Brie"): {
        --item.sellIn;
        item.quality = item.quality + 2 >= 50 ? item.quality : item.quality + 2;
        return item;  
      }
      case("Backstage passes to a TAFKAL80ETC concert") : {
        const step = item.sellIn <= 5 ? 3 : item.sellIn <= 10 ? 2 : 1;
        if (item.sellIn <= 0) item.quality = 0;
        if (item.sellIn > 0) item.quality = Math.min(item.quality + step, 50);
        -- item.sellIn;
        return item;
      }
      case("Sulfuras, Hand of Ragnaros"): return;
      default: {
        --item.sellIn;
        if (item.quality > 0) { item.quality = item.sellIn < 0 ? item.quality - 2 : --item.quality; };
        return item;
      }
    }
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
