# About

This website was built with the [Next.js](https://nextjs.org/) React Framwork and [Bulma](https://bulma.io/) CSS Framework.

## How to Run Website Locally

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## About Accessibility
I stove to meet as many <a href="https://www.w3.org/TR/WCAG21/" target="_blank">WCAG 2.1 guidelines</a> as I am able, following the checklist kindly available from
[WebAIM](https://webaim.org/standards/wcag/checklist). Should you notice anything that could be improved, do open a Git Issue.

### Alternate Text
I've added alternate text to images (`alt=""` when they were only cosmetic) and `aria-label`
tags to hyperlink elements.

## Keyboard Focus
The `download` button has a custom CSS style, so it did not look different/like it was in
focus. I added a custom `:hover` CSS class to fix this.

### Colour Contrast
Colours were picked and used in combination to ensure that they achieve WCAG AAA level.
Colours that did not meet the minimum contrast level are not used together to colour the
same type of element (e.g. `$grey-darker` and `$purple-darker` are not both used to style
text in the same content block).

|                |      $purple      |       $purple-darker     |      $grey-lighter      |      $grey-darker      |
|                |     (#D7D2F8)     |         (#331467)        |        (#F0F0F0)        |        (#393939)       |
|----------------|:-----------------:|:------------------------:|:-----------------------:|:----------------------:|
| $purple        |         -         |          10.06:1         |          <span style="color:red">1.27:1</span>         |         7.95:1         |
| $purple-darker |      10.06:1      |             -            |         12.82:1         |         <span style="color:red">1.26:1</span>         |
| $grey-lighter  |       <span style="color:red">1.27:1</span>      |          12.82:1         |            -            |         10.13:1        |
| $grey-darker   |       7.95:1      |          <span style="color:red">1.26:1</span>          |         10.13:1         |            -           |
