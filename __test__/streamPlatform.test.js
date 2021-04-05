import StreamPlatform from '../src/streamPlatform';

describe(`
    Class with method insert. Insert takes pair idKey and value,
    insert it in container and return chunck after each insertions.
`, () => {
  const stream = new StreamPlatform(5);

  test('should return empty array if container is emty', () => {
    const testStream = stream.insert(3, 'cccc');
    expect(testStream).toEqual([]);
  });

  test('should return largest posible chunck', () => {
    const testStream1 = stream.insert(1, 'aaaa');
    expect(testStream1).toEqual(['aaaa']);
    const testStream2 = stream.insert(2, 'bbbb');
    expect(testStream2).toEqual(['bbbb', 'cccc']);
    const testStream3 = stream.insert(5, 'eeee');
    expect(testStream3).toEqual([]);
    const testStream4 = stream.insert(4, 'dddd');
    expect(testStream4).toEqual(['dddd', 'eeee']);
  });
});
