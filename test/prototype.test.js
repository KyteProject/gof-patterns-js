import { expect } from 'chai';
import scout_prototype from '../prototype/scout_prototype';

describe('prototype test', () => {
	it('clone', () => {
		let ryan = scout_prototype.clone();
		ryan.name = 'Ryan Ford';
		ryan.addItemToList('reading light');

		let sally = scout_prototype.clone();
		sally.name = 'Sally Ford';
		sally.addItemToList('reading light');

		let andrew = scout_prototype.clone();
		andrew.name = 'Andrew Ford';
		andrew.addItemToList('cheese wegde');

		expect(ryan.name === 'Ryan Ford').to.be.true;
		expect(ryan.shoppingList === sally.shoppingList).to.be.true;
		expect(sally.shoppingList === andrew.shoppingList).to.be.false;
	});
});
