---
title: "ion-input-password-toggle"
---

<head>
  <title>ion-input-password-toggle: Toggle the visibility of a password in Input</title>
  <meta name="description" content="ion-input-password-toggle is a companion component to ion-input. It allows users to toggle the visibility of text in a password input." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The InputPasswordToggle component is a companion component to [Input](./input). It allows users to toggle the visibility of text in a password input.

## Basic Usage

:::info
InputPasswordToggle must be used with an [Input](./input) that has its [`type`](./input/#type) property set to either `'text'` or `'password'`.

Using any other `type` will cause a warning to be logged.
:::

import Basic from '@site/static/ionic/usage/v8/input-password-toggle/basic/index.md';

<Basic />

## Properties

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### hideIcon

|                 |                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Description** | The icon that can be used to represent hiding a password. If not set, the "eyeOff" Ionicon will be used. |
| **Attribute**   | `hide-icon`                                                                                              |
| **Type**        | `string ｜ undefined`                                                                                    |
| **Default**     | `undefined`                                                                                              |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### showIcon

|                 |                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| **Description** | The icon that can be used to represent showing a password. If not set, the "eye" Ionicon will be used. |
| **Attribute**   | `show-icon`                                                                                            |
| **Type**        | `string ｜ undefined`                                                                                  |
| **Default**     | `undefined`                                                                                            |

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
