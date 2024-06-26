import { createPluginFactory } from '@udecode/plate-common';

import type { VideoPlugin } from './types';

export const ELEMENT_VIDEO = 'video';

export const createVideoPlugin = createPluginFactory<VideoPlugin>({
  isElement: true,
  isVoid: true,
  key: ELEMENT_VIDEO,
});
