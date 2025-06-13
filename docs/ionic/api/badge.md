---
title: "ion-badge"
---

<head>
  <title>ion-badge: iOS & Android App Notification Badge Icons</title>
  <meta name="description" content="Badges are inline block elements that appear near other elements on iOS & Android apps—use ion-badges as notifications that indicate how many items there are." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Badges are inline block elements that usually appear near another element. Typically they contain a number or other characters. They can be used as a notification that there are additional items associated with an element and indicate how many items there are. Badges are hidden if no content is passed in.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/badge/basic/index.md';

<Basic />

## Badges in Tab Buttons

Badges can be added inside a tab button, often used to indicate notifications or highlight additional items associated with the element.

:::info
Empty badges are only available for `md` mode.
:::

import InsideTabBar from '@site/static/ionic/usage/v8/badge/inside-tab-bar/index.md';

<InsideTabBar />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/badge/theming/colors/index.md';

<Colors />

### CSS Properties

import CSSProps from '@site/static/ionic/usage/v8/badge/theming/css-properties/index.md';

<CSSProps />

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
  | `--background` | Background of the badge |
| `--color` | Text color of the badge |
| `--padding-bottom` | Bottom padding of the badge |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the badge |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the badge |
| `--padding-top` | Top padding of the badge |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the badge |
| `--color` | Text color of the badge |
| `--padding-bottom` | Bottom padding of the badge |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the badge |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the badge |
| `--padding-top` | Top padding of the badge |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
