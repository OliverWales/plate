import {
  getRenderElement,
  RenderNodeOptions,
} from '@udecode/slate-plugins-common';
import { getPluginOptions } from '@udecode/slate-plugins-core';
import { Editor } from 'slate';
import {
  DEFAULT_HEADING_LEVEL,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from './defaults';
import { HeadingPluginOptions } from './types';

/**
 * Font sizes are relative to the base font size
 * H1 - fs * 20/11
 * H2 - fs * 16/11
 * H3 - fs * 14/11
 * H4 - fs * 12/11
 * H5 - fs * 1
 * H6 - fs * 1
 */
export const useRenderElementHeading = ({
  levels = DEFAULT_HEADING_LEVEL,
}: HeadingPluginOptions = {}) => (editor: Editor) => {
  const h1 = getPluginOptions(editor, ELEMENT_H1);
  const h2 = getPluginOptions(editor, ELEMENT_H2);
  const h3 = getPluginOptions(editor, ELEMENT_H3);
  const h4 = getPluginOptions(editor, ELEMENT_H4);
  const h5 = getPluginOptions(editor, ELEMENT_H5);
  const h6 = getPluginOptions(editor, ELEMENT_H6);

  const renderElementsOptions: Required<RenderNodeOptions>[] = [];

  const checkRenderElement = (level: number, optionsValues: any) => {
    if (levels >= level) renderElementsOptions.push(optionsValues);
  };

  checkRenderElement(1, h1);
  checkRenderElement(2, h2);
  checkRenderElement(3, h3);
  checkRenderElement(4, h4);
  checkRenderElement(5, h5);
  checkRenderElement(6, h6);

  return getRenderElement(renderElementsOptions);
};
