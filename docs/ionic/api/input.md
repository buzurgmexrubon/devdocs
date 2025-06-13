---
title: "ion-input"
---

<head>
  <title>ion-input: Custom Input With Styling and CSS Properties</title>
  <meta name="description" content="ion-input is a wrapper to the HTML input element, with custom value type styling and functionality. It integrates with the keyboard on mobile devices." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

The input component is a wrapper to the HTML input element with custom styling and additional functionality. It accepts most of the same properties as the HTML input and integrates with the keyboard on mobile devices.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/input/basic/index.md';

<Basic />

## Types

The input component is meant for text type inputs only, such as `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, and `"url"`. It supports all standard text input events including `keyup`, `keydown`, `keypress`, and more. The default `type` is `"text"`.

import Types from '@site/static/ionic/usage/v8/input/types/index.md';

<Types />

## Labels

Labels should be used to describe the input. They can be used visually, and they will also be read out by screen readers when the user is focused on the input. This makes it easy for the user to understand the intent of the input. Input has several ways to assign a label:

- `label` property: used for plaintext labels
- `label` slot: used for custom HTML labels (experimental)
- `aria-label`: used to provide a label for screen readers but adds no visible label

### Label Placement

Labels will take up the width of their content by default. Developers can use the `labelPlacement` property to control how the label is placed relative to the control.

import LabelPlacement from '@site/static/ionic/usage/v8/input/label-placement/index.md';

<LabelPlacement />

### Label Slot (experimental)

While plaintext labels should be passed in via the `label` property, if custom HTML is needed, it can be passed through the `label` slot instead.

Note that this feature is considered experimental because it relies on a simulated version of [Web Component slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots). As a result, the simulated behavior may not exactly match the native slot behavior.

import LabelSlot from '@site/static/ionic/usage/v8/input/label-slot/index.md';

<LabelSlot />

### No Visible Label

If no visible label is needed, developers should still supply an `aria-label` so the input is accessible to screen readers.

import NoVisibleLabel from '@site/static/ionic/usage/v8/input/no-visible-label/index.md';

<NoVisibleLabel />

## Clear Options

Inputs offer two options for clearing the input based on how you interact with it. The first way is by adding the `clearInput` property which will show a clear button when the input has a `value`. The second way is the `clearOnEdit` property which will clear the input after it has been blurred and then typed in again. Inputs with a `type` set to `"password"` will have `clearOnEdit` enabled by default.

import Clear from '@site/static/ionic/usage/v8/input/clear/index.md';

<Clear />

## Filled Inputs

Material Design offers filled styles for an input. The `fill` property on the input can be set to either `"solid"` or `"outline"`.

Filled inputs can be used on iOS by setting the input's `mode` to `md`.

:::warning
Inputs that use `fill` should not be used in an `ion-item` due to styling conflicts between the components.
:::

import Fill from '@site/static/ionic/usage/v8/input/fill/index.md';

<Fill />

## Helper & Error Text

Helper and error text can be used inside of an input with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-input`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/ionic/usage/v8/input/helper-error/index.md';

<HelperError />

## Input Counter

The input counter is text that displays under an input to notify the user of how many characters have been entered out of the total that the input will accept. When adding counter, the default behavior is to format the value that gets displayed as `inputLength` / `maxLength`. This behavior can be customized by passing in a formatter function to the `counterFormatter` property.

The `counter` and `counterFormatter` properties on `ion-item` were [deprecated in Ionic 7](/docs/api/input#using-the-modern-syntax) and should be used directly on `ion-input` instead.

import Counter from '@site/static/ionic/usage/v8/input/counter/index.md';

<Counter />

Inputs with a counter add a border between the input and the counter, therefore they should not be placed inside of an `ion-item` which adds an additional border under the item. The `ion-padding-start` class can be added to align the counter inputs with inputs inside of items.

import CounterAlignment from '@site/static/ionic/usage/v8/input/counter-alignment/index.md';

<CounterAlignment />

## Filtering User Input

Developers can use the `ionInput` event to update the input value in response to user input such as a `keypress`. This is useful for filtering out invalid or unwanted characters.

When storing the value in a state variable, we recommend updating both the state variable and the `ion-input` component value. This ensures that the state variable and the `ion-input` component value remain in sync.

import FilteringData from '@site/static/ionic/usage/v8/input/filtering/index.md';

<FilteringData />

## Input Masking

Input masks are expressions that constrain input to support valid input values. Ionic recommends using [Maskito](https://maskito.dev) for input masking. Maskito is a lightweight, dependency-free library for masking input fields. It supports a wide range of masks, including phone numbers, credit cards, dates, and more.

To get started with Maskito, install the library:

```bash
npm install @maskito/core @maskito/{angular,react,vue}
```

import Masking from '@site/static/ionic/usage/v8/input/mask/index.md';

<Masking />

:::note

Please submit bug reports with Maskito to the [Maskito Github repository](https://github.com/taiga-family/maskito/issues). For technical support, please use the [Ionic Forum](https://forum.ionicframework.com/) or [Ionic Discord](http://chat.ionicframework.com/).

:::

## Start and End Slots (experimental)

The `start` and `end` slots can be used to place icons, buttons, or prefix/suffix text on either side of the input.

Note that this feature is considered experimental because it relies on a simulated version of [Web Component slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots). As a result, the simulated behavior may not exactly match the native slot behavior.

:::note
In most cases, [Icon](./icon.md) components placed in these slots should have `aria-hidden="true"`. See the [Icon accessibility docs](https://ionicframework.com/docs/api/icon#accessibility) for more information.

If slot content is meant to be interacted with, it should be wrapped in an interactive element such as a [Button](./button.md). This ensures that the content can be tabbed to.
:::

import StartEndSlots from '@site/static/ionic/usage/v8/input/start-end-slots/index.md';

<StartEndSlots />

## Theming

### Colors

Setting the `color` property changes the color palette for each input. On `ios` mode, this property changes the caret color. On `md` mode, this property changes the caret color and the highlight/underline color.

:::note
The `color` property does _not_ change the text color of the input. For that, use the [`--color` CSS property](#css-custom-properties-1).
:::

import Colors from '@site/static/ionic/usage/v8/input/theming/colors/index.md';

<Colors />

### CSS Custom Properties

Input uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector. Targeting the `ion-input` for customization will not work; therefore we recommend adding a class and customizing it that way.

import CSSProps from '@site/static/ionic/usage/v8/input/theming/css-properties/index.md';

<CSSProps />

## Migrating from Legacy Input Syntax

A simpler input syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup an input, resolves accessibility issues, and improves the developer experience.

Developers can perform this migration one input at a time. While developers can continue using the legacy syntax, we recommend migrating as soon as possible.

### Using the Modern Syntax

Using the modern syntax involves three steps:

1. Remove `ion-label` and use the `label` property on `ion-input` instead. The placement of the label can be configured using the `labelPlacement` property on `ion-input`.
2. Move input-specific properties from `ion-item` on to `ion-input`. This includes the `counter`, `counterFormatter`, `fill`, and `shape` properties.
3. Remove usages of the `helper` and `error` slots on `ion-item` and use the `helperText` and `errorText` properties on `ion-input` instead.

import Migration from '@site/static/ionic/usage/v8/input/migration/index.md';

<Migration />

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern input syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-input` to `true` to force that instance of the input to use the legacy syntax.

## Interfaces

### InputChangeEventDetail

```typescript
interface InputChangeEventDetail {
  value: string | undefined | null
}
```

### InputCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface InputCustomEvent extends CustomEvent {
  detail: InputChangeEventDetail
  target: HTMLIonInputElement
}
```

## Properties

### autocapitalize

|                 |                                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. |
| **Attribute**   | `autocapitalize`                                                                                                                                                                                          |
| **Type**        | `string`                                                                                                                                                                                                  |
| **Default**     | `'off'`                                                                                                                                                                                                   |

### autocomplete

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Indicates whether the value of the control can be automatically completed by the browser.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Attribute**   | `autocomplete`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Type**        | `"name" ｜ "email" ｜ "tel" ｜ "url" ｜ "on" ｜ "off" ｜ "honorific-prefix" ｜ "given-name" ｜ "additional-name" ｜ "family-name" ｜ "honorific-suffix" ｜ "nickname" ｜ "username" ｜ "new-password" ｜ "current-password" ｜ "one-time-code" ｜ "organization-title" ｜ "organization" ｜ "street-address" ｜ "address-line1" ｜ "address-line2" ｜ "address-line3" ｜ "address-level4" ｜ "address-level3" ｜ "address-level2" ｜ "address-level1" ｜ "country" ｜ "country-name" ｜ "postal-code" ｜ "cc-name" ｜ "cc-given-name" ｜ "cc-additional-name" ｜ "cc-family-name" ｜ "cc-number" ｜ "cc-exp" ｜ "cc-exp-month" ｜ "cc-exp-year" ｜ "cc-csc" ｜ "cc-type" ｜ "transaction-currency" ｜ "transaction-amount" ｜ "language" ｜ "bday" ｜ "bday-day" ｜ "bday-month" ｜ "bday-year" ｜ "sex" ｜ "tel-country-code" ｜ "tel-national" ｜ "tel-area-code" ｜ "tel-local" ｜ "tel-extension" ｜ "impp" ｜ "photo"` |
| **Default**     | `'off'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### autocorrect

|                 |                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------- |
| **Description** | Whether auto correction should be enabled when the user is entering/editing the text value. |
| **Attribute**   | `autocorrect`                                                                               |
| **Type**        | `"off" ｜ "on"`                                                                             |
| **Default**     | `'off'`                                                                                     |

### autofocus

|                 |                                                                                                                                                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Sets the [`autofocus` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus) on the native input element.<br /><br />This may not be sufficient for the element to be focused on page load. See [managing focus](/docs/developing/managing-focus) for more information. |
| **Attribute**   | `autofocus`                                                                                                                                                                                                                                                                                                |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                  |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                    |

### clearInput

|                 |                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input. |
| **Attribute**   | `clear-input`                                                                                         |
| **Type**        | `boolean`                                                                                             |
| **Default**     | `false`                                                                                               |

### clearInputIcon

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | The icon to use for the clear button. Only applies when `clearInput` is set to `true`. |
| **Attribute**   | `clear-input-icon`                                                                     |
| **Type**        | `string ｜ undefined`                                                                  |
| **Default**     | `undefined`                                                                            |

### clearOnEdit

|                 |                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types. |
| **Attribute**   | `clear-on-edit`                                                                                                                          |
| **Type**        | `boolean ｜ undefined`                                                                                                                   |
| **Default**     | `undefined`                                                                                                                              |

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

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

|                 |                                                     |
| --------------- | --------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the input. |
| **Attribute**   | `disabled`                                          |
| **Type**        | `boolean`                                           |
| **Default**     | `false`                                             |

### enterkeyhint

|                 |                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`. |
| **Attribute**   | `enterkeyhint`                                                                                                                                        |
| **Type**        | `"done" ｜ "enter" ｜ "go" ｜ "next" ｜ "previous" ｜ "search" ｜ "send" ｜ undefined`                                                                |
| **Default**     | `undefined`                                                                                                                                           |

### errorText

|                 |                                                                              |
| --------------- | ---------------------------------------------------------------------------- |
| **Description** | Text that is placed under the input and displayed when an error is detected. |
| **Attribute**   | `error-text`                                                                 |
| **Type**        | `string ｜ undefined`                                                        |
| **Default**     | `undefined`                                                                  |

### fill

|                 |                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The fill for the item. If `"solid"` the item will have a background. If `"outline"` the item will be transparent with a border. Only available in `md` mode. |
| **Attribute**   | `fill`                                                                                                                                                       |
| **Type**        | `"outline" ｜ "solid" ｜ undefined`                                                                                                                          |
| **Default**     | `undefined`                                                                                                                                                  |

### helperText

|                 |                                                                              |
| --------------- | ---------------------------------------------------------------------------- |
| **Description** | Text that is placed under the input and displayed when no error is detected. |
| **Attribute**   | `helper-text`                                                                |
| **Type**        | `string ｜ undefined`                                                        |
| **Default**     | `undefined`                                                                  |

### inputmode

|                 |                                                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`. |
| **Attribute**   | `inputmode`                                                                                                                                                      |
| **Type**        | `"decimal" ｜ "email" ｜ "none" ｜ "numeric" ｜ "search" ｜ "tel" ｜ "text" ｜ "url" ｜ undefined`                                                               |
| **Default**     | `undefined`                                                                                                                                                      |

### label

|                 |                                                                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The visible label associated with the input.<br /><br />Use this if you need to render a plaintext label.<br /><br />The `label` property will take priority over the `label` slot if both are used. |
| **Attribute**   | `label`                                                                                                                                                                                              |
| **Type**        | `string ｜ undefined`                                                                                                                                                                                |
| **Default**     | `undefined`                                                                                                                                                                                          |

### labelPlacement

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Where to place the label relative to the input. `"start"`: The label will appear to the left of the input in LTR and to the right in RTL. `"end"`: The label will appear to the right of the input in LTR and to the left in RTL. `"floating"`: The label will appear smaller and above the input when the input is focused or it has a value. Otherwise it will appear on top of the input. `"stacked"`: The label will appear smaller and above the input regardless even when the input is blurred or has no value. `"fixed"`: The label has the same behavior as `"start"` except it also has a fixed width. Long text will be truncated with ellipses ("..."). |
| **Attribute**   | `label-placement`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Type**        | `"end" ｜ "fixed" ｜ "floating" ｜ "stacked" ｜ "start"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Default**     | `'start'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### max

|                 |                                                                                   |
| --------------- | --------------------------------------------------------------------------------- |
| **Description** | The maximum value, which must not be less than its minimum (min attribute) value. |
| **Attribute**   | `max`                                                                             |
| **Type**        | `number ｜ string ｜ undefined`                                                   |
| **Default**     | `undefined`                                                                       |

### maxlength

|                 |                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter. |
| **Attribute**   | `maxlength`                                                                                                                                                                      |
| **Type**        | `number ｜ undefined`                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                      |

### min

|                 |                                                                                      |
| --------------- | ------------------------------------------------------------------------------------ |
| **Description** | The minimum value, which must not be greater than its maximum (max attribute) value. |
| **Attribute**   | `min`                                                                                |
| **Type**        | `number ｜ string ｜ undefined`                                                      |
| **Default**     | `undefined`                                                                          |

### minlength

|                 |                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter. |
| **Attribute**   | `minlength`                                                                                                                                                                      |
| **Type**        | `number ｜ undefined`                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                      |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### multiple

|                 |                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"`, otherwise it is ignored. |
| **Attribute**   | `multiple`                                                                                                                                      |
| **Type**        | `boolean ｜ undefined`                                                                                                                          |
| **Default**     | `undefined`                                                                                                                                     |

### name

|                 |                                                                 |
| --------------- | --------------------------------------------------------------- |
| **Description** | The name of the control, which is submitted with the form data. |
| **Attribute**   | `name`                                                          |
| **Type**        | `string`                                                        |
| **Default**     | `this.inputId`                                                  |

### pattern

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information. |
| **Attribute**   | `pattern`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Type**        | `string ｜ undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### placeholder

|                 |                                                                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Instructional text that shows before the input has a value. This property applies only when the `type` property is set to `"email"`, `"number"`, `"password"`, `"search"`, `"tel"`, `"text"`, or `"url"`, otherwise it is ignored. |
| **Attribute**   | `placeholder`                                                                                                                                                                                                                      |
| **Type**        | `string ｜ undefined`                                                                                                                                                                                                              |
| **Default**     | `undefined`                                                                                                                                                                                                                        |

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

### shape

|                 |                                                                             |
| --------------- | --------------------------------------------------------------------------- |
| **Description** | The shape of the input. If "round" it will have an increased border radius. |
| **Attribute**   | `shape`                                                                     |
| **Type**        | `"round" ｜ undefined`                                                      |
| **Default**     | `undefined`                                                                 |

### spellcheck

|                 |                                                                    |
| --------------- | ------------------------------------------------------------------ |
| **Description** | If `true`, the element will have its spelling and grammar checked. |
| **Attribute**   | `spellcheck`                                                       |
| **Type**        | `boolean`                                                          |
| **Default**     | `false`                                                            |

### step

|                 |                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number. |
| **Attribute**   | `step`                                                                                                                                                       |
| **Type**        | `string ｜ undefined`                                                                                                                                        |
| **Default**     | `undefined`                                                                                                                                                  |

### type

|                 |                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The type of control to display. The default type is text.                                                                                |
| **Attribute**   | `type`                                                                                                                                   |
| **Type**        | `"date" ｜ "datetime-local" ｜ "email" ｜ "month" ｜ "number" ｜ "password" ｜ "search" ｜ "tel" ｜ "text" ｜ "time" ｜ "url" ｜ "week"` |
| **Default**     | `'text'`                                                                                                                                 |

### value

|                 |                                         |
| --------------- | --------------------------------------- |
| **Description** | The value of the input.                 |
| **Attribute**   | `value`                                 |
| **Type**        | `null ｜ number ｜ string ｜ undefined` |
| **Default**     | `''`                                    |

## Events

| Name        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Bubbles |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ionBlur`   | Emitted when the input loses focus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `true`  |
| `ionChange` | The `ionChange` event is fired when the user modifies the input's value. Unlike the `ionInput` event, the `ionChange` event is only fired when changes are committed, not as the user types.<br /><br />Depending on the way the users interacts with the element, the `ionChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<ion-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the user's interaction is typing.<br /><br />This event will not emit when programmatically setting the `value` property. | `true`  |
| `ionFocus`  | Emitted when the input has focus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `true`  |
| `ionInput`  | The `ionInput` event is fired each time the user modifies the input's value. Unlike the `ionChange` event, the `ionInput` event is fired for each alteration to the input's value. This typically happens for each keystroke as the user types.<br /><br />For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is [`InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent); for others, the interface is [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event). If the input is cleared on edit, the type is `null`.                                                                                                        | `true`  |

## Methods

### getInputElement

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | Returns the native `<input>` element used under the hood. |
| **Signature**   | `getInputElement() => Promise<HTMLInputElement>`          |

### setFocus

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Sets focus on the native `input` in `ion-input`. Use this method instead of the global `input.focus()`.<br /><br />Developers who wish to focus an input when a page enters should call `setFocus()` in the `ionViewDidEnter()` lifecycle method.<br /><br />Developers who wish to focus an input when an overlay is presented should call `setFocus` after `didPresent` has resolved.<br /><br />See [managing focus](/docs/developing/managing-focus) for more information. |
| **Signature**   | `setFocus() => Promise<void>`                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

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
  | `--background` | Background of the input |
| `--border-color` | Color of the border below the input when using helper text, error text, or counter |
| `--border-radius` | Radius of the input. A large radius may display unevenly when using fill="outline"; if needed, use shape="round" instead or increase --padding-start. |
| `--border-style` | Style of the border below the input when using helper text, error text, or counter |
| `--border-width` | Width of the border below the input when using helper text, error text, or counter |
| `--color` | Color of the input text |
| `--highlight-color-focused` | The color of the highlight on the input when focused |
| `--highlight-color-invalid` | The color of the highlight on the input when invalid |
| `--highlight-color-valid` | The color of the highlight on the input when valid |
| `--highlight-height` | The height of the highlight on the input. Only applies to md mode. |
| `--padding-bottom` | Bottom padding of the input |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the input |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the input |
| `--padding-top` | Top padding of the input |
| `--placeholder-color` | Color of the input placeholder text |
| `--placeholder-font-style` | Font style of the input placeholder text |
| `--placeholder-font-weight` | Font weight of the input placeholder text |
| `--placeholder-opacity` | Opacity of the input placeholder text |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the input |
| `--border-color` | Color of the border below the input when using helper text, error text, or counter |
| `--border-radius` | Radius of the input. A large radius may display unevenly when using fill="outline"; if needed, use shape="round" instead or increase --padding-start. |
| `--border-style` | Style of the border below the input when using helper text, error text, or counter |
| `--border-width` | Width of the border below the input when using helper text, error text, or counter |
| `--color` | Color of the input text |
| `--highlight-color-focused` | The color of the highlight on the input when focused |
| `--highlight-color-invalid` | The color of the highlight on the input when invalid |
| `--highlight-color-valid` | The color of the highlight on the input when valid |
| `--highlight-height` | The height of the highlight on the input. Only applies to md mode. |
| `--padding-bottom` | Bottom padding of the input |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the input |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the input |
| `--padding-top` | Top padding of the input |
| `--placeholder-color` | Color of the input placeholder text |
| `--placeholder-font-style` | Font style of the input placeholder text |
| `--placeholder-font-weight` | Font weight of the input placeholder text |
| `--placeholder-opacity` | Opacity of the input placeholder text |


</TabItem>
</Tabs>

```

## Slots

| Name    | Description                                                                                                                                                                                                       |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `end`   | Content to display at the trailing edge of the input. (EXPERIMENTAL)                                                                                                                                              |
| `label` | The label text to associate with the input. Use the `labelPlacement` property to control where the label is placed relative to the input. Use this if you need to render a label with custom HTML. (EXPERIMENTAL) |
| `start` | Content to display at the leading edge of the input. (EXPERIMENTAL)                                                                                                                                               |
