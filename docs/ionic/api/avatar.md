---
title: "ion-avatar"
---

<head>
  <title>ion-avatar: Circular Application Avatar Icon Component</title>
  <meta name="description" content="Ion-avatars are circular application components that wrap an image or icon. They can represent a person or an object, by themselves or inside of any element." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Avatars are circular components that usually wrap an image or icon. They can be used to represent a person or an object.

Avatars can be used by themselves or inside of any element. If placed inside of an `ion-chip` or `ion-item`, the avatar will resize to fit the parent component. To position an avatar on the left or right side of an item, set the slot to `start` or `end`, respectively.

## Basic Usage

import Basic from '@site/static/ionic/usage/v8/avatar/basic/index.md';

<Basic />

## Chip Avatar

import Chip from '@site/static/ionic/usage/v8/avatar/chip/index.md';

<Chip />

## Item Avatar

import Item from '@site/static/ionic/usage/v8/avatar/item/index.md';

<Item />

## Theming

### CSS Custom Properties

import CSSProps from '@site/static/ionic/usage/v8/avatar/theming/css-properties/index.md';

<CSSProps />

## Properties

No properties available for this component.

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

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
  | `--border-radius` | Border radius of the avatar and inner image |


</TabItem>

<TabItem value="md">


    | Name | Description |
  | --- | --- |
  | `--border-radius` | Border radius of the avatar and inner image |


</TabItem>
</Tabs>

```

## Slots

No slots available for this component.
