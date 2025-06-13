---
title: "ion-ripple-effect"
---

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<head>
  <title>ion-ripple-effect: Ripple Effect Component for Ionic Apps</title>
  <meta name="description" content="The ripple effect button component adds the Material Design ink ripple interaction effect. It can only be used in an ion-app and can be added to any component." />
</head>

<EncapsulationPill type="shadow" />

The ripple effect component adds the [Material Design ink ripple interaction effect](https://material.io/develop/web/supporting/ripple). This component can only be used inside of an `<ion-app>` and can be added inside of any element.

It's important to set [relative positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position) on the parent element because the ripple effect is absolutely positioned and will cover its closest parent that has relative positioning. The parent element should also be given the `ion-activatable` class, which tells the ripple effect that the element is clickable. It's recommended to add `overflow: hidden` to the parent element if the ripple is overflowing its container.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/ripple-effect/basic/index.md';

<Basic />

## Type

There are two types of ripple effects: `"bounded"` and `"unbounded"`. The default type, `"bounded"`, will expand the ripple effect from the click position outwards. To add a ripple effect that always starts in the center of the element and expands in a circle, set the type to `"unbounded"`.

import Type from '@site/static/ionic/usage/v8/ripple-effect/type/index.md';

<Type />

## Customizing

The ripple can be customized to a different color through CSS. By default the ripple color is set to inherit the text color, which is generally the body color. This can be changed by setting the CSS `color` on the parent or the ripple effect itself.

import Customizing from '@site/static/ionic/usage/v8/ripple-effect/customizing/index.md';

<Customizing />

## Properties

### type

|                 |                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Sets the type of ripple-effect:<br /><br />- `bounded`: the ripple effect expands from the user's click position - `unbounded`: the ripple effect expands from the center of the button and overflows the container.<br /><br />NOTE: Surfaces for bounded ripples should have the overflow property set to hidden, while surfaces for unbounded ripples should have it set to visible. |
| **Attribute**   | `type`                                                                                                                                                                                                                                                                                                                                                                                  |
| **Type**        | `"bounded" ｜ "unbounded"`                                                                                                                                                                                                                                                                                                                                                              |
| **Default**     | `'bounded'`                                                                                                                                                                                                                                                                                                                                                                             |

## Events

No events available for this component.

## Methods

### addRipple

|                 |                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Adds the ripple effect to the parent element.                                                                                           |
| **Signature**   | `addRipple(x: number, y: number) => Promise<() => void>`                                                                                |
| **Parameters**  | **x**: The horizontal coordinate of where the ripple should start.<br/>**y**: The vertical coordinate of where the ripple should start. |

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
