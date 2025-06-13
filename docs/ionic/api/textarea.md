---
title: "ion-textarea"
---

<head>
  <title>Ionic Textarea Component and CSS Properties for Multi-Line Input</title>
  <meta name="description" content="Textarea is for multi-line input. The component accepts native textarea attributes in addition to Ionic properties. Read to learn about use and CSS elements." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

The textarea component is used for multi-line text input. A native textarea element is rendered inside of the component. The user experience and interactivity of the textarea component is improved by having control over the native textarea.

Unlike the native textarea element, the Ionic textarea does not support loading its value from the inner content. The textarea value should be set in the `value` attribute.

The textarea component accepts the [native textarea attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) in addition to the Ionic properties.

## Basic Usage

import BasicPlayground from '@site/static/ionic/usage/v8/textarea/basic/index.md';

<BasicPlayground />

## Labels

Labels should be used to describe the textarea. They can be used visually, and they will also be read out by screen readers when the user is focused on the textarea. This makes it easy for the user to understand the intent of the textarea. Textarea has several ways to assign a label:

- `label` property: used for plaintext labels
- `label` slot: used for custom HTML labels (experimental)
- `aria-label`: used to provide a label for screen readers but adds no visible label

### Label Placement

Labels will take up the width of their content by default. Developers can use the `labelPlacement` property to control how the label is placed relative to the control.

import LabelPlacement from '@site/static/ionic/usage/v8/textarea/label-placement/index.md';

<LabelPlacement />

### Label Slot (experimental)

While plaintext labels should be passed in via the `label` property, if custom HTML is needed, it can be passed through the `label` slot instead.

Note that this feature is considered experimental because it relies on a simulated version of [Web Component slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots). As a result, the simulated behavior may not exactly match the native slot behavior.

import LabelSlot from '@site/static/ionic/usage/v8/textarea/label-slot/index.md';

<LabelSlot />

### No Visible Label

If no visible label is needed, developers should still supply an `aria-label` so the textarea is accessible to screen readers.

import NoVisibleLabel from '@site/static/ionic/usage/v8/textarea/no-visible-label/index.md';

<NoVisibleLabel />

## Filled Textareas

Material Design offers filled styles for a textarea. The `fill` property on the item can be set to either `"solid"` or `"outline"`.

Filled textareas can be used on iOS by setting the textarea's `mode` to `md`.

:::warning
Textareas that use `fill` should not be used in an `ion-item` due to styling conflicts between the components.
:::

import Fill from '@site/static/ionic/usage/v8/textarea/fill/index.md';

<Fill />

## Helper & Error Text

Helper and error text can be used inside of a textarea with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-textarea`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/ionic/usage/v8/textarea/helper-error/index.md';

<HelperError />

## Textarea Counter

The textarea counter is text that displays under a textarea to notify the user of how many characters have been entered out of the total that the textarea will accept. When adding counter, the default behavior is to format the value that gets displayed as `inputLength` / `maxLength`. This behavior can be customized by passing in a formatter function to the `counterFormatter` property.

import Counter from '@site/static/ionic/usage/v8/textarea/counter/index.md';

<Counter />

## Autogrow

When the `autoGrow` property is set to `true`, the textarea will grow and shrink based on its contents.

import AutogrowPlayground from '@site/static/ionic/usage/v8/textarea/autogrow/index.md';

<AutogrowPlayground />

## Clear on Edit

Setting the `clearOnEdit` property to `true` will clear the textarea after it has been blurred and then typed in again.

import ClearOnEditPlayground from '@site/static/ionic/usage/v8/textarea/clear-on-edit/index.md';

<ClearOnEditPlayground />

## Start and End Slots (experimental)

The `start` and `end` slots can be used to place icons, buttons, or prefix/suffix text on either side of the textarea.

Note that this feature is considered experimental because it relies on a simulated version of [Web Component slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots). As a result, the simulated behavior may not exactly match the native slot behavior.

:::note
In most cases, [Icon](./icon.md) components placed in these slots should have `aria-hidden="true"`. See the [Icon accessibility docs](https://ionicframework.com/docs/api/icon#accessibility) for more information.

If slot content is meant to be interacted with, it should be wrapped in an interactive element such as a [Button](./button.md). This ensures that the content can be tabbed to.
:::

import StartEndSlots from '@site/static/ionic/usage/v8/textarea/start-end-slots/index.md';

<StartEndSlots />

## Migrating from Legacy Textarea Syntax

A simpler textarea syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup an textarea, resolves accessibility issues, and improves the developer experience.

Developers can perform this migration one textarea at a time. While developers can continue using the legacy syntax, we recommend migrating as soon as possible.

### Using the Modern Syntax

Using the modern syntax involves three steps:

1. Remove `ion-label` and use the `label` property on `ion-textarea` instead. The placement of the label can be configured using the `labelPlacement` property on `ion-textarea`.
2. Move textarea-specific properties from `ion-item` on to `ion-textarea`. This includes the `counter`, `counterFormatter`, `fill`, and `shape` properties.
3. Remove usages of the `helper` and `error` slots on `ion-item` and use the `helperText` and `errorText` properties on `ion-textarea` instead.

import Migration from '@site/static/ionic/usage/v8/textarea/migration/index.md';

<Migration />

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern textarea syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-textarea` to `true` to force that instance of the textarea to use the legacy syntax.

## Theming

import ThemingPlayground from '@site/static/ionic/usage/v8/textarea/theming/index.md';

<ThemingPlayground />

## Interfaces

### TextareaChangeEventDetail

```typescript
interface TextareaChangeEventDetail {
  value?: string | null
}
```

### TextareaCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface TextareaCustomEvent extends CustomEvent {
  detail: TextareaChangeEventDetail
  target: HTMLIonTextareaElement
}
```

## Properties

### autoGrow

|                 |                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the textarea container will grow and shrink based on the contents of the textarea. |
| **Attribute**   | `auto-grow`                                                                                   |
| **Type**        | `boolean`                                                                                     |
| **Default**     | `false`                                                                                       |

### autocapitalize

|                 |                                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. |
| **Attribute**   | `autocapitalize`                                                                                                                                                                                          |
| **Type**        | `string`                                                                                                                                                                                                  |
| **Default**     | `'none'`                                                                                                                                                                                                  |

### autofocus

|                 |                                                                                                                                                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Sets the [`autofocus` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus) on the native input element.<br /><br />This may not be sufficient for the element to be focused on page load. See [managing focus](/docs/developing/managing-focus) for more information. |
| **Attribute**   | `autofocus`                                                                                                                                                                                                                                                                                                |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                  |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                    |

### clearOnEdit

|                 |                                                             |
| --------------- | ----------------------------------------------------------- |
| **Description** | If `true`, the value will be cleared after focus upon edit. |
| **Attribute**   | `clear-on-edit`                                             |
| **Type**        | `boolean`                                                   |
| **Default**     | `false`                                                     |

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### cols

|                 |                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Description** | The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. |
| **Attribute**   | `cols`                                                                                                                 |
| **Type**        | `number ｜ undefined`                                                                                                  |
| **Default**     | `undefined`                                                                                                            |

### counter

|                 |                                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, a character counter will display the ratio of characters used and the total character limit. Developers must also set the `maxlength` property for the counter to be calculated correctly. |
| **Attribute**   | `counter`                                                                                                                                                                                             |
| **Type**        | `boolean`                                                                                                                                                                                             |
| **Default**     | `false`                                                                                                                                                                                               |

### counterFormatter

|                 |                                                                                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A callback used to format the counter text. By default the counter text is set to "itemLength / maxLength".<br /><br />See https://ionicframework.com/docs/troubleshooting/runtime#accessing-this if you need to access `this` from within the callback. |
| **Attribute**   | `counter-formatter`                                                                                                                                                                                                                                      |
| **Type**        | `((inputLength: number, maxLength: number) => string) ｜ undefined`                                                                                                                                                                                      |
| **Default**     | `undefined`                                                                                                                                                                                                                                              |

### debounce

|                 |                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| **Description** | Set the amount of time, in milliseconds, to wait to trigger the `ionInput` event after each keystroke. |
| **Attribute**   | `debounce`                                                                                             |
| **Type**        | `number ｜ undefined`                                                                                  |
| **Default**     | `undefined`                                                                                            |

### disabled

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | If `true`, the user cannot interact with the textarea. |
| **Attribute**   | `disabled`                                             |
| **Type**        | `boolean`                                              |
| **Default**     | `false`                                                |

### enterkeyhint

|                 |                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`. |
| **Attribute**   | `enterkeyhint`                                                                                                                                        |
| **Type**        | `"done" ｜ "enter" ｜ "go" ｜ "next" ｜ "previous" ｜ "search" ｜ "send" ｜ undefined`                                                                |
| **Default**     | `undefined`                                                                                                                                           |

### errorText

|                 |                                                                                 |
| --------------- | ------------------------------------------------------------------------------- |
| **Description** | Text that is placed under the textarea and displayed when an error is detected. |
| **Attribute**   | `error-text`                                                                    |
| **Type**        | `string ｜ undefined`                                                           |
| **Default**     | `undefined`                                                                     |

### fill

|                 |                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The fill for the item. If `"solid"` the item will have a background. If `"outline"` the item will be transparent with a border. Only available in `md` mode. |
| **Attribute**   | `fill`                                                                                                                                                       |
| **Type**        | `"outline" ｜ "solid" ｜ undefined`                                                                                                                          |
| **Default**     | `undefined`                                                                                                                                                  |

### helperText

|                 |                                                                                 |
| --------------- | ------------------------------------------------------------------------------- |
| **Description** | Text that is placed under the textarea and displayed when no error is detected. |
| **Attribute**   | `helper-text`                                                                   |
| **Type**        | `string ｜ undefined`                                                           |
| **Default**     | `undefined`                                                                     |

### inputmode

|                 |                                                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`. |
| **Attribute**   | `inputmode`                                                                                                                                                      |
| **Type**        | `"decimal" ｜ "email" ｜ "none" ｜ "numeric" ｜ "search" ｜ "tel" ｜ "text" ｜ "url" ｜ undefined`                                                               |
| **Default**     | `undefined`                                                                                                                                                      |

### label

|                 |                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The visible label associated with the textarea.<br /><br />Use this if you need to render a plaintext label.<br /><br />The `label` property will take priority over the `label` slot if both are used. |
| **Attribute**   | `label`                                                                                                                                                                                                 |
| **Type**        | `string ｜ undefined`                                                                                                                                                                                   |
| **Default**     | `undefined`                                                                                                                                                                                             |

### labelPlacement

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Where to place the label relative to the textarea. `"start"`: The label will appear to the left of the textarea in LTR and to the right in RTL. `"end"`: The label will appear to the right of the textarea in LTR and to the left in RTL. `"floating"`: The label will appear smaller and above the textarea when the textarea is focused or it has a value. Otherwise it will appear on top of the textarea. `"stacked"`: The label will appear smaller and above the textarea regardless even when the textarea is blurred or has no value. `"fixed"`: The label has the same behavior as `"start"` except it also has a fixed width. Long text will be truncated with ellipses ("..."). |
| **Attribute**   | `label-placement`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Type**        | `"end" ｜ "fixed" ｜ "floating" ｜ "stacked" ｜ "start"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Default**     | `'start'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### maxlength

|                 |                                                                                    |
| --------------- | ---------------------------------------------------------------------------------- |
| **Description** | This attribute specifies the maximum number of characters that the user can enter. |
| **Attribute**   | `maxlength`                                                                        |
| **Type**        | `number ｜ undefined`                                                              |
| **Default**     | `undefined`                                                                        |

### minlength

|                 |                                                                                    |
| --------------- | ---------------------------------------------------------------------------------- |
| **Description** | This attribute specifies the minimum number of characters that the user can enter. |
| **Attribute**   | `minlength`                                                                        |
| **Type**        | `number ｜ undefined`                                                              |
| **Default**     | `undefined`                                                                        |

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

### placeholder

|                 |                                                             |
| --------------- | ----------------------------------------------------------- |
| **Description** | Instructional text that shows before the input has a value. |
| **Attribute**   | `placeholder`                                               |
| **Type**        | `string ｜ undefined`                                       |
| **Default**     | `undefined`                                                 |

### readonly

|                 |                                              |
| --------------- | -------------------------------------------- |
| **Description** | If `true`, the user cannot modify the value. |
| **Attribute**   | `readonly`                                   |
| **Type**        | `boolean`                                    |
| **Default**     | `false`                                      |

### required

|                 |                                                                    |
| --------------- | ------------------------------------------------------------------ |
| **Description** | If `true`, the user must fill in a value before submitting a form. |
| **Attribute**   | `required`                                                         |
| **Type**        | `boolean`                                                          |
| **Default**     | `false`                                                            |

### rows

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The number of visible text lines for the control. |
| **Attribute**   | `rows`                                            |
| **Type**        | `number ｜ undefined`                             |
| **Default**     | `undefined`                                       |

### shape

|                 |                                                                                |
| --------------- | ------------------------------------------------------------------------------ |
| **Description** | The shape of the textarea. If "round" it will have an increased border radius. |
| **Attribute**   | `shape`                                                                        |
| **Type**        | `"round" ｜ undefined`                                                         |
| **Default**     | `undefined`                                                                    |

### spellcheck

|                 |                                                                    |
| --------------- | ------------------------------------------------------------------ |
| **Description** | If `true`, the element will have its spelling and grammar checked. |
| **Attribute**   | `spellcheck`                                                       |
| **Type**        | `boolean`                                                          |
| **Default**     | `false`                                                            |

### value

|                 |                               |
| --------------- | ----------------------------- |
| **Description** | The value of the textarea.    |
| **Attribute**   | `value`                       |
| **Type**        | `null ｜ string ｜ undefined` |
| **Default**     | `''`                          |

### wrap

|                 |                                          |
| --------------- | ---------------------------------------- |
| **Description** | Indicates how the control wraps text.    |
| **Attribute**   | `wrap`                                   |
| **Type**        | `"hard" ｜ "off" ｜ "soft" ｜ undefined` |
| **Default**     | `undefined`                              |

## Events

| Name        | Description                                                                                                                                                                                                                                                                                                                                                                                         | Bubbles |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ionBlur`   | Emitted when the input loses focus.                                                                                                                                                                                                                                                                                                                                                                 | `true`  |
| `ionChange` | The `ionChange` event is fired when the user modifies the textarea's value. Unlike the `ionInput` event, the `ionChange` event is fired when the element loses focus after its value has been modified.<br /><br />This event will not emit when programmatically setting the `value` property.                                                                                                     | `true`  |
| `ionFocus`  | Emitted when the input has focus.                                                                                                                                                                                                                                                                                                                                                                   | `true`  |
| `ionInput`  | The `ionInput` event is fired each time the user modifies the textarea's value. Unlike the `ionChange` event, the `ionInput` event is fired for each alteration to the textarea's value. This typically happens for each keystroke as the user types.<br /><br />When `clearOnEdit` is enabled, the `ionInput` event will be fired when the user clears the textarea by performing a keydown event. | `true`  |

## Methods

### getInputElement

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Description** | Returns the native `<textarea>` element used under the hood. |
| **Signature**   | `getInputElement() => Promise<HTMLTextAreaElement>`          |

### setFocus

|                 |                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Sets focus on the native `textarea` in `ion-textarea`. Use this method instead of the global `textarea.focus()`.<br /><br />See [managing focus](/docs/developing/managing-focus) for more information. |
| **Signature**   | `setFocus() => Promise<void>`                                                                                                                                                                           |

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
  | `--background` | Background of the textarea |
| `--border-color` | Color of the border below the textarea when using helper text, error text, or counter |
| `--border-radius` | Border radius of the textarea |
| `--border-style` | Style of the border below the textarea when using helper text, error text, or counter |
| `--border-width` | Width of the border below the textarea when using helper text, error text, or counter |
| `--color` | Color of the text |
| `--highlight-color-focused` | The color of the highlight on the textarea when focused |
| `--highlight-color-invalid` | The color of the highlight on the textarea when invalid |
| `--highlight-color-valid` | The color of the highlight on the textarea when valid |
| `--highlight-height` | The height of the highlight on the textarea. Only applies to md mode. |
| `--padding-bottom` | Bottom padding of the textarea |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the textarea |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the textarea |
| `--padding-top` | Top padding of the textarea |
| `--placeholder-color` | Color of the placeholder text |
| `--placeholder-font-style` | Style of the placeholder text |
| `--placeholder-font-weight` | Weight of the placeholder text |
| `--placeholder-opacity` | Opacity of the placeholder text |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the textarea |
| `--border-color` | Color of the border below the textarea when using helper text, error text, or counter |
| `--border-radius` | Border radius of the textarea |
| `--border-style` | Style of the border below the textarea when using helper text, error text, or counter |
| `--border-width` | Width of the border below the textarea when using helper text, error text, or counter |
| `--color` | Color of the text |
| `--highlight-color-focused` | The color of the highlight on the textarea when focused |
| `--highlight-color-invalid` | The color of the highlight on the textarea when invalid |
| `--highlight-color-valid` | The color of the highlight on the textarea when valid |
| `--highlight-height` | The height of the highlight on the textarea. Only applies to md mode. |
| `--padding-bottom` | Bottom padding of the textarea |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the textarea |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the textarea |
| `--padding-top` | Top padding of the textarea |
| `--placeholder-color` | Color of the placeholder text |
| `--placeholder-font-style` | Style of the placeholder text |
| `--placeholder-font-weight` | Weight of the placeholder text |
| `--placeholder-opacity` | Opacity of the placeholder text |


</TabItem>
</Tabs>

```

## Slots

| Name    | Description                                                                                                                                                                                                             |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `end`   | Content to display at the trailing edge of the textarea. (EXPERIMENTAL)                                                                                                                                                 |
| `label` | The label text to associate with the textarea. Use the `labelPlacement` property to control where the label is placed relative to the textarea. Use this if you need to render a label with custom HTML. (EXPERIMENTAL) |
| `start` | Content to display at the leading edge of the textarea. (EXPERIMENTAL)                                                                                                                                                  |
