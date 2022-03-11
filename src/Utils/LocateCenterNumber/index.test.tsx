import '@testing-library/jest-dom';
import LocateCenterNumber from '.';

const fixture = {
	currentPage: 1,
	totalPages: 1,
	siblingCount: 1,
};

describe('LocateCenterNumber', () => {
	test('Must return 5', () => {
		const linkElement = LocateCenterNumber(fixture);
		expect(linkElement).toBe(5);
	});
});
