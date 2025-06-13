---
title: "ion-action-sheet"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-action-sheet: Action Sheet Dialog for iOS and Android</title>
  <meta name="description" content="Action Sheets are dialogs that display a set of options above app content and must be manually dismissed. Read to learn about use on iOS and Android devices." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. Destructive options are made obvious in `ios` mode. There are multiple ways to dismiss the action sheet, including tapping the backdrop or hitting the escape key on desktop.

## Inline Action Sheets (Recommended)

`ion-action-sheet` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the Action Sheet.

import Trigger from '@site/static/ionic/usage/v8/action-sheet/inline/trigger/index.md';

<Trigger />

### Using `isOpen`

The `isOpen` property on `ion-action-sheet` allows developers to control the presentation state of the Action Sheet from their application state. This means when `isOpen` is set to `true` the Action Sheet will be presented, and when `isOpen` is set to `false` the Action Sheet will be dismissed.

`isOpen` uses a one-way data binding, meaning it will not automatically be set to `false` when the Action Sheet is dismissed. Developers should listen for the `ionActionSheetDidDismiss` or `didDismiss` event and set `isOpen` to `false`. The reason for this is it prevents the internals of `ion-action-sheet` from being tightly coupled with the state of the application. With a one way data binding, the Action Sheet only needs to concern itself with the boolean value that the reactive variable provides. With a two way data binding, the Action Sheet needs to concern itself with both the boolean value as well as the existence of the reactive variable itself. This can lead to non-deterministic behaviors and make applications harder to debug.

import IsOpen from '@site/static/ionic/usage/v8/action-sheet/inline/isOpen/index.md';

<IsOpen />

## Controller Action Sheets

The `actionSheetController` can be used in situations where more control is needed over when the Action Sheet is presented and dismissed.

import Controller from '@site/static/ionic/usage/v8/action-sheet/controller/index.md';

<Controller />

## Buttons

A button's `role` property can either be `destructive` or `cancel`. Buttons without a role property will have the default look for the platform. Buttons with the `cancel` role will always load as the bottom button, no matter where they are in the array. All other buttons will be displayed in the order they have been added to the `buttons` array. Note: We recommend that `destructive` buttons are always the first button in the array, making them the top button. Additionally, if the action sheet is dismissed by tapping the backdrop, then it will fire the handler from the button with the cancel role.

A button can also be passed data via the `data` property on `ActionSheetButton`. This will populate the `data` field in the return value of the `onDidDismiss` method.

## Collecting Role Information on Dismiss

When the `didDismiss` event is fired, the `data` and `role` fields of the event detail can be used to gather information about how the Action Sheet was dismissed.

import RoleInfo from '@site/static/ionic/usage/v8/action-sheet/role-info-on-dismiss/index.md';

<RoleInfo />

## Theming

Action Sheet uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

### Styling

We recommend passing a custom class to `cssClass` in the `create` method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces.

```css
/* DOES NOT WORK - not specific enough */
.action-sheet-group {
  background: #e5e5e5;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .action-sheet-group {
  background: #e5e5e5;
}
```

import Styling from '@site/static/ionic/usage/v8/action-sheet/theming/styling/index.md';

<Styling />

### CSS Custom Properties

Any of the defined [CSS Custom Properties](#css-custom-properties-1) can be used to style the Action Sheet without needing to target individual elements.

import CssCustomProperties from '@site/static/ionic/usage/v8/action-sheet/theming/css-properties/index.md';

<CssCustomProperties />

## Accessibility

### Screen Readers

Action Sheets set aria properties in order to be [accessible](../reference/glossary#a11y) to screen readers, but these properties can be overridden if they aren't descriptive enough or don't align with how the action sheet is being used in an app.

#### Role

Action Sheets are given a `role` of [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role). In order to align with the ARIA spec, either the `aria-label` or `aria-labelledby` attribute must be set.

#### Action Sheet Description

It is strongly recommended that every Action Sheet have the `header` property defined, as Ionic will automatically set `aria-labelledby` to point to the header element. However, if you choose not to include a `header`, an alternative is to use the `htmlAttributes` property to provide a descriptive `aria-label` or set a custom `aria-labelledby` value.

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const actionSheet = await this.actionSheetController.create({
  htmlAttributes: {
    "aria-label": "action sheet dialog",
  },
})
```

</TabItem>

<TabItem value="javascript">

```javascript
const actionSheet = await this.actionSheetController.create({
  htmlAttributes: {
    "aria-label": "action sheet dialog",
  },
})
```

</TabItem>

<TabItem value="react">

```javascript
useIonActionSheet({
  htmlAttributes: {
    "aria-label": "action sheet dialog",
  },
})
```

</TabItem>

<TabItem value="vue">

```javascript
const actionSheet = await actionSheetController.create({
  htmlAttributes: {
    "aria-label": "action sheet dialog",
  },
})
```

</TabItem>

</Tabs>

#### Action Sheet Buttons Description

Buttons containing text will be read by a screen reader. If a button contains only an icon, or a description other than the existing text is desired, a label should be assigned to the button by passing `aria-label` to the `htmlAttributes` property on the button.

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const actionSheet = await this.actionSheetController.create({
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
const actionSheet = await this.actionSheetController.create({
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
useIonActionSheet({
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
const actionSheet = await actionSheetController.create({
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

## Interfaces

### ActionSheetButton

```typescript
interface ActionSheetButton<T = any> {
  text?: string
  role?: "cancel" | "destructive" | "selected" | string
  icon?: string
  cssClass?: string | string[]
  id?: string
  htmlAttributes?: { [key: string]: any }
  handler?: () => boolean | void | Promise<boolean | void>
  data?: T
}
```

### ActionSheetOptions

```typescript
interface ActionSheetOptions {
  header?: string
  subHeader?: string
  cssClass?: string | string[]
  buttons: (ActionSheetButton | string)[]
  backdropDismiss?: boolean
  translucent?: boolean
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

|                 |                                           |
| --------------- | ----------------------------------------- |
| **Description** | If `true`, the action sheet will animate. |
| **Attribute**   | `animated`                                |
| **Type**        | `boolean`                                 |
| **Default**     | `true`                                    |

### backdropDismiss

|                 |                                                                             |
| --------------- | --------------------------------------------------------------------------- |
| **Description** | If `true`, the action sheet will be dismissed when the backdrop is clicked. |
| **Attribute**   | `backdrop-dismiss`                                                          |
| **Type**        | `boolean`                                                                   |
| **Default**     | `true`                                                                      |

### buttons

|                 |                                           |
| --------------- | ----------------------------------------- |
| **Description** | An array of buttons for the action sheet. |
| **Attribute**   | `buttons`                                 |
| **Type**        | `(string ｜ ActionSheetButton<any>)[]`    |
| **Default**     | `[]`                                      |

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
| **Description** | Animation to use when the action sheet is presented.    |
| **Attribute**   | `enter-animation`                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default**     | `undefined`                                             |

### header

|                 |                             |
| --------------- | --------------------------- |
| **Description** | Title for the action sheet. |
| **Attribute**   | `header`                    |
| **Type**        | `string ｜ undefined`       |
| **Default**     | `undefined`                 |

### htmlAttributes

|                 |                                                    |
| --------------- | -------------------------------------------------- |
| **Description** | Additional attributes to pass to the action sheet. |
| **Attribute**   | `html-attributes`                                  |
| **Type**        | `undefined ｜ { [key: string]: any; }`             |
| **Default**     | `undefined`                                        |

### isOpen

|                 |                                                                                                                                                                                                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the action sheet will open. If `false`, the action sheet will close. Use this if you need finer grained control over presentation, otherwise just use the actionSheetController or the `trigger` property. Note: `isOpen` will not automatically be set back to `false` when the action sheet dismisses. You will need to do that in your code. |
| **Attribute**   | `is-open`                                                                                                                                                                                                                                                                                                                                                  |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                                                  |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                                                    |

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
| **Description** | Animation to use when the action sheet is dismissed.    |
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

### subHeader

|                 |                                |
| --------------- | ------------------------------ |
| **Description** | Subtitle for the action sheet. |
| **Attribute**   | `sub-header`                   |
| **Type**        | `string ｜ undefined`          |
| **Default**     | `undefined`                    |

### translucent

|                 |                                                                                                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the action sheet will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility). |
| **Attribute**   | `translucent`                                                                                                                                                                                                               |
| **Type**        | `boolean`                                                                                                                                                                                                                   |
| **Default**     | `false`                                                                                                                                                                                                                     |

### trigger

|                 |                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------- |
| **Description** | An ID corresponding to the trigger element that causes the action sheet to open when clicked. |
| **Attribute**   | `trigger`                                                                                     |
| **Type**        | `string ｜ undefined`                                                                         |
| **Default**     | `undefined`                                                                                   |

## Events

| Name                        | Description                                                                             | Bubbles |
| --------------------------- | --------------------------------------------------------------------------------------- | ------- |
| `didDismiss`                | Emitted after the action sheet has dismissed. Shorthand for ionActionSheetDidDismiss.   | `true`  |
| `didPresent`                | Emitted after the action sheet has presented. Shorthand for ionActionSheetWillDismiss.  | `true`  |
| `ionActionSheetDidDismiss`  | Emitted after the action sheet has dismissed.                                           | `true`  |
| `ionActionSheetDidPresent`  | Emitted after the action sheet has presented.                                           | `true`  |
| `ionActionSheetWillDismiss` | Emitted before the action sheet has dismissed.                                          | `true`  |
| `ionActionSheetWillPresent` | Emitted before the action sheet has presented.                                          | `true`  |
| `willDismiss`               | Emitted before the action sheet has dismissed. Shorthand for ionActionSheetWillDismiss. | `true`  |
| `willPresent`               | Emitted before the action sheet has presented. Shorthand for ionActionSheetWillPresent. | `true`  |

## Methods

### dismiss

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Dismiss the action sheet overlay after it has been presented.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Signature**   | `dismiss(data?: any, role?: string) => Promise<boolean>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Parameters**  | **data**: Any data to emit in the dismiss events.<br/>**role**: The role of the element that is dismissing the action sheet. This can be useful in a button handler for determining which button was clicked to dismiss the action sheet. Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.<br /><br />This is a no-op if the overlay has not been presented yet. If you want to remove an overlay from the DOM that was never presented, use the [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method. |

### onDidDismiss

|                 |                                                                    |
| --------------- | ------------------------------------------------------------------ |
| **Description** | Returns a promise that resolves when the action sheet did dismiss. |
| **Signature**   | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>`        |

### onWillDismiss

|                 |                                                                     |
| --------------- | ------------------------------------------------------------------- |
| **Description** | Returns a promise that resolves when the action sheet will dismiss. |
| **Signature**   | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>`        |

### present

|                 |                                                             |
| --------------- | ----------------------------------------------------------- |
| **Description** | Present the action sheet overlay after it has been created. |
| **Signature**   | `present() => Promise<void>`                                |

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
| `--background` | Background of the action sheet group |
| `--button-background` | Background of the action sheet button |
| `--button-background-activated` | Background of the action sheet button when pressed. Note: setting this will interfere with the Material Design ripple. |
| `--button-background-activated-opacity` | Opacity of the action sheet button background when pressed |
| `--button-background-focused` | Background of the action sheet button when tabbed to |
| `--button-background-focused-opacity` | Opacity of the action sheet button background when tabbed to |
| `--button-background-hover` | Background of the action sheet button on hover |
| `--button-background-hover-opacity` | Opacity of the action sheet button background on hover |
| `--button-background-selected` | Background of the selected action sheet button |
| `--button-background-selected-opacity` | Opacity of the selected action sheet button background |
| `--button-color` | Color of the action sheet button |
| `--button-color-activated` | Color of the action sheet button when pressed |
| `--button-color-disabled` | Color of the selected action sheet button when disabled |
| `--button-color-focused` | Color of the action sheet button when tabbed to |
| `--button-color-hover` | Color of the action sheet button on hover |
| `--button-color-selected` | Color of the selected action sheet button |
| `--color` | Color of the action sheet text |
| `--height` | height of the action sheet |
| `--max-height` | Maximum height of the action sheet |
| `--max-width` | Maximum width of the action sheet |
| `--min-height` | Minimum height of the action sheet |
| `--min-width` | Minimum width of the action sheet |
| `--width` | Width of the action sheet |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--backdrop-opacity` | Opacity of the backdrop |
| `--background` | Background of the action sheet group |
| `--button-background` | Background of the action sheet button |
| `--button-background-activated` | Background of the action sheet button when pressed. Note: setting this will interfere with the Material Design ripple. |
| `--button-background-activated-opacity` | Opacity of the action sheet button background when pressed |
| `--button-background-focused` | Background of the action sheet button when tabbed to |
| `--button-background-focused-opacity` | Opacity of the action sheet button background when tabbed to |
| `--button-background-hover` | Background of the action sheet button on hover |
| `--button-background-hover-opacity` | Opacity of the action sheet button background on hover |
| `--button-background-selected` | Background of the selected action sheet button |
| `--button-background-selected-opacity` | Opacity of the selected action sheet button background |
| `--button-color` | Color of the action sheet button |
| `--button-color-activated` | Color of the action sheet button when pressed |
| `--button-color-disabled` | Color of the selected action sheet button when disabled |
| `--button-color-focused` | Color of the action sheet button when tabbed to |
| `--button-color-hover` | Color of the action sheet button on hover |
| `--button-color-selected` | Color of the selected action sheet button |
| `--color` | Color of the action sheet text |
| `--height` | height of the action sheet |
| `--max-height` | Maximum height of the action sheet |
| `--max-width` | Maximum width of the action sheet |
| `--min-height` | Minimum height of the action sheet |
| `--min-width` | Minimum width of the action sheet |
| `--width` | Width of the action sheet |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
