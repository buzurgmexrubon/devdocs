---
title: "ion-picker-legacy"
---

<head>
  <title>ion-picker-legacy: A Dialog That Displays Buttons and Columns</title>
  <meta name="description" content="A Picker is a dialog that displays a row of buttons and columns underneath. Ion-picker-legacy appears on top of the app's content, and at the bottom of the viewport." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

:::warning Deprecation Notice

`ion-picker-legacy` is deprecated and will be removed in the next major release. Migrate to [`ion-picker`](./picker.md) as soon as possible.

:::

A Picker is a dialog that displays a row of buttons and columns underneath. It appears on top of the app's content, and at the bottom of the viewport.

## Inline Pickers (Recommended)

`ion-picker-legacy` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the Picker.

import Trigger from '@site/static/ionic/usage/v8/picker-legacy/inline/trigger/index.md';

<Trigger />

### Using `isOpen`

The `isOpen` property on `ion-picker-legacy` allows developers to control the presentation state of the Picker from their application state. This means when `isOpen` is set to `true` the Picker will be presented, and when `isOpen` is set to `false` the Picker will be dismissed.

`isOpen` uses a one-way data binding, meaning it will not automatically be set to `false` when the Picker is dismissed. Developers should listen for the `ionPickerDidDismiss` or `didDismiss` event and set `isOpen` to `false`. The reason for this is it prevents the internals of `ion-picker` from being tightly coupled with the state of the application. With a one way data binding, the Picker only needs to concern itself with the boolean value that the reactive variable provides. With a two way data binding, the Picker needs to concern itself with both the boolean value as well as the existence of the reactive variable itself. This can lead to non-deterministic behaviors and make applications harder to debug.

import IsOpen from '@site/static/ionic/usage/v8/picker-legacy/inline/isOpen/index.md';

<IsOpen />

## Controller Pickers

The `pickerController` can be used in situations where more control is needed over when the Picker is presented and dismissed.

import Controller from '@site/static/ionic/usage/v8/picker-legacy/controller/index.md';

<Controller />

## Multiple Columns

The `columns` property can be used to display a Picker with multiple columns of different options.

import MultipleColumn from '@site/static/ionic/usage/v8/picker-legacy/multiple-column/index.md';

<MultipleColumn />

## Interfaces

### PickerButton

```typescript
interface PickerButton {
  text?: string
  role?: string
  cssClass?: string | string[]
  handler?: (value: any) => boolean | void
}
```

### PickerColumn

```typescript
interface PickerColumn {
  name: string
  align?: string
  /**
   * Changing this value allows the initial value of a picker column to be set.
   */
  selectedIndex?: number
  prevSelected?: number
  prefix?: string
  suffix?: string
  options: PickerColumnOption[]
  cssClass?: string | string[]
  columnWidth?: string
  prefixWidth?: string
  suffixWidth?: string
  optionsWidth?: string
}
```

### PickerColumnOption

```typescript
interface PickerColumnOption {
  text?: string
  value?: any
  disabled?: boolean
  duration?: number
  transform?: string
  selected?: boolean
  /**
   * The optional text to assign as the aria-label on the picker column option.
   */
  ariaLabel?: string
}
```

### PickerOptions

```typescript
interface PickerOptions {
  columns: PickerColumn[]
  buttons?: PickerButton[]
  cssClass?: string | string[]
  showBackdrop?: boolean
  backdropDismiss?: boolean
  animated?: boolean

  mode?: Mode
  keyboardClose?: boolean
  id?: string
  htmlAttributes?: { [key: string]: any }

  enterAnimation?: AnimationBuilder
  leaveAnimation?: AnimationBuilder
}
```

## Properties

### animated

|                 |                                     |
| --------------- | ----------------------------------- |
| **Description** | If `true`, the picker will animate. |
| **Attribute**   | `animated`                          |
| **Type**        | `boolean`                           |
| **Default**     | `true`                              |

### backdropDismiss

|                 |                                                                       |
| --------------- | --------------------------------------------------------------------- |
| **Description** | If `true`, the picker will be dismissed when the backdrop is clicked. |
| **Attribute**   | `backdrop-dismiss`                                                    |
| **Type**        | `boolean`                                                             |
| **Default**     | `true`                                                                |

### buttons

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| **Description** | Array of buttons to be displayed at the top of the picker. |
| **Attribute**   | `buttons`                                                  |
| **Type**        | `PickerButton[]`                                           |
| **Default**     | `[]`                                                       |

### columns

|                 |                                                 |
| --------------- | ----------------------------------------------- |
| **Description** | Array of columns to be displayed in the picker. |
| **Attribute**   | `columns`                                       |
| **Type**        | `PickerColumn[]`                                |
| **Default**     | `[]`                                            |

### cssClass

|                 |                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Description** | Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces. |
| **Attribute**   | `css-class`                                                                                                      |
| **Type**        | `string ｜ string[] ｜ undefined`                                                                                |
| **Default**     | `undefined`                                                                                                      |

### duration

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Description** | Number of milliseconds to wait before dismissing the picker. |
| **Attribute**   | `duration`                                                   |
| **Type**        | `number`                                                     |
| **Default**     | `0`                                                          |

### enterAnimation

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | Animation to use when the picker is presented.          |
| **Attribute**   | `enter-animation`                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default**     | `undefined`                                             |

### htmlAttributes

|                 |                                              |
| --------------- | -------------------------------------------- |
| **Description** | Additional attributes to pass to the picker. |
| **Attribute**   | `html-attributes`                            |
| **Type**        | `undefined ｜ { [key: string]: any; }`       |
| **Default**     | `undefined`                                  |

### isOpen

|                 |                                                                                                                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the picker will open. If `false`, the picker will close. Use this if you need finer grained control over presentation, otherwise just use the pickerController or the `trigger` property. Note: `isOpen` will not automatically be set back to `false` when the picker dismisses. You will need to do that in your code. |
| **Attribute**   | `is-open`                                                                                                                                                                                                                                                                                                                           |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                           |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                             |

### keyboardClose

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | If `true`, the keyboard will be automatically dismissed when the overlay is presented. |
| **Attribute**   | `keyboard-close`                                                                       |
| **Type**        | `boolean`                                                                              |
| **Default**     | `true`                                                                                 |

### leaveAnimation

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | Animation to use when the picker is dismissed.          |
| **Attribute**   | `leave-animation`                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default**     | `undefined`                                             |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### showBackdrop

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| **Description** | If `true`, a backdrop will be displayed behind the picker. |
| **Attribute**   | `show-backdrop`                                            |
| **Type**        | `boolean`                                                  |
| **Default**     | `true`                                                     |

### trigger

|                 |                                                                                         |
| --------------- | --------------------------------------------------------------------------------------- |
| **Description** | An ID corresponding to the trigger element that causes the picker to open when clicked. |
| **Attribute**   | `trigger`                                                                               |
| **Type**        | `string ｜ undefined`                                                                   |
| **Default**     | `undefined`                                                                             |

## Events

| Name                   | Description                                                                  | Bubbles |
| ---------------------- | ---------------------------------------------------------------------------- | ------- |
| `didDismiss`           | Emitted after the picker has dismissed. Shorthand for ionPickerDidDismiss.   | `true`  |
| `didPresent`           | Emitted after the picker has presented. Shorthand for ionPickerWillDismiss.  | `true`  |
| `ionPickerDidDismiss`  | Emitted after the picker has dismissed.                                      | `true`  |
| `ionPickerDidPresent`  | Emitted after the picker has presented.                                      | `true`  |
| `ionPickerWillDismiss` | Emitted before the picker has dismissed.                                     | `true`  |
| `ionPickerWillPresent` | Emitted before the picker has presented.                                     | `true`  |
| `willDismiss`          | Emitted before the picker has dismissed. Shorthand for ionPickerWillDismiss. | `true`  |
| `willPresent`          | Emitted before the picker has presented. Shorthand for ionPickerWillPresent. | `true`  |

## Methods

### dismiss

|                 |                                                                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Dismiss the picker overlay after it has been presented.                                                                                                                                                                                                                                                           |
| **Signature**   | `dismiss(data?: any, role?: string) => Promise<boolean>`                                                                                                                                                                                                                                                          |
| **Parameters**  | **data**: Any data to emit in the dismiss events.<br/>**role**: The role of the element that is dismissing the picker. This can be useful in a button handler for determining which button was clicked to dismiss the picker. Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`. |

### getColumn

|                 |                                                                 |
| --------------- | --------------------------------------------------------------- |
| **Description** | Get the column that matches the specified name.                 |
| **Signature**   | `getColumn(name: string) => Promise<PickerColumn ｜ undefined>` |
| **Parameters**  | **name**: The name of the column.                               |

### onDidDismiss

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Description** | Returns a promise that resolves when the picker did dismiss. |
| **Signature**   | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>`  |

### onWillDismiss

|                 |                                                               |
| --------------- | ------------------------------------------------------------- |
| **Description** | Returns a promise that resolves when the picker will dismiss. |
| **Signature**   | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>`  |

### present

|                 |                                                       |
| --------------- | ----------------------------------------------------- |
| **Description** | Present the picker overlay after it has been created. |
| **Signature**   | `present() => Promise<void>`                          |

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
  | `--backdrop-opacity` | Opacity of the backdrop |
| `--background` | Background of the picker |
| `--background-rgb` | Background of the picker in rgb format |
| `--border-color` | Border color of the picker |
| `--border-radius` | Border radius of the picker |
| `--border-style` | Border style of the picker |
| `--border-width` | Border width of the picker |
| `--height` | Height of the picker |
| `--max-height` | Maximum height of the picker |
| `--max-width` | Maximum width of the picker |
| `--min-height` | Minimum height of the picker |
| `--min-width` | Minimum width of the picker |
| `--width` | Width of the picker |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--backdrop-opacity` | Opacity of the backdrop |
| `--background` | Background of the picker |
| `--background-rgb` | Background of the picker in rgb format |
| `--border-color` | Border color of the picker |
| `--border-radius` | Border radius of the picker |
| `--border-style` | Border style of the picker |
| `--border-width` | Border width of the picker |
| `--height` | Height of the picker |
| `--max-height` | Maximum height of the picker |
| `--max-width` | Maximum width of the picker |
| `--min-height` | Minimum height of the picker |
| `--min-width` | Minimum width of the picker |
| `--width` | Width of the picker |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
