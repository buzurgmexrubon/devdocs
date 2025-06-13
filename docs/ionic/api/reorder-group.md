---
title: "ion-reorder-group"
---

<head>
  <title>ion-reorder-group: Wrapper Component for Reorder Items</title>
  <meta name="description" content="ion-reorder-group is a wrapper component for items using the ion-reorder component on Ionic apps. Read to learn more about ion-reorder-group usage." />
</head>

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

The reorder group is a container for items using the [reorder](./reorder) component. When the user drags an item and drops it in a new position, the `ionItemReorder` event is dispatched. A handler for this event should be implemented that calls the `complete` method.

The `detail` property of the `ionItemReorder` event includes all of the relevant information about the reorder operation, including the `from` and `to` indexes. In the context of reordering, an item moves `from` an index `to` a new index. For example usage of the reorder group, see the [reorder](./reorder) documentation.

## Interfaces

### ItemReorderEventDetail

```typescript
interface ItemReorderEventDetail {
  from: number
  to: number
  complete: (data?: boolean | any[]) => any
}
```

### ItemReorderCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ItemReorderCustomEvent extends CustomEvent {
  detail: ItemReorderEventDetail
  target: HTMLIonReorderGroupElement
}
```

## Properties

### disabled

|                 |                                        |
| --------------- | -------------------------------------- |
| **Description** | If `true`, the reorder will be hidden. |
| **Attribute**   | `disabled`                             |
| **Type**        | `boolean`                              |
| **Default**     | `true`                                 |

## Events

| Name             | Description                                                                                                                                                                                           | Bubbles |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ionItemReorder` | Event that needs to be listened to in order to complete the reorder action. Once the event has been emitted, the `complete()` method then needs to be called in order to finalize the reorder action. | `true`  |

## Methods

### complete

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Completes the reorder operation. Must be called by the `ionItemReorder` event.<br /><br />If a list of items is passed, the list will be reordered and returned in the proper order.<br /><br />If no parameters are passed or if `true` is passed in, the reorder will complete and the item will remain in the position it was dragged to. If `false` is passed, the reorder will complete and the item will bounce back to its original position. |
| **Signature**   | `complete(listOrReorder?: boolean ｜ any[]) => Promise<any>`                                                                                                                                                                                                                                                                                                                                                                                         |
| **Parameters**  | **listOrReorder**: A list of items to be sorted and returned in the new order or a boolean of whether or not the reorder should reposition the item.                                                                                                                                                                                                                                                                                                 |

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
