//Core
import { sum, delay, getUniqueID, getFullApiUrl } from './';

describe('instruments:', () => {
    test('sum function should be a function', () => {
        expect(sum).toBeInstanceOf(Function);
    });
    
    test('sum function should throw, when called with non-number type as second argument', () => {
        expect(() => sum(2, 'hi')).toThrow();
    });

    test('sum function should throw, when called with non-number type as first argument', () => {
        expect(() => sum('hi', 2)).toThrow();
    });

    test('sum function should return an addition of two arguments passed', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(1, 8)).toMatchSnapshot();
    });

    test('delay function should return a resolved promide', async () => {
        await expect(delay()).resolves.toBeUndefined();
    });

    test('getUniqueID function should be a function', () => {        
        expect(getUniqueID).toBeInstanceOf(Function);
    });

    test('getUniqueID function should throw, when called with non-number type as an argument', () => {
        expect(() => getUniqueID('hi')).toThrow();
    });

    test('getUniqueID function should produse a string of a desired given length', () => {
        expect(typeof getUniqueID()).toBe('string');
        expect (getUniqueID(5)).toHaveLength(5);
        expect (getUniqueID(13)).toHaveLength(13);
    });

    test('getFullApiUrl function should throw, when called with non-number type as first or second argument', () => {
        expect(() => getFullApiUrl('hi', true)).toThrow();
        expect(() => getFullApiUrl(2, 'hi')).toThrow();
    });

    test('getFullApiUrl function should produse a string', () => {
        expect(typeof getFullApiUrl('hi', 'lectrum')).toBe('string');
        expect(getFullApiUrl('hi', 'lectrum')).toBe('hi/lectrum');
    });

});