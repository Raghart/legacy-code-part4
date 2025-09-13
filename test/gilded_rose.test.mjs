import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo", () => {
    const shopItems = [new Item("foo", 0, 0)];
    const gildedRose = new Shop(shopItems);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });
});
