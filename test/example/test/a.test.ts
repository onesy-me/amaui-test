/* tslint:disable: no-shadowed-variable */
import { wait } from '@onesy/utils';

import { timezones } from '@onesy/date';

import { assert } from '../../../src';

to('a', () => {
  assert(4).eq(4);
});

group('@onesy/a1', () => {

  pre(async () => {
    await wait(140);

    throw new Error('a');
  });

  preEveryGroupTo(async () => {
    await wait(14);
  });

  to('a2', async () => {
    await wait(140);

    assert(4).eq(4);
  });

  group('@onesy/a3', () => {

    to('a3', async () => {
      assert([1, 4, 3, 7]).any.eq([
        [
          1
        ],
        [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        [
          1,
          2,
          3,
          4
        ]
      ]);
    });

  });

  to('a4', () => {
    [1, 2, 3, 4].forEach(value => {
      assert(typeof value === 'number').true;

      throw new Error('a');
    });
  });

  group('@onesy/a5', () => {
    let a: any;

    pre(async () => {
      await wait(14);
    });

    preTo(async () => {
      await wait(140);

      a = 4;
    });

    to('a5', (resolve, reject) => {
      const error: any = new Error();

      // Added expected and expression message
      error.name = 'An Error';
      error.expected = 4;
      error.expression = 'to be 🍊';

      reject(error);
    });

  });

  to('a6', async () => {
    await wait(74);

    assert(4).eq(4);
  });

  to('a7', async () => {
    assert(['padding-left', 'padding', 'padding-right']).eql(['padding', 'padding-left', 'padding-right']);
  });

  to('a8', async resolve => {
    await wait(4);

    resolve();

    await wait(140);

    assert(4).eq(4);
  });

  to('a9', async () => {
    await assert(function a() { }).throwAsync(4);
  });

  to('a10', async () => {
    assert({
      "direction": "ltr",
      "preference": {
        "background": {
          "default": "neutral"
        },
        "text": {
          "default": "neutral"
        },
        "visual_contrast": {
          "default": "regular"
        }
      },
      "mode": "regular",
      "palette": {
        "accessibility": "regular",
        "visual_contrast": {
          "low": {
            "opacity": {
              "primary": 0.77,
              "secondary": 0.54,
              "tertiary": 0.27
            }
          }
        }
      }
    }).eql({
      "direction": "ltl",
      "preference": {
        "background": {
          "default": "neutral"
        },
        "text": {
          "default": "neutral"
        },
        "visual_contrast": {
          "default": "regular"
        }
      },
      "mode": "regular",
      "palette": {
        "accessibility": "regular",
        "visual_contrast": {
          "low": {
            "opacity": {
              "primary": 0.77,
              "secondary": 0.54,
              "tertiary": 0.27
            }
          }
        }
      }
    });
  });

  to('a11', async () => {
    const value = [
      'OnesyError',
      'OnesyError',
      'OnesyAwsError',
      'OnesyTestError',
      'OnesyAmqpError',
      'AuthenticationError',
      'AuthorizationError',
      'AssertError',
      'ValidationError',
      'PermissionError',
      'OnesyMongoError',
      'ConnectionError',
      'NotFoundError',
      'DeveloperError',
      'OnesyError',
    ];
    const value1 = [
      'OnesyError',
      'OnesyError',
      'OnesyAwsError',
      'OnesyTestError',
      'OnesyAmqpError',
      'AuthenticationError',
      'AuthorizationError',
      'ValidationError',
      'PermissionError',
      'OnesyMongoError',
      'ConnectionError',
      'NotFoundError',
      'DeveloperError',
      'OnesyError',
    ];

    assert(value).eql(value1);
  });

  to('a12', async () => {
    const value = {
      a: {
        a: {
          a: {
            ab: 4,
          },
        },
        ab: 4,
      },
    };
    const value1 = {
      a: {
        a: {
          b: 4,
          a: {
            ab: 5,
            ac: 4,
          },
        },
      },
      ab: [1, 2, 3, 4],
    };

    assert(value).eql(value1);
  });

  to('a13', async () => {
    assert(4).eq(4);
  });

  post(async () => {
    await wait(40);
  });

  postEveryGroupTo(async () => {
    await wait(14);
  });
});

to('a14', async () => {
  assert(timezones).eql([{ a: [function a() { }, { a: 4 }, 4] }]);
});
