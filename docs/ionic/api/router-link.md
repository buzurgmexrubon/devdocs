---
title: "ion-router-link"
---

<head>
  <title>ion-router-link: Navigate To a Specified Link</title>
  <meta name="description" content="Use the ion-router-link component to navigate to a specified link. The router link can accept an href for location and a direction for the transition animation." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The router link component is used for navigating to a specified link. Similar to the browser's anchor tag, it can accept a href for the location, and a direction for the transition animation.

:::note
Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use an `<a>` and `routerLink` with the Angular router.
:::

See the [Router](./router) documentation for more information.

## Properties

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### href

|                 |                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Description** | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered. |
| **Attribute**   | `href`                                                                                                                  |
| **Type**        | `string ｜ undefined`                                                                                                   |
| **Default**     | `undefined`                                                                                                             |

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

### target

|                 |                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                            |
| **Type**        | `string ｜ undefined`                                                                                                                               |
| **Default**     | `undefined`                                                                                                                                         |

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

    | Name | Description |

| --- | --- |
| `--background` | Background of the router link |
| `--color` | Text color of the router link |

## Slots

No slots available for this component.
