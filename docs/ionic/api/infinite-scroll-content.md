---
title: "ion-infinite-scroll-content"
---

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

The `ion-infinite-scroll-content` component is the default child used by the `ion-infinite-scroll`. It displays an infinite scroll spinner that looks best based on the platform and changes the look depending on the infinite scroll's state. The default spinner can be changed and text can be added by setting the `loadingSpinner` and `loadingText` properties.

For more information as well as usage, see the [Infinite Scroll Documentation](./infinite-scroll.md#infinite-scroll-content).

## Properties

### loadingSpinner

|                 |                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | An animated SVG spinner that shows while loading.                                                                                                       |
| **Attribute**   | `loading-spinner`                                                                                                                                       |
| **Type**        | `"bubbles" ｜ "circles" ｜ "circular" ｜ "crescent" ｜ "dots" ｜ "lines" ｜ "lines-sharp" ｜ "lines-sharp-small" ｜ "lines-small" ｜ null ｜ undefined` |
| **Default**     | `undefined`                                                                                                                                             |

### loadingText

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Optional text to display while loading. `loadingText` can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example `<Ionic>` would become `&lt;Ionic&gt;`<br /><br />For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)<br /><br />This property accepts custom HTML as a string. Content is parsed as plaintext by default. `innerHTMLTemplatesEnabled` must be set to `true` in the Ionic config before custom HTML can be used. |
| **Attribute**   | `loading-text`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Type**        | `IonicSafeString ｜ string ｜ undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
