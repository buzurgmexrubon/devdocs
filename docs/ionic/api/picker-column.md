---
title: "ion-picker-column"
---

<head>
  <title>ion-picker-column: Individual columns within a picker</title>
  <meta name="description" content="An individual column within a picker." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

An individual column within a picker. Visit the [`ion-picker`](./picker.md) documentation for more details.

## Properties

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `'primary'`                                                                                                                                                                                                                                                            |

### disabled

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the picker. |
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

### value

|                 |                                    |
| --------------- | ---------------------------------- |
| **Description** | The selected option in the picker. |
| **Attribute**   | `value`                            |
| **Type**        | `number ｜ string ｜ undefined`    |
| **Default**     | `undefined`                        |

## Events

| Name        | Description                                                                                                                 | Bubbles |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ionChange` | Emitted when the value has changed.<br /><br />This event will not emit when programmatically setting the `value` property. | `true`  |

## Methods

### setFocus

|                 |                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Sets focus on the scrollable container within the picker column. Use this method instead of the global `pickerColumn.focus()`. |
| **Signature**   | `setFocus() => Promise<void>`                                                                                                  |

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

| Name     | Description                                              |
| -------- | -------------------------------------------------------- |
| `prefix` | Content to show on the left side of the picker options.  |
| `suffix` | Content to show on the right side of the picker options. |
