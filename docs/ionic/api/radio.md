---
title: "ion-radio"
---

<head>
  <title>ion-radio: Radio Component for iOS and Android</title>
  <meta name="description" content="Radio components should be used inside of ion-radio-groups on iOS and Android devices. Read to learn more about radio property usage and installation." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Radios should be used inside of a [radio group](./radio-group). Pressing a radio will check it and uncheck the previously selected radio, if there is one. They can also be checked programmatically by setting the value property of the parent radio group to the value of the radio.

When radios are inside of a radio group, only one radio will be checked at any time. If more than one item should be selected, [checkboxes](./checkbox) should be used instead. Radios can be disabled within a group to prevent interaction with them.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/radio/basic/index.md';

<Basic />

## Label Placement

Developers can use the `labelPlacement` property to control how the label is placed relative to the control. This property mirrors the flexbox `flex-direction` property.

import LabelPlacement from '@site/static/ionic/usage/v8/radio/label-placement/index.md';

<LabelPlacement />

## Object Value References

By default, the radio group uses strict equality (`===`) to determine if an option is selected. This can be overridden by providing a property name or a function to the `compareWith` property.

import UsingComparewith from '@site/static/ionic/usage/v8/radio/using-comparewith/index.md';

<UsingComparewith />

## Alignment

Developers can use the `alignment` property to control how the label and control are aligned on the cross axis. This property mirrors the flexbox `align-items` property.

:::note
Stacked radios can be aligned using the `alignment` property. This can be useful when the label and control need to be centered horizontally.
:::

import Alignment from '@site/static/ionic/usage/v8/radio/alignment/index.md';

<Alignment />

## Justification

Developers can use the `justify` property to control how the label and control are packed on a line. This property mirrors the flexbox `justify-content` property.

import Justify from '@site/static/ionic/usage/v8/radio/justify/index.md';

<Justify />

:::note
`ion-item` is only used in the demos to emphasize how `justify` works. It is not needed in order for `justify` to function correctly.
:::

## Deselecting Radios

By default, once a radio is selected it cannot be deselected; pressing it again will keep it selected. This behavior can be modified by using the `allowEmptySelection` property on the parent radio group, which enables the radios to be deselected.

import EmptySelection from '@site/static/ionic/usage/v8/radio/empty-selection/index.md';

<EmptySelection />

## Helper & Error Text

Helper and error text can be used inside of a radio group with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-radio-group`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/ionic/usage/v8/radio/helper-error/index.md';

<HelperError />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/radio/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/ionic/usage/v8/radio/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

import CSSParts from '@site/static/ionic/usage/v8/radio/theming/css-shadow-parts/index.md';

<CSSParts />

## Migrating from Legacy Radio Syntax

A simpler radio syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup an radio, resolves accessibility issues, and improves the developer experience.

Developers can perform this migration one radio at a time. While developers can continue using the legacy syntax, we recommend migrating as soon as possible.

### Using the Modern Syntax

Using the modern syntax involves removing the `ion-label` and passing the label directly inside of `ion-radio`. The placement of the label can be configured using the `labelPlacement` property on `ion-radio`. The way the label and the control are packed on a line can be controlled using the `justify` property on `ion-radio`.

import Migration from '@site/static/ionic/usage/v8/radio/migration/index.md';

<Migration />

:::note
In past versions of Ionic, `ion-item` was required for `ion-radio` to function properly. Starting in Ionic 7.0, `ion-radio` should only be used in an `ion-item` when the item is placed in an `ion-list`. Additionally, `ion-item` is no longer required for `ion-radio` to function properly.
:::

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern radio syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-radio` to `true` to force that instance of the radio to use the legacy syntax.

## Properties

### alignment

|                 |                                                                                                                                                                                                                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | How to control the alignment of the radio and label on the cross axis. `"start"`: The label and control will appear on the left of the cross axis in LTR, and on the right side in RTL. `"center"`: The label and control will appear at the center of the cross axis in both LTR and RTL. Setting this property will change the radio `display` to `block`. |
| **Attribute**   | `alignment`                                                                                                                                                                                                                                                                                                                                                  |
| **Type**        | `"center" ｜ "start" ｜ undefined`                                                                                                                                                                                                                                                                                                                           |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                  |

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### disabled

|                 |                                                     |
| --------------- | --------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the radio. |
| **Attribute**   | `disabled`                                          |
| **Type**        | `boolean`                                           |
| **Default**     | `false`                                             |

### justify

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | How to pack the label and radio within a line. `"start"`: The label and radio will appear on the left in LTR and on the right in RTL. `"end"`: The label and radio will appear on the right in LTR and on the left in RTL. `"space-between"`: The label and radio will appear on opposite ends of the line with space between the two elements. Setting this property will change the radio `display` to `block`. |
| **Attribute**   | `justify`                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Type**        | `"end" ｜ "space-between" ｜ "start" ｜ undefined`                                                                                                                                                                                                                                                                                                                                                                |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                       |

### labelPlacement

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Where to place the label relative to the radio. `"start"`: The label will appear to the left of the radio in LTR and to the right in RTL. `"end"`: The label will appear to the right of the radio in LTR and to the left in RTL. `"fixed"`: The label has the same behavior as `"start"` except it also has a fixed width. Long text will be truncated with ellipses ("..."). `"stacked"`: The label will appear above the radio regardless of the direction. The alignment of the label can be controlled with the `alignment` property. |
| **Attribute**   | `label-placement`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Type**        | `"end" ｜ "fixed" ｜ "stacked" ｜ "start"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Default**     | `'start'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

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

### value

|                 |                         |
| --------------- | ----------------------- |
| **Description** | the value of the radio. |
| **Attribute**   | `value`                 |
| **Type**        | `any`                   |
| **Default**     | `undefined`             |

## Events

| Name       | Description                                | Bubbles |
| ---------- | ------------------------------------------ | ------- |
| `ionBlur`  | Emitted when the radio button loses focus. | `true`  |
| `ionFocus` | Emitted when the radio button has focus.   | `true`  |

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name        | Description                                              |
| ----------- | -------------------------------------------------------- |
| `container` | The container for the radio mark.                        |
| `label`     | The label text describing the radio.                     |
| `mark`      | The checkmark or dot used to indicate the checked state. |

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
  | `--border-radius` | Border radius of the radio |
| `--color` | Color of the radio |
| `--color-checked` | Color of the checked radio |
| `--inner-border-radius` | Border radius of the inner checked radio |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--border-radius` | Border radius of the radio |
| `--color` | Color of the radio |
| `--color-checked` | Color of the checked radio |
| `--inner-border-radius` | Border radius of the inner checked radio |


</TabItem>
</Tabs>

```

## Slots

| Name | Description                                                                                                                               |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ``   | The label text to associate with the radio. Use the "labelPlacement" property to control where the label is placed relative to the radio. |
