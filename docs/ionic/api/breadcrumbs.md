---
title: "ion-breadcrumbs"
---

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Breadcrumbs are navigation items that are used to indicate where a user is on an app or site. They should be used for large sites and apps with hierarchically arranged pages. Breadcrumbs can be collapsed based on the maximum number that can show, and the collapsed indicator can be clicked on to present a popover with more information or expand the collapsed breadcrumbs.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/breadcrumbs/basic/index.md';

<Basic />

## Using Icons

### Icons on Items

import IconsOnItems from '@site/static/ionic/usage/v8/breadcrumbs/icons/icons-on-items/index.md';

<IconsOnItems />

### Custom Separators

import CustomSeparators from '@site/static/ionic/usage/v8/breadcrumbs/icons/custom-separators/index.md';

<CustomSeparators />

## Collapsing Items

### Max Items

If there are more items than the value of `maxItems`, the breadcrumbs will be collapsed. By default, only the first and last items will be shown.

import MaxItems from '@site/static/ionic/usage/v8/breadcrumbs/collapsing-items/max-items/index.md';

<MaxItems />

### Items Before or After Collapse

Once the items are collapsed, the number of items to show can be controlled by the `itemsBeforeCollapse` and `itemsAfterCollapse` properties.

import ItemsBeforeAfter from '@site/static/ionic/usage/v8/breadcrumbs/collapsing-items/items-before-after/index.md';

<ItemsBeforeAfter />

### Collapsed Indicator Click -- Expand Breadcrumbs

Clicking the collapsed indicator will fire the `ionCollapsedClick` event. This can be used to, for example, expand the breadcrumbs.

import ExpandOnClick from '@site/static/ionic/usage/v8/breadcrumbs/collapsing-items/expand-on-click/index.md';

<ExpandOnClick />

### Collapsed Indicator Click -- Present Popover

The `ionCollapsedClick` event can also be used to present an overlay (in this case, an `ion-popover`) showing the hidden breadcrumbs.

import PopoverOnClick from '@site/static/ionic/usage/v8/breadcrumbs/collapsing-items/popover-on-click/index.md';

<PopoverOnClick />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/breadcrumbs/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/ionic/usage/v8/breadcrumbs/theming/css-properties/index.md';

<CSSProps />

## Properties

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### itemsAfterCollapse

|                 |                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The number of breadcrumbs to show after the collapsed indicator. If `itemsBeforeCollapse` + `itemsAfterCollapse` is greater than `maxItems`, the breadcrumbs will not be collapsed. |
| **Attribute**   | `items-after-collapse`                                                                                                                                                              |
| **Type**        | `number`                                                                                                                                                                            |
| **Default**     | `1`                                                                                                                                                                                 |

### itemsBeforeCollapse

|                 |                                                                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The number of breadcrumbs to show before the collapsed indicator. If `itemsBeforeCollapse` + `itemsAfterCollapse` is greater than `maxItems`, the breadcrumbs will not be collapsed. |
| **Attribute**   | `items-before-collapse`                                                                                                                                                              |
| **Type**        | `number`                                                                                                                                                                             |
| **Default**     | `1`                                                                                                                                                                                  |

### maxItems

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Description** | The maximum number of breadcrumbs to show before collapsing. |
| **Attribute**   | `max-items`                                                  |
| **Type**        | `number ｜ undefined`                                        |
| **Default**     | `undefined`                                                  |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

## Events

| Name                | Description                                         | Bubbles |
| ------------------- | --------------------------------------------------- | ------- |
| `ionCollapsedClick` | Emitted when the collapsed indicator is clicked on. | `true`  |

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
