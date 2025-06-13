---
title: "ion-tabs"
---

<head>
  <title>ion-tabs: Tab-Based Component for App Top-Level Navigation</title>
  <meta name="description" content="Tabs are top-level components to implement tab-based navigation. Ion-tabs have no styling & work as router outlets for navigation that behaves like native apps." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Tabs are a top level navigation component to implement a tab-based navigation.
The component is a container of individual [Tab](tab.md) components.

The `ion-tabs` component does not have any styling and works as a router outlet in order to handle navigation. It does not provide any UI feedback or mechanism to switch between tabs. In order to do so, an `ion-tab-bar` should be provided as a direct child of `ion-tabs`.

Both `ion-tabs` and `ion-tab-bar` can be used as standalone elements. They don’t depend on each other to work, but they are usually used together in order to implement a tab-based navigation that behaves like a native app.

The `ion-tab-bar` needs a slot defined in order to be projected to the right place in an `ion-tabs` component.

## Basic Usage

Tabs can be used to display different content without the need to change the URL. This is useful when the tabs are not used for navigation, but rather to display different content.

import Basic from '@site/static/ionic/usage/v8/tabs/basic/index.md';

<Basic />

## Usage with Router

Tabs can be used with the Ionic router to implement tab-based navigation. The tab bar and active tab will automatically resolve based on the URL. This is the most common pattern for tabs navigation.

import Router from '@site/static/ionic/usage/v8/tabs/router/index.md';

<Router />

:::tip Best Practices

Ionic has guides on best practices for routing patterns with tabs. Check out the guides for [Angular](/angular/navigation#working-with-tabs), [React](/react/navigation#working-with-tabs), and [Vue](/vue/navigation#working-with-tabs) for additional information.

:::

## Interfaces

### TabsCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string }
  target: HTMLIonTabsElement
}
```

## Properties

No properties available for this component.

## Events

| Name                | Description                                                                | Bubbles |
| ------------------- | -------------------------------------------------------------------------- | ------- |
| `ionTabsDidChange`  | Emitted when the navigation has finished transitioning to a new component. | `false` |
| `ionTabsWillChange` | Emitted when the navigation is about to transition to a new component.     | `false` |

## Methods

### getSelected

|                 |                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Get the currently selected tab. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router. |
| **Signature**   | `getSelected() => Promise<string ｜ undefined>`                                                                                                                                            |

### getTab

|                 |                                                                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Get a specific tab by the value of its `tab` property or an element reference. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router. |
| **Signature**   | `getTab(tab: string ｜ HTMLIonTabElement) => Promise<HTMLIonTabElement ｜ undefined>`                                                                                                                                                     |
| **Parameters**  | **tab**: The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.                                                                                                                              |

### select

|                 |                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Select a tab by the value of its `tab` property or an element reference. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router. |
| **Signature**   | `select(tab: string ｜ HTMLIonTabElement) => Promise<boolean>`                                                                                                                                                                      |
| **Parameters**  | **tab**: The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.                                                                                                                        |

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

| Name     | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| ``       | Content is placed between the named slots if provided without a slot. |
| `bottom` | Content is placed at the bottom of the screen.                        |
| `top`    | Content is placed at the top of the screen.                           |
