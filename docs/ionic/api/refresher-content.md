---
title: "ion-refresher-content"
---

import EncapsulationPill from '@site/src/components/page/api/EncapsulationPill';

The refresher content contains the text, icon and spinner to display during a pull-to-refresh. Ionic displays a pulling icon and refreshing spinner based on the platform. However, the default icon, spinner, and text can be customized based on the state of the refresher.

For usage examples, see the [Refresher](/docs/api/refresher) documentation.

## Properties

### pullingIcon

|                 |                                                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A static icon or a spinner to display when you begin to pull down. A spinner name can be provided to gradually show tick marks when pulling down on iOS devices. |
| **Attribute**   | `pulling-icon`                                                                                                                                                   |
| **Type**        | `null ｜ string ｜ undefined`                                                                                                                                    |
| **Default**     | `undefined`                                                                                                                                                      |

### pullingText

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The text you want to display when you begin to pull down. `pullingText` can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example `<Ionic>` would become `&lt;Ionic&gt;`<br /><br />For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)<br /><br />Content is parsed as plaintext by default. `innerHTMLTemplatesEnabled` must be set to `true` in the Ionic config before custom HTML can be used. |
| **Attribute**   | `pulling-text`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Type**        | `IonicSafeString ｜ string ｜ undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### refreshingSpinner

|                 |                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | An animated SVG spinner that shows when refreshing begins                                                                                               |
| **Attribute**   | `refreshing-spinner`                                                                                                                                    |
| **Type**        | `"bubbles" ｜ "circles" ｜ "circular" ｜ "crescent" ｜ "dots" ｜ "lines" ｜ "lines-sharp" ｜ "lines-sharp-small" ｜ "lines-small" ｜ null ｜ undefined` |
| **Default**     | `undefined`                                                                                                                                             |

### refreshingText

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The text you want to display when performing a refresh. `refreshingText` can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example `<Ionic>` would become `&lt;Ionic&gt;`<br /><br />For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)<br /><br />Content is parsed as plaintext by default. `innerHTMLTemplatesEnabled` must be set to `true` in the Ionic config before custom HTML can be used. |
| **Attribute**   | `refreshing-text`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Type**        | `IonicSafeString ｜ string ｜ undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.
