---
title: "ion-backdrop"
---

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Backdrops are full screen components that overlay other components. They are useful behind components that transition in on top of other content and can be used to dismiss that component.

## Basic Usage

The backdrop prevents clicking or tapping on the content behind it. It is transparent by default, so the below demo includes CSS to make it visible.

import Basic from '@site/static/ionic/usage/v8/backdrop/basic/index.md';

<Basic />

## Styling

The backdrop can be customized by assigning CSS properties directly to the backdrop element. Common properties include `background-color`, `background` and `opacity`.

Content can be displayed above the backdrop by setting a `z-index` on the content, higher than the backdrop (defaults to `2`).

import Styling from '@site/static/ionic/usage/v8/backdrop/styling/index.md';

<Styling />

## Properties

### stopPropagation

|                 |                                                       |
| --------------- | ----------------------------------------------------- |
| **Description** | If `true`, the backdrop will stop propagation on tap. |
| **Attribute**   | `stop-propagation`                                    |
| **Type**        | `boolean`                                             |
| **Default**     | `true`                                                |

### tappable

|                 |                                                                                       |
| --------------- | ------------------------------------------------------------------------------------- |
| **Description** | If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event. |
| **Attribute**   | `tappable`                                                                            |
| **Type**        | `boolean`                                                                             |
| **Default**     | `true`                                                                                |

### visible

|                 |                                          |
| --------------- | ---------------------------------------- |
| **Description** | If `true`, the backdrop will be visible. |
| **Attribute**   | `visible`                                |
| **Type**        | `boolean`                                |
| **Default**     | `true`                                   |

## Events

| Name             | Description                          | Bubbles |
| ---------------- | ------------------------------------ | ------- |
| `ionBackdropTap` | Emitted when the backdrop is tapped. | `true`  |

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
