---
title: "ion-footer"
---

<head>
  <title>ion-footer: Page Footer | Ionic App Footer Root Component</title>
  <meta name="description" content="A footer is a root component that sits at the bottom of a page. Ionic footers can be a wrapper for ion-toolbar to make sure the content area is sized correctly." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

Footer is a root component of a page that aligns itself to the bottom of the page. It is recommended to be used as a wrapper for one or more [toolbars](./toolbar), but it can be used to wrap any element. When a toolbar is used inside of a footer, the content will be adjusted so it is sized correctly, and the footer will account for any device safe areas.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/footer/basic/index.md';

<Basic />

## Translucent Footer

Footers can match the transparency found in native iOS applications by setting the `translucent` property. In order to see the content scrolling behind the footer, the `fullscreen` property needs to be set on the content. This effect will only apply when the mode is `"ios"` and the device supports [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility).

import Translucent from '@site/static/ionic/usage/v8/footer/translucent/index.md';

<Translucent />

## Fade Footer

Many native iOS applications have a fade effect on the toolbar. This can be achieved by setting the `collapse` property on the footer to `"fade"`. When the content is scrolled to the end, the background and border on the footer will fade away. This effect will only apply when the mode is `"ios"`.

import Fade from '@site/static/ionic/usage/v8/footer/fade/index.md';

<Fade />

### Usage with Virtual Scroll

A fade footer requires a scroll container to work properly. When using a virtual scrolling solution, a custom scroll target needs to be provided. Scrolling on the content needs to be disabled and the `.ion-content-scroll-host` class needs to be added to the element responsible for scrolling.

import CustomScrollTarget from '@site/static/ionic/usage/v8/footer/custom-scroll-target/index.md';

<CustomScrollTarget />

## Borders

In `"md"` mode, the footer will have a `box-shadow` on the top. In `"ios"` mode, it will receive a `border` on the top. These can be removed by adding the `.ion-no-border` class to the footer.

import NoBorder from '@site/static/ionic/usage/v8/footer/no-border/index.md';

<NoBorder />

## Properties

### collapse

|                 |                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------- |
| **Description** | Describes the scroll effect that will be applied to the footer. Only applies in iOS mode. |
| **Attribute**   | `collapse`                                                                                |
| **Type**        | `"fade" ｜ undefined`                                                                     |
| **Default**     | `undefined`                                                                               |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### translucent

|                 |                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the footer will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).<br /><br />Note: In order to scroll content behind the footer, the `fullscreen` attribute needs to be set on the content. |
| **Attribute**   | `translucent`                                                                                                                                                                                                                                                                                                                                   |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                                       |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                                         |

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
