---
title: "ion-searchbar"
---

<head>
  <title>ion-searchbar: Search Bar for Searching a Collection</title>
  <meta name="description" content="Search bars represent a text field that can be used to search through a collection. Learn to input Ion-Search Bar as an icon on Android & iOS keyboard displays." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Searchbars represent a text field that can be used to search through a collection. They can be displayed inside of a toolbar or the main content. A searchbar should be used instead of an input to search lists.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/searchbar/basic/index.md';

<Basic />

## Search Icon

A search icon is displayed to the left of the input field in a searchbar. It can be customized to any [Ionicon](https://ionic.io/ionicons/).

import SearchIcon from '@site/static/ionic/usage/v8/searchbar/search-icon/index.md';

<SearchIcon />

## Clear Button

A clear button is displayed when a searchbar has a value or upon entering input in the searchbar's text field. Clicking on the clear button will erase the text field and the input will remain focused. By default, the clear button is set to show when focusing the searchbar, but it can be set to always show or never show. The icon inside of the clear button can also be customized to any [Ionicon](https://ionic.io/ionicons/).

import ClearButton from '@site/static/ionic/usage/v8/searchbar/clear-button/index.md';

<ClearButton />

## Cancel Button

A cancel button can be enabled which will clear the input and lose the focus upon click. By default, cancel buttons are set to never show, but they can be set to always show or only show when focusing the searchbar. The cancel button is displayed as text in `ios` mode, and as an icon in `md` mode. Both the text and icon can be customized using different properties, with the icon accepting any [Ionicon](https://ionic.io/ionicons/).

import CancelButton from '@site/static/ionic/usage/v8/searchbar/cancel-button/index.md';

<CancelButton />

## Searchbars in Toolbars

Searchbars are styled to look native when placed inside of a toolbar. In iOS, searchbars should be placed in their own toolbar, under a toolbar that contains the page title. In Material Design, searchbars are either persistently displayed in their own toolbar, or expand over a toolbar containing the page title.

<!-- Reuse the playground from the Toolbar directory -->

import Toolbar from '@site/static/ionic/usage/v8/toolbar/searchbars/index.md';

<Toolbar />

## Debounce

A debounce can be set on the searchbar in order to delay triggering the `ionInput` event. This is useful when querying data, as it can be used to wait to make a request instead of requesting the data each time a character is entered in the input.

import Debounce from '@site/static/ionic/usage/v8/searchbar/debounce/index.md';

<Debounce />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/searchbar/theming/colors/index.md';

<Colors />

### CSS Custom Properties

Searchbar uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector. Targeting the `ion-searchbar` for customization will not work, therefore we recommend adding a class and customizing it that way.

import CSSProps from '@site/static/ionic/usage/v8/searchbar/theming/css-properties/index.md';

<CSSProps />

## Keyboard Display

### Android

By default, tapping the input will cause the keyboard to appear with a magnifying glass icon on the submit button. You can optionally set the `inputmode` property to `"search"`, which will change the icon from a magnifying glass to a carriage return.

### iOS

By default, tapping the input will cause the keyboard to appear with the text "return" on a gray submit button. You can optionally set the `inputmode` property to `"search"`, which will change the text from "return" to "go", and change the button color from gray to blue. Alternatively, you can wrap the `ion-searchbar` in a `form` element with an `action` property. This will cause the keyboard to appear with a blue submit button that says "search".

## Interfaces

### SearchbarChangeEventDetail

```typescript
interface SearchbarChangeEventDetail {
  value?: string
}
```

### SearchbarCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface SearchbarCustomEvent extends CustomEvent {
  detail: SearchbarChangeEventDetail
  target: HTMLIonSearchbarElement
}
```

## Properties

### animated

|                 |                                        |
| --------------- | -------------------------------------- |
| **Description** | If `true`, enable searchbar animation. |
| **Attribute**   | `animated`                             |
| **Type**        | `boolean`                              |
| **Default**     | `false`                                |

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
| **Description** | Set the input's autocomplete property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Attribute**   | `autocomplete`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Type**        | `"name" ｜ "email" ｜ "tel" ｜ "url" ｜ "on" ｜ "off" ｜ "honorific-prefix" ｜ "given-name" ｜ "additional-name" ｜ "family-name" ｜ "honorific-suffix" ｜ "nickname" ｜ "username" ｜ "new-password" ｜ "current-password" ｜ "one-time-code" ｜ "organization-title" ｜ "organization" ｜ "street-address" ｜ "address-line1" ｜ "address-line2" ｜ "address-line3" ｜ "address-level4" ｜ "address-level3" ｜ "address-level2" ｜ "address-level1" ｜ "country" ｜ "country-name" ｜ "postal-code" ｜ "cc-name" ｜ "cc-given-name" ｜ "cc-additional-name" ｜ "cc-family-name" ｜ "cc-number" ｜ "cc-exp" ｜ "cc-exp-month" ｜ "cc-exp-year" ｜ "cc-csc" ｜ "cc-type" ｜ "transaction-currency" ｜ "transaction-amount" ｜ "language" ｜ "bday" ｜ "bday-day" ｜ "bday-month" ｜ "bday-year" ｜ "sex" ｜ "tel-country-code" ｜ "tel-national" ｜ "tel-area-code" ｜ "tel-local" ｜ "tel-extension" ｜ "impp" ｜ "photo"` |
| **Default**     | `'off'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### autocorrect

|                 |                                       |
| --------------- | ------------------------------------- |
| **Description** | Set the input's autocorrect property. |
| **Attribute**   | `autocorrect`                         |
| **Type**        | `"off" ｜ "on"`                       |
| **Default**     | `'off'`                               |

### cancelButtonIcon

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | Set the cancel button icon. Only applies to `md` mode. Defaults to `arrow-back-sharp`. |
| **Attribute**   | `cancel-button-icon`                                                                   |
| **Type**        | `string`                                                                               |
| **Default**     | `config.get('backButtonIcon', arrowBackSharp) as string`                               |

### cancelButtonText

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | Set the cancel button text. Only applies to `ios` mode. |
| **Attribute**   | `cancel-button-text`                                    |
| **Type**        | `string`                                                |
| **Default**     | `'Cancel'`                                              |

### clearIcon

|                 |                                                                                      |
| --------------- | ------------------------------------------------------------------------------------ |
| **Description** | Set the clear icon. Defaults to `close-circle` for `ios` and `close-sharp` for `md`. |
| **Attribute**   | `clear-icon`                                                                         |
| **Type**        | `string ｜ undefined`                                                                |
| **Default**     | `undefined`                                                                          |

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

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

### inputmode

|                 |                                                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`. |
| **Attribute**   | `inputmode`                                                                                                                                                      |
| **Type**        | `"decimal" ｜ "email" ｜ "none" ｜ "numeric" ｜ "search" ｜ "tel" ｜ "text" ｜ "url" ｜ undefined`                                                               |
| **Default**     | `undefined`                                                                                                                                                      |

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

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | If used in a form, set the name of the control, which is submitted with the form data. |
| **Attribute**   | `name`                                                                                 |
| **Type**        | `string`                                                                               |
| **Default**     | `this.inputId`                                                                         |

### placeholder

|                 |                                                                                                                                                                                                                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Set the input's placeholder. `placeholder` can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example `<Ionic>` would become `&lt;Ionic&gt;`<br /><br />For more information: [Security Documentation](https://ionicframework.com/docs/faq/security) |
| **Attribute**   | `placeholder`                                                                                                                                                                                                                                                                                                                  |
| **Type**        | `string`                                                                                                                                                                                                                                                                                                                       |
| **Default**     | `'Search'`                                                                                                                                                                                                                                                                                                                     |

### searchIcon

|                 |                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| **Description** | The icon to use as the search icon. Defaults to `search-outline` in `ios` mode and `search-sharp` in `md` mode. |
| **Attribute**   | `search-icon`                                                                                                   |
| **Type**        | `string ｜ undefined`                                                                                           |
| **Default**     | `undefined`                                                                                                     |

### showCancelButton

|                 |                                                                                                                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Sets the behavior for the cancel button. Defaults to `"never"`. Setting to `"focus"` shows the cancel button on focus. Setting to `"never"` hides the cancel button. Setting to `"always"` shows the cancel button regardless of focus state. |
| **Attribute**   | `show-cancel-button`                                                                                                                                                                                                                          |
| **Type**        | `"always" ｜ "focus" ｜ "never"`                                                                                                                                                                                                              |
| **Default**     | `'never'`                                                                                                                                                                                                                                     |

### showClearButton

|                 |                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Sets the behavior for the clear button. Defaults to `"focus"`. Setting to `"focus"` shows the clear button on focus if the input is not empty. Setting to `"never"` hides the clear button. Setting to `"always"` shows the clear button regardless of focus state, but only if the input is not empty. |
| **Attribute**   | `show-clear-button`                                                                                                                                                                                                                                                                                     |
| **Type**        | `"always" ｜ "focus" ｜ "never"`                                                                                                                                                                                                                                                                        |
| **Default**     | `'always'`                                                                                                                                                                                                                                                                                              |

### spellcheck

|                 |                                            |
| --------------- | ------------------------------------------ |
| **Description** | If `true`, enable spellcheck on the input. |
| **Attribute**   | `spellcheck`                               |
| **Type**        | `boolean`                                  |
| **Default**     | `false`                                    |

### type

|                 |                                                                             |
| --------------- | --------------------------------------------------------------------------- |
| **Description** | Set the type of the input.                                                  |
| **Attribute**   | `type`                                                                      |
| **Type**        | `"email" ｜ "number" ｜ "password" ｜ "search" ｜ "tel" ｜ "text" ｜ "url"` |
| **Default**     | `'search'`                                                                  |

### value

|                 |                               |
| --------------- | ----------------------------- |
| **Description** | the value of the searchbar.   |
| **Attribute**   | `value`                       |
| **Type**        | `null ｜ string ｜ undefined` |
| **Default**     | `''`                          |

## Events

| Name        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Bubbles |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ionBlur`   | Emitted when the input loses focus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `true`  |
| `ionCancel` | Emitted when the cancel button is clicked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `true`  |
| `ionChange` | The `ionChange` event is fired for `<ion-searchbar>` elements when the user modifies the element's value. Unlike the `ionInput` event, the `ionChange` event is not necessarily fired for each alteration to an element's value.<br /><br />The `ionChange` event is fired when the value has been committed by the user. This can happen when the element loses focus or when the "Enter" key is pressed. `ionChange` can also fire when clicking the clear or cancel buttons.<br /><br />This event will not emit when programmatically setting the `value` property. | `true`  |
| `ionClear`  | Emitted when the clear input button is clicked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `true`  |
| `ionFocus`  | Emitted when the input has focus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `true`  |
| `ionInput`  | Emitted when the `value` of the `ion-searchbar` element has changed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `true`  |

## Methods

### getInputElement

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | Returns the native `<input>` element used under the hood. |
| **Signature**   | `getInputElement() => Promise<HTMLInputElement>`          |

### setFocus

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Sets focus on the native `input` in `ion-searchbar`. Use this method instead of the global `input.focus()`.<br /><br />Developers who wish to focus an input when a page enters should call `setFocus()` in the `ionViewDidEnter()` lifecycle method.<br /><br />Developers who wish to focus an input when an overlay is presented should call `setFocus` after `didPresent` has resolved.<br /><br />See [managing focus](/docs/developing/managing-focus) for more information. |
| **Signature**   | `setFocus() => Promise<void>`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

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
  | `--background` | Background of the searchbar input |
| `--border-radius` | Border radius of the searchbar input |
| `--box-shadow` | Box shadow of the searchbar input |
| `--cancel-button-color` | Color of the searchbar cancel button |
| `--clear-button-color` | Color of the searchbar clear button |
| `--color` | Color of the searchbar text |
| `--icon-color` | Color of the searchbar icon |
| `--placeholder-color` | Color of the searchbar placeholder |
| `--placeholder-font-style` | Font style of the searchbar placeholder |
| `--placeholder-font-weight` | Font weight of the searchbar placeholder |
| `--placeholder-opacity` | Opacity of the searchbar placeholder |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the searchbar input |
| `--border-radius` | Border radius of the searchbar input |
| `--box-shadow` | Box shadow of the searchbar input |
| `--cancel-button-color` | Color of the searchbar cancel button |
| `--clear-button-color` | Color of the searchbar clear button |
| `--color` | Color of the searchbar text |
| `--icon-color` | Color of the searchbar icon |
| `--placeholder-color` | Color of the searchbar placeholder |
| `--placeholder-font-style` | Font style of the searchbar placeholder |
| `--placeholder-font-weight` | Font weight of the searchbar placeholder |
| `--placeholder-opacity` | Opacity of the searchbar placeholder |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
