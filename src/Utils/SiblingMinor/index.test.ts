import '@testing-library/jest-dom';
import SiblingMinor from '.';

const fixture = {
	currentPage: 1,
	siblingCount: 1,
};

describe('SiblingMinor', () => {
	test('Must return 5', () => {
		const linkElement = SiblingMinor(fixture);
		expect(linkElement).toStrictEqual([]);
	});
});
