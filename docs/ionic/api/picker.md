---
title: "ion-picker"
---

<head>
  <title>ion-picker: Display a list of options in columns</title>
  <meta name="description" content="A Picker displays one or more columns with options for users to choose from." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A Picker displays one or more columns with options for users to choose from.

import Basic from '@site/static/ionic/usage/v8/picker/basic/index.md';

<Basic />

## Prefix & Suffix Content

Use the `prefix` and `suffix` slots to add additional content to the picker.

import PrefixSuffix from '@site/static/ionic/usage/v8/picker/prefix-suffix/index.md';

<PrefixSuffix />

## Theming

### CSS Variables

The picker highlight and fade can be customized using CSS variables on `ion-picker`. Developers can customize the individual appearance of `ion-picker-column-options` by targeting them directly and using host level styling.

import CSSProps from '@site/static/ionic/usage/v8/picker/theming/css-properties/index.md';

<CSSProps />

## Picker in Modal

Pickers can be displayed inside of overlays, such as `ion-modal` to create a picker experience with confirmation or cancellation buttons.

import ModalExample from '@site/static/ionic/usage/v8/picker/modal/index.md';

<ModalExample />

## Accessibility

### Screen Readers

Picker supports navigation using a screen reader by implementing the [`slider` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role) on each [Picker Column](./picker-column). The following gestures can be used to navigate the Picker.

| Gesture                      | Function                                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| Swipe Left                   | Move focus to the previous Picker Column.                                                              |
| Swipe Right                  | Move focus to the next Picker Column.                                                                  |
| Swipe Up                     | Select the next option in the Picker Column.                                                           |
| Swipe Down                   | Select the previous option in the Picker Column.                                                       |
| Double Tap and Slide Up/Down | Adjust the selected option in the Picker Column. Can be used as an alternative to swiping up and down. |

:::caution
The Swipe Up and Swipe Down gestures rely on the correct key events being synthesized as noted on the [`slider` documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role). [Chromium-based browsers do not synthesize keyboard events correctly](https://issues.chromium.org/issues/40816094), but the "Double Tap and Slide Up/Down" gesture can be used as an alternative until this has been implemented in Chromium-based browsers.
:::

### Keyboard Interactions

Each [Picker Column](./picker-column) can be navigated using the keyboard when focused.

| Key                  | Description                          |
| -------------------- | ------------------------------------ |
| <kbd>ArrowUp</kbd>   | Scroll to the previous option.       |
| <kbd>ArrowDown</kbd> | Scroll to the next option.           |
| <kbd>PageUp</kbd>    | Scroll up by more than one option.   |
| <kbd>PageDown</kbd>  | Scroll down by more than one option. |
| <kbd>Home</kbd>      | Scroll to the first option.          |
| <kbd>End</kbd>       | Scroll to the last option.           |

## Properties

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

## Events

No events available for this component.

## Methods

No public methods available for this component.

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
  | `--fade-background-rgb` | Background of the gradient covering non-selected items in rgb format |
| `--highlight-background` | Background of the picker highlight for the selected item |
| `--highlight-border-radius` | Border radius of the picker highlight for the selected item |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--fade-background-rgb` | Background of the gradient covering non-selected items in rgb format |
| `--highlight-background` | Background of the picker highlight for the selected item |
| `--highlight-border-radius` | Border radius of the picker highlight for the selected item |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
