---
title: "ion-toggle"
---

<head>
  <title>ion-toggle: Custom Toggle Button for Ionic Applications</title>
  <meta name="description" content="Toggle changes the state of a single option. Use ion-toggle to create customizable toggle buttons that can be switched on or off for your applications." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Toggles are switches that change the state of a single option. They can be switched on or off by pressing or swiping them. Toggles can also be checked programmatically by setting the `checked` property.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/toggle/basic/index.md';

<Basic />

## On / Off Labels

Toggles can enable on/off labels by setting the `enableOnOffLabels` property. This is important for accessibility as it makes it easier to differentiate between a checked and unchecked toggle.

import OnOff from '@site/static/ionic/usage/v8/toggle/on-off/index.md';

<OnOff />

## Toggles in a List

Toggles can also be used in a list view by using the [Item](./item) and [List](./list) components.

import List from '@site/static/ionic/usage/v8/toggle/list/index.md';

<List />

## Label Placement

Developers can use the `labelPlacement` property to control how the label is placed relative to the control.

import LabelPlacement from '@site/static/ionic/usage/v8/toggle/label-placement/index.md';

<LabelPlacement />

## Alignment

Developers can use the `alignment` property to control how the label and control are aligned on the cross axis. This property mirrors the flexbox `align-items` property.

:::note
Stacked toggles can be aligned using the `alignment` property. This can be useful when the label and control need to be centered horizontally.
:::

import Alignment from '@site/static/ionic/usage/v8/toggle/alignment/index.md';

<Alignment />

## Justification

Developers can use the `justify` property to control how the label and control are packed on a line.

import Justify from '@site/static/ionic/usage/v8/toggle/justify/index.md';

<Justify />

## Helper & Error Text

Helper and error text can be used inside of a toggle with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-toggle`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/ionic/usage/v8/toggle/helper-error/index.md';

<HelperError />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/toggle/theming/colors/index.md';

<Colors />

### CSS Custom Properties

CSS custom properties can be combined with standard CSS to target different parts of a toggle. We can modify the `width` and `height` of the toggle directly to change the size of the track, while using the `--handle-width` and `--handle-height` custom properties to customize the handle size.

import CSSProps from '@site/static/ionic/usage/v8/toggle/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

We can further customize toggle by targeting specific shadow parts that are exposed. Any CSS property on these parts can be styled and they can also be combined with CSS custom properties.

import CSSParts from '@site/static/ionic/usage/v8/toggle/theming/css-shadow-parts/index.md';

<CSSParts />

## Migrating from Legacy Toggle Syntax

A simpler toggle syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup an toggle, resolves accessibility issues, and improves the developer experience.

While developers can continue using the legacy syntax, we recommend migrating as soon as possible.

### Using the Modern Syntax

Using the modern syntax involves removing the `ion-label` and passing the label directly inside of `ion-toggle`. The placement of the label can be configured using the `labelPlacement` property on `ion-toggle`. The way the label and the control are packed on a line can be controlled using the `justify` property on `ion-toggle`.

import Migration from '@site/static/ionic/usage/v8/toggle/migration/index.md';

<Migration />

:::note
In past versions of Ionic, `ion-item` was required for `ion-toggle` to function properly. Starting in Ionic 7.0, `ion-toggle` should only be used in an `ion-item` when the item is placed in an `ion-list`. Additionally, `ion-item` is no longer required for `ion-toggle` to function properly.
:::

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern toggle syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-toggle` to `true` to force that instance of the toggle to use the legacy syntax.

## Interfaces

### ToggleChangeEventDetail

```typescript
interface ToggleChangeEventDetail<T = any> {
  value: T
  checked: boolean
}
```

### ToggleCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ToggleCustomEvent<T = any> extends CustomEvent {
  detail: ToggleChangeEventDetail<T>
  target: HTMLIonToggleElement
}
```

## Properties

### alignment

|                 |                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | How to control the alignment of the toggle and label on the cross axis. `"start"`: The label and control will appear on the left of the cross axis in LTR, and on the right side in RTL. `"center"`: The label and control will appear at the center of the cross axis in both LTR and RTL. Setting this property will change the toggle `display` to `block`. |
| **Attribute**   | `alignment`                                                                                                                                                                                                                                                                                                                                                    |
| **Type**        | `"center" ｜ "start" ｜ undefined`                                                                                                                                                                                                                                                                                                                             |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                    |

### checked

|                 |                                    |
| --------------- | ---------------------------------- |
| **Description** | If `true`, the toggle is selected. |
| **Attribute**   | `checked`                          |
| **Type**        | `boolean`                          |
| **Default**     | `false`                            |

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### disabled

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the toggle. |
| **Attribute**   | `disabled`                                           |
| **Type**        | `boolean`                                            |
| **Default**     | `false`                                              |

### enableOnOffLabels

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | Enables the on/off accessibility switch labels within the toggle. |
| **Attribute**   | `enable-on-off-labels`                                            |
| **Type**        | `boolean ｜ undefined`                                            |
| **Default**     | `config.get('toggleOnOffLabels')`                                 |

### errorText

|                 |                                                                                     |
| --------------- | ----------------------------------------------------------------------------------- |
| **Description** | Text that is placed under the toggle label and displayed when an error is detected. |
| **Attribute**   | `error-text`                                                                        |
| **Type**        | `string ｜ undefined`                                                               |
| **Default**     | `undefined`                                                                         |

### helperText

|                 |                                                                                     |
| --------------- | ----------------------------------------------------------------------------------- |
| **Description** | Text that is placed under the toggle label and displayed when no error is detected. |
| **Attribute**   | `helper-text`                                                                       |
| **Type**        | `string ｜ undefined`                                                               |
| **Default**     | `undefined`                                                                         |

### justify

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | How to pack the label and toggle within a line. `"start"`: The label and toggle will appear on the left in LTR and on the right in RTL. `"end"`: The label and toggle will appear on the right in LTR and on the left in RTL. `"space-between"`: The label and toggle will appear on opposite ends of the line with space between the two elements. Setting this property will change the toggle `display` to `block`. |
| **Attribute**   | `justify`                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Type**        | `"end" ｜ "space-between" ｜ "start" ｜ undefined`                                                                                                                                                                                                                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                            |

### labelPlacement

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Where to place the label relative to the input. `"start"`: The label will appear to the left of the toggle in LTR and to the right in RTL. `"end"`: The label will appear to the right of the toggle in LTR and to the left in RTL. `"fixed"`: The label has the same behavior as `"start"` except it also has a fixed width. Long text will be truncated with ellipses ("..."). `"stacked"`: The label will appear above the toggle regardless of the direction. The alignment of the label can be controlled with the `alignment` property. |
| **Attribute**   | `label-placement`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Type**        | `"end" ｜ "fixed" ｜ "stacked" ｜ "start"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Default**     | `'start'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### name

|                 |                                                                 |
| --------------- | --------------------------------------------------------------- |
| **Description** | The name of the control, which is submitted with the form data. |
| **Attribute**   | `name`                                                          |
| **Type**        | `string`                                                        |
| **Default**     | `this.inputId`                                                  |

### required

|                 |                                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If true, screen readers will announce it as a required field. This property works only for accessibility purposes, it will not prevent the form from submitting if the value is invalid. |
| **Attribute**   | `required`                                                                                                                                                                               |
| **Type**        | `boolean`                                                                                                                                                                                |
| **Default**     | `false`                                                                                                                                                                                  |

### value

|                 |                                                                                                                                                                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The value of the toggle does not mean if it's checked or not, use the `checked` property for that.<br /><br />The value of a toggle is analogous to the value of a `<input type="checkbox">`, it's only used when the toggle participates in a native `<form>`. |
| **Attribute**   | `value`                                                                                                                                                                                                                                                         |
| **Type**        | `null ｜ string ｜ undefined`                                                                                                                                                                                                                                   |
| **Default**     | `'on'`                                                                                                                                                                                                                                                          |

## Events

| Name        | Description                                                                                                                                    | Bubbles |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ionBlur`   | Emitted when the toggle loses focus.                                                                                                           | `true`  |
| `ionChange` | Emitted when the user switches the toggle on or off.<br /><br />This event will not emit when programmatically setting the `checked` property. | `true`  |
| `ionFocus`  | Emitted when the toggle has focus.                                                                                                             | `true`  |

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name              | Description                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------ |
| `error-text`      | Supporting text displayed beneath the toggle label when the toggle is invalid and touched. |
| `handle`          | The toggle handle, or knob, used to change the checked state.                              |
| `helper-text`     | Supporting text displayed beneath the toggle label when the toggle is valid.               |
| `label`           | The label text describing the toggle.                                                      |
| `supporting-text` | Supporting text displayed beneath the toggle label.                                        |
| `track`           | The background track of the toggle.                                                        |

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
  | `--border-radius` | Border radius of the toggle track |
| `--handle-background` | Background of the toggle handle |
| `--handle-background-checked` | Background of the toggle handle when checked |
| `--handle-border-radius` | Border radius of the toggle handle |
| `--handle-box-shadow` | Box shadow of the toggle handle |
| `--handle-height` | Height of the toggle handle |
| `--handle-max-height` | Maximum height of the toggle handle |
| `--handle-spacing` | Horizontal spacing around the toggle handle |
| `--handle-transition` | Transition of the toggle handle |
| `--handle-width` | Width of the toggle handle |
| `--track-background` | Background of the toggle track |
| `--track-background-checked` | Background of the toggle track when checked |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--border-radius` | Border radius of the toggle track |
| `--handle-background` | Background of the toggle handle |
| `--handle-background-checked` | Background of the toggle handle when checked |
| `--handle-border-radius` | Border radius of the toggle handle |
| `--handle-box-shadow` | Box shadow of the toggle handle |
| `--handle-height` | Height of the toggle handle |
| `--handle-max-height` | Maximum height of the toggle handle |
| `--handle-spacing` | Horizontal spacing around the toggle handle |
| `--handle-transition` | Transition of the toggle handle |
| `--handle-width` | Width of the toggle handle |
| `--track-background` | Background of the toggle track |
| `--track-background-checked` | Background of the toggle track when checked |


</TabItem>
</Tabs>

```

## Slots

| Name | Description                                                                                                                                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ``   | The label text to associate with the toggle. Use the "labelPlacement" property to control where the label is placed relative to the toggle. |
