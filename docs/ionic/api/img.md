---
title: "ion-img"
---

<head>
  <title>ion-img: Img Tag to Lazy Load Images in Viewport</title>
  <meta name="description" content="Img tag lazy loads images whenever the tag is in the viewport. Utilize this component when generating large lists—as images are only loaded when visible." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Img is a tag that will lazily load an image whenever the tag is in the viewport. This is extremely useful when generating a large list as images are only loaded when they're visible. The component uses [Intersection Observer](https://caniuse.com/#feat=intersectionobserver) internally, which is supported in most modern browsers, but falls back to a `setTimeout` when it is not supported.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/img/basic/index.md';

<Basic />

## Properties

### alt

|                 |                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | This attribute defines the alternative text describing the image. Users will see this text displayed if the image URL is wrong, the image is not in one of the supported formats, or if the image is not yet downloaded. |
| **Attribute**   | `alt`                                                                                                                                                                                                                    |
| **Type**        | `string ｜ undefined`                                                                                                                                                                                                    |
| **Default**     | `undefined`                                                                                                                                                                                                              |

### src

|                 |                                                                     |
| --------------- | ------------------------------------------------------------------- |
| **Description** | The image URL. This attribute is mandatory for the `<img>` element. |
| **Attribute**   | `src`                                                               |
| **Type**        | `string ｜ undefined`                                               |
| **Default**     | `undefined`                                                         |

## Events

| Name             | Description                                 | Bubbles |
| ---------------- | ------------------------------------------- | ------- |
| `ionError`       | Emitted when the img fails to load          | `true`  |
| `ionImgDidLoad`  | Emitted when the image has finished loading | `true`  |
| `ionImgWillLoad` | Emitted when the img src has been set       | `true`  |

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name    | Description              |
| ------- | ------------------------ |
| `image` | The inner `img` element. |

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
