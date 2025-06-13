---
title: "ion-nav"
---

<head>
  <title>ion-nav: Nav View Component for Ionic Framework Apps</title>
  <meta name="description" content="ion-nav is a standalone for loading arbitrary, and pushing new, components on to the stack. Loading Nav view, and pushing others, won't affect overall routers." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Nav is a standalone component for loading arbitrary components and pushing new components on to the stack.

Unlike Router Outlet, Nav is not tied to a particular router. This means that if we load a Nav component, and push other components to the stack, they will not affect the app's overall router. For example, you should not push a new component to `ion-nav` and expect the URL to update. This fits use cases where you could have a modal, which needs its own sub-navigation, without making it tied to the apps URL.

:::note
`ion-nav` is not meant to be used for routing. Instead, see the routing guides for [Angular](../angular/navigation), [React](../react/navigation), and [Vue](../vue/navigation), or [`ion-router`](./router) for vanilla JavaScript projects.
:::

## Using NavLink

NavLink is a simplified API when interacting with Nav. Developers can customize the component, pass along component properties, modify the direction of the route animation or define a custom animation when navigating.

import NavLinkExample from '@site/static/ionic/usage/v8/nav/nav-link/index.md';

<NavLinkExample />

## Navigation within a Modal

Modal can use Nav to offer a linear navigation that is independent of the URL.

:::note

The example below uses a reference to Nav and the public method APIs to push and pop views. It is recommended to use NavLink in implementations that do not require this level of granular access and control.

:::

import ModalNavigationExample from '@site/static/ionic/usage/v8/nav/modal-navigation/index.md';

<ModalNavigationExample />

## Interfaces

### NavCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface NavCustomEvent extends CustomEvent {
  target: HTMLIonNavElement
}
```

## Properties

### animated

|                 |                                                                 |
| --------------- | --------------------------------------------------------------- |
| **Description** | If `true`, the nav should animate the transition of components. |
| **Attribute**   | `animated`                                                      |
| **Type**        | `boolean`                                                       |
| **Default**     | `true`                                                          |

### animation

|                 |                                                                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | By default `ion-nav` animates transition between pages based in the mode (ios or material design). However, this property allows to create custom transition using `AnimationBuilder` functions. |
| **Attribute**   | `animation`                                                                                                                                                                                      |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined`                                                                                                                                          |
| **Default**     | `undefined`                                                                                                                                                                                      |

### root

|                 |                                                                            |
| --------------- | -------------------------------------------------------------------------- |
| **Description** | Root NavComponent to load                                                  |
| **Attribute**   | `root`                                                                     |
| **Type**        | `Function ｜ HTMLElement ｜ ViewController ｜ null ｜ string ｜ undefined` |
| **Default**     | `undefined`                                                                |

### rootParams

|                 |                                        |
| --------------- | -------------------------------------- |
| **Description** | Any parameters for the root component  |
| **Attribute**   | `root-params`                          |
| **Type**        | `undefined ｜ { [key: string]: any; }` |
| **Default**     | `undefined`                            |

### swipeGesture

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | If the nav component should allow for swipe-to-go-back. |
| **Attribute**   | `swipe-gesture`                                         |
| **Type**        | `boolean ｜ undefined`                                  |
| **Default**     | `undefined`                                             |

## Events

| Name               | Description                                     | Bubbles |
| ------------------ | ----------------------------------------------- | ------- |
| `ionNavDidChange`  | Event fired when the nav has changed components | `false` |
| `ionNavWillChange` | Event fired when the nav will change components | `false` |

## Methods

### canGoBack

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | Returns `true` if the current view can go back.        |
| **Signature**   | `canGoBack(view?: ViewController) => Promise<boolean>` |
| **Parameters**  | **view**: The view to check.                           |

### getActive

|                 |                                                       |
| --------------- | ----------------------------------------------------- |
| **Description** | Get the active view.                                  |
| **Signature**   | `getActive() => Promise<ViewController ｜ undefined>` |

### getByIndex

|                 |                                                                     |
| --------------- | ------------------------------------------------------------------- |
| **Description** | Get the view at the specified index.                                |
| **Signature**   | `getByIndex(index: number) => Promise<ViewController ｜ undefined>` |
| **Parameters**  | **index**: The index of the view.                                   |

### getLength

|                 |                                           |
| --------------- | ----------------------------------------- |
| **Description** | Returns the number of views in the stack. |
| **Signature**   | `getLength() => Promise<number>`          |

### getPrevious

|                 |                                                                              |
| --------------- | ---------------------------------------------------------------------------- |
| **Description** | Get the previous view.                                                       |
| **Signature**   | `getPrevious(view?: ViewController) => Promise<ViewController ｜ undefined>` |
| **Parameters**  | **view**: The view to get.                                                   |

### insert

|                 |                                                                                                                                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Inserts a component into the navigation stack at the specified index. This is useful to add a component at any point in the navigation stack.                                                                                                                                            |
| **Signature**   | `insert<T extends NavComponent>(insertIndex: number, component: T, componentProps?: ComponentProps<T> ｜ null, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>`                                                                                                  |
| **Parameters**  | **insertIndex**: The index to insert the component at in the stack.<br/>**component**: The component to insert into the navigation stack.<br/>**componentProps**: Any properties of the component.<br/>**opts**: The navigation options.<br/>**done**: The transition complete function. |

### insertPages

|                 |                                                                                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Inserts an array of components into the navigation stack at the specified index. The last component in the array will become instantiated as a view, and animate in to become the active view.                                           |
| **Signature**   | `insertPages(insertIndex: number, insertComponents: NavComponent[] ｜ NavComponentWithProps[], opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>`                                                                  |
| **Parameters**  | **insertIndex**: The index to insert the components at in the stack.<br/>**insertComponents**: The components to insert into the navigation stack.<br/>**opts**: The navigation options.<br/>**done**: The transition complete function. |

### pop

|                 |                                                                                         |
| --------------- | --------------------------------------------------------------------------------------- |
| **Description** | Pop a component off of the navigation stack. Navigates back from the current component. |
| **Signature**   | `pop(opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>`           |
| **Parameters**  | **opts**: The navigation options.<br/>**done**: The transition complete function.       |

### popTo

|                 |                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Pop to a specific index in the navigation stack.                                                                                                   |
| **Signature**   | `popTo(indexOrViewCtrl: number ｜ ViewController, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>`                         |
| **Parameters**  | **indexOrViewCtrl**: The index or view controller to pop to.<br/>**opts**: The navigation options.<br/>**done**: The transition complete function. |

### popToRoot

|                 |                                                                                     |
| --------------- | ----------------------------------------------------------------------------------- |
| **Description** | Navigate back to the root of the stack, no matter how far back that is.             |
| **Signature**   | `popToRoot(opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |
| **Parameters**  | **opts**: The navigation options.<br/>**done**: The transition complete function.   |

### push

|                 |                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Push a new component onto the current navigation stack. Pass any additional information along as an object. This additional information is accessible through NavParams.                                       |
| **Signature**   | `push<T extends NavComponent>(component: T, componentProps?: ComponentProps<T> ｜ null, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>`                                               |
| **Parameters**  | **component**: The component to push onto the navigation stack.<br/>**componentProps**: Any properties of the component.<br/>**opts**: The navigation options.<br/>**done**: The transition complete function. |

### removeIndex

|                 |                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Removes a component from the navigation stack at the specified index.                                                                                                                          |
| **Signature**   | `removeIndex(startIndex: number, removeCount?: number, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>`                                                                |
| **Parameters**  | **startIndex**: The number to begin removal at.<br/>**removeCount**: The number of components to remove.<br/>**opts**: The navigation options.<br/>**done**: The transition complete function. |

### setPages

|                 |                                                                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Set the views of the current navigation stack and navigate to the last view. By default animations are disabled, but they can be enabled by passing options to the navigation controller. Navigation parameters can also be passed to the individual pages in the array. |
| **Signature**   | `setPages(views: NavComponent[] ｜ NavComponentWithProps[], opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>`                                                                                                                                     |
| **Parameters**  | **views**: The list of views to set as the navigation stack.<br/>**opts**: The navigation options.<br/>**done**: The transition complete function.                                                                                                                       |

### setRoot

|                 |                                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Set the root for the current navigation stack to a component.                                                                                                                                                           |
| **Signature**   | `setRoot<T extends NavComponent>(component: T, componentProps?: ComponentProps<T> ｜ null, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>`                                                     |
| **Parameters**  | **component**: The component to set as the root of the navigation stack.<br/>**componentProps**: Any properties of the component.<br/>**opts**: The navigation options.<br/>**done**: The transition complete function. |

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
