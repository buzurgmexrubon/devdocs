---
title: UI Components
hide_table_of_contents: true
---

import DocsCard from '@site/src/components/global/DocsCard';
import DocsCards from '@site/src/components/global/DocsCards';

<head>
  <title>UI Components | User Interface Application Building Components</title>
  <meta
    name="description"
    content="Ionic Framework comes stock with a number of high-level UI components, including cards, lists, and tabs to quickly and easily build your app's user interface."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Ionic apps are made of high-level building blocks called Components, which allow you to quickly construct the UI for your app. Ionic comes stock with a number of components, including cards, lists, and tabs. Once you’re familiar with the basics, refer to the [API Index](api.md) for a complete list of each component and sub-component.

<intro-end />

<DocsCards>
  <DocsCard header="Action Sheet" href="api/action-sheet" img="/ionic/icons/feature-component-actionsheet-icon.png">
    <p>Action Sheets display a set of options with the ability to confirm or cancel an action.</p>
  </DocsCard>

<DocsCard header="Alert" href="api/alert" icon="/ionic/icons/component-alert-icon.png">
  <p>Alerts are a great way to offer the user the ability to choose a specific action or list of actions.</p>
</DocsCard>

<DocsCard header="Badge" href="api/badge" icon="/ionic/icons/component-badge-icon.png">
  <p>Badges are a small component that typically communicate a numerical value to the user.</p>
</DocsCard>

<DocsCard header="Button" href="api/button" icon="/ionic/icons/component-button-icon.png">
  <p>Buttons let your users take action. They're an essential way to interact with and navigate through an app.</p>
</DocsCard>

<DocsCard header="Card" href="api/card" icon="/ionic/icons/component-card-icon.png">
  <!-- prettier-ignore -->
  <p>Cards are a great way to display an important piece of content, and can contain images, buttons, text, and more.</p>
</DocsCard>

<DocsCard header="Checkbox" href="api/checkbox" icon="/ionic/icons/component-checkbox-icon.png">
  <p>Checkboxes can be used to let the user know they need to make a binary decision.</p>
</DocsCard>

<DocsCard header="Chip" href="api/chip" icon="/ionic/icons/component-chip-icon.png">
  <p>Chips are a compact way to display data or actions.</p>
</DocsCard>

<DocsCard header="Content" href="api/content" icon="/ionic/icons/component-content-icon.png">
  <p>Content is the quintessential way to interact with and navigate through an app.</p>
</DocsCard>

<DocsCard header="Date & Time Pickers" href="api/datetime" icon="/ionic/icons/component-datetimepicker-icon.png">
  <p>Date & time pickers are used to present an interface that makes it easy for users to select dates and times.</p>
</DocsCard>

<DocsCard header="Floating Action Button" href="api/fab" icon="/ionic/icons/component-fab-icon.png">
  <p>Floating action buttons are circular buttons that perform a primary action on a screen.</p>
</DocsCard>

<DocsCard header="Icons" href="api/icon" img="/ionic/icons/feature-component-icons-icon.png">
  <p>Beautifully designed icons for use in web, iOS, and Android apps.</p>
</DocsCard>

<DocsCard header="Grid" href="api/grid" icon="/ionic/icons/component-grid-icon.png">
  <p>The grid is a powerful mobile-first system for building custom layouts.</p>
</DocsCard>

<DocsCard header="Infinite Scroll" href="api/infinite-scroll" icon="/ionic/icons/component-infinitescroll-icon.png">
  <p>Infinite scroll allows you to load new data as the user scrolls through your app.</p>
</DocsCard>

<DocsCard header="Input" href="api/input" icon="/ionic/icons/component-input-icon.png">
  <p>Inputs provides a way for users to enter data in your app.</p>
</DocsCard>

<DocsCard header="Item" href="api/item" icon="/ionic/icons/component-item-icon.png">
  <p>Items are an all-purpose UI container that can be used as part of a list.</p>
</DocsCard>

<DocsCard header="List" href="api/list" icon="/ionic/icons/component-lists-icon.png">
  <p>Lists can display rows of information, such as a contact list, playlist, or menu.</p>
</DocsCard>

<DocsCard header="Navigation" href="api/nav" img="/ionic/icons/feature-component-navigation-icon.png">
  <p>Navigation is how users move between different pages in your app.</p>
</DocsCard>

<DocsCard header="Menu" href="api/menu" icon="/ionic/icons/component-menu-icon.png">
  <p>Menus are a common navigation pattern. They can be permanently on-screen, or revealed when needed.</p>
</DocsCard>

<DocsCard header="Modal" href="api/modal" icon="/ionic/icons/component-modal-icon.png">
  <p>Modals slide in and off screen to display a temporary UI and are often used for login or sign-up pages.</p>
</DocsCard>

<DocsCard header="Popover" href="api/popover" icon="/ionic/icons/component-popover-icon.png">
  <p>Popover provides an easy way to present information or options without changing contexts.</p>
</DocsCard>

<DocsCard header="Progress Indicators" href="api/progress-bar" icon="/ionic/icons/component-progress-icon.png">
  <p>Progress indicators visualize the progression of an operation or activity.</p>
</DocsCard>

<DocsCard header="Radio" href="api/radio" icon="/ionic/icons/component-radio-icon.png">
  <p>Radio inputs allow you to present a set of exclusive options.</p>
</DocsCard>

<DocsCard header="Refresher" href="api/refresher" icon="/ionic/icons/component-refresher-icon.png">
  <p>Refresher provides pull-to-refresh functionality on a content component.</p>
</DocsCard>

<DocsCard header="Searchbar" href="api/searchbar" img="/ionic/icons/feature-component-search-icon.png">
  <p>Searchbar is used to search or filter items, usually from a toolbar.</p>
</DocsCard>

<DocsCard header="Reorder" href="api/reorder" icon="/ionic/icons/component-reorder-icon.png">
  <p>Reorder lets users drag and drop to reorder a list of items.</p>
</DocsCard>

<DocsCard header="Routing" href="api/router" icon="/ionic/icons/component-routing-icon.png">
  <p>Routing allows navigation based on the current path.</p>
</DocsCard>

<DocsCard header="Segment" href="api/segment" icon="/ionic/icons/component-segment-icon.png">
  <p>Segments provide a set of exclusive buttons that can be used as a filter or view switcher.</p>
</DocsCard>

<DocsCard header="Select" href="api/select" icon="/ionic/icons/component-select-icon.png">
  <p>Select is similar to the native HTML select, with a few improvements to sorting and selecting.</p>
</DocsCard>

<DocsCard header="Tabs" href="api/tabs" img="/ionic/icons/feature-component-tabs-icon.png">
  <p>Tabs enable tabbed navigation, a standard navigation pattern in modern apps.</p>
</DocsCard>

<DocsCard header="Toast" href="api/toast" icon="/ionic/icons/component-toast-icon.png">
  <p>Toast is used to show a notification over the top of an app's content. It can be temporary or dismissible.</p>
</DocsCard>

<DocsCard header="Toggle" href="api/toggle" icon="/ionic/icons/component-toggle-icon.png">
  <p>Toggles are an input for binary options, often used for options and switches.</p>
</DocsCard>

  <DocsCard header="Toolbar" href="api/toolbar" icon="/ionic/icons/component-toolbar-icon.png">
    <p>Toolbars are used to house information and actions relating to your app.</p>
  </DocsCard>
</DocsCards>
