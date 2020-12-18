import { isHTMLTag, isSVGTag } from '@vue/shared'

export const BUILT_IN_TAGS = [
  'uni-ad',
  'uni-audio',
  'uni-button',
  'uni-camera',
  'uni-canvas',
  'uni-checkbox',
  'uni-checkbox-group',
  'uni-cover-image',
  'uni-cover-view',
  'uni-editor',
  'uni-form',
  'uni-functional-page-navigator',
  'uni-icon',
  'uni-image',
  'uni-input',
  'uni-label',
  'uni-live-player',
  'uni-live-pusher',
  'uni-map',
  'uni-movable-area',
  'uni-movable-view',
  'uni-navigator',
  'uni-official-account',
  'uni-open-data',
  'uni-picker',
  'uni-picker-view',
  'uni-picker-view-column',
  'uni-progress',
  'uni-radio',
  'uni-radio-group',
  'uni-rich-text',
  'uni-scroll-view',
  'uni-slider',
  'uni-swiper',
  'uni-swiper-item',
  'uni-switch',
  'uni-text',
  'uni-textarea',
  'uni-video',
  'uni-view',
  'uni-web-view'
]

export const TAGS = [
  'uni-app',
  'uni-layout',
  'uni-content',
  'uni-main',
  'uni-top-window',
  'uni-left-window',
  'uni-right-window',
  'uni-tabbar',
  'uni-page',
  'uni-page-head',
  'uni-page-wrapper',
  'uni-page-body',
  'uni-page-refresh',
  'uni-actionsheet',
  'uni-modal',
  'uni-toast',
  'uni-resize-sensor',
  'uni-shadow-root'
]

export function isBuiltInComponent(tag: string) {
  return BUILT_IN_TAGS.indexOf('uni-' + tag) !== -1
}

export function isCustomElement(tag: string) {
  return TAGS.indexOf(tag) !== -1 || BUILT_IN_TAGS.indexOf(tag) !== -1
}

export function isNativeTag(tag: string) {
  return (isHTMLTag(tag) || isSVGTag(tag)) && !isBuiltInComponent(tag)
}

export const COMPONENT_PREFIX = 'v-uni-'
