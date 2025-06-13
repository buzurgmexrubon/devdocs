---
title: "ion-range"
---

<head>
  <title>ion-range: Range Slider Knob Controls with Labels</title>
  <meta name="description" content="ion-range lets you select from a range of values by moving the slider. It accepts dual knobs but one controls the value and labels can be placed on either side." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Range slider lets users select from a range of values by moving the slider knob. By default one knob controls the value of the range. This behavior can be customized using [dual knobs](#dual-knobs).

By default the Range slider has a minimum value of `0` and a maximum value of `100`. This can be configured with the `min` and `max` properties.

## Labels

Labels should be used to describe the range. They can be used visually, and they will also be read out by screen readers when the user is focused on the range. This makes it easy for the user to understand the intent of the range. Range has several ways to assign a label:

- `label` property: used for plaintext labels
- `label` slot: used for custom HTML labels
- `aria-label`: used to provide a label for screen readers but adds no visible label

### Label Placement

The below demo shows how to use the `labelPlacement` property to change the position of the label relative to the range. While the `label` property is used here, `labelPlacement` can also be used with the `label` slot.

import LabelsPlayground from '@site/static/ionic/usage/v8/range/labels/index.md';

<LabelsPlayground />

### Label Slot

While plaintext labels should be passed in via the `label` property, if custom HTML is needed, it can be passed through the `label` slot instead.

import LabelSlotPlayground from '@site/static/ionic/usage/v8/range/label-slot/index.md';

<LabelSlotPlayground />

### No Visible Label

If no visible label is needed, developers should still supply an `aria-label` so the range is accessible to screen readers.

import NoVisibleLabel from '@site/static/ionic/usage/v8/range/no-visible-label/index.md';

<NoVisibleLabel />

## Decorations

Decorative elements can be passed into the `start` or `end` slots of the range. This is useful for adding icons such as low volume or high volume icons. Since these elements are decorative, they should not be announced by assistive technology such as screen readers.

If the directionality of the document is set to left to right, the contents slotted to the `start` position will display to the left of the range, where as contents slotted to the `end` position will display to the right of the range. In right to left (rtl) directionality, the contents slotted to the `start` position will display to the right of the range, where as contents slotted to the `end` position will display to the left of the range.

import DecorationsPlayground from '@site/static/ionic/usage/v8/range/slots/index.md';

<DecorationsPlayground />

## Dual Knobs

Dual knobs introduce two knob controls that users can use to select a value at a lower and upper bounds. When selected, the Range will emit an `ionChange` event with a [RangeValue](#rangevalue), containing the upper and lower values selected.

import DualKnobs from '@site/static/ionic/usage/v8/range/dual-knobs/index.md';

<DualKnobs />

## Pins

The `pin` attribute will display the value of the Range above the knob when dragged. This allows users to select a specific value within the Range.

With the `pinFormatter` function, developers can customize the formatting of the range value to the user.

import Pins from '@site/static/ionic/usage/v8/range/pins/index.md';

<Pins />

## Snapping & Ticks

Ticks show indications for each available value on the Range. In order to use ticks, developers must set both `snaps` and the `ticks` property to `true`.

With snapping enabled, the Range knob will snap to the nearest available value as the knob is dragged and released.

import SnappingTicks from '@site/static/ionic/usage/v8/range/snapping-ticks/index.md';

<SnappingTicks />

## Event Handling

### Using `ionChange`

The `ionChange` event emits as the Range knob value changes.

import IonChangeEvent from '@site/static/ionic/usage/v8/range/ion-change-event/index.md';

<IonChangeEvent />

### Using `ionKnobMoveStart` and `ionKnobMoveEnd`

The `ionKnobMoveStart` event emits when the Range knob begins dragging, whether through mouse drag, touch gesture or keyboard interaction. Inversely, `ionKnobMoveEnd` emits when the Range knob is released. Both events emit with the `RangeValue` type and work in combination with the `dualKnobs` property.

import IonKnobMoveEvent from '@site/static/ionic/usage/v8/range/ion-knob-move-event/index.md';

<IonKnobMoveEvent />

## Theming

### CSS Custom Properties

Range includes [CSS Variables](#css-custom-properties) to quickly theme and customize the appearance of the Range component to match your application's design.

import CSSProps from '@site/static/ionic/usage/v8/range/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

Range includes [CSS Shadow Parts](#css-shadow-parts) to allow complete customization of specific element nodes within the Range component. CSS Shadow Parts offer the most customization capabilities and are the recommended approach when requiring advance styling with the Range component.

import CSSParts from '@site/static/ionic/usage/v8/range/theming/css-shadow-parts/index.md';

<CSSParts />

## Migrating from Legacy Range Syntax

A simpler range syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup an range, resolves accessibility issues, and improves the developer experience.

Developers can perform this migration one range at a time. While developers can continue using the legacy syntax, we recommend migrating as soon as possible.

### Using the Modern Syntax

Using the modern syntax involves removing the `ion-label` and passing the label to `ion-range` using the `label` property. The placement of the label can be configured using the `labelPlacement` property.

If custom HTML is needed for the label, it can be passed directly inside the `ion-range` using the `label` slot instead.

import Migration from '@site/static/ionic/usage/v8/range/migration/index.md';

<Migration />

:::note
In past versions of Ionic, `ion-item` was required for `ion-range` to function properly. Starting in Ionic 7.0, `ion-range` should only be used in an `ion-item` when the item is placed in an `ion-list`. Additionally, `ion-item` is no longer required for `ion-range` to function properly.
:::

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern range syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-range` to `true` to force that instance of the range to use the legacy syntax.

## Interfaces

### RangeChangeEventDetail

```typescript
interface RangeChangeEventDetail {
  value: RangeValue
}
```

### RangeKnobMoveStartEventDetail

```typescript
interface RangeKnobMoveStartEventDetail {
  value: RangeValue
}
```

### RangeKnobMoveEndEventDetail

```typescript
interface RangeKnobMoveEndEventDetail {
  value: RangeValue
}
```

### RangeCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail
  target: HTMLIonRangeElement
}
```

## Types

### RangeValue

```typescript
type RangeValue = number | { lower: number; upper: number }
```

## Properties

### activeBarStart

|                 |                                                                                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The start position of the range active bar. This feature is only available with a single knob (dualKnobs="false"). Valid values are greater than or equal to the min value and less than or equal to the max value. |
| **Attribute**   | `active-bar-start`                                                                                                                                                                                                  |
| **Type**        | `number ｜ undefined`                                                                                                                                                                                               |
| **Default**     | `undefined`                                                                                                                                                                                                         |

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### debounce

|                 |                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Description** | How long, in milliseconds, to wait to trigger the `ionInput` event after each change in the range value. |
| **Attribute**   | `debounce`                                                                                               |
| **Type**        | `number ｜ undefined`                                                                                    |
| **Default**     | `undefined`                                                                                              |

### disabled

|                 |                                                     |
| --------------- | --------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the range. |
| **Attribute**   | `disabled`                                          |
| **Type**        | `boolean`                                           |
| **Default**     | `false`                                             |

### dualKnobs

|                 |                 |
| --------------- | --------------- |
| **Description** | Show two knobs. |
| **Attribute**   | `dual-knobs`    |
| **Type**        | `boolean`       |
| **Default**     | `false`         |

### label

|                 |                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The text to display as the control's label. Use this over the `label` slot if you only need plain text. The `label` property will take priority over the `label` slot if both are used. |
| **Attribute**   | `label`                                                                                                                                                                                 |
| **Type**        | `string ｜ undefined`                                                                                                                                                                   |
| **Default**     | `undefined`                                                                                                                                                                             |

### labelPlacement

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Where to place the label relative to the range. `"start"`: The label will appear to the left of the range in LTR and to the right in RTL. `"end"`: The label will appear to the right of the range in LTR and to the left in RTL. `"fixed"`: The label has the same behavior as `"start"` except it also has a fixed width. Long text will be truncated with ellipses ("..."). `"stacked"`: The label will appear above the range regardless of the direction. |
| **Attribute**   | `label-placement`                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Type**        | `"end" ｜ "fixed" ｜ "stacked" ｜ "start"`                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Default**     | `'start'`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### max

|                 |                                     |
| --------------- | ----------------------------------- |
| **Description** | Maximum integer value of the range. |
| **Attribute**   | `max`                               |
| **Type**        | `number`                            |
| **Default**     | `100`                               |

### min

|                 |                                     |
| --------------- | ----------------------------------- |
| **Description** | Minimum integer value of the range. |
| **Attribute**   | `min`                               |
| **Type**        | `number`                            |
| **Default**     | `0`                                 |

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
| **Default**     | `this.rangeId`                                                  |

### pin

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **Description** | If `true`, a pin with integer value is shown when the knob is pressed. |
| **Attribute**   | `pin`                                                                  |
| **Type**        | `boolean`                                                              |
| **Default**     | `false`                                                                |

### pinFormatter

|                 |                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A callback used to format the pin text. By default the pin text is set to `Math.round(value)`.<br /><br />See https://ionicframework.com/docs/troubleshooting/runtime#accessing-this if you need to access `this` from within the callback. |
| **Attribute**   | `pin-formatter`                                                                                                                                                                                                                             |
| **Type**        | `(value: number) => string ｜ number`                                                                                                                                                                                                       |
| **Default**     | `(value: number): number => Math.round(value)`                                                                                                                                                                                              |

### snaps

|                 |                                                                                         |
| --------------- | --------------------------------------------------------------------------------------- |
| **Description** | If `true`, the knob snaps to tick marks evenly spaced based on the step property value. |
| **Attribute**   | `snaps`                                                                                 |
| **Type**        | `boolean`                                                                               |
| **Default**     | `false`                                                                                 |

### step

|                 |                                  |
| --------------- | -------------------------------- |
| **Description** | Specifies the value granularity. |
| **Attribute**   | `step`                           |
| **Type**        | `number`                         |
| **Default**     | `1`                              |

### ticks

|                 |                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, tick marks are displayed based on the step value. Only applies when `snaps` is `true`. |
| **Attribute**   | `ticks`                                                                                           |
| **Type**        | `boolean`                                                                                         |
| **Default**     | `true`                                                                                            |

### value

|                 |                                               |
| --------------- | --------------------------------------------- |
| **Description** | the value of the range.                       |
| **Attribute**   | `value`                                       |
| **Type**        | `number ｜ { lower: number; upper: number; }` |
| **Default**     | `0`                                           |

## Events

| Name               | Description                                                                                                                                                                                                                                                                                         | Bubbles |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ionBlur`          | Emitted when the range loses focus.                                                                                                                                                                                                                                                                 | `true`  |
| `ionChange`        | The `ionChange` event is fired for `<ion-range>` elements when the user modifies the element's value: - When the user releases the knob after dragging; - When the user moves the knob with keyboard arrows<br /><br />This event will not emit when programmatically setting the `value` property. | `true`  |
| `ionFocus`         | Emitted when the range has focus.                                                                                                                                                                                                                                                                   | `true`  |
| `ionInput`         | The `ionInput` event is fired for `<ion-range>` elements when the value is modified. Unlike `ionChange`, `ionInput` is fired continuously while the user is dragging the knob.                                                                                                                      | `true`  |
| `ionKnobMoveEnd`   | Emitted when the user finishes moving the range knob, whether through mouse drag, touch gesture, or keyboard interaction.                                                                                                                                                                           | `true`  |
| `ionKnobMoveStart` | Emitted when the user starts moving the range knob, whether through mouse drag, touch gesture, or keyboard interaction.                                                                                                                                                                             | `true`  |

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name          | Description                                |
| ------------- | ------------------------------------------ |
| `bar`         | The inactive part of the bar.              |
| `bar-active`  | The active part of the bar.                |
| `knob`        | The handle that is used to drag the range. |
| `label`       | The label text describing the range.       |
| `pin`         | The counter that appears above a knob.     |
| `tick`        | An inactive tick mark.                     |
| `tick-active` | An active tick mark.                       |

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
  | `--bar-background` | Background of the range bar |
| `--bar-background-active` | Background of the active range bar |
| `--bar-border-radius` | Border radius of the range bar |
| `--bar-height` | Height of the range bar |
| `--height` | Height of the range |
| `--knob-background` | Background of the range knob |
| `--knob-border-radius` | Border radius of the range knob |
| `--knob-box-shadow` | Box shadow of the range knob |
| `--knob-size` | Size of the range knob |
| `--pin-background` | Background of the range pin (only available in MD mode) |
| `--pin-color` | Color of the range pin (only available in MD mode) |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--bar-background` | Background of the range bar |
| `--bar-background-active` | Background of the active range bar |
| `--bar-border-radius` | Border radius of the range bar |
| `--bar-height` | Height of the range bar |
| `--height` | Height of the range |
| `--knob-background` | Background of the range knob |
| `--knob-border-radius` | Border radius of the range knob |
| `--knob-box-shadow` | Box shadow of the range knob |
| `--knob-size` | Size of the range knob |
| `--pin-background` | Background of the range pin (only available in MD mode) |
| `--pin-color` | Color of the range pin (only available in MD mode) |


</TabItem>
</Tabs>

```

## Slots

| Name    | Description                                                                                                                               |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `end`   | Content is placed to the right of the range slider in LTR, and to the left in RTL.                                                        |
| `label` | The label text to associate with the range. Use the "labelPlacement" property to control where the label is placed relative to the range. |
| `start` | Content is placed to the left of the range slider in LTR, and to the right in RTL.                                                        |
