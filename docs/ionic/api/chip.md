---
title: "ion-chip"
---

<head>
  <title>ion-chip: Text, Icon and Avatar for Ionic Framework Apps</title>
  <meta name="description" content="ion-chips represent complex entities in small blocks, such as a contact. A chip can contain several different elements such as names, avatars, text, and icons." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Chips represent complex entities in small blocks, such as a contact. A chip can contain several different elements such as avatars, text, and icons.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/chip/basic/index.md';

<Basic />

## Slotting Components and Icons

import SlotExample from '@site/static/ionic/usage/v8/chip/slots/index.md';

<SlotExample />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/chip/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/ionic/usage/v8/chip/theming/css-properties/index.md';

<CSSProps />

## Properties

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### disabled

|                 |                                                    |
| --------------- | -------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the chip. |
| **Attribute**   | `disabled`                                         |
| **Type**        | `boolean`                                          |
| **Default**     | `false`                                            |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### outline

|                 |                                  |
| --------------- | -------------------------------- |
| **Description** | Display an outline style button. |
| **Attribute**   | `outline`                        |
| **Type**        | `boolean`                        |
| **Default**     | `false`                          |

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
  | `--background` | Background of the chip |
| `--color` | Color of the chip |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the chip |
| `--color` | Color of the chip |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
