---
title: "ion-list"
---

<head>
  <title>ion-list: Item List View Component for iOS and Android Apps</title>
  <meta name="description" content="ion-lists are made up of multiple rows of items containing text, icons, toggles, and more. Learn about the list view component for iOS and Android Ionic apps." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

Lists are made up of multiple rows of [items](./item) which can contain text, buttons, toggles,
icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.

Lists support several interactions including swiping items to reveal options, dragging to [reorder](./reorder) items within the list, and deleting items.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/list/basic/index.md';

<Basic />

## Inset List

Adding the `inset` property to a list will apply margin around the list. In `ios` mode it will also add rounded corners to the list.

import Inset from '@site/static/ionic/usage/v8/list/inset/index.md';

<Inset />

## List Lines

Adding the `lines` property to a list will adjust the bottom borders of all of the items in the list. Setting it to `"full"` will display full width borders, `"inset"` will display borders adjusted with left padding, and `"none"` will show no borders. If the `lines` property is set on an item in a list, that will take priority over the property on the list.

import Lines from '@site/static/ionic/usage/v8/list/lines/index.md';

<Lines />

## Properties

### inset

|                 |                                                                     |
| --------------- | ------------------------------------------------------------------- |
| **Description** | If `true`, the list will have margin around it and rounded corners. |
| **Attribute**   | `inset`                                                             |
| **Type**        | `boolean`                                                           |
| **Default**     | `false`                                                             |

### lines

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | How the bottom border should be displayed on all items. |
| **Attribute**   | `lines`                                                 |
| **Type**        | `"full" ｜ "inset" ｜ "none" ｜ undefined`              |
| **Default**     | `undefined`                                             |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

## Events

No events available for this component.

## Methods

### closeSlidingItems

|                 |                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `ion-item-sliding` are used inside the list, this method closes any open sliding item.<br /><br />Returns `true` if an actual `ion-item-sliding` is closed. |
| **Signature**   | `closeSlidingItems() => Promise<boolean>`                                                                                                                      |

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
