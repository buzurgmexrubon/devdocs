---
title: "ion-card"
---

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<head>
  <title>ion-card: Card UI Components for Ionic Framework API</title>
  <meta name="description" content="ion-card UI components are entry points to more detailed information. Cards can be single components or made up of some header, title, subtitle, and content." />
</head>

<EncapsulationPill type="shadow" />

Cards are containers that display content such as text, images, buttons, and lists.
A card can be a single component, but is often made up of a header, title, subtitle,
and content. Cards are broken up into several components to accommodate this structure:
[card header](./card-header), [card title](./card-title), [card subtitle](./card-subtitle),
and [card content](./card-content).

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/card/basic/index.md';

<Basic />

## Media Cards

import Media from '@site/static/ionic/usage/v8/card/media/index.md';

<Media />

## Card Buttons

import Buttons from '@site/static/ionic/usage/v8/card/buttons/index.md';

<Buttons />

## List Card

import List from '@site/static/ionic/usage/v8/card/list/index.md';

<List />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/card/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/ionic/usage/v8/card/theming/css-properties/index.md';

<CSSProps />

## Properties

### button

|                 |                                                                         |
| --------------- | ----------------------------------------------------------------------- |
| **Description** | If `true`, a button tag will be rendered and the card will be tappable. |
| **Attribute**   | `button`                                                                |
| **Type**        | `boolean`                                                               |
| **Default**     | `false`                                                                 |

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
| **Description** | If `true`, the user cannot interact with the card. |
| **Attribute**   | `disabled`                                         |
| **Type**        | `boolean`                                          |
| **Default**     | `false`                                            |

### download

|                 |                                                                                                                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). |
| **Attribute**   | `download`                                                                                                                                                                                                                                                                                |
| **Type**        | `string ｜ undefined`                                                                                                                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                               |

### href

|                 |                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Description** | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered. |
| **Attribute**   | `href`                                                                                                                  |
| **Type**        | `string ｜ undefined`                                                                                                   |
| **Default**     | `undefined`                                                                                                             |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### rel

|                 |                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types). |
| **Attribute**   | `rel`                                                                                                                                                                                  |
| **Type**        | `string ｜ undefined`                                                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                                                            |

### routerAnimation

|                 |                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Description** | When using a router, it specifies the transition animation when navigating to another page using `href`. |
| **Attribute**   | `router-animation`                                                                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined`                                                  |
| **Default**     | `undefined`                                                                                              |

### routerDirection

|                 |                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Description** | When using a router, it specifies the transition direction when navigating to another page using `href`. |
| **Attribute**   | `router-direction`                                                                                       |
| **Type**        | `"back" ｜ "forward" ｜ "root"`                                                                          |
| **Default**     | `'forward'`                                                                                              |

### target

|                 |                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                            |
| **Type**        | `string ｜ undefined`                                                                                                                               |
| **Default**     | `undefined`                                                                                                                                         |

### type

|                 |                                                                                      |
| --------------- | ------------------------------------------------------------------------------------ |
| **Description** | The type of the button. Only used when an `onclick` or `button` property is present. |
| **Attribute**   | `type`                                                                               |
| **Type**        | `"button" ｜ "reset" ｜ "submit"`                                                    |
| **Default**     | `'button'`                                                                           |

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name     | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| `native` | The native HTML button, anchor, or div element that wraps all child elements. |

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
  | `--background` | Background of the card |
| `--color` | Color of the card |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the card |
| `--color` | Color of the card |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
