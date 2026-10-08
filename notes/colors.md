# colors
planned colors for the application

```css

:root {
  /* Warm Subtle Brown - Light Mode */
  --bg-primary: #FAF8F5;          /* Warm cream parchment */
  --bg-secondary: #F2ECE4;        /* Soft sand container fill */
  --text-primary: #2B231F;        /* Deep espresso black */
  --text-secondary: #8C7B70;      /* Muted taupe/umber for metadata */
  --border-subtle: #E6DDD4;       /* Subtle warm line divider */
  --accent-action: #3D312A;       /* Dark roasted walnut button background */
  --accent-action-text: #FAF8F5;  /* Light text on primary buttons */
  --accent-active: #6E584A;       /* Warm terra-cotta taupe for active/hover states */
}

/* Dark Mode Overrides */
@media (prefers-color-scheme: dark) {
  :root {
    /* Warm Subtle Brown - Dark Mode */
    --bg-primary: #181513;        /* Deep roasted coffee dark background */
    --bg-secondary: #221D1A;      /* Subtle dark cocoa surface */
    --text-primary: #EBE4DD;      /* Soft warm pearl text */
    --text-secondary: #9E8E83;    /* Warm gray-brown metadata */
    --border-subtle: #2D2622;     /* Subtle dark divider */
    --accent-action: #EBE4DD;     /* High contrast light action button */
    --accent-action-text: #181513;/* Dark button text on light */
    --accent-active: #B89F8E;     /* Soft warm highlight */
  }
}
```
