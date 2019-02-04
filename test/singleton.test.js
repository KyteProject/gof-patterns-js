const expect = require('chai').expect;

import Store from '../singleton/Store';
import Shopper from '../singleton/Shopper';
import logger from '../singleton/Logger';

describe('logger test', () => {
	it('log and count', () => {
		logger.log('1');
		logger.log('2');
		logger.log('3');
		logger.log('4');

		expect(logger.count === 4).to.be.true;
	});
});

describe('store test', () => {
	it('sanity', () => {
		var shop = new Store('Steep and Deep Supplies', [
			{
				item: 'Downhill Skis',
				qty: 5,
				price: 750,
			},
			{
				item: 'Knit Hat',
				qty: 20,
				price: 5,
			},
		]);
		var shop2 = new Store('Steep and Deep Supplies', [
			{
				item: 'Downhill Skis',
				qty: 5,
				price: 750,
			},
			{
				item: 'Knit Hat',
				qty: 20,
				price: 5,
			},
		]);

		expect(Array.isArray(shop)).to.equal(Array.isArray(shop2));
		expect(shop.length === shop2.length).to.be.true;
	});
});

describe('shopper test', () => {
	it('sanity', () => {
		var shopper = new Shopper('alex', 500);
		var shopper2 = new Shopper('james', 500);

		expect(shopper.money === shopper2.money).to.be.true;
		expect(Array.isArray(shopper)).to.equal(Array.isArray(shopper2));
	});
});
