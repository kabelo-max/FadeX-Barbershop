# FadeX Barbershop

## Part 2 - CSS Styling and Responsive Design

FadeX Barbershop is a small business website created to provide information about the barbershop, its services, contact details and customer enquiries.

Part 2 focuses on improving the visual appearance of the website using CSS and making the website responsive across desktop, tablet and mobile screen sizes.

---

## Website Pages

The website consists of the following pages:

- Home
- About Us
- Services
- Enquiry
- Contact

All pages use the same external CSS stylesheet to maintain a consistent design.

---

## CSS Styling

An external stylesheet called `style.css` is located in the `css` folder.

The stylesheet includes:

- CSS reset
- Font family and typography
- Font sizes and line spacing
- Colours and backgrounds
- Margins and padding
- Borders and rounded corners
- Box shadows
- Button styling
- Navigation styling
- Hover effects
- Focus effects
- Form styling

The website uses a black, white and gold colour scheme to create a professional barbershop appearance.

---

## Layout

Flexbox is used for the main navigation and hero section.

CSS Grid is used on the Services page to arrange the service cards.

The service grid uses different column layouts depending on the screen size:

- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

This allows the content to adjust according to the available screen space.

---

## Responsive Design

Responsive CSS media queries were added to ensure that the website works on different screen sizes.

The website was tested using browser Developer Tools at:

- Desktop: 1366 × 768
- Tablet: 768 × 1024
- Mobile: 390 × 844

During testing, the navigation, hero section, service cards, images and forms were checked to ensure that the content remained readable and usable.

---

## Responsive Images

Responsive image techniques were added using the `srcset` and `sizes` attributes.

These attributes allow the browser to select an appropriate image resource depending on the available screen size.

Images also use alternative text through the `alt` attribute to improve accessibility.

---

## Browser Developer Tools

Browser Developer Tools were used to test the website at different screen sizes.

The responsive device toolbar was used to simulate desktop, tablet and mobile devices.

Testing was performed to identify layout issues such as:

- Content overflowing the screen
- Navigation problems
- Images extending outside their containers
- Incorrect spacing
- Text readability

The CSS was adjusted where necessary after testing.

---

## Part 1 Feedback and Changes

The website was reviewed and improvements were made during Part 2.

The following changes were implemented:

- Improved the website's visual styling.
- Added a consistent colour scheme.
- Improved typography and spacing.
- Added responsive layouts.
- Added CSS Grid for service cards.
- Added Flexbox for navigation and hero layout.
- Added hover effects to navigation links and buttons.
- Added focus styling for accessibility.
- Added responsive image styling.
- Tested the website on desktop, tablet and mobile screen sizes.

---

## Changelog

### Part 2

**CSS Styling**
- Created and used an external `style.css` stylesheet.
- Added a CSS reset.
- Added consistent typography and spacing.
- Added background colours, borders and box shadows.
- Added button and navigation hover effects.

**Layout**
- Added Flexbox to the navigation and hero section.
- Added CSS Grid to the services section.
- Created responsive grid layouts for desktop, tablet and mobile.

**Responsive Design**
- Added media queries for different screen sizes.
- Adjusted navigation for smaller screens.
- Adjusted hero content for mobile devices.
- Adjusted service cards from multiple columns to a single column on mobile.
- Added responsive image rules.

**Testing**
- Tested the website using browser Developer Tools.
- Tested desktop, tablet and mobile screen sizes.
- Checked navigation, images, forms and page layouts.

---

## Project Structure

```text
FadeX-Barbershop
│
├── css
│   └── style.css
│
├── images
│   ├── logo.jpeg
│   └── image 1.jpeg
│
├── screenshots
│   ├── desktop.png
│   ├── tablet.png
│   └── mobile.png
│
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
└── README.md

<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

```
<url>
    <loc>https://kabelo-max.github.io/FadeX-Barbershop/</loc>
</url>

<url>
    <loc>https://kabelo-max.github.io/FadeX-Barbershop/about.html</loc>
</url>

<url>
    <loc>https://kabelo-max.github.io/FadeX-Barbershop/services.html</loc>
</url>

<url>
    <loc>https://kabelo-max.github.io/FadeX-Barbershop/enquiry.html</loc>
</url>

<url>
    <loc>https://kabelo-max.github.io/FadeX-Barbershop/contact.html</loc>
</url>
```

</urlset>

W3C. (n.d.). Web Content Accessibility Guidelines (WCAG). Available at: https://www.w3.org/WAI/standards-guidelines/wcag/
