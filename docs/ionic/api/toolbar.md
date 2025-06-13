---
title: "ion-toolbar"
---

<head>
  <title>ion-toolbar: Customize App Menu Toolbar Buttons and Icons</title>
  <meta name="description" content="Ion-toolbar component lets you customize toolbar buttons on your app menu. Add fixed toolbars above or below content or use full screen to scroll with content." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Toolbars are generally positioned above or below content and provide content and actions for the current screen. When placed within the [content](./content), toolbars will scroll with the content.

Toolbars can contain several different components including titles, buttons, icons, back buttons, menu buttons, searchbars, segments, progress bars, and more.

## Basic Usage

It is recommended to put a toolbar inside of a [header](./header) or [footer](./footer) for proper positioning. When a toolbar is placed in a header it will appear fixed at the top of the content. When it is placed in a footer it will appear fixed at the bottom. Fullscreen content will scroll behind a toolbar in a header or footer. A [title](./title) component can be used to display text inside of the toolbar.

import Basic from '@site/static/ionic/usage/v8/toolbar/basic/index.md';

<Basic />

## Buttons in Toolbars

Buttons placed in a toolbar should be placed inside of the [buttons](./buttons) component. The buttons component can be positioned inside of the toolbar using a named [slot](#slots). The `"primary"` and `"secondary"` slots behave differently in `ios` and `md` mode.

The buttons component can wrap a standard [button](./button), [back button](./back-button), [menu button](./menu-button), or several of any of them. A button in a toolbar is styled to be clear by default, but this can be changed using the [`fill`](./button#fill) property on the button. The properties included on back button and menu button in this example are for display purposes; see their respective documentation for proper usage.

import Buttons from '@site/static/ionic/usage/v8/toolbar/buttons/index.md';

<Buttons />

## Searchbars in Toolbars

A [searchbar](./searchbar) can be placed inside of a toolbar to search through the content. It should be the only child component of the toolbar, and will take up the full width and height.

import Searchbars from '@site/static/ionic/usage/v8/toolbar/searchbars/index.md';

<Searchbars />

## Segments in Toolbars

[Segments](./segment) are generally used in toolbars to toggle between two different content views on the same page. They can be placed in a toolbar with other components, such as buttons, but should not be placed alongside a title.

import Segments from '@site/static/ionic/usage/v8/toolbar/segments/index.md';

<Segments />

## Progress Bars in Toolbars

A [progress bar](./progress-bar) is used as a loading indicator to show an ongoing process in an app. Progress bars can be placed with any other components inside of a toolbar as they will align with the bottom of the toolbar.

import ProgressBars from '@site/static/ionic/usage/v8/toolbar/progress-bars/index.md';

<ProgressBars />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/toolbar/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/ionic/usage/v8/toolbar/theming/css-properties/index.md';

<CSSProps />

## Borders

In `md` mode, the `<ion-header>` will receive a box-shadow on the bottom, and the `<ion-footer>` will receive a box-shadow on the top. In `ios` mode, the `<ion-header>` will receive a border on the bottom, and the `<ion-footer>` will receive a border on the top.

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

| Name         | Description                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------ |
| `background` | The background of the toolbar, covering the entire area behind the toolbar content.              |
| `container`  | The container that wraps all toolbar content, including the default slot and named slot content. |
| `content`    | The container for the default slot, wrapping content provided without a named slot.              |

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
  | `--background` | Background of the toolbar |
| `--border-color` | Color of the toolbar border |
| `--border-style` | Style of the toolbar border |
| `--border-width` | Width of the toolbar border |
| `--color` | Color of the toolbar text |
| `--min-height` | Minimum height of the toolbar |
| `--opacity` | Opacity of the toolbar background |
| `--padding-bottom` | Bottom padding of the toolbar |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the toolbar |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the toolbar |
| `--padding-top` | Top padding of the toolbar |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the toolbar |
| `--border-color` | Color of the toolbar border |
| `--border-style` | Style of the toolbar border |
| `--border-width` | Width of the toolbar border |
| `--color` | Color of the toolbar text |
| `--min-height` | Minimum height of the toolbar |
| `--opacity` | Opacity of the toolbar background |
| `--padding-bottom` | Bottom padding of the toolbar |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the toolbar |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the toolbar |
| `--padding-top` | Top padding of the toolbar |


</TabItem>
</Tabs>

```

## Slots

| Name        | Description                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| ``          | Content is placed between the named slots if provided without a slot.                                    |
| `end`       | Content is placed to the right of the toolbar text in LTR, and to the left in RTL.                       |
| `primary`   | Content is placed to the right of the toolbar text in `ios` mode, and to the far right in `md` mode.     |
| `secondary` | Content is placed to the left of the toolbar text in `ios` mode, and directly to the right in `md` mode. |
| `start`     | Content is placed to the left of the toolbar text in LTR, and to the right in RTL.                       |
