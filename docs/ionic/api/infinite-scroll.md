---
title: "ion-infinite-scroll"
---

<head>
  <title>ion-infinite-scroll: Infinite Scroller Action Component</title>
  <meta name="description" content="The ion-infinite-scroll component calls an action to be performed when the user scrolls a specified distance from the bottom or top of the page." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

The Infinite Scroll component calls an action to be performed when the user scrolls a specified distance from the bottom or top of the page.

The expression assigned to the `ionInfinite` event is called when the user reaches that defined distance. When this expression has finished any and all tasks, it should call the `complete()` method on the infinite scroll instance.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/infinite-scroll/basic/index.md';

<Basic />

## Loading Text and Spinner

The `ion-infinite-scroll-content` is responsible for the visual display of the infinite scroll interaction. By default this component changes its look depending on the infinite scroll's state. It displays a spinner that looks best based on the platform the user is on. Both the spinner and loading text can be customized by setting properties on the `ion-infinite-scroll-content` component.

import InfiniteScrollContent from '@site/static/ionic/usage/v8/infinite-scroll/infinite-scroll-content/index.md';

<InfiniteScrollContent />

## Custom Content

Separating the `ion-infinite-scroll` and `ion-infinite-scroll-content` components allows developers to create their own content components, if desired. This content can contain anything, from an SVG element to elements with unique CSS animations.

import CustomContent from '@site/static/ionic/usage/v8/infinite-scroll/custom-infinite-scroll-content/index.md';

<CustomContent />

## Usage with Virtual Scroll

Infinite scroll requires a scroll container. When using a virtual scrolling solution, you will need to disable scrolling on the `ion-content` and indicate which element container is responsible for the scroll container with the `.ion-content-scroll-host` class target.

```html
<ion-content scroll-y="false">
  <virtual-scroll-element class="ion-content-scroll-host">
    <!-- Your virtual scroll content -->
  </virtual-scroll-element>
  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

:::note

`virtual-scroll-element` refers to the scroll container responsible for scrolling the content. This may be a component provided directly by the virtual scroll solution you are using.

:::

## Accessibility

Developers should assign the `role="feed"` attribute to the scrollable list of items that are added to or removed from as the user scrolls.

Individual list items should either have `role="article"` or use the `<article>` element directly.

For example, when rendering a collection of items in an `ion-list`:

```html
<ion-content role="feed">
  <ion-list>
    <ion-item role="article"> First item </ion-item>
    <ion-item role="article"> Second item </ion-item>
    ...
  </ion-list>

  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

Please refer to the [ARIA: feed role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role) documentation for additional information.

## Interfaces

### InfiniteScrollCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface InfiniteScrollCustomEvent extends CustomEvent {
  target: HTMLIonInfiniteScrollElement
}
```

## Properties

### disabled

|                 |                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the infinite scroll will be hidden and scroll event listeners will be removed.<br /><br />Set this to true to disable the infinite scroll from actively trying to receive new data while scrolling. This is useful when it is known that there is no more data that can be added, and the infinite scroll is no longer needed. |
| **Attribute**   | `disabled`                                                                                                                                                                                                                                                                                                                                |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                                 |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                                   |

### position

|                 |                                                                                         |
| --------------- | --------------------------------------------------------------------------------------- |
| **Description** | The position of the infinite scroll element. The value can be either `top` or `bottom`. |
| **Attribute**   | `position`                                                                              |
| **Type**        | `"bottom" ｜ "top"`                                                                     |
| **Default**     | `'bottom'`                                                                              |

### threshold

|                 |                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The threshold distance from the bottom of the content to call the `infinite` output event when scrolled. The threshold value can be either a percent, or in pixels. For example, use the value of `10%` for the `infinite` output event to get called when the user has scrolled 10% from the bottom of the page. Use the value `100px` when the scroll is within 100 pixels from the bottom of the page. |
| **Attribute**   | `threshold`                                                                                                                                                                                                                                                                                                                                                                                               |
| **Type**        | `string`                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Default**     | `'15%'`                                                                                                                                                                                                                                                                                                                                                                                                   |

## Events

| Name          | Description                                                                                                                                                                                 | Bubbles |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ionInfinite` | Emitted when the scroll reaches the threshold distance. From within your infinite handler, you must call the infinite scroll's `complete()` method when your async operation has completed. | `true`  |

## Methods

### complete

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Call `complete()` within the `ionInfinite` output event handler when your async operation has completed. For example, the `loading` state is while the app is performing an asynchronous operation, such as receiving more data from an AJAX request to add more items to a data list. Once the data has been received and UI updated, you then call this method to signify that the loading has completed. This method will change the infinite scroll's state from `loading` to `enabled`. |
| **Signature**   | `complete() => Promise<void>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
