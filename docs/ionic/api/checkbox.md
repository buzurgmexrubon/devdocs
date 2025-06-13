---
title: "ion-checkbox"
---

<head>
  <title>ion-checkbox: Ionic App Checkbox to Select Multiple Options</title>
  <meta name="description" content="ion-checkboxes allow selection of multiple options from a set and appear as checked (ticked) when activated. Learn about the checkbox component for Ionic apps." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the `checked` property. They can also be checked programmatically by setting the `checked` property.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/checkbox/basic/index.md';

<Basic />

## Label Placement

Developers can use the `labelPlacement` property to control how the label is placed relative to the control. This property mirrors the flexbox `flex-direction` property.

import LabelPlacement from '@site/static/ionic/usage/v8/checkbox/label-placement/index.md';

<LabelPlacement />

## Alignment

Developers can use the `alignment` property to control how the label and control are aligned on the cross axis. This property mirrors the flexbox `align-items` property.

:::note
Stacked checkboxes can be aligned using the `alignment` property. This can be useful when the label and control need to be centered horizontally.
:::

import Alignment from '@site/static/ionic/usage/v8/checkbox/alignment/index.md';

<Alignment />

## Justification

Developers can use the `justify` property to control how the label and control are packed on a line. This property mirrors the flexbox `justify-content` property.

import Justify from '@site/static/ionic/usage/v8/checkbox/justify/index.md';

<Justify />

:::note
`ion-item` is only used in the demos to emphasize how `justify` works. It is not needed in order for `justify` to function correctly.
:::

## Indeterminate Checkboxes

import Indeterminate from '@site/static/ionic/usage/v8/checkbox/indeterminate/index.md';

<Indeterminate />
  
## Links inside of Labels

Checkbox labels can sometimes be accompanied with links. These links can provide more information related to the checkbox. However, clicking the link should not check the checkbox. To achieve this, we can use [stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) to prevent the click event from bubbling. When using this approach, the rest of the label still remains clickable.

import LabelLink from '@site/static/ionic/usage/v8/checkbox/label-link/index.md';

<LabelLink />

## Helper & Error Text

Helper and error text can be used inside of a checkbox with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-checkbox`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/ionic/usage/v8/checkbox/helper-error/index.md';

<HelperError />

## Theming

### CSS Custom Properties

import CSSProps from '@site/static/ionic/usage/v8/checkbox/theming/css-properties/index.md';

<CSSProps />

## Interfaces

### CheckboxChangeEventDetail

```typescript
interface CheckboxChangeEventDetail<T = any> {
  value: T
  checked: boolean
}
```

### CheckboxCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface CheckboxCustomEvent<T = any> extends CustomEvent {
  detail: CheckboxChangeEventDetail<T>
  target: HTMLIonCheckboxElement
}
```

## Migrating from Legacy Checkbox Syntax

A simpler checkbox syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup a checkbox, resolves accessibility issues, and improves the developer experience.

Developers can perform this migration one checkbox at a time. While developers can continue using the legacy syntax, we recommend migrating as soon as possible.

### Using the Modern Syntax

Using the modern syntax involves removing the `ion-label` and passing the label directly inside of `ion-checkbox`. The placement of the label can be configured using the `labelPlacement` property on `ion-checkbox`. The way the label and the control are packed on a line can be controlled using the `justify` property on `ion-checkbox`.

import Migration from '@site/static/ionic/usage/v8/checkbox/migration/index.md';

<Migration />

:::note
In past versions of Ionic, `ion-item` was required for `ion-checkbox` to function properly. Starting in Ionic 7.0, `ion-checkbox` should only be used in an `ion-item` when the item is placed in an `ion-list`. Additionally, `ion-item` is no longer required for `ion-checkbox` to function properly.
:::

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern checkbox syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-checkbox` to `true` to force that instance of the checkbox to use the legacy syntax.

## Properties

### alignment

|                 |                                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | How to control the alignment of the checkbox and label on the cross axis. `"start"`: The label and control will appear on the left of the cross axis in LTR, and on the right side in RTL. `"center"`: The label and control will appear at the center of the cross axis in both LTR and RTL. Setting this property will change the checkbox `display` to `block`. |
| **Attribute**   | `alignment`                                                                                                                                                                                                                                                                                                                                                        |
| **Type**        | `"center" ｜ "start" ｜ undefined`                                                                                                                                                                                                                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                        |

### checked

|                 |                                      |
| --------------- | ------------------------------------ |
| **Description** | If `true`, the checkbox is selected. |
| **Attribute**   | `checked`                            |
| **Type**        | `boolean`                            |
| **Default**     | `false`                              |

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### disabled

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | If `true`, the user cannot interact with the checkbox. |
| **Attribute**   | `disabled`                                             |
| **Type**        | `boolean`                                              |
| **Default**     | `false`                                                |

### errorText

|                 |                                                                                       |
| --------------- | ------------------------------------------------------------------------------------- |
| **Description** | Text that is placed under the checkbox label and displayed when an error is detected. |
| **Attribute**   | `error-text`                                                                          |
| **Type**        | `string ｜ undefined`                                                                 |
| **Default**     | `undefined`                                                                           |

### helperText

|                 |                                                                                       |
| --------------- | ------------------------------------------------------------------------------------- |
| **Description** | Text that is placed under the checkbox label and displayed when no error is detected. |
| **Attribute**   | `helper-text`                                                                         |
| **Type**        | `string ｜ undefined`                                                                 |
| **Default**     | `undefined`                                                                           |

### indeterminate

|                 |                                                                |
| --------------- | -------------------------------------------------------------- |
| **Description** | If `true`, the checkbox will visually appear as indeterminate. |
| **Attribute**   | `indeterminate`                                                |
| **Type**        | `boolean`                                                      |
| **Default**     | `false`                                                        |

### justify

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | How to pack the label and checkbox within a line. `"start"`: The label and checkbox will appear on the left in LTR and on the right in RTL. `"end"`: The label and checkbox will appear on the right in LTR and on the left in RTL. `"space-between"`: The label and checkbox will appear on opposite ends of the line with space between the two elements. Setting this property will change the checkbox `display` to `block`. |
| **Attribute**   | `justify`                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Type**        | `"end" ｜ "space-between" ｜ "start" ｜ undefined`                                                                                                                                                                                                                                                                                                                                                                               |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                      |

### labelPlacement

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Where to place the label relative to the checkbox. `"start"`: The label will appear to the left of the checkbox in LTR and to the right in RTL. `"end"`: The label will appear to the right of the checkbox in LTR and to the left in RTL. `"fixed"`: The label has the same behavior as `"start"` except it also has a fixed width. Long text will be truncated with ellipses ("..."). `"stacked"`: The label will appear above the checkbox regardless of the direction. The alignment of the label can be controlled with the `alignment` property. |
| **Attribute**   | `label-placement`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Type**        | `"end" ｜ "fixed" ｜ "stacked" ｜ "start"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Default**     | `'start'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

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

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The value of the checkbox does not mean if it's checked or not, use the `checked` property for that.<br /><br />The value of a checkbox is analogous to the value of an `<input type="checkbox">`, it's only used when the checkbox participates in a native `<form>`. |
| **Attribute**   | `value`                                                                                                                                                                                                                                                                |
| **Type**        | `any`                                                                                                                                                                                                                                                                  |
| **Default**     | `'on'`                                                                                                                                                                                                                                                                 |

## Events

| Name        | Description                                                                                                                                                                           | Bubbles |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ionBlur`   | Emitted when the checkbox loses focus.                                                                                                                                                | `true`  |
| `ionChange` | Emitted when the checked property has changed as a result of a user action such as a click.<br /><br />This event will not emit when programmatically setting the `checked` property. | `true`  |
| `ionFocus`  | Emitted when the checkbox has focus.                                                                                                                                                  | `true`  |

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name              | Description                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| `container`       | The container for the checkbox mark.                                                           |
| `error-text`      | Supporting text displayed beneath the checkbox label when the checkbox is invalid and touched. |
| `helper-text`     | Supporting text displayed beneath the checkbox label when the checkbox is valid.               |
| `label`           | The label text describing the checkbox.                                                        |
| `mark`            | The checkmark used to indicate the checked state.                                              |
| `supporting-text` | Supporting text displayed beneath the checkbox label.                                          |

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
  | `--border-color` | Border color of the checkbox icon |
| `--border-color-checked` | Border color of the checkbox icon when checked |
| `--border-radius` | Border radius of the checkbox icon |
| `--border-style` | Border style of the checkbox icon |
| `--border-width` | Border width of the checkbox icon |
| `--checkbox-background` | Background of the checkbox icon |
| `--checkbox-background-checked` | Background of the checkbox icon when checked |
| `--checkmark-color` | Color of the checkbox checkmark when checked |
| `--checkmark-width` | Stroke width of the checkbox checkmark |
| `--size` | Size of the checkbox icon |
| `--transition` | Transition of the checkbox icon |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--border-color` | Border color of the checkbox icon |
| `--border-color-checked` | Border color of the checkbox icon when checked |
| `--border-radius` | Border radius of the checkbox icon |
| `--border-style` | Border style of the checkbox icon |
| `--border-width` | Border width of the checkbox icon |
| `--checkbox-background` | Background of the checkbox icon |
| `--checkbox-background-checked` | Background of the checkbox icon when checked |
| `--checkmark-color` | Color of the checkbox checkmark when checked |
| `--checkmark-width` | Stroke width of the checkbox checkmark |
| `--size` | Size of the checkbox icon |
| `--transition` | Transition of the checkbox icon |


</TabItem>
</Tabs>

```

## Slots

| Name | Description                                                                                                                                     |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ``   | The label text to associate with the checkbox. Use the "labelPlacement" property to control where the label is placed relative to the checkbox. |
