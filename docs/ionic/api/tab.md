---
title: "ion-tab"
---

<head>
  <title>ion-tab: Ionic Framework Application Component</title>
  <meta name="description" content="ion-tab is a child component of tabs. Each ion-tab can contain a top level navigation stack for an application or a single view. Read to learn more." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The tab component is a child component of [tabs](tabs.md). Each tab can contain a top level navigation stack for an app or a single view. An app can have many tabs, all with their own independent navigation.

:::note
Angular, React, and Vue can only use this component when the `ion-tabs` component is configured for [basic usage](./tabs.md#basic-usage). When setting up tabs with routing, the `ion-tab` component cannot be used.

In JavaScript, this component can be used with the `ion-tabs` component configured for either [basic usage](./tabs.md#basic-usage) or [usage with router](./tabs.md#usage-with-router).
:::

See the [tabs documentation](tabs.md) for more details on configuring tabs.

## Properties

### component

|                 |                                                          |
| --------------- | -------------------------------------------------------- |
| **Description** | The component to display inside of the tab.              |
| **Attribute**   | `component`                                              |
| **Type**        | `Function ｜ HTMLElement ｜ null ｜ string ｜ undefined` |
| **Default**     | `undefined`                                              |

### tab

|                 |                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A tab id must be provided for each `ion-tab`. It's used internally to reference the selected tab or by the router to switch between them. |
| **Attribute**   | `tab`                                                                                                                                     |
| **Type**        | `string`                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                               |

## Events

No events available for this component.

## Methods

### setActive

|                 |                                      |
| --------------- | ------------------------------------ |
| **Description** | Set the active component for the tab |
| **Signature**   | `setActive() => Promise<void>`       |

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
