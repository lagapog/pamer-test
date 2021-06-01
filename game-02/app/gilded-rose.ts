export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, quality, sellIn) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    tick() {
        this.items = this.items.map(function(item) {
            // value that decrease or increase the quality
            let value = 1

            // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
            if (item.name == 'Sulfuras, Hand of Ragnaros') value = 0
            
            // "Aged Brie" actually increases in Quality the older it gets
            else if (item.name == 'Aged Brie') value *= -1
            
            // "Conjured" items degrade in Quality twice as fast as normal items
            else if (item.name == 'Conjured Mana Cake') value *= 2
            
            else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                // "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
                value *= -1
                // Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days
                // or less but Quality drops to 0 after the concert
                if (item.sellIn < 1) value = item.quality
                else if (item.sellIn < 6) value *= 3
                else if (item.sellIn < 11) value *= 2
            }
            
            // reduce the sellIn value, except in "Sulfura" items
            if (value != 0) item.sellIn -= 1
            
            // Once the sell by date has passed, Quality degrades twice as fast
            if (item.sellIn < 0) value *= 2
            
            if (value > 0) {
                // The Quality of an item is never negative
                item.quality = item.quality - value > 0 ? item.quality - value : 0
            } else {
                // The Quality of an item is never more than 50
                item.quality = item.quality - value < 50 ? item.quality - value : 50
            }
            
            return item
        })
        return this.items;
    }
}
