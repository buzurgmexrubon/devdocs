---
title: "ion-label"
---

<head>
  <title>ion-label: Item Label Color and Properties for Applications</title>
  <meta name="description" content="Label is a wrapper element that can be used in combination with other Ionic components. Easily design item label colors and other properties with ion-label." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Label is an element used primarily to add text content to [Item](./item.md) components. Label can also be used inside of form control components such as [Input](./input.md) or [Radio](./radio.md) when specifying the visible label, but it is not required.

The position of the label inside of an item can be inline, fixed, stacked, or floating.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/label/basic/index.md';

<Basic />

## Item Labels

import Item from '@site/static/ionic/usage/v8/label/item/index.md';

<Item />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/label/theming/colors/index.md';

<Colors />

## Properties

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### position

|                 |                                                                         |
| --------------- | ----------------------------------------------------------------------- |
| **Description** | The position determines where and how the label behaves inside an item. |
| **Attribute**   | `position`                                                              |
| **Type**        | `"fixed" ｜ "floating" ｜ "stacked" ｜ undefined`                       |
| **Default**     | `undefined`                                                             |

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

```mdx-code-block
<Tabs
  groupId="mode"
  defaultValue="ios"
  values={[
    { value: 'ios', label: 'iOS' },
    { value: 'md', label: 'MD' },
  ]
}>
<TabItem value="ios">


    | Name | Description |
  | --- | --- |
  | `--color` | Color of the label. This property is only available when using `ion-label` inside of an `ion-item`. |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--color` | Color of the label. This property is only available when using `ion-label` inside of an `ion-item`. |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
