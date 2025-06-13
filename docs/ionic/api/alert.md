---
title: "ion-alert"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-alert: Ionic Alert Buttons with Custom Message Prompts</title>
  <meta name="description" content="ion-alert dialog presents or collects information using inputs. Custom alert button messages appear above the app's content and must be manually dismissed." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

An Alert is a dialog that presents users with information or collects information from the user using inputs. An alert appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. It can also optionally have a `header`, `subHeader` and `message`.

## Inline Alerts (Recommended)

`ion-alert` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the Alert.

import Trigger from '@site/static/ionic/usage/v8/alert/presenting/trigger/index.md';

<Trigger />

### Using `isOpen`

The `isOpen` property on `ion-alert` allows developers to control the presentation state of the Alert from their application state. This means when `isOpen` is set to `true` the Alert will be presented, and when `isOpen` is set to `false` the Alert will be dismissed.

`isOpen` uses a one-way data binding, meaning it will not automatically be set to `false` when the Alert is dismissed. Developers should listen for the `ionAlertDidDismiss` or `didDismiss` event and set `isOpen` to `false`. The reason for this is it prevents the internals of `ion-alert` from being tightly coupled with the state of the application. With a one way data binding, the Alert only needs to concern itself with the boolean value that the reactive variable provides. With a two way data binding, the Alert needs to concern itself with both the boolean value as well as the existence of the reactive variable itself. This can lead to non-deterministic behaviors and make applications harder to debug.

import IsOpen from '@site/static/ionic/usage/v8/alert/presenting/isOpen/index.md';

<IsOpen />

## Controller Alerts

The `alertController` can be used in situations where more control is needed over when the Alert is presented and dismissed.

import Controller from '@site/static/ionic/usage/v8/alert/presenting/controller/index.md';

<Controller />

## Buttons

In the array of `buttons`, each button includes properties for its `text`, and optionally a `handler`. If a handler returns `false` then the alert will not automatically be dismissed when the button is clicked. All buttons will show up in the order they have been added to the `buttons` array from left to right. Note: The right most button (the last one in the array) is the main button.

Optionally, a `role` property can be added to a button, such as `cancel`. If a `cancel` role is on one of the buttons, then if the alert is dismissed by tapping the backdrop, then it will fire the handler from the button with a cancel role.

import Buttons from '@site/static/ionic/usage/v8/alert/buttons/index.md';

<Buttons />

## Inputs

Alerts can also include several different inputs whose data can be passed back to the app. Inputs can be used as a simple way to prompt users for information. Radios, checkboxes and text inputs are all accepted, but they cannot be mixed. For example, an alert could have all radio button inputs, or all checkbox inputs, but the same alert cannot mix radio and checkbox inputs. Do note however, different types of "text" inputs can be mixed, such as `url`, `email`, `text`, `textarea` etc. If you require a complex form UI which doesn't fit within the guidelines of an alert then we recommend building the form within a modal instead.

### Text Inputs Example

import TextInputs from '@site/static/ionic/usage/v8/alert/inputs/text-inputs/index.md';

<TextInputs />

### Radio Example

import Radios from '@site/static/ionic/usage/v8/alert/inputs/radios/index.md';

<Radios />

## Customization

Alert uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

We recommend passing a custom class to `cssClass` in the `create` method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces.

```css
/* DOES NOT WORK - not specific enough */
.alert-wrapper {
  background: #e5e5e5;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .alert-wrapper {
  background: #e5e5e5;
}
```

Any of the defined [CSS Custom Properties](#css-custom-properties) can be used to style the Alert without needing to target individual elements:

```css
.my-custom-class {
  --background: #e5e5e5;
}
```

import Customization from '@site/static/ionic/usage/v8/alert/customization/index.md';

<Customization />

:::note
If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file.
:::

## Accessibility

### Screen Readers

Alerts set aria properties in order to be [accessible](../reference/glossary#a11y) to screen readers, but these properties can be overridden if they aren't descriptive enough or don't align with how the alert is being used in an app.

#### Role

Ionic automatically sets the Alert's `role` to either [`alertdialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) if there are any inputs or buttons included, or [`alert`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) if there are none.

#### Alert Description

If the `header` property is defined for the Alert, the `aria-labelledby` attribute will be automatically set to the header's ID. The `subHeader` element will be used as a fallback if `header` is not defined. Similarly, the `aria-describedby` attribute will be automatically set to the ID of the `message` element if that property is defined.

It is strongly recommended that your Alert have a `message`, as well as either a `header` or `subHeader`, in order to align with the ARIA spec. If you choose not to include a `header` or `subHeader`, an alternative is to provide a descriptive `aria-label` using the `htmlAttributes` property.

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const alert = await this.alertController.create({
  message: "This is an alert with custom aria attributes.",
  htmlAttributes: {
    "aria-label": "alert dialog",
  },
})
```

</TabItem>

<TabItem value="javascript">

```javascript
const alert = await this.alertController.create({
  message: "This is an alert with custom aria attributes.",
  htmlAttributes: {
    "aria-label": "alert dialog",
  },
})
```

</TabItem>

<TabItem value="react">

```javascript
useIonAlert({
  message: "This is an alert with custom aria attributes.",
  htmlAttributes: {
    "aria-label": "alert dialog",
  },
})
```

</TabItem>

<TabItem value="vue">

```javascript
const alert = await alertController.create({
  message: "This is an alert with custom aria attributes.",
  htmlAttributes: {
    "aria-label": "alert dialog",
  },
})
```

</TabItem>

</Tabs>

All ARIA attributes can be manually overwritten by defining custom values in the `htmlAttributes` property of the Alert.

#### Alert Buttons Description

Buttons containing text will be read by a screen reader. If a description other than the existing text is desired, a label can be set on the button by passing `aria-label` to the `htmlAttributes` property on the button.

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const alert = await this.alertController.create({
  header: "Header",
  buttons: [
    {
      text: "Exit",
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
const alert = await this.alertController.create({
  header: "Header",
  buttons: [
    {
      text: "Exit",
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
useIonAlert({
  header: "Header",
  buttons: [
    {
      text: "Exit",
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
const alert = await alertController.create({
  header: "Header",
  buttons: [
    {
      text: "Exit",
      htmlAttributes: {
        "aria-label": "close",
      },
    },
  ],
})
```

</TabItem>

</Tabs>

## Interfaces

### AlertButton

```typescript
type AlertButtonOverlayHandler = boolean | void | { [key: string]: any }

interface AlertButton {
  text: string
  role?: "cancel" | "destructive" | string
  cssClass?: string | string[]
  id?: string
  htmlAttributes?: { [key: string]: any }
  handler?: (
    value: any
  ) => AlertButtonOverlayHandler | Promise<AlertButtonOverlayHandler>
}
```

### AlertInput

```typescript
interface AlertInput {
  type?: TextFieldTypes | "checkbox" | "radio" | "textarea"
  name?: string
  placeholder?: string
  value?: any
  /**
   * The label text to display next to the input, if the input type is `radio` or `checkbox`.
   */
  label?: string
  checked?: boolean
  disabled?: boolean
  id?: string
  handler?: (input: AlertInput) => void
  min?: string | number
  max?: string | number
  cssClass?: string | string[]
  attributes?: { [key: string]: any }
  tabindex?: number
}
```

### AlertOptions

```typescript
interface AlertOptions {
  header?: string
  subHeader?: string
  message?: string | IonicSafeString
  cssClass?: string | string[]
  inputs?: AlertInput[]
  buttons?: (AlertButton | string)[]
  backdropDismiss?: boolean
  translucent?: boolean
  animated?: boolean
  htmlAttributes?: { [key: string]: any }

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
| **Description** | If `true`, the alert will animate. |
| **Attribute**   | `animated`                         |
| **Type**        | `boolean`                          |
| **Default**     | `true`                             |

### backdropDismiss

|                 |                                                                      |
| --------------- | -------------------------------------------------------------------- |
| **Description** | If `true`, the alert will be dismissed when the backdrop is clicked. |
| **Attribute**   | `backdrop-dismiss`                                                   |
| **Type**        | `boolean`                                                            |
| **Default**     | `true`                                                               |

### buttons

|                 |                                            |
| --------------- | ------------------------------------------ |
| **Description** | Array of buttons to be added to the alert. |
| **Attribute**   | `buttons`                                  |
| **Type**        | `(string ｜ AlertButton)[]`                |
| **Default**     | `[]`                                       |

### cssClass

|                 |                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Description** | Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces. |
| **Attribute**   | `css-class`                                                                                                      |
| **Type**        | `string ｜ string[] ｜ undefined`                                                                                |
| **Default**     | `undefined`                                                                                                      |

### enterAnimation

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | Animation to use when the alert is presented.           |
| **Attribute**   | `enter-animation`                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default**     | `undefined`                                             |

### header

|                 |                                             |
| --------------- | ------------------------------------------- |
| **Description** | The main title in the heading of the alert. |
| **Attribute**   | `header`                                    |
| **Type**        | `string ｜ undefined`                       |
| **Default**     | `undefined`                                 |

### htmlAttributes

|                 |                                             |
| --------------- | ------------------------------------------- |
| **Description** | Additional attributes to pass to the alert. |
| **Attribute**   | `html-attributes`                           |
| **Type**        | `undefined ｜ { [key: string]: any; }`      |
| **Default**     | `undefined`                                 |

### inputs

|                 |                                      |
| --------------- | ------------------------------------ |
| **Description** | Array of input to show in the alert. |
| **Attribute**   | `inputs`                             |
| **Type**        | `AlertInput[]`                       |
| **Default**     | `[]`                                 |

### isOpen

|                 |                                                                                                                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the alert will open. If `false`, the alert will close. Use this if you need finer grained control over presentation, otherwise just use the alertController or the `trigger` property. Note: `isOpen` will not automatically be set back to `false` when the alert dismisses. You will need to do that in your code. |
| **Attribute**   | `is-open`                                                                                                                                                                                                                                                                                                                       |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                       |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                         |

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
| **Description** | Animation to use when the alert is dismissed.           |
| **Attribute**   | `leave-animation`                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default**     | `undefined`                                             |

### message

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The main message to be displayed in the alert. `message` can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example `<Ionic>` would become `&lt;Ionic&gt;`<br /><br />For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)<br /><br />This property accepts custom HTML as a string. Content is parsed as plaintext by default. `innerHTMLTemplatesEnabled` must be set to `true` in the Ionic config before custom HTML can be used. |
| **Attribute**   | `message`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Type**        | `IonicSafeString ｜ string ｜ undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### subHeader

|                 |                                                                      |
| --------------- | -------------------------------------------------------------------- |
| **Description** | The subtitle in the heading of the alert. Displayed under the title. |
| **Attribute**   | `sub-header`                                                         |
| **Type**        | `string ｜ undefined`                                                |
| **Default**     | `undefined`                                                          |

### translucent

|                 |                                                                                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the alert will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility). |
| **Attribute**   | `translucent`                                                                                                                                                                                                        |
| **Type**        | `boolean`                                                                                                                                                                                                            |
| **Default**     | `false`                                                                                                                                                                                                              |

### trigger

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | An ID corresponding to the trigger element that causes the alert to open when clicked. |
| **Attribute**   | `trigger`                                                                              |
| **Type**        | `string ｜ undefined`                                                                  |
| **Default**     | `undefined`                                                                            |

## Events

| Name                  | Description                                                                | Bubbles |
| --------------------- | -------------------------------------------------------------------------- | ------- |
| `didDismiss`          | Emitted after the alert has dismissed. Shorthand for ionAlertDidDismiss.   | `true`  |
| `didPresent`          | Emitted after the alert has presented. Shorthand for ionAlertWillDismiss.  | `true`  |
| `ionAlertDidDismiss`  | Emitted after the alert has dismissed.                                     | `true`  |
| `ionAlertDidPresent`  | Emitted after the alert has presented.                                     | `true`  |
| `ionAlertWillDismiss` | Emitted before the alert has dismissed.                                    | `true`  |
| `ionAlertWillPresent` | Emitted before the alert has presented.                                    | `true`  |
| `willDismiss`         | Emitted before the alert has dismissed. Shorthand for ionAlertWillDismiss. | `true`  |
| `willPresent`         | Emitted before the alert has presented. Shorthand for ionAlertWillPresent. | `true`  |

## Methods

### dismiss

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Dismiss the alert overlay after it has been presented.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Signature**   | `dismiss(data?: any, role?: string) => Promise<boolean>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Parameters**  | **data**: Any data to emit in the dismiss events.<br/>**role**: The role of the element that is dismissing the alert. This can be useful in a button handler for determining which button was clicked to dismiss the alert. Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.<br /><br />This is a no-op if the overlay has not been presented yet. If you want to remove an overlay from the DOM that was never presented, use the [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method. |

### onDidDismiss

|                 |                                                             |
| --------------- | ----------------------------------------------------------- |
| **Description** | Returns a promise that resolves when the alert did dismiss. |
| **Signature**   | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |

### onWillDismiss

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Description** | Returns a promise that resolves when the alert will dismiss. |
| **Signature**   | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |

### present

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | Present the alert overlay after it has been created. |
| **Signature**   | `present() => Promise<void>`                         |

## CSS Shadow Parts

No CSS shadow parts available for this component.

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
  | `--backdrop-opacity` | Opacity of the backdrop |
| `--background` | Background of the alert |
| `--height` | Height of the alert |
| `--max-height` | Maximum height of the alert |
| `--max-width` | Maximum width of the alert |
| `--min-height` | Minimum height of the alert |
| `--min-width` | Minimum width of the alert |
| `--width` | Width of the alert |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--backdrop-opacity` | Opacity of the backdrop |
| `--background` | Background of the alert |
| `--height` | Height of the alert |
| `--max-height` | Maximum height of the alert |
| `--max-width` | Maximum width of the alert |
| `--min-height` | Minimum height of the alert |
| `--min-width` | Minimum width of the alert |
| `--width` | Width of the alert |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
