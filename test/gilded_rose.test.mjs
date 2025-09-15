import { describe, it, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("shop returns a list of items with expected results", () => {
    const name = "foo";
    const sellIn = 0;
    const quality = 0;
    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items).not.be.null.and.not.be.empty;
    expect(items[0].name).to.equal(name);
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(quality);
  });

  test("shop returns Item Sulfuras, Hand of Ragnaros", () => {
    const name = "Sulfuras, Hand of Ragnaros";
    const sellIn = 0;
    const quality = 0;
    const gildedRose = new Shop([new Item(name,sellIn,quality)]);
    const items = gildedRose.updateQuality();
    expect(items).not.be.null.and.not.be.empty;
    expect(items[0].name).to.equal.name;
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(quality);
  });

  test("shop returns Item Aged Brie", () => {
    const name = "Aged Brie";
    const sellIn = -1;
    const quality = 2;
    const gildedRose = new Shop([ new Item(name,sellIn,quality) ]);
    const items = gildedRose.updateQuality();
    expect(items).not.be.null.and.not.be.empty;
    expect(items[0].name).to.equal.name;
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(4);
  });
});
