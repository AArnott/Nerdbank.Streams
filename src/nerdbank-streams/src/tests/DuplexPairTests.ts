import { DuplexPair } from './DuplexPair';

describe('DuplexPair', () => {

    it('should create', () => {
        var pair = DuplexPair.Create();
        expect(pair.Item1).not.toBe(null);
        expect(pair.Item2).not.toBe(null);
    });

    it('stream1.write should pass to stream2.read', () => {
        var pair = DuplexPair.Create();
        pair.Item1.write('abc');
        expect(pair.Item2.read()).toEqual(new Buffer('abc'));
    });

    it('stream2.write should pass to stream1.read', () => {
        var pair = DuplexPair.Create();
        pair.Item2.write('abc');
        expect(pair.Item1.read()).toEqual(new Buffer('abc'));
    });

    it('stream1 write end leads to stream2 read end', async () => {
        var pair = DuplexPair.Create();
        pair.Item1.end();
        expect(pair.Item1.read()).toBeNull();
    });

    it('stream2 write end leads to stream1 read end', async () => {
        var pair = DuplexPair.Create();
        pair.Item2.end();
        expect(pair.Item1.read()).toBeNull();
    });
});