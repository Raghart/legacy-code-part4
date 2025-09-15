import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("shop returns a list of items with expected results", () => {
    const itemsTotest = [
      { name: "foo", sellIn: 0, quality: 0 },
    ];
    const itemsToShop = itemsTotest.map(item => new Item(item.name, item.quality, item.sellIn));
    const gildedRose2 = new Shop(itemsToShop);
    const expectedItems = gildedRose2.updateQuality();
    expect(expectedItems).to.not.be.null.and.not.be.empty;
    expect(expectedItems.map(item => item.sellIn)).to.deep.equal([-1]);
    expect(expectedItems.map(item => item.quality)).to.deep.equal([0]);
  });

  test("shop return expected possible paths for Sulfuras, Hand of Ragnaros", () => {
    const itemsToTest = [
      { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 0 },
    ];
    const itemsToShop = itemsToTest.map(item => new Item(item.name, item.sellIn, item.quality));
    const gildedRose = new Shop(itemsToShop);
    const itemsToCheck = gildedRose.updateQuality();
    expect(itemsToCheck).not.be.null.and.not.be.empty;
    expect(itemsToCheck.map(item => item.sellIn)).to.deep.equal([0]);
    expect(itemsToCheck.map(item => item.quality)).to.deep.equal([0]);
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
    ]
    const itemsToShop = items.map(item => new Item(item.name, item.sellIn, item.quality));
    const gildedRose = new Shop(itemsToShop);
    const qualityCheck = gildedRose.updateQuality();
    expect(qualityCheck).not.be.null.and.not.be.empty;
    expect(qualityCheck.map(item => item.sellIn)).to.deep.equal([-1, 14, 4,]);
    expect(qualityCheck.map(item => item.quality)).to.deep.equal([0, 1, 43]);
  });
});
