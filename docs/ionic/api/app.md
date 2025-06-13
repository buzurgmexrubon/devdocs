---
title: "ion-app"
---

<head>
  <title>ion-app: Container Element for an Ionic Application</title>
  <meta name="description" content="ion-app is a container element for an Ionic application. Apps can have many Ionic components including menus, headers, content, and footers. Read to learn more." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

App is a container element for an Ionic application. There should only be one `<ion-app>` element per project. An app can have many Ionic components including menus, headers, content, and footers. The overlay components get appended to the `<ion-app>` when they are presented.

Using `ion-app` enables the following behaviors:

- [Keyboard Lifecycle Events](../developing/keyboard#keyboard-lifecycle-events) without the need for any native plugins
- [Hardware Back Button Listeners](../developing/hardware-back-button) for customizing the hardware back button behavior on Android devices
- Status bar support in Capacitor or Cordova which allows users to scroll to the top of the view by tapping the status bar
- Scroll assist utilities which scroll the content so focused text inputs are not covered by the on-screen keyboard
- [Ripple effect](./ripple-effect) when activating buttons on Material Design mode
- Other tap and focus utilities which make the experience of using an Ionic app feel more native

## Programmatic Focus

Ionic offers focus utilities for components with the `ion-focusable` class. These utilities automatically manage focus for components when certain keyboard keys, like <kbd>Tab</kbd>, are pressed. Components can also be programmatically focused in response to user actions using the `setFocus` method from `ion-app`.

import SetFocus from '@site/static/ionic/usage/v8/app/set-focus/index.md';

<SetFocus />

## Properties

No properties available for this component.

## Events

No events available for this component.

## Methods

### setFocus

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Used to set focus on an element that uses `ion-focusable`. Do not use this if focusing the element as a result of a keyboard event as the focus utility should handle this for us. This method should be used when we want to programmatically focus an element as a result of another user action. (Ex: We focus the first element inside of a popover when the user presents it, but the popover is not always presented as a result of keyboard action.) |
| **Signature**   | `setFocus(elements: HTMLElement[]) => Promise<void>`                                                                                                                                                                                                                                                                                                                                                                                                        |

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
