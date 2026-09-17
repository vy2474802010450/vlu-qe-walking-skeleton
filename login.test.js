const login = require('./login');

describe('Login Function', () => {

    test('should return true for correct username and password', () => {
        expect(login('admin', '123')).toBe(true);
    });

    test('should return false for incorrect password', () => {
        expect(login('admin', '1234')).toBe(false);
    });

    test('should return false for incorrect username', () => {
        expect(login('user', '123')).toBe(false);
    });

    test('should return false when both username and password are incorrect', () => {
        expect(login('user', 'wrongpassword')).toBe(false);
    });

});
