import '@testing-library/jest-dom';
import SiblingMajor from '.';

describe('SiblingMajor', () => {
	test('Must return []', () => {
		const linkElement = SiblingMajor({
			currentPage: 1,
			siblingCount: 0,
			totalPages: 100,
		});
		expect(linkElement).toStrictEqual([]);
	});

	test('Must return [11]', () => {
		const linkElement = SiblingMajor({
			currentPage: 10,
			siblingCount: 1,
			totalPages: 100,
		});
		expect(linkElement).toStrictEqual([11]);
	});

	test('Must return [11,12,13,14,15]', () => {
		const linkElement = SiblingMajor({
			currentPage: 10,
			siblingCount: 5,
			totalPages: 100,
		});
		expect(linkElement).toStrictEqual([11, 12, 13, 14, 15]);
	});

	test('Must return []', () => {
		const linkElement = SiblingMajor({
			currentPage: 10,
			siblingCount: 20,
			totalPages: 10,
		});
		expect(linkElement).toStrictEqual([]);
	});

	test('Must return []', () => {
		const linkElement = SiblingMajor({
			currentPage: 9,
			siblingCount: 1,
			totalPages: 10,
		});
		expect(linkElement).toStrictEqual([]);
	});
});
