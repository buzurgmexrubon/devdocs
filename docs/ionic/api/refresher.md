---
title: "ion-refresher"
---

<head>
  <title>ion-refresher: Pull-to-Refresh Page Content on Ionic Apps</title>
  <meta name="description" content="ion-refresher provides pull-to-refresh functionality on content components. Learn how this lets users pull down on a page using touch to retrieve more data." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

Refresher provides pull-to-refresh functionality on a content component. The pull-to-refresh pattern lets a user pull down on a list of data in order to retrieve more data.

Data should be modified during the refresher's output events. Once the async operation has completed and the refreshing should end, `complete()` needs to be called on the refresher.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/refresher/basic/index.md';

<Basic />

## Pull Properties

The refresher has several properties for customizing the pull gesture. Set the `pullFactor` to change the speed of the pull, the `pullMin` property to change the minimum distance the user must pull down, and the `pullMax` property to change the maximum distance the user must pull down before the refresher enters the `refreshing` state.

These properties do not apply when the [native refresher](#native-refreshers) is enabled.

import PullProperties from '@site/static/ionic/usage/v8/refresher/pull-properties/index.md';

<PullProperties />

## Custom Refresher Content

The default icon, spinner, and text can be customized on the [refresher content](./refresher-content) based on whether the state of the refresher is `pulling` or `refreshing`.

Setting `pullingIcon` will disable the [native refresher](#native-refreshers).

import CustomContent from '@site/static/ionic/usage/v8/refresher/custom-content/index.md';

<CustomContent />

## Native Refreshers

Both iOS and Android platforms provide refreshers that use properties exposed by their respective devices in order to give pull-to-refresh a fluid, native-like feel.

The iOS and Material Design native refreshers are enabled by default in Ionic. However, the native iOS refresher relies on rubber band scrolling in order to work properly and is only compatible with iOS devices as a result. We provide a fallback refresher for apps running in iOS mode on devices that do not support rubber band scrolling.

The native refresher uses a `circular` spinner for Material Design, while iOS uses the `lines` spinner. On iOS, the tick marks will progressively show as the page is pulled down.

Certain refresher properties such as the [Pull Properties](#pull-properties), `closeDuration` and `snapbackDuration` are not compatible because much of the native refreshers are scroll-based. See [Properties](#properties) for more information on unsupported properties.

The native refreshers can be disabled by setting the `pullingIcon` on the [refresher content](#custom-refresher-content) to any icon or spinner. See the [Ionicons](https://ionic.io/ionicons) and [Spinner](./spinner) documentation for accepted values.

## Usage with Virtual Scroll

Refresher requires a scroll container to function. When using a virtual scrolling solution, you will need to disable scrolling on the `ion-content` and indicate which element container is responsible for the scroll container with the `.ion-content-scroll-host` class target.

Developers should apply the following CSS to the scrollable container. This CSS adds a "rubber band" scrolling effect on iOS which allows the native iOS refresher to work properly:

```css
.ion-content-scroll-host::before,
.ion-content-scroll-host::after {
  position: absolute;

  width: 1px;
  height: 1px;

  content: "";
}

.ion-content-scroll-host::before {
  bottom: -1px;
}

.ion-content-scroll-host::after {
  top: -1px;
}
```

import CustomScrollTarget from '@site/static/ionic/usage/v8/refresher/custom-scroll-target/index.md';

<CustomScrollTarget />

## Advanced Usage

While the refresher can be used with any type of content, a common use case in native apps is to display a list of data that gets updated on refresh. In the below example, the app generates a list of data and then appends data to the top of the list when the refresh is completed. In a real app, the data would be received and updated after sending a request via a network or database call.

import Advanced from '@site/static/ionic/usage/v8/refresher/advanced/index.md';

<Advanced />

## Interfaces

### RefresherEventDetail

```typescript
interface RefresherEventDetail {
  complete(): void
}
```

### RefresherCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RefresherCustomEvent extends CustomEvent {
  detail: RefresherEventDetail
  target: HTMLIonRefresherElement
}
```

## Properties

### closeDuration

|                 |                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Time it takes to close the refresher. Does not apply when the refresher content uses a spinner, enabling the native refresher. |
| **Attribute**   | `close-duration`                                                                                                               |
| **Type**        | `string`                                                                                                                       |
| **Default**     | `'280ms'`                                                                                                                      |

### disabled

|                 |                                          |
| --------------- | ---------------------------------------- |
| **Description** | If `true`, the refresher will be hidden. |
| **Attribute**   | `disabled`                               |
| **Type**        | `boolean`                                |
| **Default**     | `false`                                  |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### pullFactor

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | How much to multiply the pull speed by. To slow the pull animation down, pass a number less than `1`. To speed up the pull, pass a number greater than `1`. The default value is `1` which is equal to the speed of the cursor. If a negative value is passed in, the factor will be `1` instead.<br /><br />For example: If the value passed is `1.2` and the content is dragged by `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels (an increase of 20 percent). If the value passed is `0.8`, the dragged amount will be `8` pixels, less than the amount the cursor has moved.<br /><br />Does not apply when the refresher content uses a spinner, enabling the native refresher. |
| **Attribute**   | `pull-factor`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Type**        | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Default**     | `1`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### pullMax

|                 |                                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The maximum distance of the pull until the refresher will automatically go into the `refreshing` state. Defaults to the result of `pullMin + 60`. Does not apply when the refresher content uses a spinner, enabling the native refresher. |
| **Attribute**   | `pull-max`                                                                                                                                                                                                                                 |
| **Type**        | `number`                                                                                                                                                                                                                                   |
| **Default**     | `this.pullMin + 60`                                                                                                                                                                                                                        |

### pullMin

|                 |                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The minimum distance the user must pull down until the refresher will go into the `refreshing` state. Does not apply when the refresher content uses a spinner, enabling the native refresher. |
| **Attribute**   | `pull-min`                                                                                                                                                                                     |
| **Type**        | `number`                                                                                                                                                                                       |
| **Default**     | `60`                                                                                                                                                                                           |

### snapbackDuration

|                 |                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Time it takes the refresher to snap back to the `refreshing` state. Does not apply when the refresher content uses a spinner, enabling the native refresher. |
| **Attribute**   | `snapback-duration`                                                                                                                                          |
| **Type**        | `string`                                                                                                                                                     |
| **Default**     | `'280ms'`                                                                                                                                                    |

## Events

| Name         | Description                                                                                                                                                                                                                                                                  | Bubbles |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ionPull`    | Emitted while the user is pulling down the content and exposing the refresher.                                                                                                                                                                                               | `true`  |
| `ionRefresh` | Emitted when the user lets go of the content and has pulled down further than the `pullMin` or pulls the content down and exceeds the pullMax. Updates the refresher state to `refreshing`. The `complete()` method should be called when the async operation has completed. | `true`  |
| `ionStart`   | Emitted when the user begins to start pulling down.                                                                                                                                                                                                                          | `true`  |

## Methods

### cancel

|                 |                                                                  |
| --------------- | ---------------------------------------------------------------- |
| **Description** | Changes the refresher's state from `refreshing` to `cancelling`. |
| **Signature**   | `cancel() => Promise<void>`                                      |

### complete

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Call `complete()` when your async operation has completed. For example, the `refreshing` state is while the app is performing an asynchronous operation, such as receiving more data from an AJAX request. Once the data has been received, you then call this method to signify that the refreshing has completed and to close the refresher. This method also changes the refresher's state from `refreshing` to `completing`. |
| **Signature**   | `complete() => Promise<void>`                                                                                                                                                                                                                                                                                                                                                                                                    |

### getProgress

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A number representing how far down the user has pulled. The number `0` represents the user hasn't pulled down at all. The number `1`, and anything greater than `1`, represents that the user has pulled far enough down that when they let go then the refresh will happen. If they let go and the number is less than `1`, then the refresh will not happen, and the content will return to it's original position. |
| **Signature**   | `getProgress() => Promise<number>`                                                                                                                                                                                                                                                                                                                                                                                    |

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
