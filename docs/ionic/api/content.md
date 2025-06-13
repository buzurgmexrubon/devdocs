---
title: "ion-content"
---

<head>
  <title>ion-content: Scrollable Component for Ionic App Content</title>
  <meta name="description" content="ion-content provides an easy to use content area with useful methods to control the scrollable area. Learn more about this CSS component for Ionic apps." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The content component provides an easy to use content area with some useful methods
to control the scrollable area. There should only be one content in a single
view.

Content, along with many other Ionic components, can be customized to modify its padding, margin, and more using the global styles provided in the [CSS Utilities](/docs/layout/css-utilities) or by individually styling it using CSS and the available [CSS Custom Properties](#css-custom-properties).

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/content/basic/index.md';

<Basic />

## Header & Footer

Content can be the only top-level component in a page, or it can be used alongside a [header](./header), [footer](./footer), or both. When used with a header or footer, it will adjust its size to fill the remaining height.

import HeaderFooter from '@site/static/ionic/usage/v8/content/header-footer/index.md';

<HeaderFooter />

## Fullscreen Content

By default, content fills the space between a [header](./header) and [footer](./footer) but does not go behind them. In certain cases, it may be desired to have the content scroll behind the header and footer, such as when the `translucent` property is set on either of them, or `opacity` is set on the toolbar. This can be achieved by setting the `fullscreen` property on the content to `true`.

import Fullscreen from '@site/static/ionic/usage/v8/content/fullscreen/index.md';

<Fullscreen />

## Fixed Content

To place elements outside of the scrollable area, assign them to the `fixed` slot. Doing so will [absolutely position](https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute_positioning) the element to the top left of the content. In order to change the position of the element, it can be styled using the [top, right, bottom, and left](https://developer.mozilla.org/en-US/docs/Web/CSS/position) CSS properties.

The `fixedSlotPlacement` property is used to determine if content in the `fixed` slot is placed before or after the main content in the DOM. When set to `before`, fixed slot content will be placed before the main content and will therefore receive keyboard focus before the main content receives keyboard focus. This can be useful when the main content contains an infinitely-scrolling list, preventing a [FAB](./fab) or other fixed content from being reachable by pressing the tab key.

import Fixed from '@site/static/ionic/usage/v8/content/fixed/index.md';

<Fixed />

## Scroll Methods

Content provides [methods](#methods) that can be called to scroll the content to the bottom, top, or to a specific point. They can be passed a `duration` in order to smoothly transition instead of instantly changing the position.

import ScrollMethods from '@site/static/ionic/usage/v8/content/scroll-methods/index.md';

<ScrollMethods />

## Scroll Events

Scroll events are disabled by default for content due to performance. However, they can be enabled by setting `scrollEvents` to `true`. This is necessary before listening to any of the scroll [events](#events).

import ScrollEvents from '@site/static/ionic/usage/v8/content/scroll-events/index.md';

<ScrollEvents />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/content/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/ionic/usage/v8/content/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS Custom Properties

import CSSProps from '@site/static/ionic/usage/v8/content/theming/css-properties/index.md';

<CSSProps />

### Safe Area Padding

The content component will not automatically apply padding to any of its sides to account for the [safe area](/docs/theming/advanced#safe-area-padding). This is because the content component is often used in conjunction with other components that apply their own padding, such as [headers](./header) and [footers](./footer). However, if the content component is being used on its own, it may be desired to apply padding to the safe area. This can be done through CSS by using the `--ion-safe-area-(dir)` variables described in [Application Variables](../theming/advanced.md#application-variables).

The most common use case for this is to apply padding to the top of the content to account for the status bar. This can be done by setting the `padding-top` property to the value of the `--ion-safe-area-top` variable.

```css
ion-content::part(scroll) {
  padding-top: var(--ion-safe-area-top, 0);
}
```

Another common use case is to apply padding to the left side of the content to account for the notch when the device is in landscape mode and the notch is on the left side. This can be done by setting the `padding-left` property to the value of the `--ion-safe-area-left` variable.

```css
ion-content::part(scroll) {
  padding-left: var(--ion-safe-area-left, 0);
}
```

import SafeArea from '@site/static/ionic/usage/v8/content/theming/safe-area/index.md';

<SafeArea />

## Interfaces

### ScrollBaseDetail

```typescript
interface ScrollBaseDetail {
  isScrolling: boolean
}
```

### ScrollDetail

```typescript
interface ScrollDetail extends GestureDetail, ScrollBaseDetail {
  scrollTop: number
  scrollLeft: number
}
```

### ScrollBaseCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing on the `ionScrollStart` and `ionScrollEnd` events.

```typescript
interface ScrollBaseCustomEvent extends CustomEvent {
  detail: ScrollBaseDetail
  target: HTMLIonContentElement
}
```

### ScrollCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing on the `ionScroll` event.

```typescript
interface ScrollCustomEvent extends ScrollBaseCustomEvent {
  detail: ScrollDetail
}
```

## Properties

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### fixedSlotPlacement

|                 |                                                                                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Controls where the fixed content is placed relative to the main content in the DOM. This can be used to control the order in which fixed elements receive keyboard focus. For example, if a FAB in the fixed slot should receive keyboard focus before the main page content, set this property to `'before'`. |
| **Attribute**   | `fixed-slot-placement`                                                                                                                                                                                                                                                                                         |
| **Type**        | `"after" ｜ "before"`                                                                                                                                                                                                                                                                                          |
| **Default**     | `'after'`                                                                                                                                                                                                                                                                                                      |

### forceOverscroll

|                 |                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true` and the content does not cause an overflow scroll, the scroll interaction will cause a bounce. If the content exceeds the bounds of ionContent, nothing will change. Note, this does not disable the system bounce on iOS. That is an OS level setting. |
| **Attribute**   | `force-overscroll`                                                                                                                                                                                                                                                |
| **Type**        | `boolean ｜ undefined`                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                       |

### fullscreen

|                 |                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the content will scroll behind the headers and footers. This effect can easily be seen by setting the toolbar to transparent. |
| **Attribute**   | `fullscreen`                                                                                                                             |
| **Type**        | `boolean`                                                                                                                                |
| **Default**     | `false`                                                                                                                                  |

### scrollEvents

|                 |                                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Because of performance reasons, ionScroll events are disabled by default, in order to enable them and start listening from (ionScroll), set this property to `true`. |
| **Attribute**   | `scroll-events`                                                                                                                                                      |
| **Type**        | `boolean`                                                                                                                                                            |
| **Default**     | `false`                                                                                                                                                              |

### scrollX

|                 |                                                                                         |
| --------------- | --------------------------------------------------------------------------------------- |
| **Description** | If you want to enable the content scrolling in the X axis, set this property to `true`. |
| **Attribute**   | `scroll-x`                                                                              |
| **Type**        | `boolean`                                                                               |
| **Default**     | `false`                                                                                 |

### scrollY

|                 |                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------- |
| **Description** | If you want to disable the content scrolling in the Y axis, set this property to `false`. |
| **Attribute**   | `scroll-y`                                                                                |
| **Type**        | `boolean`                                                                                 |
| **Default**     | `true`                                                                                    |

## Events

| Name             | Description                                                                                                     | Bubbles |
| ---------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| `ionScroll`      | Emitted while scrolling. This event is disabled by default. Set `scrollEvents` to `true` to enable.             | `true`  |
| `ionScrollEnd`   | Emitted when the scroll has ended. This event is disabled by default. Set `scrollEvents` to `true` to enable.   | `true`  |
| `ionScrollStart` | Emitted when the scroll has started. This event is disabled by default. Set `scrollEvents` to `true` to enable. | `true`  |

## Methods

### getScrollElement

|                 |                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Get the element where the actual scrolling takes place. This element can be used to subscribe to `scroll` events or manually modify `scrollTop`. However, it's recommended to use the API provided by `ion-content`:<br /><br />i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events and `scrollToPoint()` to scroll the content into a certain point. |
| **Signature**   | `getScrollElement() => Promise<HTMLElement>`                                                                                                                                                                                                                                                                                                                                    |

### scrollByPoint

|                 |                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Scroll by a specified X/Y distance in the component.                                                                                                                                   |
| **Signature**   | `scrollByPoint(x: number, y: number, duration: number) => Promise<void>`                                                                                                               |
| **Parameters**  | **x**: The amount to scroll by on the horizontal axis.<br/>**y**: The amount to scroll by on the vertical axis.<br/>**duration**: The amount of time to take scrolling by that amount. |

### scrollToBottom

|                 |                                                                                    |
| --------------- | ---------------------------------------------------------------------------------- |
| **Description** | Scroll to the bottom of the component.                                             |
| **Signature**   | `scrollToBottom(duration?: number) => Promise<void>`                               |
| **Parameters**  | **duration**: The amount of time to take scrolling to the bottom. Defaults to `0`. |

### scrollToPoint

|                 |                                                                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Scroll to a specified X/Y location in the component.                                                                                                                                                 |
| **Signature**   | `scrollToPoint(x: number ｜ undefined ｜ null, y: number ｜ undefined ｜ null, duration?: number) => Promise<void>`                                                                                  |
| **Parameters**  | **x**: The point to scroll to on the horizontal axis.<br/>**y**: The point to scroll to on the vertical axis.<br/>**duration**: The amount of time to take scrolling to that point. Defaults to `0`. |

### scrollToTop

|                 |                                                                                 |
| --------------- | ------------------------------------------------------------------------------- |
| **Description** | Scroll to the top of the component.                                             |
| **Signature**   | `scrollToTop(duration?: number) => Promise<void>`                               |
| **Parameters**  | **duration**: The amount of time to take scrolling to the top. Defaults to `0`. |

## CSS Shadow Parts

| Name         | Description                              |
| ------------ | ---------------------------------------- |
| `background` | The background of the content.           |
| `scroll`     | The scrollable container of the content. |

## CSS Custom Properties

    | Name | Description |

| --- | --- |
| `--background` | Background of the content |
| `--color` | Color of the content |
| `--keyboard-offset` | Keyboard offset of the content |
| `--offset-bottom` | Offset bottom of the content |
| `--offset-top` | Offset top of the content |
| `--padding-bottom` | Bottom padding of the content |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the content |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the content |
| `--padding-top` | Top padding of the content |

## Slots

| Name    | Description                                                          |
| ------- | -------------------------------------------------------------------- |
| ``      | Content is placed in the scrollable area if provided without a slot. |
| `fixed` | Should be used for fixed content that should not scroll.             |
