import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("shop returns a list of items with expected results", () => {
    const itemsTotest = [
      { name: "foo", sellIn: 0, quality: 0 },
      { name: "chocolate cake", sellIn: 5, quality: -5 },
    ];
    const itemsToShop = itemsTotest.map(item => new Item(item.name, item.quality, item.sellIn));
    const gildedRose = new Shop(itemsToShop);
    const expectedItems = gildedRose.updateQuality();
    expect(expectedItems).to.not.be.null.and.not.be.empty;
    expect(expectedItems.map(item => item.sellIn)).to.deep.equal([-1, -6]);
    expect(expectedItems.map(item => item.quality)).to.deep.equal([0, 3]);
  });

  test("shop return expected possible paths for Sulfuras, Hand of Ragnaros", () => {
    const itemsToTest = [
      { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 0 },
      { name: "Sulfuras, Hand of Ragnaros", sellIn: 5, quality: 10 },
      { name: "Sulfuras, Hand of Ragnaros", sellIn: -5, quality: -5 },
    ];
    const itemsToShop = itemsToTest.map(item => new Item(item.name, item.sellIn, item.quality));
    const gildedRose = new Shop(itemsToShop);
    const itemsToCheck = gildedRose.updateQuality();
    expect(itemsToCheck).not.be.null.and.not.be.empty;
    expect(itemsToCheck.map(item => item.sellIn)).to.deep.equal([0,5,-5]);
    expect(itemsToCheck.map(item => item.quality)).to.deep.equal([0, 10,-5]);
  });

  test("shop return expected possible paths for Aged Brie", () => {
    const itemsToTest = [
      { name: "Aged Brie", sellIn: 0, quality: 2 },
      { name: "Aged Brie", sellIn: 0, quality: 50 },
    ];
    const itemsToShop = itemsToTest.map(item => new Item(item.name, item.sellIn, item.quality));
    const gildedRose = new Shop(itemsToShop);
    const itemsToCheck = gildedRose.updateQuality();
    expect(itemsToCheck).not.be.null.and.not.be.empty;
    expect(itemsToCheck.map(item => item.sellIn)).to.deep.equal([-1, -1]);
    expect(itemsToCheck.map(item => item.quality)).to.deep.equal([4, 50]);
  });

  test("shop return expected possible paths for Backstage passes to a TAFKAL80ETC concert", () => {
    const items = [
      { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 0 },
      { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 0 },
      { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 40 },
      { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 6, quality: 30 },
      { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 11, quality: 30 },
      { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 49 },
    ]
    const itemsToShop = items.map(item => new Item(item.name, item.sellIn, item.quality));
    const gildedRose = new Shop(itemsToShop);
    const qualityCheck = gildedRose.updateQuality();
    expect(qualityCheck).not.be.null.and.not.be.empty;
    expect(qualityCheck.map(item => item.sellIn)).to.deep.equal([-1, 14, 4, 5, 10, 4]);
    expect(qualityCheck.map(item => item.quality)).to.deep.equal([0, 1, 43, 32, 31, 50]);
  });

  test("shop returns empty array when no items where put in the shop class", () => {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items).to.be.empty;
  });
});
