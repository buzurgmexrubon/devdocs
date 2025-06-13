---
title: "ion-input-otp"
---

<head>
  <title>ion-input-otp: One-Time Password Input Component</title>
  <meta name="description" content="ion-input-otp is a component for entering one-time passwords (OTP) with support for multiple input boxes and automatic focus management." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

The Input OTP component is a specialized input component designed for entering one-time passwords (OTP). It provides a user-friendly interface for entering verification codes with support for multiple input boxes and automatic focus management.

## Basic Usage

The component provides 4 input boxes by default, which is a common length for many verification codes. The number of input boxes can be customized using the `length` property.

import Basic from '@site/static/ionic/usage/v8/input-otp/basic/index.md';

<Basic />

## Type

The `type` property determines the input format, supporting either numeric or alphanumeric verification codes. It accepts two values: `number` and `text`. It uses `type="number"` by default for entering numeric verification codes. When `type="text"` is specified, it accepts alphanumeric input. This flexibility allows handling different OTP formats, whether numeric-only codes (like SMS verification codes) or alphanumeric codes (like backup codes or recovery keys).

The `type` property automatically sets both the `inputmode` and `pattern` attributes:

- When `type="number"`:
  - Sets `inputmode="numeric"` to show a numeric keyboard on mobile devices
  - Sets `pattern="[\p{N}]"` to allow only numeric input
- When `type="text"`:
  - Sets `inputmode="text"` to show a standard keyboard
  - Sets `pattern="[\p{L}\p{N}]"` to allow alphanumeric input

See the [Pattern](#pattern) section for more details on pattern validation and customization.

import Type from '@site/static/ionic/usage/v8/input-otp/type/index.md';

<Type />

## Shape

The `shape` property controls the border radius of the input boxes, creating rounded or sharp corners.

import Shape from '@site/static/ionic/usage/v8/input-otp/shape/index.md';

<Shape />

## Fill

The `fill` property controls the background style of the input boxes, offering bordered or filled backgrounds.

import Fill from '@site/static/ionic/usage/v8/input-otp/fill/index.md';

<Fill />

## Size

The `size` property provides different size options for the input boxes.

import Size from '@site/static/ionic/usage/v8/input-otp/size/index.md';

<Size />

## Separators

The `separators` property adds visual dividers between one or more of the input boxes. Separators can be defined in three ways:

- Comma-separated string of numbers (e.g., `"1,3"`)
- Array of numbers (e.g., `[1, 3]`)
- String `"all"` to show separators between every input box

The numbers represent the index after which a separator should appear. For example, `"1,3"` displays a separator after the first and third input box. This can be used to create visually distinct groupings of input boxes, but it will still have one value.

import Separators from '@site/static/ionic/usage/v8/input-otp/separators/index.md';

<Separators />

## States

The component supports various states for automatic styling of input boxes:

- `disabled` and `readonly` states via respective properties
- Form validation states: `valid` and `invalid` visually indicated through CSS classes
- In Angular: validation states are automatically managed through the framework's value accessors and form validation
- For other frameworks: developers must manually add `ion-valid`, `ion-invalid`, and `ion-touched` classes
- `ion-invalid` styles only display when touched (`ion-touched`)
- `ion-valid` styles only display when focused (`has-focus`)

import States from '@site/static/ionic/usage/v8/input-otp/states/index.md';

<States />

## Pattern

The `pattern` property enables custom validation using regular expressions. It accepts a [string regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) or [unicode regular expression](https://www.regular-expressions.info/unicode.html) to validate allowed characters. The `pattern` must match the entire value, not just a subset. Default patterns:

- `type="number"`: `"[\p{N}]"` for matching any kind of numeric character in any script.
- `type="text"`: `"[\p{L}\p{N}]"` for any kind of numeric character in any script and any kind of letter from any language.

The component will prevent users from entering any characters that don't match the specified pattern. Developers can override these defaults by providing their own pattern string to match specific input requirements.

:::tip
When using a custom `pattern`, remember that the `type` property controls which keyboard appears on mobile devices:

- Use `type="number"` for numeric-only patterns to show the numeric keyboard
- Use `type="text"` for patterns that include letters to show the alphanumeric keyboard
  :::

import Pattern from '@site/static/ionic/usage/v8/input-otp/pattern/index.md';

<Pattern />

## Theming

### Colors

The `color` property changes the color palette for input boxes. For `outline` fills, this property changes the caret color, highlight color and border color. For `solid` fills, this property changes the caret color and highlight color.

:::note
The `color` property does _not_ change the text color of the input OTP. For that, use the [`--color` CSS property](#css-custom-properties-1).
:::

import Colors from '@site/static/ionic/usage/v8/input-otp/theming/colors/index.md';

<Colors />

### CSS Custom Properties

Input OTP uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector. Targeting the `ion-input-otp` for customization will not work; therefore we recommend adding a class and customizing it that way. Due to certain styles being applied based on the `fill`, you may need to override properties on the fills separately.

import CSSProps from '@site/static/ionic/usage/v8/input-otp/theming/css-properties/index.md';

<CSSProps />

## Accessibility

### Keyboard Interactions

The keyboard navigation for Input OTP follows the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)'s recommendations for composite widgets. It is treated as a composite widget because it contains multiple focusable elements (input boxes) that function as a single control.

These keyboard interactions apply to all `ion-input-otp` elements when the component is not disabled.

| Key                                                                | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                                                     | When first tabbing into the component, focus moves to the first empty box. If all boxes are filled, focus moves to the last box. Once inside the component, tabbing moves to the next focusable element on the page.                                                                                                                                                              |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>                                  | When tabbing backwards into the component, focus moves to the first empty box. If all boxes are filled, focus moves to the last box. Once inside the component, shift tabbing focus moves to the previous focusable element on the page.                                                                                                                                          |
| <kbd>ArrowRight</kbd>                                              | Moves focus to the next input box, stopping at the first empty box. In RTL mode, moves focus back to any previous box that contains a value.                                                                                                                                                                                                                                      |
| <kbd>ArrowLeft</kbd>                                               | Moves focus back to any previous box that contains a value. In RTL mode, moves focus to the next input box, stopping at the first empty box.                                                                                                                                                                                                                                      |
| Any character matching the `pattern` property                      | Fills the current box and automatically moves focus to the next empty box. If all boxes are filled, focus remains on the last box. If the current box has a value, override the value with the entered character. In RTL mode, input fills boxes from right to left.                                                                                                              |
| <kbd>Backspace</kbd>                                               | In an empty box: moves focus back one box and clears its value. <br/> In a box with a value: clears that value. <br/> With values in boxes to the right: shifts them all one position to the left. In RTL mode, with values in boxes to the left: shifts them all one position to the right.                                                                                      |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> <br/> <kbd>Cmd</kbd> + <kbd>V</kbd> | Pastes content starting from the first box, regardless of which box is currently focused. All existing values are cleared before pasting. For example, if you have "1234" in all boxes and paste "56", the result will be "56" in the first two boxes with the remaining boxes empty. If the pasted content is longer than the available boxes, the extra characters are ignored. |

## Properties

### autocapitalize

|                 |                                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. |
| **Attribute**   | `autocapitalize`                                                                                                                                                                                          |
| **Type**        | `string`                                                                                                                                                                                                  |
| **Default**     | `'off'`                                                                                                                                                                                                   |

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
| **Description** | If `true`, the user cannot interact with the input. |
| **Attribute**   | `disabled`                                          |
| **Type**        | `boolean`                                           |
| **Default**     | `false`                                             |

### fill

|                 |                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The fill for the input boxes. If `"solid"` the input boxes will have a background. If `"outline"` the input boxes will be transparent with a border. |
| **Attribute**   | `fill`                                                                                                                                               |
| **Type**        | `"outline" ｜ "solid" ｜ undefined`                                                                                                                  |
| **Default**     | `'outline'`                                                                                                                                          |

### inputmode

|                 |                                                                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.<br /><br />For numbers (type="number"): "numeric" For text (type="text"): "text" |
| **Attribute**   | `inputmode`                                                                                                                                                                                                                                       |
| **Type**        | `"decimal" ｜ "email" ｜ "none" ｜ "numeric" ｜ "search" ｜ "tel" ｜ "text" ｜ "url" ｜ undefined`                                                                                                                                                |
| **Default**     | `undefined`                                                                                                                                                                                                                                       |

### length

|                 |                                       |
| --------------- | ------------------------------------- |
| **Description** | The number of input boxes to display. |
| **Attribute**   | `length`                              |
| **Type**        | `number`                              |
| **Default**     | `4`                                   |

### pattern

|                 |                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A regex pattern string for allowed characters. Defaults based on type.<br /><br />For numbers (`type="number"`): `"[\p{N}]"` For text (`type="text"`): `"[\p{L}\p{N}]"` |
| **Attribute**   | `pattern`                                                                                                                                                               |
| **Type**        | `string ｜ undefined`                                                                                                                                                   |
| **Default**     | `undefined`                                                                                                                                                             |

### readonly

|                 |                                              |
| --------------- | -------------------------------------------- |
| **Description** | If `true`, the user cannot modify the value. |
| **Attribute**   | `readonly`                                   |
| **Type**        | `boolean`                                    |
| **Default**     | `false`                                      |

### separators

|                 |                                                                                                                                                                                                                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Where separators should be shown between input boxes. Can be a comma-separated string or an array of numbers.<br /><br />For example: `"3"` will show a separator after the 3rd input box. `[1,4]` will show a separator after the 1st and 4th input boxes. `"all"` will show a separator between every input box. |
| **Attribute**   | `separators`                                                                                                                                                                                                                                                                                                       |
| **Type**        | `number[] ｜ string ｜ undefined`                                                                                                                                                                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                        |

### shape

|                 |                                                                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The shape of the input boxes. If "round" they will have an increased border radius. If "rectangular" they will have no border radius. If "soft" they will have a soft border radius. |
| **Attribute**   | `shape`                                                                                                                                                                              |
| **Type**        | `"rectangular" ｜ "round" ｜ "soft"`                                                                                                                                                 |
| **Default**     | `'round'`                                                                                                                                                                            |

### size

|                 |                                  |
| --------------- | -------------------------------- |
| **Description** | The size of the input boxes.     |
| **Attribute**   | `size`                           |
| **Type**        | `"large" ｜ "medium" ｜ "small"` |
| **Default**     | `'medium'`                       |

### type

|                 |                                               |
| --------------- | --------------------------------------------- |
| **Description** | The type of input allowed in the input boxes. |
| **Attribute**   | `type`                                        |
| **Type**        | `"number" ｜ "text"`                          |
| **Default**     | `'number'`                                    |

### value

|                 |                                         |
| --------------- | --------------------------------------- |
| **Description** | The value of the input group.           |
| **Attribute**   | `value`                                 |
| **Type**        | `null ｜ number ｜ string ｜ undefined` |
| **Default**     | `''`                                    |

## Events

| Name          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Bubbles |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ionBlur`     | Emitted when the input group loses focus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `true`  |
| `ionChange`   | The `ionChange` event is fired when the user modifies the input's value. Unlike the `ionInput` event, the `ionChange` event is only fired when changes are committed, not as the user types.<br /><br />The `ionChange` event fires when the `<ion-input-otp>` component loses focus after its value has changed.<br /><br />This event will not emit when programmatically setting the `value` property.                                                                                                                                                                          | `true`  |
| `ionComplete` | Emitted when all input boxes have been filled with valid values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `true`  |
| `ionFocus`    | Emitted when the input group has focus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `true`  |
| `ionInput`    | The `ionInput` event is fired each time the user modifies the input's value. Unlike the `ionChange` event, the `ionInput` event is fired for each alteration to the input's value. This typically happens for each keystroke as the user types.<br /><br />For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is [`InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent); for others, the interface is [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event). If the input is cleared on edit, the type is `null`. | `true`  |

## Methods

### setFocus

|                 |                                                                                                                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Sets focus to an input box.                                                                                                                                                                                                                   |
| **Signature**   | `setFocus(index?: number) => Promise<void>`                                                                                                                                                                                                   |
| **Parameters**  | **index**: - The index of the input box to focus (0-based). If provided and the input box has a value, the input box at that index will be focused. Otherwise, the first empty input box or the last input if all are filled will be focused. |

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
  | `--background` | Background color of the input boxes |
| `--border-color` | Border color of the input boxes |
| `--border-radius` | Border radius of the input boxes |
| `--border-width` | Border width of the input boxes |
| `--color` | Text color of the input |
| `--height` | Height of input boxes |
| `--highlight-color-focused` | The color of the highlight on the input when focused |
| `--highlight-color-invalid` | The color of the highlight on the input when invalid |
| `--highlight-color-valid` | The color of the highlight on the input when valid |
| `--margin-bottom` | Bottom margin of the input group |
| `--margin-end` | Right margin if direction is left-to-right, and left margin if direction is right-to-left of the input group |
| `--margin-start` | Left margin if direction is left-to-right, and right margin if direction is right-to-left of the input group |
| `--margin-top` | Top margin of the input group |
| `--min-width` | Minimum width of input boxes |
| `--padding-bottom` | Bottom padding of the input group |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the input group |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the input group |
| `--padding-top` | Top padding of the input group |
| `--separator-border-radius` | Border radius of the separator between boxes |
| `--separator-color` | Color of the separator between boxes |
| `--separator-height` | Height of the separator between boxes |
| `--separator-width` | Width of the separator between boxes |
| `--width` | Width of input boxes |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background color of the input boxes |
| `--border-color` | Border color of the input boxes |
| `--border-radius` | Border radius of the input boxes |
| `--border-width` | Border width of the input boxes |
| `--color` | Text color of the input |
| `--height` | Height of input boxes |
| `--highlight-color-focused` | The color of the highlight on the input when focused |
| `--highlight-color-invalid` | The color of the highlight on the input when invalid |
| `--highlight-color-valid` | The color of the highlight on the input when valid |
| `--margin-bottom` | Bottom margin of the input group |
| `--margin-end` | Right margin if direction is left-to-right, and left margin if direction is right-to-left of the input group |
| `--margin-start` | Left margin if direction is left-to-right, and right margin if direction is right-to-left of the input group |
| `--margin-top` | Top margin of the input group |
| `--min-width` | Minimum width of input boxes |
| `--padding-bottom` | Bottom padding of the input group |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the input group |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the input group |
| `--padding-top` | Top padding of the input group |
| `--separator-border-radius` | Border radius of the separator between boxes |
| `--separator-color` | Color of the separator between boxes |
| `--separator-height` | Height of the separator between boxes |
| `--separator-width` | Width of the separator between boxes |
| `--width` | Width of input boxes |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
