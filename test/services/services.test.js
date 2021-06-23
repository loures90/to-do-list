import assert from 'assert'
import { generateToken, returnToken } from '../../src/services/authenticator.js';
import { generateId } from '../../src/services/generateId.js';
import { hashCompare, hashCreator } from '../../src/services/hashManager.js';

describe('services', function () {
    describe('services / Id Generator', function () {
        it('should an id from uuid', function () {
            assert.equal(typeof (generateId()), "string");
        });
    });
    describe('SERVICES / authenticator generate token', function () {
        it('should an token from jwtoken', function () {
            assert.equal(typeof (generateToken("abc123")), "string");
            assert.equal(generateToken().split(".").length, 3);
        });
        it('should get an token and validate it ', function () {
            const token = generateToken("abc123")
            assert.equal(returnToken(token), "abc123");
        });
        it('should get an invalid token and return error  ', function () {
            const token = "abc123"
            try {
                returnToken(token)
            } catch (error) {
                assert.strictEqual(error, "jwt malformed")
            }
        });
    });
    describe('services / HASH MANAGER', async function () {
        it('should create a hash and verify if it is a string and it has a changed value', async function () {
            const hash = await hashCreator("Secret")
            assert.equal(typeof (hash), "string");
            assert.notStrictEqual(hash, "Secret")
        });
    });
    describe('services / HASH MANAGER', async function () {
        it('should create a hash use the compare function and return true for the same entry word value', async function () {
            const hash = await hashCreator("Secret")
            console.log(hash)
            const compareResult = await hashCompare("Secret", hash)
            assert.equal(compareResult, true);
        });
        it('should create a hash use the compare function and return false for a different entry word value', async function () {
            const hash = await hashCreator("Secret")
            console.log(hash)
            const compareResult = await hashCompare("Bacon", hash)
            assert.equal(compareResult, false);
        });
    });
});