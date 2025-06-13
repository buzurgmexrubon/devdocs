---
title: "ion-item-options"
---

<head>
  <title>ion-item-options: Option Button Components for Ionic Apps</title>
  <meta name="description" content="ion-item-options are for ion-item-sliding. These option buttons can be placed either on the start or end side. Read to learn more about use on Ionic apps." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

The item options component is a container for the [item option](./item-option) buttons in a sliding item. These buttons can be placed either on the [start or end side](#side-description).

See the [item sliding](./item-sliding) documentation for more information.

## Side Description

| Side    | Position                                                        | Swipe Direction                                                   |
| ------- | --------------------------------------------------------------- | ----------------------------------------------------------------- |
| `start` | To the `left` of the content in LTR, and to the `right` in RTL. | From `left` to `right` in LTR, and from `right` to `left` in RTL. |
| `end`   | To the `right` of the content in LTR, and to the `left` in RTL. | From `right` to `left` in LTR, and from `left` to `right` in RTL. |

## Properties

### side

|                 |                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each. |
| **Attribute**   | `side`                                                                                                                                                      |
| **Type**        | `"end" ｜ "start"`                                                                                                                                          |
| **Default**     | `'end'`                                                                                                                                                     |

## Events

| Name       | Description                                  | Bubbles |
| ---------- | -------------------------------------------- | ------- |
| `ionSwipe` | Emitted when the item has been fully swiped. | `true`  |

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
