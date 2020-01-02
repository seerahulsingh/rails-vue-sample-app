test('there is no Q in Hello World', () => {
  expect('Hello World').not.toMatch(/Q/);
});
