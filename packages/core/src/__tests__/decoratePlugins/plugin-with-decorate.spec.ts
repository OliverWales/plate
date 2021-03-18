import { NodeEntry, Point } from 'slate';
import { Decorate } from '../../types/SlatePlugin/Decorate';
import { decoratePlugins } from '../../utils/decoratePlugins';

const nodeEntry: NodeEntry = [{ text: 'test' }, [0, 0]];
const point: Point = { path: [0, 0], offset: 0 };
const range = { anchor: point, focus: point };
const decorate: Decorate = () => [range];

const output = [range];

it('should be a list of ranges', () => {
  expect(decoratePlugins({} as any, [decorate])(nodeEntry)).toEqual(output);
});
