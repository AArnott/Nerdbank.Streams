import 'jasmine';
import { Deferred } from '../Deferred';

describe('Deferred', () => {
    var deferred: Deferred<void>;

    beforeEach(() => {
        deferred = new Deferred<void>();
    });

    it('indicates completion', () => {
        expect(deferred.isCompleted).toBe(false);
        expect(deferred.isResolved).toBe(false);
        expect(deferred.isRejected).toBe(false);
        deferred.resolve();
        expect(deferred.isCompleted).toBe(true);
        expect(deferred.isResolved).toBe(true);
        expect(deferred.isRejected).toBe(false);
    });

    it('indicates error', () => {
        expect(deferred.isCompleted).toBe(false);
        expect(deferred.error).toBeUndefined();
        expect(deferred.isRejected).toBe(false);
        expect(deferred.isResolved).toBe(false);
        var e = new Error("hi")
        deferred.reject(e);
        expect(deferred.isCompleted).toBe(true);
        expect(deferred.error).toBe(e);
        expect(deferred.isRejected).toBe(true);
        expect(deferred.isResolved).toBe(false);
    });
});