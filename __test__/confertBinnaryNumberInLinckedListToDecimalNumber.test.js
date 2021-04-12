import confertBinnaryNumberInLinckedListToDecimalNumber from '../src/confertBinnaryNumberInLinckedListToDecimalNumber';

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

describe(`
    function confertBinnaryNumberInLinckedListToDecimalNumber takes a 
    linkedList with Binarry number,
    where head is a largest binnary degree, function should return decimal  representation of number.
`,
() => {
  test('[1, 0, 1] => 5', () => {
    const binary = new ListNode(1, new ListNode(0, new ListNode(1, null)));
    expect(confertBinnaryNumberInLinckedListToDecimalNumber(binary)).toBe(5);
  });

  test('[0] => 0', () => {
    const binarry = new ListNode(0);
    expect(confertBinnaryNumberInLinckedListToDecimalNumber(binarry)).toBe(0);
  });

  test('[1,0,0,1,0,0,1,1,1,0,0,0,0,0,0] => 18880', () => {
    const binarry = new ListNode(
      1,
      new ListNode(
        0,
        new ListNode(
          0,
          new ListNode(
            1,
            new ListNode(
              0,
              new ListNode(
                0,
                new ListNode(
                  1,
                  new ListNode(
                    1,
                    new ListNode(
                      1,
                      new ListNode(
                        0,
                        new ListNode(
                          0,
                          new ListNode(
                            0,
                            new ListNode(
                              0,
                              new ListNode(
                                0,
                                new ListNode(
                                  0,
                                  null,
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
    expect(confertBinnaryNumberInLinckedListToDecimalNumber(binarry)).toBe(18880);
  });
});
