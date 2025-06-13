---
title: "ion-note"
---

<head>
  <title>ion-note: Note Text Elements for iOS and Android Ionic Apps</title>
  <meta name="description" content="ion-notes are text elements generally used as subtitles that provide more information. Learn how notes can be used and styled on iOS and Android Ionic apps." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Notes are text elements generally used as subtitles that provide more information. They are styled to appear grey by default. Notes can be used in an item as metadata text.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/note/basic/index.md';

<Basic />

## Item Notes

import Item from '@site/static/ionic/usage/v8/note/item/index.md';

<Item />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/note/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/ionic/usage/v8/note/theming/css-properties/index.md';

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
  | `--color` | Color of the note |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--color` | Color of the note |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
