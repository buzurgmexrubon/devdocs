---
title: "ion-button"
---

<head>
  <title>ion-button: Style Buttons with Custom CSS Properties</title>
  <meta name="description" content="ion-button provides a clickable element for use anywhere needing standard button functionality. Design and style button elements with custom CSS properties." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/button/basic/index.md';

<Basic />

## Expand

This property lets you specify how wide the button should be. By default, buttons have `display: inline-block`, but setting this property will change the button to a full-width element with `display: block`.

import Expand from '@site/static/ionic/usage/v8/button/expand/index.md';

<Expand />

## Shape

This property lets you specify the shape of the button. By default, buttons are rectangular with a small border radius, but setting this to `"round"` will change the button to a rounded element.

import Shape from '@site/static/ionic/usage/v8/button/shape/index.md';

<Shape />

## Fill

This property determines the background and border color of the button. By default, buttons have a solid background unless the button is inside of a toolbar, in which case it has a transparent background.

import Fill from '@site/static/ionic/usage/v8/button/fill/index.md';

<Fill />

## Size

This property specifies the size of the button. Setting this property will change the height and padding of a button.

import Size from '@site/static/ionic/usage/v8/button/size/index.md';

<Size />

## Icons

import Icons from '@site/static/ionic/usage/v8/button/icons/index.md';

<Icons />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/button/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/ionic/usage/v8/button/theming/css-properties/index.md';

<CSSProps />

## Accessibility

Buttons are built to be accessible, but may need some adjustments depending on their content. The button component renders a native [button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) which allows it to take advantage of the functionality that a native button provides.

### Overflowing Text Content

There are many cases where a button's text content may overflow the container. It is recommended to wrap the text inside of the button when this happens so that all of the text can still be read. The button component will automatically adjust its height to accommodate the extra lines of text.

The button text does not automatically wrap to the next line when the text is too long to fit. In order to make the text wrap, the `ion-text-wrap` class can be added, which will set the `white-space` property to `"normal"`. This will become the default in a future major release.

:::info
The `max-width` style is set on the button below for demo purposes only. Text wrapping will work with a dynamic button width.
:::

import TextWrapping from '@site/static/ionic/usage/v8/button/text-wrapping/index.md';

<TextWrapping />

## Properties

### buttonType

|                 |                     |
| --------------- | ------------------- |
| **Description** | The type of button. |
| **Attribute**   | `button-type`       |
| **Type**        | `string`            |
| **Default**     | `'button'`          |

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
| **Description** | If `true`, the user cannot interact with the button. |
| **Attribute**   | `disabled`                                           |
| **Type**        | `boolean`                                            |
| **Default**     | `false`                                              |

### download

|                 |                                                                                                                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). |
| **Attribute**   | `download`                                                                                                                                                                                                                                                                                |
| **Type**        | `string ｜ undefined`                                                                                                                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                               |

### expand

|                 |                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Set to `"block"` for a full-width button or to `"full"` for a full-width button with square corners and no left or right borders. |
| **Attribute**   | `expand`                                                                                                                          |
| **Type**        | `"block" ｜ "full" ｜ undefined`                                                                                                  |
| **Default**     | `undefined`                                                                                                                       |

### fill

|                 |                                                                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is `"solid"` except inside of a toolbar, where the default is `"clear"`. |
| **Attribute**   | `fill`                                                                                                                                                                                                                                                                          |
| **Type**        | `"clear" ｜ "default" ｜ "outline" ｜ "solid" ｜ undefined`                                                                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                     |

### form

|                 |                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| **Description** | The HTML form element or form element id. Used to submit a form when the button is not a child of the form. |
| **Attribute**   | `form`                                                                                                      |
| **Type**        | `HTMLFormElement ｜ string ｜ undefined`                                                                    |
| **Default**     | `undefined`                                                                                                 |

### href

|                 |                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Description** | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered. |
| **Attribute**   | `href`                                                                                                                  |
| **Type**        | `string ｜ undefined`                                                                                                   |
| **Default**     | `undefined`                                                                                                             |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### rel

|                 |                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types). |
| **Attribute**   | `rel`                                                                                                                                                                                  |
| **Type**        | `string ｜ undefined`                                                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                                                            |

### routerAnimation

|                 |                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Description** | When using a router, it specifies the transition animation when navigating to another page using `href`. |
| **Attribute**   | `router-animation`                                                                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined`                                                  |
| **Default**     | `undefined`                                                                                              |

### routerDirection

|                 |                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Description** | When using a router, it specifies the transition direction when navigating to another page using `href`. |
| **Attribute**   | `router-direction`                                                                                       |
| **Type**        | `"back" ｜ "forward" ｜ "root"`                                                                          |
| **Default**     | `'forward'`                                                                                              |

### shape

|                 |                                                          |
| --------------- | -------------------------------------------------------- |
| **Description** | Set to `"round"` for a button with more rounded corners. |
| **Attribute**   | `shape`                                                  |
| **Type**        | `"round" ｜ undefined`                                   |
| **Default**     | `undefined`                                              |

### size

|                 |                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Set to `"small"` for a button with less height and padding, to `"default"` for a button with the default height and padding, or to `"large"` for a button with more height and padding. By default the size is unset, unless the button is inside of an item, where the size is `"small"` by default. Set the size to `"default"` inside of an item to make it a standard size button. |
| **Attribute**   | `size`                                                                                                                                                                                                                                                                                                                                                                                 |
| **Type**        | `"default" ｜ "large" ｜ "small" ｜ undefined`                                                                                                                                                                                                                                                                                                                                         |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                            |

### strong

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | If `true`, activates a button with a heavier font weight. |
| **Attribute**   | `strong`                                                  |
| **Type**        | `boolean`                                                 |
| **Default**     | `false`                                                   |

### target

|                 |                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                            |
| **Type**        | `string ｜ undefined`                                                                                                                               |
| **Default**     | `undefined`                                                                                                                                         |

### type

|                 |                                   |
| --------------- | --------------------------------- |
| **Description** | The type of the button.           |
| **Attribute**   | `type`                            |
| **Type**        | `"button" ｜ "reset" ｜ "submit"` |
| **Default**     | `'button'`                        |

## Events

| Name       | Description                          | Bubbles |
| ---------- | ------------------------------------ | ------- |
| `ionBlur`  | Emitted when the button loses focus. | `true`  |
| `ionFocus` | Emitted when the button has focus.   | `true`  |

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name     | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| `native` | The native HTML button or anchor element that wraps all child elements. |

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
  | `--background` | Background of the button |
| `--background-activated` | Background of the button when pressed. Note: setting this will interfere with the Material Design ripple. |
| `--background-activated-opacity` | Opacity of the button when pressed |
| `--background-focused` | Background of the button when focused with the tab key |
| `--background-focused-opacity` | Opacity of the button when focused with the tab key |
| `--background-hover` | Background of the button on hover |
| `--background-hover-opacity` | Opacity of the background on hover |
| `--border-color` | Border color of the button |
| `--border-radius` | Border radius of the button |
| `--border-style` | Border style of the button |
| `--border-width` | Border width of the button |
| `--box-shadow` | Box shadow of the button |
| `--color` | Text color of the button |
| `--color-activated` | Text color of the button when pressed |
| `--color-focused` | Text color of the button when focused with the tab key |
| `--color-hover` | Text color of the button when hover |
| `--opacity` | Opacity of the button |
| `--padding-bottom` | Bottom padding of the button |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button |
| `--padding-top` | Top padding of the button |
| `--ripple-color` | Color of the button ripple effect |
| `--transition` | Transition of the button |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the button |
| `--background-activated` | Background of the button when pressed. Note: setting this will interfere with the Material Design ripple. |
| `--background-activated-opacity` | Opacity of the button when pressed |
| `--background-focused` | Background of the button when focused with the tab key |
| `--background-focused-opacity` | Opacity of the button when focused with the tab key |
| `--background-hover` | Background of the button on hover |
| `--background-hover-opacity` | Opacity of the background on hover |
| `--border-color` | Border color of the button |
| `--border-radius` | Border radius of the button |
| `--border-style` | Border style of the button |
| `--border-width` | Border width of the button |
| `--box-shadow` | Box shadow of the button |
| `--color` | Text color of the button |
| `--color-activated` | Text color of the button when pressed |
| `--color-focused` | Text color of the button when focused with the tab key |
| `--color-hover` | Text color of the button when hover |
| `--opacity` | Opacity of the button |
| `--padding-bottom` | Bottom padding of the button |
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button |
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button |
| `--padding-top` | Top padding of the button |
| `--ripple-color` | Color of the button ripple effect |
| `--transition` | Transition of the button |


</TabItem>
</Tabs>

```

## Slots

| Name        | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| ``          | Content is placed between the named slots if provided without a slot.             |
| `end`       | Content is placed to the right of the button text in LTR, and to the left in RTL. |
| `icon-only` | Should be used on an icon in a button that has no text.                           |
| `start`     | Content is placed to the left of the button text in LTR, and to the right in RTL. |
