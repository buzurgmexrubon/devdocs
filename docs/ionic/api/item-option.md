---
title: "ion-item-option"
---

<head>
  <title>ion-item-option: Option Button for Sliding Item in Ionic</title>
  <meta name="description" content="ion-item-option is the option button for an ion-item-sliding and must be placed inside of an <ion-item-options>. Read to learn more about properties." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The item option component is an button for a sliding item. It must be placed inside of [item options](./item-options). The `ionSwipe` event and the `expandable` property can be combined to create a full swipe action for the item.

See the [item sliding](./item-sliding) documentation for more information.

## Properties

### color

|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                |
| **Type**        | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                            |

### disabled

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the item option. |
| **Attribute**   | `disabled`                                                |
| **Type**        | `boolean`                                                 |
| **Default**     | `false`                                                   |

### download

|                 |                                                                                                                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). |
| **Attribute**   | `download`                                                                                                                                                                                                                                                                                |
| **Type**        | `string ｜ undefined`                                                                                                                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                               |

### expandable

|                 |                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the option will expand to take up the available width and cover any other options. |
| **Attribute**   | `expandable`                                                                                  |
| **Type**        | `boolean`                                                                                     |
| **Default**     | `false`                                                                                       |

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

### target

|                 |                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                            |
| **Type**        | `string ｜ undefined`                                                                                                                               |
| **Default**     | `undefined`                                                                                                                                         |

### type

|                 |                                   |
| --------------- | --------------------------------- |
| **Description** | The type of the button.           |
| **Attribute**   | `type`                            |
| **Type**        | `"button" ｜ "reset" ｜ "submit"` |
| **Default**     | `'button'`                        |

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name     | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| `native` | The native HTML button or anchor element that wraps all child elements. |

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
  | `--background` | Background of the item option |
| `--color` | Color of the item option |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--background` | Background of the item option |
| `--color` | Color of the item option |


</TabItem>
</Tabs>

```

## Slots

| Name        | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| ``          | Content is placed between the named slots if provided without a slot.             |
| `bottom`    | Content is placed below the option text.                                          |
| `end`       | Content is placed to the right of the option text in LTR, and to the left in RTL. |
| `icon-only` | Should be used on an icon in an option that has no text.                          |
| `start`     | Content is placed to the left of the option text in LTR, and to the right in RTL. |
| `top`       | Content is placed above the option text.                                          |
