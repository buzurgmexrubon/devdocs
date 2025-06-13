---
title: "ion-list-header"
---

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

List headers are block elements that are used to describe the contents of a [list](./list). Unlike [item dividers](./item-divider), list headers should only be used once at the top of a list of [items](./item).

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/list-header/basic/index.md';

<Basic />

## Buttons in List Headers

A [button](./button) placed in a list header can be useful for showing part of a list and redirecting to the full list with the button.

import Buttons from '@site/static/ionic/usage/v8/list-header/buttons/index.md';

<Buttons />

## List Header Lines

List headers do not show a bottom border by default. The `lines` property can be modified to `"full"` or `"inset"` which will show a full width border or an inset border with left padding, respectively.

import Lines from '@site/static/ionic/usage/v8/list-header/lines/index.md';

<Lines />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/list-header/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/ionic/usage/v8/list-header/theming/css-properties/index.md';

<CSSProps />

## Properties

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### lines

|                 |                                                               |
| --------------- | ------------------------------------------------------------- |
| **Description** | How the bottom border should be displayed on the list header. |
| **Attribute**   | `lines`                                                       |
| **Type**        | `"full" ｜ "inset" ｜ "none" ｜ undefined`                    |
| **Default**     | `undefined`                                                   |

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
  | `--background` | Background of the list header |
| `--border-color` | Color of the list header border |
| `--border-style` | Style of the list header border |
| `--border-width` | Width of the list header border |
| `--color` | Color of the list header text |
| `--inner-border-width` | Width of the inner list header border |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the list header |
| `--border-color` | Color of the list header border |
| `--border-style` | Style of the list header border |
| `--border-width` | Width of the list header border |
| `--color` | Color of the list header text |
| `--inner-border-width` | Width of the inner list header border |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
