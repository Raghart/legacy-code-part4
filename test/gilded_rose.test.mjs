import { describe, it, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("shop returns Items", () => {
    const names = ["foo"];
    const sellIn = 0;
    const quality = 0;
    const shopItems = names.map(name => new Item(name, sellIn, quality));
    const gildedRose = new Shop(shopItems);
    const items = gildedRose.updateQuality();
    expect(items).to.not.be.empty;
  });
});
