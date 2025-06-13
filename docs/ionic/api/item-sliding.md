---
title: "ion-item-sliding"
---

<head>
  <title>ion-item-sliding: Slide Buttons | Slide Right to Left</title>
  <meta name="description" content="ion-item-sliding component contains items that are dragged to reveal buttons. Options are revealed when the sliding item is swiped from left to right." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

A sliding item contains an item that can be dragged to reveal option buttons. It requires an [item](./item) component as a child. All options to reveal should be placed in the [item options](./item-options) element.

## Basic Usage

Sliding item options are placed on the `"end"` side of the item by default. This means that options are revealed when the item is swiped from end to start, i.e. from right to left in LTR, but from left to right in RTL. To place them on the opposite side, so that they are revealed when swiping in the opposite direction, set the side attribute to `"start"` on the [item options](./item-options) element. Up to two item options can be used at the same time in order to reveal two different sets of options depending on the swiping direction.

import Basic from '@site/static/ionic/usage/v8/item-sliding/basic/index.md';

<Basic />

## Icon Options

When an icon is placed alongside text in the [item option](./item-option), it will display the icon on top of the text by default. The slot on the icon can be changed to any of the available [item option slots](./item-option#slots) to change its position.

import Icons from '@site/static/ionic/usage/v8/item-sliding/icons/index.md';

<Icons />

## Expandable Options

Options can be expanded to take up the full width of the parent `ion-item` if you swipe past a certain point. This can be combined with the `ionSwipe` event on the [item options](./item-options) to call a method when the item is fully swiped.

import Expandable from '@site/static/ionic/usage/v8/item-sliding/expandable/index.md';

<Expandable />

## Interfaces

### ItemSlidingCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ItemSlidingCustomEvent extends CustomEvent {
  target: HTMLIonItemSlidingElement
}
```

## Properties

### disabled

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the sliding item. |
| **Attribute**   | `disabled`                                                 |
| **Type**        | `boolean`                                                  |
| **Default**     | `false`                                                    |

## Events

| Name      | Description                                | Bubbles |
| --------- | ------------------------------------------ | ------- |
| `ionDrag` | Emitted when the sliding position changes. | `true`  |

## Methods

### close

|                 |                                                                           |
| --------------- | ------------------------------------------------------------------------- |
| **Description** | Close the sliding item. Items can also be closed from the [List](./list). |
| **Signature**   | `close() => Promise<void>`                                                |

### closeOpened

|                 |                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------- |
| **Description** | Close all of the sliding items in the list. Items can also be closed from the [List](./list). |
| **Signature**   | `closeOpened() => Promise<boolean>`                                                           |

### getOpenAmount

|                 |                                            |
| --------------- | ------------------------------------------ |
| **Description** | Get the amount the item is open in pixels. |
| **Signature**   | `getOpenAmount() => Promise<number>`       |

### getSlidingRatio

|                 |                                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Get the ratio of the open amount of the item compared to the width of the options. If the number returned is positive, then the options on the right side are open. If the number returned is negative, then the options on the left side are open. If the absolute value of the number is greater than 1, the item is open more than the width of the options. |
| **Signature**   | `getSlidingRatio() => Promise<number>`                                                                                                                                                                                                                                                                                                                          |

### open

|                 |                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Open the sliding item.                                                                                                                |
| **Signature**   | `open(side: Side ｜ undefined) => Promise<void>`                                                                                      |
| **Parameters**  | **side**: The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item. |

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
