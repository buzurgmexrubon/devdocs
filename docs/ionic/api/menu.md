---
title: "ion-menu"
---

<head>
  <title>ion-menu: API Framework Docs for Types of Menu Components</title>
  <meta name="description" content="ion-menu components are navigation drawers that slide in from the side of the current view. Read our framework docs for the available menu types on Ionic API." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The menu component is a navigation drawer that slides in from the side of the current view. By default, it uses the start side, making it slide in from the left for LTR and right for RTL, but the side can be overridden. The menu will be displayed differently based on the mode, however the display type can be changed to any of the available menu types.

The menu element should be a sibling to the root content element. There can be any number of menus attached to the content. These can be controlled from the templates, or programmatically using the `MenuController`.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/menu/basic/index.md';

<Basic />

## Menu Toggle

The [menu toggle](./menu-toggle) component can be used to create custom button that can open or close the menu.

import MenuToggle from '@site/static/ionic/usage/v8/menu/toggle/index.md';

<MenuToggle />

## Menu Types

The `type` property can be used to customize how menus display in your application.

import MenuType from '@site/static/ionic/usage/v8/menu/type/index.md';

<MenuType />

## Menu Sides

Menus are displayed on the `"start"` side by default. In apps that use left-to-right direction, this is the left side, and in right-to-left apps, this will be the right side. Menus can also be set to display on the `"end"` side, which is the opposite of `"start"`.

If menus on both sides are needed in an app, the menu can be opened by passing the `side` value to the `open` method on `MenuController`. If a side is not provided, the menu on the `"start"` side will be opened. See the [multiple menus](#multiple-menus) section below for an example using `MenuController`.

import Sides from '@site/static/ionic/usage/v8/menu/sides/index.md';

<Sides />

## Multiple Menus

When multiple menus exist on the same side, we need refer to them by ID instead of side. Otherwise, the wrong menu may be activated.

import Multiple from '@site/static/ionic/usage/v8/menu/multiple/index.md';

<Multiple />

## Theming

### CSS Shadow Parts

import Theming from '@site/static/ionic/usage/v8/menu/theming/index.md';

<Theming />

## Interfaces

### MenuCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface MenuCustomEvent<T = any> extends CustomEvent {
  detail: T
  target: HTMLIonMenuElement
}
```

## Properties

### contentId

|                 |                                                                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The `id` of the main content. When using a router this is typically `ion-router-outlet`. When not using a router, this is typically your main view's `ion-content`. This is not the id of the `ion-content` inside of your `ion-menu`. |
| **Attribute**   | `content-id`                                                                                                                                                                                                                           |
| **Type**        | `string ｜ undefined`                                                                                                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                                                                                                            |

### disabled

|                 |                                  |
| --------------- | -------------------------------- |
| **Description** | If `true`, the menu is disabled. |
| **Attribute**   | `disabled`                       |
| **Type**        | `boolean`                        |
| **Default**     | `false`                          |

### maxEdgeStart

|                 |                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Description** | The edge threshold for dragging the menu open. If a drag/swipe happens over this value, the menu is not triggered. |
| **Attribute**   | `max-edge-start`                                                                                                   |
| **Type**        | `number`                                                                                                           |
| **Default**     | `50`                                                                                                               |

### menuId

|                 |                       |
| --------------- | --------------------- |
| **Description** | An id for the menu.   |
| **Attribute**   | `menu-id`             |
| **Type**        | `string ｜ undefined` |
| **Default**     | `undefined`           |

### side

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | Which side of the view the menu should be placed. |
| **Attribute**   | `side`                                            |
| **Type**        | `"end" ｜ "start"`                                |
| **Default**     | `'start'`                                         |

### swipeGesture

|                 |                                         |
| --------------- | --------------------------------------- |
| **Description** | If `true`, swiping the menu is enabled. |
| **Attribute**   | `swipe-gesture`                         |
| **Type**        | `boolean`                               |
| **Default**     | `true`                                  |

### type

|                 |                                                                                     |
| --------------- | ----------------------------------------------------------------------------------- |
| **Description** | The display type of the menu. Available options: `"overlay"`, `"reveal"`, `"push"`. |
| **Attribute**   | `type`                                                                              |
| **Type**        | `"overlay" ｜ "push" ｜ "reveal" ｜ undefined`                                      |
| **Default**     | `undefined`                                                                         |

## Events

| Name           | Description                                  | Bubbles |
| -------------- | -------------------------------------------- | ------- |
| `ionDidClose`  | Emitted when the menu is closed.             | `true`  |
| `ionDidOpen`   | Emitted when the menu is open.               | `true`  |
| `ionWillClose` | Emitted when the menu is about to be closed. | `true`  |
| `ionWillOpen`  | Emitted when the menu is about to be opened. | `true`  |

## Methods

### close

|                 |                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------- |
| **Description** | Closes the menu. If the menu is already closed or it can't be closed, it returns `false`. |
| **Signature**   | `close(animated?: boolean, role?: string) => Promise<boolean>`                            |

### isActive

|                 |                                                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Returns `true` is the menu is active.<br /><br />A menu is active when it can be opened or closed, meaning it's enabled and it's not part of a `ion-split-pane`. |
| **Signature**   | `isActive() => Promise<boolean>`                                                                                                                                 |

### isOpen

|                 |                                     |
| --------------- | ----------------------------------- |
| **Description** | Returns `true` is the menu is open. |
| **Signature**   | `isOpen() => Promise<boolean>`      |

### open

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | Opens the menu. If the menu is already open or it can't be opened, it returns `false`. |
| **Signature**   | `open(animated?: boolean) => Promise<boolean>`                                         |

### setOpen

|                 |                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------- |
| **Description** | Opens or closes the button. If the operation can't be completed successfully, it returns `false`. |
| **Signature**   | `setOpen(shouldOpen: boolean, animated?: boolean, role?: string) => Promise<boolean>`             |

### toggle

|                 |                                                                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it. If the operation can't be completed successfully, it returns `false`. |
| **Signature**   | `toggle(animated?: boolean) => Promise<boolean>`                                                                                                                             |

## CSS Shadow Parts

| Name        | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| `backdrop`  | The backdrop that appears over the main content when the menu is open. |
| `container` | The container for the menu content.                                    |

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
  | `--background` | Background of the menu |
| `--height` | Height of the menu |
| `--max-height` | Maximum height of the menu |
| `--max-width` | Maximum width of the menu |
| `--min-height` | Minimum height of the menu |
| `--min-width` | Minimum width of the menu |
| `--width` | Width of the menu |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the menu |
| `--height` | Height of the menu |
| `--max-height` | Maximum height of the menu |
| `--max-width` | Maximum width of the menu |
| `--min-height` | Minimum height of the menu |
| `--min-width` | Minimum width of the menu |
| `--width` | Width of the menu |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
