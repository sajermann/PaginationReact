import '@testing-library/jest-dom';
import SiblingMinor from '.';

describe('SiblingMinor', () => {
	test('Must return []', () => {
		const linkElement = SiblingMinor({
			currentPage: 1,
			siblingCount: 1,
		});
		expect(linkElement).toStrictEqual([]);
	});

	test('Must return [9]', () => {
		const linkElement = SiblingMinor({
			currentPage: 10,
			siblingCount: 1,
		});
		expect(linkElement).toStrictEqual([9]);
	});

	test('Must return [5, 6, 7, 8, 9]', () => {
		const linkElement = SiblingMinor({
			currentPage: 10,
			siblingCount: 5,
		});
		expect(linkElement).toStrictEqual([5, 6, 7, 8, 9]);
	});

	test('Must return [2, 3, 4, 5, 6, 7, 8, 9]', () => {
		const linkElement = SiblingMinor({
			currentPage: 10,
			siblingCount: 20,
		});
		expect(linkElement).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9]);
	});
});
