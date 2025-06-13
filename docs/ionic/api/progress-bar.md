---
title: "ion-progress-bar"
---

<head>
  <title>ion-progress-bar: App Progress Bar for Loading Indicator</title>
  <meta name="description" content="ion-progress-bars are horizontal loading indicators that inform users about the status of ongoing app processes—such as submitting a form or saving updates." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Progress bars inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. There are two types of progress bars: `determinate` and `indeterminate`.

## Determinate

Determinate is the default type. It should be used when the percentage of an operation is known. The progress is represented by setting the `value` property. This can be used to show the progress increasing from 0 to 100% of the track.

import Determinate from '@site/static/ionic/usage/v8/progress-bar/determinate/index.md';

<Determinate />

### Buffer

If the `buffer` property is set, a buffer stream will show with animated circles to indicate activity. The value of the `buffer` property will also be represented by how much visible track there is. If the value of `buffer` is less than the `value` property, there will be no visible track. If `buffer` is equal to `1` then the buffer stream will be hidden.

import Buffer from '@site/static/ionic/usage/v8/progress-bar/buffer/index.md';

<Buffer />

## Indeterminate

The indeterminate type should be used when it is unknown how long the process will take. The progress bar is not tied to the `value`, instead it continually slides along the track until the process is complete.

import Indeterminate from '@site/static/ionic/usage/v8/progress-bar/indeterminate/index.md';

<Indeterminate />

## Progress Bars in Toolbars

<!-- Reuse the playground from the Toolbar directory -->

import Toolbar from '@site/static/ionic/usage/v8/toolbar/progress-bars/index.md';

<Toolbar />

## Theming

### Colors

import Colors from '@site/static/ionic/usage/v8/progress-bar/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/ionic/usage/v8/progress-bar/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

import CSSParts from '@site/static/ionic/usage/v8/progress-bar/theming/css-shadow-parts/index.md';

<CSSParts />

## Properties

### buffer

|                 |                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| **Description** | If the buffer and value are smaller than 1, the buffer circles will show. The buffer should be between [0, 1]. |
| **Attribute**   | `buffer`                                                                                                       |
| **Type**        | `number`                                                                                                       |
| **Default**     | `1`                                                                                                            |

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### reversed

|                 |                                              |
| --------------- | -------------------------------------------- |
| **Description** | If true, reverse the progress bar direction. |
| **Attribute**   | `reversed`                                   |
| **Type**        | `boolean`                                    |
| **Default**     | `false`                                      |

### type

|                 |                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The state of the progress bar, based on if the time the process takes is known or not. Default options are: `"determinate"` (no animation), `"indeterminate"` (animate from left to right). |
| **Attribute**   | `type`                                                                                                                                                                                      |
| **Type**        | `"determinate" ｜ "indeterminate"`                                                                                                                                                          |
| **Default**     | `'determinate'`                                                                                                                                                                             |

### value

|                 |                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The value determines how much of the active bar should display when the `type` is `"determinate"`. The value should be between [0, 1]. |
| **Attribute**   | `value`                                                                                                                                |
| **Type**        | `number`                                                                                                                               |
| **Default**     | `0`                                                                                                                                    |

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name       | Description                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `progress` | The progress bar that shows the current value when `type` is `"determinate"` and slides back and forth when `type` is `"indeterminate"`.                |
| `stream`   | The animated circles that appear while buffering. This only shows when `buffer` is set and `type` is `"determinate"`.                                   |
| `track`    | The track bar behind the progress bar. If the `buffer` property is set and `type` is `"determinate"` the track will be the width of the `buffer` value. |

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
  | `--background` | Background of the progress track, or the buffer bar if `buffer` is set |
| `--progress-background` | Background of the progress bar representing the current value |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the progress track, or the buffer bar if `buffer` is set |
| `--progress-background` | Background of the progress bar representing the current value |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
