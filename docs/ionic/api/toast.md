---
title: "ion-toast"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-toast: A Dismissible App Notification Alert Component</title>
  <meta name="description" content="ion-toast component is an app notification displaying system messages or feedback. Toast alerts appear above content and are dismissed to resume interaction." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A Toast is a subtle notification commonly used in modern applications. It can be used to provide feedback about an operation or to display a system message. The toast appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app.

## Inline Toasts (Recommended)

`ion-toast` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the toast.

import InlineToastTriggerExample from '@site/static/ionic/usage/v8/toast/inline/basic/index.md';

<InlineToastTriggerExample />

### Using `isOpen​`

The `isOpen` property on `ion-toast` allows developers to control the presentation state of the toast from their application state. This means when `isOpen` is set to `true` the toast will be presented and when `isOpen` is set to `false` the toast will be dismissed.

`isOpen` uses a one-way data binding, meaning it will not automatically be set to `false` when the toast is dismissed. Developers should listen for the `ionToastDidDismiss` or `didDismiss` event and set `isOpen` to `false`. The reason for this is it prevents the internals of `ion-toast` from being tightly coupled with the state of the application. With a one way data binding, the toast only needs to concern itself with the boolean value that the reactive variable provides. With a two way data binding, the toast needs to concern itself with both the boolean value as well as the existence of the reactive variable itself. This can lead to non-deterministic behaviors and make applications harder to debug.

import InlineToastIsOpenExample from '@site/static/ionic/usage/v8/toast/inline/is-open/index.md';

<InlineToastIsOpenExample />

## Controller Toasts

import ControllerExample from '@site/static/ionic/usage/v8/toast/presenting/controller/index.md';

<ControllerExample />

## Dismissing

Toasts are intended to be subtle notifications and should not interrupt the user. As a result, user interaction should not be required to dismiss the toast.

The toast can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the toast options. If a button with a role of `"cancel"` is added, then that button will dismiss the toast. To dismiss the toast after creation, call the `dismiss()` method on the instance.

Pressing the hardware back button does not dismiss toasts since they are not supposed to interrupt the user.

The following example demonstrates how to use the `buttons` property to add a button that automatically dismisses the toast when clicked, as well as how to collect the `role` of the dismiss event.

import ButtonsPlayground from '@site/static/ionic/usage/v8/toast/buttons/index.md';

<ButtonsPlayground />

## Positioning

Toasts can be positioned at the top, bottom or middle of the viewport. The position can be passed upon creation. The possible values are `top`, `bottom` and `middle`. If the position is not specified, the toast will be displayed at the bottom of the viewport.

### Relative Positioning

If a toast is presented alongside navigation elements such as a header, footer, or [FAB](./fab.md), the toast may overlap these elements by default. This can be fixed using the `positionAnchor` property, which takes either an element reference or an ID. The toast will be positioned relative to the chosen element, appearing below it when using `position="top"` or above it when using `position="bottom"`. When using `position="middle"`, the `positionAnchor` property is ignored.

import PositionAnchor from '@site/static/ionic/usage/v8/toast/position-anchor/index.md';

<PositionAnchor />

## Swipe to Dismiss

Toasts can be swiped to dismiss by using the `swipeGesture` property. This feature is position-aware, meaning the direction that users need to swipe will change based on the value of the `position` property. Additionally, the distance users need to swipe may be impacted by the `positionAnchor` property.

import SwipeGesture from '@site/static/ionic/usage/v8/toast/swipe-gesture/index.md';

<SwipeGesture />

## Layout

Button containers within the toast can be displayed either on the same line as the message or stacked on separate lines using the `layout` property. The stacked layout should be used with buttons that have long text values. Additionally, buttons in a stacked toast layout can use a `side` value of either `start` or `end`, but not both.

import StackedPlayground from '@site/static/ionic/usage/v8/toast/layout/index.md';

<StackedPlayground />

## Icons

An icon can be added next to the content inside of the toast. In general, icons in toasts should be used to add additional style or context, not to grab the user's attention or elevate the priority of the toast. If you wish to convey a higher priority message to the user or guarantee a response, we recommend using an [Alert](alert.md) instead.

import IconPlayground from '@site/static/ionic/usage/v8/toast/icon/index.md';

<IconPlayground />

## Theming

import ThemingPlayground from '@site/static/ionic/usage/v8/toast/theming/index.md';

<ThemingPlayground />

## Accessibility

### Focus Management

Toasts are intended to be subtle notifications and are not intended to interrupt the user. User interaction should not be required to dismiss the toast. As a result, focus is not automatically moved to a toast when one is presented.

### Screen Readers

Toasts set aria properties in order to be [accessible](../reference/glossary#a11y) to screen readers, but these properties can be overridden if they aren't descriptive enough or don't align with how the toast is being used in an app.

#### Role

`ion-toast` has `role="status"` and `aria-live="polite"` set on the inner `.toast-content` element. This causes screen readers to only announce the toast message and header. Buttons and icons will not be announced when the toast is presented.

`aria-live` causes screen readers to announce the content of the toast when it is updated. However, since the attribute is set to `'polite'`, screen readers should not interrupt the current task.

Since toasts are intended to be subtle notification, `aria-live` should never be set to `"assertive"`. If developers need to interrupt the user with an important message, we recommend using an [alert](./alert).

#### Toast Buttons Description

Buttons containing text will be read by a screen reader when they are interacted with. If a button contains only an icon, or a description other than the existing text is desired, a label should be assigned to the button by passing `aria-label` to the `htmlAttributes` property on the button.

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const toast = await this.toastController.create({
  header: "Header",
  buttons: [
    {
      icon: "close",
      htmlAttributes: {
        "aria-label": "close",
      },
    },
  ],
})
```

</TabItem>

<TabItem value="javascript">

```javascript
const toast = await this.toastController.create({
  header: "Header",
  buttons: [
    {
      icon: "close",
      htmlAttributes: {
        "aria-label": "close",
      },
    },
  ],
})
```

</TabItem>

<TabItem value="react">

```javascript
useIonToast({
  header: "Header",
  buttons: [
    {
      icon: "close",
      htmlAttributes: {
        "aria-label": "close",
      },
    },
  ],
})
```

</TabItem>

<TabItem value="vue">

```javascript
const toast = await toastController.create({
  header: "Header",
  buttons: [
    {
      icon: "close",
      htmlAttributes: {
        "aria-label": "close",
      },
    },
  ],
})
```

</TabItem>

</Tabs>

### Tips

While this is not a complete list, here are some guidelines to follow when using toasts.

- Do not require user interaction to dismiss toasts. For example, having a "Dismiss" button in the toast is fine, but the toast should also automatically dismiss on its own after a timeout period. If you need user interaction for a notification, consider using an [alert](./alert) instead.

- For toasts with long messages, consider adjusting the `duration` property to allow users enough time to read the content of the toast.

- If adding buttons to a toast, always provide alternative ways of completing the actions associated with each button. This ensures that even if the toast dismisses before a user can read it, they can still complete the actions shown in the toast.

- Avoid showing a toast with buttons from inside another overlay such as a [modal](./modal). Modals and other overlays implement [focus trapping](./modal#focus-trapping) that will prevent screen readers from moving focus to the toast to complete the actions. This may be confusing for users since the toast will still be announced by screen readers. This is true even if alternative ways of completing the actions associated with each button are implemented. Consider creating a [live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) within the focus-trapped modal instead of using a toast.

## Interfaces

### ToastButton

```typescript
interface ToastButton {
  text?: string
  icon?: string
  side?: "start" | "end"
  role?: "cancel" | string
  htmlAttributes?: { [key: string]: any }
  handler?: () => boolean | void | Promise<boolean | void>
}
```

### ToastOptions

```typescript
interface ToastOptions {
  header?: string
  message?: string | IonicSafeString
  cssClass?: string | string[]
  duration?: number
  buttons?: (ToastButton | string)[]
  position?: "top" | "bottom" | "middle"
  translucent?: boolean
  animated?: boolean
  icon?: string
  htmlAttributes?: { [key: string]: any }

  color?: Color
  mode?: Mode
  keyboardClose?: boolean
  id?: string

  enterAnimation?: AnimationBuilder
  leaveAnimation?: AnimationBuilder
}
```

## Properties

### animated

|                 |                                    |
| --------------- | ---------------------------------- |
| **Description** | If `true`, the toast will animate. |
| **Attribute**   | `animated`                         |
| **Type**        | `boolean`                          |
| **Default**     | `true`                             |

### buttons

|                 |                                          |
| --------------- | ---------------------------------------- |
| **Description** | An array of buttons for the toast.       |
| **Attribute**   | `buttons`                                |
| **Type**        | `(string ｜ ToastButton)[] ｜ undefined` |
| **Default**     | `undefined`                              |

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### cssClass

|                 |                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Description** | Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces. |
| **Attribute**   | `css-class`                                                                                                      |
| **Type**        | `string ｜ string[] ｜ undefined`                                                                                |
| **Default**     | `undefined`                                                                                                      |

### duration

|                 |                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| **Description** | How many milliseconds to wait before hiding the toast. By default, it will show until `dismiss()` is called. |
| **Attribute**   | `duration`                                                                                                   |
| **Type**        | `number`                                                                                                     |
| **Default**     | `config.getNumber('toastDuration', 0)`                                                                       |

### enterAnimation

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | Animation to use when the toast is presented.           |
| **Attribute**   | `enter-animation`                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default**     | `undefined`                                             |

### header

|                 |                                  |
| --------------- | -------------------------------- |
| **Description** | Header to be shown in the toast. |
| **Attribute**   | `header`                         |
| **Type**        | `string ｜ undefined`            |
| **Default**     | `undefined`                      |

### htmlAttributes

|                 |                                             |
| --------------- | ------------------------------------------- |
| **Description** | Additional attributes to pass to the toast. |
| **Attribute**   | `html-attributes`                           |
| **Type**        | `undefined ｜ { [key: string]: any; }`      |
| **Default**     | `undefined`                                 |

### icon

|                 |                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| **Description** | The name of the icon to display, or the path to a valid SVG file. See `ion-icon`. https://ionic.io/ionicons |
| **Attribute**   | `icon`                                                                                                      |
| **Type**        | `string ｜ undefined`                                                                                       |
| **Default**     | `undefined`                                                                                                 |

### isOpen

|                 |                                                                                                                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the toast will open. If `false`, the toast will close. Use this if you need finer grained control over presentation, otherwise just use the toastController or the `trigger` property. Note: `isOpen` will not automatically be set back to `false` when the toast dismisses. You will need to do that in your code. |
| **Attribute**   | `is-open`                                                                                                                                                                                                                                                                                                                       |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                       |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                         |

### keyboardClose

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | If `true`, the keyboard will be automatically dismissed when the overlay is presented. |
| **Attribute**   | `keyboard-close`                                                                       |
| **Type**        | `boolean`                                                                              |
| **Default**     | `false`                                                                                |

### layout

|                 |                                                                                                                                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Defines how the message and buttons are laid out in the toast. 'baseline': The message and the buttons will appear on the same line. Message text may wrap within the message container. 'stacked': The buttons containers and message will stack on top of each other. Use this if you have long text in your buttons. |
| **Attribute**   | `layout`                                                                                                                                                                                                                                                                                                                |
| **Type**        | `"baseline" ｜ "stacked"`                                                                                                                                                                                                                                                                                               |
| **Default**     | `'baseline'`                                                                                                                                                                                                                                                                                                            |

### leaveAnimation

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | Animation to use when the toast is dismissed.           |
| **Attribute**   | `leave-animation`                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default**     | `undefined`                                             |

### message

|                 |                                                                                                                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Message to be shown in the toast. This property accepts custom HTML as a string. Content is parsed as plaintext by default. `innerHTMLTemplatesEnabled` must be set to `true` in the Ionic config before custom HTML can be used. |
| **Attribute**   | `message`                                                                                                                                                                                                                         |
| **Type**        | `IonicSafeString ｜ string ｜ undefined`                                                                                                                                                                                          |
| **Default**     | `undefined`                                                                                                                                                                                                                       |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### position

|                 |                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| **Description** | The starting position of the toast on the screen. Can be tweaked further using the `positionAnchor` property. |
| **Attribute**   | `position`                                                                                                    |
| **Type**        | `"bottom" ｜ "middle" ｜ "top"`                                                                               |
| **Default**     | `'bottom'`                                                                                                    |

### positionAnchor

|                 |                                                                                                                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The element to anchor the toast's position to. Can be set as a direct reference or the ID of the element. With `position="bottom"`, the toast will sit above the chosen element. With `position="top"`, the toast will sit below the chosen element. With `position="middle"`, the value of `positionAnchor` is ignored. |
| **Attribute**   | `position-anchor`                                                                                                                                                                                                                                                                                                        |
| **Type**        | `HTMLElement ｜ string ｜ undefined`                                                                                                                                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                              |

### swipeGesture

|                 |                                                                                                                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If set to 'vertical', the Toast can be dismissed with a swipe gesture. The swipe direction is determined by the value of the `position` property: `top`: The Toast can be swiped up to dismiss. `bottom`: The Toast can be swiped down to dismiss. `middle`: The Toast can be swiped up or down to dismiss. |
| **Attribute**   | `swipe-gesture`                                                                                                                                                                                                                                                                                             |
| **Type**        | `"vertical" ｜ undefined`                                                                                                                                                                                                                                                                                   |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                 |

### translucent

|                 |                                                                                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the toast will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility). |
| **Attribute**   | `translucent`                                                                                                                                                                                                        |
| **Type**        | `boolean`                                                                                                                                                                                                            |
| **Default**     | `false`                                                                                                                                                                                                              |

### trigger

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | An ID corresponding to the trigger element that causes the toast to open when clicked. |
| **Attribute**   | `trigger`                                                                              |
| **Type**        | `string ｜ undefined`                                                                  |
| **Default**     | `undefined`                                                                            |

## Events

| Name                  | Description                                                                | Bubbles |
| --------------------- | -------------------------------------------------------------------------- | ------- |
| `didDismiss`          | Emitted after the toast has dismissed. Shorthand for ionToastDidDismiss.   | `true`  |
| `didPresent`          | Emitted after the toast has presented. Shorthand for ionToastWillDismiss.  | `true`  |
| `ionToastDidDismiss`  | Emitted after the toast has dismissed.                                     | `true`  |
| `ionToastDidPresent`  | Emitted after the toast has presented.                                     | `true`  |
| `ionToastWillDismiss` | Emitted before the toast has dismissed.                                    | `true`  |
| `ionToastWillPresent` | Emitted before the toast has presented.                                    | `true`  |
| `willDismiss`         | Emitted before the toast has dismissed. Shorthand for ionToastWillDismiss. | `true`  |
| `willPresent`         | Emitted before the toast has presented. Shorthand for ionToastWillPresent. | `true`  |

## Methods

### dismiss

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Dismiss the toast overlay after it has been presented.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Signature**   | `dismiss(data?: any, role?: string) => Promise<boolean>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Parameters**  | **data**: Any data to emit in the dismiss events.<br/>**role**: The role of the element that is dismissing the toast. This can be useful in a button handler for determining which button was clicked to dismiss the toast. Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.<br /><br />This is a no-op if the overlay has not been presented yet. If you want to remove an overlay from the DOM that was never presented, use the [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method. |

### onDidDismiss

|                 |                                                             |
| --------------- | ----------------------------------------------------------- |
| **Description** | Returns a promise that resolves when the toast did dismiss. |
| **Signature**   | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |

### onWillDismiss

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Description** | Returns a promise that resolves when the toast will dismiss. |
| **Signature**   | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |

### present

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | Present the toast overlay after it has been created. |
| **Signature**   | `present() => Promise<void>`                         |

## CSS Shadow Parts

| Name            | Description                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| `button`        | Any button element that is displayed inside of the toast.                    |
| `button cancel` | Any button element with role "cancel" that is displayed inside of the toast. |
| `container`     | The element that wraps all child elements.                                   |
| `header`        | The header text of the toast.                                                |
| `icon`          | The icon that appears next to the toast content.                             |
| `message`       | The body text of the toast.                                                  |

## CSS Custom Properties

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
  | `--background` | Background of the toast |
| `--border-color` | Border color of the toast |
| `--border-radius` | Border radius of the toast |
| `--border-style` | Border style of the toast |
| `--border-width` | Border width of the toast |
| `--box-shadow` | Box shadow of the toast |
| `--button-color` | Color of the button text |
| `--color` | Color of the toast text |
| `--end` | Position from the right if direction is left-to-right, and from the left if direction is right-to-left |
| `--height` | Height of the toast |
| `--max-height` | Maximum height of the toast |
| `--max-width` | Maximum width of the toast |
| `--min-height` | Minimum height of the toast |
| `--min-width` | Minimum width of the toast |
| `--start` | Position from the left if direction is left-to-right, and from the right if direction is right-to-left |
| `--white-space` | White space of the toast message |
| `--width` | Width of the toast |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the toast |
| `--border-color` | Border color of the toast |
| `--border-radius` | Border radius of the toast |
| `--border-style` | Border style of the toast |
| `--border-width` | Border width of the toast |
| `--box-shadow` | Box shadow of the toast |
| `--button-color` | Color of the button text |
| `--color` | Color of the toast text |
| `--end` | Position from the right if direction is left-to-right, and from the left if direction is right-to-left |
| `--height` | Height of the toast |
| `--max-height` | Maximum height of the toast |
| `--max-width` | Maximum width of the toast |
| `--min-height` | Minimum height of the toast |
| `--min-width` | Minimum width of the toast |
| `--start` | Position from the left if direction is left-to-right, and from the right if direction is right-to-left |
| `--white-space` | White space of the toast message |
| `--width` | Width of the toast |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
