---
title: "ion-fab-button"
---

<head>
  <title>ion-fab-button: Ionic FAB Button Icon for Primary Action</title>
  <meta name="description" content="Floating Action Buttons (FABs) represent the primary action in an app. The icons are circular and, when pressed, the button may open more related actions." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Floating Action Buttons (FABs) represent the primary action in an application. By default, they have a circular shape. When pressed, the button may open more related actions.

As the name suggests, FABs generally float over the content in a fixed position. This is achieved by wrapping the fab button in a [fab](./fab) component. If the button is not wrapped with a fab, it will scroll with the content.

For usage examples, see the [fab documentation](./fab).

## Properties

### activated

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | If `true`, the fab button will be show a close icon. |
| **Attribute**   | `activated`                                          |
| **Type**        | `boolean`                                            |
| **Default**     | `false`                                              |

### closeIcon

|                 |                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The icon name to use for the close icon. This will appear when the fab button is pressed. Only applies if it is the main button inside of a fab containing a fab list. |
| **Attribute**   | `close-icon`                                                                                                                                                           |
| **Type**        | `string`                                                                                                                                                               |
| **Default**     | `close`                                                                                                                                                                |

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### disabled

|                 |                                                          |
| --------------- | -------------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the fab button. |
| **Attribute**   | `disabled`                                               |
| **Type**        | `boolean`                                                |
| **Default**     | `false`                                                  |

### download

|                 |                                                                                                                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). |
| **Attribute**   | `download`                                                                                                                                                                                                                                                                                |
| **Type**        | `string ｜ undefined`                                                                                                                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                               |

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

### show

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | If `true`, the fab button will show when in a fab-list. |
| **Attribute**   | `show`                                                  |
| **Type**        | `boolean`                                               |
| **Default**     | `false`                                                 |

### size

|                 |                                                                                 |
| --------------- | ------------------------------------------------------------------------------- |
| **Description** | The size of the button. Set this to `small` in order to have a mini fab button. |
| **Attribute**   | `size`                                                                          |
| **Type**        | `"small" ｜ undefined`                                                          |
| **Default**     | `undefined`                                                                     |

### target

|                 |                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                            |
| **Type**        | `string ｜ undefined`                                                                                                                               |
| **Default**     | `undefined`                                                                                                                                         |

### translucent

|                 |                                                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the fab button will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility). |
| **Attribute**   | `translucent`                                                                                                                                                                                                             |
| **Type**        | `boolean`                                                                                                                                                                                                                 |
| **Default**     | `false`                                                                                                                                                                                                                   |

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

| Name         | Description                                                             |
| ------------ | ----------------------------------------------------------------------- |
| `close-icon` | The close icon that is displayed when a fab list opens (uses ion-icon). |
| `native`     | The native HTML button or anchor element that wraps all child elements. |

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
| `--background-activated-opacity` | Opacity of the button background when pressed |
| `--background-focused` | Background of the button when focused with the tab key |
| `--background-focused-opacity` | Opacity of the button background when focused with the tab key |
| `--background-hover` | Background of the button on hover |
| `--background-hover-opacity` | Opacity of the button background on hover |
| `--border-color` | Border color of the button |
| `--border-radius` | Border radius of the button |
| `--border-style` | Border style of the button |
| `--border-width` | Border width of the button |
| `--box-shadow` | Box shadow of the button |
| `--close-icon-font-size` | Font size of the close icon |
| `--color` | Text color of the button |
| `--color-activated` | Text color of the button when pressed |
| `--color-focused` | Text color of the button when focused with the tab key |
| `--color-hover` | Text color of the button on hover |
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
| `--background-activated-opacity` | Opacity of the button background when pressed |
| `--background-focused` | Background of the button when focused with the tab key |
| `--background-focused-opacity` | Opacity of the button background when focused with the tab key |
| `--background-hover` | Background of the button on hover |
| `--background-hover-opacity` | Opacity of the button background on hover |
| `--border-color` | Border color of the button |
| `--border-radius` | Border radius of the button |
| `--border-style` | Border style of the button |
| `--border-width` | Border width of the button |
| `--box-shadow` | Box shadow of the button |
| `--close-icon-font-size` | Font size of the close icon |
| `--color` | Text color of the button |
| `--color-activated` | Text color of the button when pressed |
| `--color-focused` | Text color of the button when focused with the tab key |
| `--color-hover` | Text color of the button on hover |
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

No slots available for this component.
