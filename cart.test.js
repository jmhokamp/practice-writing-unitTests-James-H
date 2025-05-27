// tests/cart.test.js

const { addItem, removeItem, getTotalItems } = require('./cart');

describe("Shopping Cart Module", () => {
    let cart;

    beforeEach(() => {
        cart = {};
    });

    // addItem Tests
    describe("addItem", () => {
        test("adds a new item with valid quantity", () => {
            addItem(cart, "apple", 3);
            expect(cart.apple).toBe(3);
        });

        test("adds more quantity to an existing item", () => {
            addItem(cart, "apple", 2);
            addItem(cart, "apple", 3);
            expect(cart.apple).toBe(5);
        });

        test("ignores adding item with negative quantity", () => {
            addItem(cart, "banana", -1);
            expect(cart.banana).toBeUndefined();
        });

        test("ignores adding item with zero quantity", () => {
            addItem(cart, "banana", 0);
            expect(cart.banana).toBeUndefined();
        });
    });

    // removeItem Tests
    describe("removeItem", () => {
        test("removes an existing item", () => {
            addItem(cart, "apple", 2);
            removeItem(cart, "apple");
            expect(cart.apple).toBeUndefined();
        });

        test("does nothing if item does not exist", () => {
            removeItem(cart, "nonexistent");
            expect(cart).toEqual({});
        });

        test("removes the last item", () => {
            addItem(cart, "apple", 1);
            removeItem(cart, "apple");
            expect(getTotalItems(cart)).toBe(0);
        });
    });

    // getTotalItems Tests
    describe("getTotalItems", () => {
        test("returns total number of items", () => {
            addItem(cart, "apple", 2);
            addItem(cart, "banana", 3);
            expect(getTotalItems(cart)).toBe(5);
        });

        test("returns 0 for empty cart", () => {
            expect(getTotalItems(cart)).toBe(0);
        });

        test("handles large quantities", () => {
            addItem(cart, "bulk", 100000);
            expect(getTotalItems(cart)).toBe(100000);
        });
    });
});