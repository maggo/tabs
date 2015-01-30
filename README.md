# Tabs

Super easy and simple tab JS. It's even responsive! (If you want to)

## Usage

1. ```bower install tabsjs``` or include tabs.js directly
2. Call .tabs(); on your tab container
3. ???
4. Profit!

## Markup

```html
<div class="tab-container">
  <ul class="tabs">
    <li><a class="tab active" href="#tab-1">Tab 1</a>
    <li><a class="tab" href="#tab-2">Tab 2</a>
    <!-- closing li ommitted for responsiveness -->
  </ul>

  <div class="tab-contents">
    <div class="tab-content active" id="tab-1">
      Tab 1 content
    </div>
    <div class="tab-content" id="tab-2">
      Tab 2 content
    </div>
  </div>
</div>
```

```css
.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}
```

## Dependencies

just jQuery for now

## Customization

c'mon it's just around 20 lines of code. You can change the classes or extend it yourself!

## Contributing

Want to optimize (not extend plz) tabs.js? Send a pull request!

## How do I responsive?!

```css
.tabs {
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: scroll; /* nice! */
}
```
