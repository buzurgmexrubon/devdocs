---
title: "ion-breadcrumb"
---

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A Breadcrumb is a single navigation item that is a child of the Breadcrumbs component. A breadcrumb can link elsewhere in an app or it can be plain text. Each breadcrumb has a separator between it and the next breadcrumb and can optionally contain an icon.

See the [Breadcrumbs](./breadcrumbs) documentation for more information.

## Interfaces

### BreadcrumbCollapsedClickEventDetail

```typescript
interface BreadcrumbCollapsedClickEventDetail {
  collapsedBreadcrumbs?: HTMLIonBreadcrumbElement[]
}
```

### BreadcrumbCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing .

```typescript
interface BreadcrumbCustomEvent extends CustomEvent {
  detail: BreadcrumbCollapsedClickEventDetail
  target: HTMLIonBreadcrumbElement
}
```

## Properties

### active

|                 |                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the breadcrumb will take on a different look to show that it is the currently active breadcrumb. Defaults to `true` for the last breadcrumb if it is not set on any. |
| **Attribute**   | `active`                                                                                                                                                                        |
| **Type**        | `boolean`                                                                                                                                                                       |
| **Default**     | `false`                                                                                                                                                                         |

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### disabled

|                 |                                                          |
| --------------- | -------------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the breadcrumb. |
| **Attribute**   | `disabled`                                               |
| **Type**        | `boolean`                                                |
| **Default**     | `false`                                                  |

### download

|                 |                                                                                                                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). |
| **Attribute**   | `download`                                                                                                                                                                                                                                                                                |
| **Type**        | `string ｜ undefined`                                                                                                                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                               |

### href

|                 |                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Description** | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered. |
| **Attribute**   | `href`                                                                                                                  |
| **Type**        | `string ｜ undefined`                                                                                                   |
| **Default**     | `undefined`                                                                                                             |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### rel

|                 |                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types). |
| **Attribute**   | `rel`                                                                                                                                                                                  |
| **Type**        | `string ｜ undefined`                                                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                                                            |

### routerAnimation

|                 |                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Description** | When using a router, it specifies the transition animation when navigating to another page using `href`. |
| **Attribute**   | `router-animation`                                                                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) ｜ undefined`                                                  |
| **Default**     | `undefined`                                                                                              |

### routerDirection

|                 |                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Description** | When using a router, it specifies the transition direction when navigating to another page using `href`. |
| **Attribute**   | `router-direction`                                                                                       |
| **Type**        | `"back" ｜ "forward" ｜ "root"`                                                                          |
| **Default**     | `'forward'`                                                                                              |

### separator

|                 |                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Description** | If true, show a separator between this breadcrumb and the next. Defaults to `true` for all breadcrumbs except the last. |
| **Attribute**   | `separator`                                                                                                             |
| **Type**        | `boolean ｜ undefined`                                                                                                  |
| **Default**     | `undefined`                                                                                                             |

### target

|                 |                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                            |
| **Type**        | `string ｜ undefined`                                                                                                                               |
| **Default**     | `undefined`                                                                                                                                         |

## Events

| Name       | Description                              | Bubbles |
| ---------- | ---------------------------------------- | ------- |
| `ionBlur`  | Emitted when the breadcrumb loses focus. | `true`  |
| `ionFocus` | Emitted when the breadcrumb has focus.   | `true`  |

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name                  | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| `collapsed-indicator` | The indicator element that shows the breadcrumbs are collapsed.      |
| `native`              | The native HTML anchor or div element that wraps all child elements. |
| `separator`           | The separator element between each breadcrumb.                       |

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
  | `--background-focused` | Background color of the breadcrumb when focused |
| `--color` | Text color of the breadcrumb |
| `--color-active` | Text color of the active breadcrumb |
| `--color-focused` | Text color of the breadcrumb when focused |
| `--color-hover` | Text color of the breadcrumb on hover |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background-focused` | Background color of the breadcrumb when focused |
| `--color` | Text color of the breadcrumb |
| `--color-active` | Text color of the active breadcrumb |
| `--color-focused` | Text color of the breadcrumb when focused |
| `--color-hover` | Text color of the breadcrumb on hover |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
