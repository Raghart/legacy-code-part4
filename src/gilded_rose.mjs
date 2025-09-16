export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
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