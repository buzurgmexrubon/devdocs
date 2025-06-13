---
title: "ion-loading"
---

<head>
  <title>ion-loading: Loading | Application Loading Indicator Overlay</title>
  <meta name="description" content="The ion-loading overlay indicates activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

An overlay that can be used to indicate activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app. It includes an optional backdrop, which can be disabled by setting `showBackdrop: false` upon creation.

## Basic Usage

Once presented, the loading indicator will display indefinitely by default. Developers can manually dismiss the loading indicator after creation by calling the `dismiss()` method on the component. The `onDidDismiss` function can be called to perform an action after the loading indicator is dismissed.

Alternatively, developers can configure the loading indicator to dismiss automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the loading options.

### Inline (Recommended)

import Inline from '@site/static/ionic/usage/v8/loading/inline/index.md';

<Inline />

### Controller

import Controller from '@site/static/ionic/usage/v8/loading/controller/index.md';

<Controller />

## Customization

### Spinners

The spinner that is used can be customized using the `spinner` property. See the [spinner property documentation](#spinner) for a full list of options.

import Spinners from '@site/static/ionic/usage/v8/loading/spinners/index.md';

<Spinners />

### Theming

Loading uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

We recommend passing a custom class and using that to add custom styles to the host and inner elements.

import Theming from '@site/static/ionic/usage/v8/loading/theming/index.md';

<Theming />

:::note
`ion-loading` is presented at the root of your application, so we recommend placing any `ion-loading` styles in a global stylesheet.
:::

## Accessibility

Ionic automatically sets Loading's `role` to [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role).

If the `message` property is defined for Loading, then the `aria-labelledby` attribute will be automatically set to the message element's ID. Otherwise, `aria-labelledby` will not be set, and developers must provide an `aria-label` using the `htmlAttributes` property.

All ARIA attributes can be manually overwritten by defining custom values in the `htmlAttributes` property of Loading.

## Interfaces

### LoadingOptions

```typescript
interface LoadingOptions {
  spinner?: SpinnerTypes | null
  message?: string | IonicSafeString
  cssClass?: string | string[]
  showBackdrop?: boolean
  duration?: number
  translucent?: boolean
  animated?: boolean
  backdropDismiss?: boolean
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

|                 |                                                |
| --------------- | ---------------------------------------------- |
| **Description** | If `true`, the loading indicator will animate. |
| **Attribute**   | `animated`                                     |
| **Type**        | `boolean`                                      |
| **Default**     | `true`                                         |

### backdropDismiss

|                 |                                                                                  |
| --------------- | -------------------------------------------------------------------------------- |
| **Description** | If `true`, the loading indicator will be dismissed when the backdrop is clicked. |
| **Attribute**   | `backdrop-dismiss`                                                               |
| **Type**        | `boolean`                                                                        |
| **Default**     | `false`                                                                          |

### cssClass

|                 |                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Description** | Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces. |
| **Attribute**   | `css-class`                                                                                                      |
| **Type**        | `string ｜ string[] ｜ undefined`                                                                                |
| **Default**     | `undefined`                                                                                                      |

### duration

|                 |                                                                         |
| --------------- | ----------------------------------------------------------------------- |
| **Description** | Number of milliseconds to wait before dismissing the loading indicator. |
| **Attribute**   | `duration`                                                              |
| **Type**        | `number`                                                                |
| **Default**     | `0`                                                                     |

### enterAnimation

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | Animation to use when the loading indicator is presented. |
| **Attribute**   | `enter-animation`                                         |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined`   |
| **Default**     | `undefined`                                               |

### htmlAttributes

|                 |                                              |
| --------------- | -------------------------------------------- |
| **Description** | Additional attributes to pass to the loader. |
| **Attribute**   | `html-attributes`                            |
| **Type**        | `undefined ｜ { [key: string]: any; }`       |
| **Default**     | `undefined`                                  |

### isOpen

|                 |                                                                                                                                                                                                                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the loading indicator will open. If `false`, the loading indicator will close. Use this if you need finer grained control over presentation, otherwise just use the loadingController or the `trigger` property. Note: `isOpen` will not automatically be set back to `false` when the loading indicator dismisses. You will need to do that in your code. |
| **Attribute**   | `is-open`                                                                                                                                                                                                                                                                                                                                                             |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                                                             |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                                                               |

### keyboardClose

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | If `true`, the keyboard will be automatically dismissed when the overlay is presented. |
| **Attribute**   | `keyboard-close`                                                                       |
| **Type**        | `boolean`                                                                              |
| **Default**     | `true`                                                                                 |

### leaveAnimation

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | Animation to use when the loading indicator is dismissed. |
| **Attribute**   | `leave-animation`                                         |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined`   |
| **Default**     | `undefined`                                               |

### message

|                 |                                                                                                                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Optional text content to display in the loading indicator.<br /><br />This property accepts custom HTML as a string. Content is parsed as plaintext by default. `innerHTMLTemplatesEnabled` must be set to `true` in the Ionic config before custom HTML can be used. |
| **Attribute**   | `message`                                                                                                                                                                                                                                                             |
| **Type**        | `IonicSafeString ｜ string ｜ undefined`                                                                                                                                                                                                                              |
| **Default**     | `undefined`                                                                                                                                                                                                                                                           |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### showBackdrop

|                 |                                                                       |
| --------------- | --------------------------------------------------------------------- |
| **Description** | If `true`, a backdrop will be displayed behind the loading indicator. |
| **Attribute**   | `show-backdrop`                                                       |
| **Type**        | `boolean`                                                             |
| **Default**     | `true`                                                                |

### spinner

|                 |                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The name of the spinner to display.                                                                                                                     |
| **Attribute**   | `spinner`                                                                                                                                               |
| **Type**        | `"bubbles" ｜ "circles" ｜ "circular" ｜ "crescent" ｜ "dots" ｜ "lines" ｜ "lines-sharp" ｜ "lines-sharp-small" ｜ "lines-small" ｜ null ｜ undefined` |
| **Default**     | `undefined`                                                                                                                                             |

### translucent

|                 |                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the loading indicator will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility). |
| **Attribute**   | `translucent`                                                                                                                                                                                                                    |
| **Type**        | `boolean`                                                                                                                                                                                                                        |
| **Default**     | `false`                                                                                                                                                                                                                          |

### trigger

|                 |                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------- |
| **Description** | An ID corresponding to the trigger element that causes the loading indicator to open when clicked. |
| **Attribute**   | `trigger`                                                                                          |
| **Type**        | `string ｜ undefined`                                                                              |
| **Default**     | `undefined`                                                                                        |

## Events

| Name                    | Description                                                                              | Bubbles |
| ----------------------- | ---------------------------------------------------------------------------------------- | ------- |
| `didDismiss`            | Emitted after the loading indicator has dismissed. Shorthand for ionLoadingDidDismiss.   | `true`  |
| `didPresent`            | Emitted after the loading indicator has presented. Shorthand for ionLoadingWillDismiss.  | `true`  |
| `ionLoadingDidDismiss`  | Emitted after the loading has dismissed.                                                 | `true`  |
| `ionLoadingDidPresent`  | Emitted after the loading has presented.                                                 | `true`  |
| `ionLoadingWillDismiss` | Emitted before the loading has dismissed.                                                | `true`  |
| `ionLoadingWillPresent` | Emitted before the loading has presented.                                                | `true`  |
| `willDismiss`           | Emitted before the loading indicator has dismissed. Shorthand for ionLoadingWillDismiss. | `true`  |
| `willPresent`           | Emitted before the loading indicator has presented. Shorthand for ionLoadingWillPresent. | `true`  |

## Methods

### dismiss

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Dismiss the loading overlay after it has been presented.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Signature**   | `dismiss(data?: any, role?: string) => Promise<boolean>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Parameters**  | **data**: Any data to emit in the dismiss events.<br/>**role**: The role of the element that is dismissing the loading. This can be useful in a button handler for determining which button was clicked to dismiss the loading. Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.<br /><br />This is a no-op if the overlay has not been presented yet. If you want to remove an overlay from the DOM that was never presented, use the [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method. |

### onDidDismiss

|                 |                                                               |
| --------------- | ------------------------------------------------------------- |
| **Description** | Returns a promise that resolves when the loading did dismiss. |
| **Signature**   | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>`   |

### onWillDismiss

|                 |                                                                |
| --------------- | -------------------------------------------------------------- |
| **Description** | Returns a promise that resolves when the loading will dismiss. |
| **Signature**   | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>`   |

### present

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | Present the loading overlay after it has been created. |
| **Signature**   | `present() => Promise<void>`                           |

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
| `--background` | Background of the loading dialog |
| `--height` | Height of the loading dialog |
| `--max-height` | Maximum height of the loading dialog |
| `--max-width` | Maximum width of the loading dialog |
| `--min-height` | Minimum height of the loading dialog |
| `--min-width` | Minimum width of the loading dialog |
| `--spinner-color` | Color of the loading spinner |
| `--width` | Width of the loading dialog |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--backdrop-opacity` | Opacity of the backdrop |
| `--background` | Background of the loading dialog |
| `--height` | Height of the loading dialog |
| `--max-height` | Maximum height of the loading dialog |
| `--max-width` | Maximum width of the loading dialog |
| `--min-height` | Minimum height of the loading dialog |
| `--min-width` | Minimum width of the loading dialog |
| `--spinner-color` | Color of the loading spinner |
| `--width` | Width of the loading dialog |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
