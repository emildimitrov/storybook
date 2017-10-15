// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { multiLineText } from './PropTable';

describe('PropTable', () => {
  describe('multiLineText', () => {
    const singleLine = 'Foo bar baz';
    const unixMultiLineText = 'foo \n bar \n baz';
    const windowsMultiLineText = 'foo \r bar \r baz';

    it('should return its input for a single line of text', () => {
      expect(multiLineText(singleLine)).toBe(singleLine);
    });
    it('should return an array for unix multiline text', () => {
      expect(multiLineText(unixMultiLineText)).toHaveLength(3);
    });
    it('should return an array for windows multiline text', () => {
      expect(multiLineText(windowsMultiLineText)).toHaveLength(3);
    });
    it('should have 2 br tags for 3 lines of text', () => {
      const tree = renderer.create(multiLineText(unixMultiLineText)).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
