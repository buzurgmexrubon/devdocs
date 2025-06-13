---
title: "ion-accordion-group"
---

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Accordion group is a container for accordion instances. It manages the state of the accordions and provides keyboard navigation.

See the [Accordion](./accordion) documentation for more information.

## Interfaces

### AccordionGroupChangeEventDetail

```typescript
interface AccordionGroupChangeEventDetail<T = any> {
  value: T
}
```

### AccordionGroupCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface AccordionGroupCustomEvent<T = any> extends CustomEvent {
  detail: AccordionGroupChangeEventDetail<T>
  target: HTMLIonAccordionGroupElement
}
```

## Properties

### animated

|                 |                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, all accordions inside of the accordion group will animate when expanding or collapsing. |
| **Attribute**   | `animated`                                                                                         |
| **Type**        | `boolean`                                                                                          |
| **Default**     | `true`                                                                                             |

### disabled

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | If `true`, the accordion group cannot be interacted with. |
| **Attribute**   | `disabled`                                                |
| **Type**        | `boolean`                                                 |
| **Default**     | `false`                                                   |

### expand

|                 |                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Describes the expansion behavior for each accordion. Possible values are `"compact"` and `"inset"`. Defaults to `"compact"`. |
| **Attribute**   | `expand`                                                                                                                     |
| **Type**        | `"compact" ｜ "inset"`                                                                                                       |
| **Default**     | `'compact'`                                                                                                                  |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" ｜ "md"`                                   |
| **Default**     | `undefined`                                       |

### multiple

|                 |                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------ |
| **Description** | If `true`, the accordion group can have multiple accordion components expanded at the same time. |
| **Attribute**   | `multiple`                                                                                       |
| **Type**        | `boolean ｜ undefined`                                                                           |
| **Default**     | `undefined`                                                                                      |

### readonly

|                 |                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------- |
| **Description** | If `true`, the accordion group cannot be interacted with, but does not alter the opacity. |
| **Attribute**   | `readonly`                                                                                |
| **Type**        | `boolean`                                                                                 |
| **Default**     | `false`                                                                                   |

### value

|                 |                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The value of the accordion group. This controls which accordions are expanded. This should be an array of strings only when `multiple="true"` |
| **Attribute**   | `value`                                                                                                                                       |
| **Type**        | `null ｜ string ｜ string[] ｜ undefined`                                                                                                     |
| **Default**     | `undefined`                                                                                                                                   |

## Events

| Name        | Description                                                                                                                                                                       | Bubbles |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ionChange` | Emitted when the value property has changed as a result of a user action such as a click.<br /><br />This event will not emit when programmatically setting the `value` property. | `true`  |

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
