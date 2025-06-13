---
title: "ion-datetime-button"
---

<head>
  <title>ion-datetime-button: Ionic Input for Datetime Picker</title>
  <meta name="description" content="Datetime button links with a datetime instance to easily a datetime in a popover, modal, and more." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Datetime Button links with a [Datetime](./datetime) component to display the formatted date and time. It also provides buttons to present the datetime in a modal, popover, and more.

## Overview

Datetime Button should be used when space is constrained. This component displays buttons which show the current date and time values. When the buttons are tapped, the date or time pickers open in the overlay.

When using Datetime Button with a JavaScript framework such as Angular, React, or Vue be sure to use the [keepContentsMounted property on ion-modal](./modal#keepcontentsmounted) or the [keepContentsMounted property on ion-popover](./popover#keepcontentsmounted). This allows the linked datetime instance to be mounted even if the overlay has not been presented yet.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/datetime-button/basic/index.md';

<Basic />

## Localization

The localized text on `ion-datetime-button` is determined by the `locale` property on the associated `ion-datetime` instance. See [Datetime Localization](./datetime#localization) for more details.

## Format Options

You can customize the format of the date and time in a Datetime Button by providing `formatOptions` on the associated Datetime instance. See [Datetime Format Options](./datetime#format-options) for more details.

import FormatOptions from '@site/static/ionic/usage/v8/datetime-button/format-options/index.md';

<FormatOptions />

## Usage with Modals and Popovers

`ion-datetime-button` must be associated with a mounted `ion-datetime` instance. As a result, [Inline Modals](./modal#inline-modals-recommended) and [Inline Popovers](./popover#inline-popovers) with the `keepContentsMounted` property set to `true` must be used.

<!--
## Customization

TODO

### Buttons

TODO

### Theming

TODO
-->

## Properties

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `'primary'`                                                                                                                                                                                                                                                            |

### datetime

|                 |                                                                            |
| --------------- | -------------------------------------------------------------------------- |
| **Description** | The ID of the `ion-datetime` instance associated with the datetime button. |
| **Attribute**   | `datetime`                                                                 |
| **Type**        | `string ｜ undefined`                                                      |
| **Default**     | `undefined`                                                                |

### disabled

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the button. |
| **Attribute**   | `disabled`                                           |
| **Type**        | `boolean`                                            |
| **Default**     | `false`                                              |

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

| Name     | Description                                         |
| -------- | --------------------------------------------------- |
| `native` | The native HTML button that wraps the slotted text. |

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

| Name          | Description                                  |
| ------------- | -------------------------------------------- |
| `date-target` | Content displayed inside of the date button. |
| `time-target` | Content displayed inside of the time button. |
