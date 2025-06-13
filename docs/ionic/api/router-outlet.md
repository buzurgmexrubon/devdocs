---
title: "ion-router-outlet"
---

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The router outlet behaves in a similar way to Angular's built-in router outlet component and Vue's router view component, but contains the logic for providing a stacked navigation, and animating views in and out.

Although router outlet has methods for navigating around, it's recommended to use the navigation methods in your framework's router.

## Life Cycle Hooks

Routes rendered in a Router Outlet have access to specific Ionic events that are wired up to animations

| Event Name         | Trigger                                                            |
| ------------------ | ------------------------------------------------------------------ |
| `ionViewWillEnter` | Fired when the component routing to is about to animate into view. |
| `ionViewDidEnter`  | Fired when the component routing to has finished animating.        |
| `ionViewWillLeave` | Fired when the component routing from is about to animate.         |
| `ionViewDidLeave`  | Fired when the component routing to has finished animating.        |

These event tie into Ionic's animation system and can be used to coordinate parts of your app when a Components is done with its animation. These events are not a replacement for your framework's own event system, but an addition.

For handling Router Guards, the older `ionViewCanEnter` and `ionViewCanLeave` have been replaced with their framework specific equivalent. For Angular, there are [Router Guards](https://angular.io/guide/router#milestone-5-route-guards).

## Properties

### animated

|                 |                                                                           |
| --------------- | ------------------------------------------------------------------------- |
| **Description** | If `true`, the router-outlet should animate the transition of components. |
| **Attribute**   | `animated`                                                                |
| **Type**        | `boolean`                                                                 |
| **Default**     | `true`                                                                    |

### animation

|                 |                                                                                    |
| --------------- | ---------------------------------------------------------------------------------- |
| **Description** | This property allows to create custom transition using AnimationBuilder functions. |
| **Attribute**   | `animation`                                                                        |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined`                            |
| **Default**     | `undefined`                                                                        |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `getIonMode(this)`                                |

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
