---
title: "ion-split-pane"
---

<head>
  <title>ion-split-pane: Split Plane for Menus and Multi-View Layouts</title>
  <meta name="description" content="ion-split-pane is useful when creating multi-view app layouts. It allows UI elements, like menus, to be displayed as the viewport width increases." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A split pane is useful when creating multi-view layouts. It allows UI elements, like menus, to be
displayed as the viewport width increases.

If the device's screen width is below a certain size, the split pane will collapse and the menu will be hidden. This is ideal for creating an app that will be served in a browser and deployed through the app store to phones and tablets.

## Basic Usage

:::note
This demo sets the `when` property to `'xs'` so the split pane always shows up. Your Ionic application does not need this if you want the split pane to collapse on smaller viewports. See [Setting Breakpoints](#setting-breakpoints) for more information.
:::

import Basic from '@site/static/ionic/usage/v8/split-pane/basic/index.md';

<Basic />

## Setting Breakpoints

By default, the split pane will expand when the screen is larger than 992px. To customize this, pass a breakpoint in the `when` property. The `when` property can accept a boolean value, any valid media query, or one of Ionic's predefined sizes.

```html
<!-- can be "xs", "sm", "md", "lg", or "xl" -->
<ion-split-pane when="md"></ion-split-pane>

<!-- can be any valid media query https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries -->
<ion-split-pane when="(min-width: 40px)"></ion-split-pane>
```

| Size | Value                 | Description                                                           |
| ---- | --------------------- | --------------------------------------------------------------------- |
| `xs` | `(min-width: 0px)`    | Show the split-pane when the min-width is 0px (meaning, always)       |
| `sm` | `(min-width: 576px)`  | Show the split-pane when the min-width is 576px                       |
| `md` | `(min-width: 768px)`  | Show the split-pane when the min-width is 768px                       |
| `lg` | `(min-width: 992px)`  | Show the split-pane when the min-width is 992px (default break point) |
| `xl` | `(min-width: 1200px)` | Show the split-pane when the min-width is 1200px                      |

## Theming

### CSS Custom Properties

import CSSProperties from '@site/static/ionic/usage/v8/split-pane/theming/css-properties/index.md';

<CSSProperties />

## Properties

### contentId

|                 |                                                                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The `id` of the main content. When using a router this is typically `ion-router-outlet`. When not using a router, this is typically your main view's `ion-content`. This is not the id of the `ion-content` inside of your `ion-menu`. |
| **Attribute**   | `content-id`                                                                                                                                                                                                                           |
| **Type**        | `string ｜ undefined`                                                                                                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                                                                                                            |

### disabled

|                 |                                           |
| --------------- | ----------------------------------------- |
| **Description** | If `true`, the split pane will be hidden. |
| **Attribute**   | `disabled`                                |
| **Type**        | `boolean`                                 |
| **Default**     | `false`                                   |

### when

|                 |                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | When the split-pane should be shown. Can be a CSS media query expression, or a shortcut expression. Can also be a boolean expression. |
| **Attribute**   | `when`                                                                                                                                |
| **Type**        | `boolean ｜ string`                                                                                                                   |
| **Default**     | `QUERY['lg']`                                                                                                                         |

## Events

| Name                  | Description                                                        | Bubbles |
| --------------------- | ------------------------------------------------------------------ | ------- |
| `ionSplitPaneVisible` | Expression to be called when the split-pane visibility has changed | `true`  |

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
  | `--border` | Border between panes |
| `--side-max-width` | Maximum width of the side pane. Does not apply when split pane is collapsed. |
| `--side-min-width` | Minimum width of the side pane. Does not apply when split pane is collapsed. |
| `--side-width` | Width of the side pane. Does not apply when split pane is collapsed. |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--border` | Border between panes |
| `--side-max-width` | Maximum width of the side pane. Does not apply when split pane is collapsed. |
| `--side-min-width` | Minimum width of the side pane. Does not apply when split pane is collapsed. |
| `--side-width` | Width of the side pane. Does not apply when split pane is collapsed. |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
