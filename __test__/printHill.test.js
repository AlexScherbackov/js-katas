import printHill from '../src/printHill';

it('Does printHill work', () => {
  const expectedResult = `#
##
###
####`;

  expect(printHill(4)).toEqual(expectedResult);
});
