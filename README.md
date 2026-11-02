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

---

## Part 3 - Enhancing Functionality and SEO

Part 3 focused on improving the functionality, usability and search engine optimisation of the FadeX Barbershop website.

### JavaScript Enhancements

JavaScript was implemented to improve user interaction and provide additional functionality.

The following features were added:

- Service search functionality.
- Dynamic filtering of service cards.
- Image gallery with a lightbox.
- Interactive image enlargement.
- Form validation for the enquiry page.
- Form validation for the contact page.
- Feedback messages for invalid form inputs.
- Interactive form responses.

### Form Functionality

The enquiry form allows users to select a service and provide their contact information and preferred appointment date.

JavaScript validation checks that the required information has been entered correctly before displaying a response.

The contact form allows users to submit general messages, feedback or complaints.

After validation, the message is compiled into an email using the mailto function.

### Search Engine Optimisation

SEO improvements were implemented across the website.

These include:

- Page-specific title tags.
- Meta descriptions.
- Relevant keywords.
- Descriptive headings.
- Alternative text for images.
- Internal navigation links.
- Mobile-friendly layouts.
- Descriptive page content.

### Technical SEO

The following technical SEO files were added:

- robots.txt
- sitemap.xml

The robots.txt file provides instructions for search engine crawlers.

The sitemap.xml file lists the website pages to help search engines understand the website structure.

### Testing

The website was tested using a browser.

Testing included:

- Service search.
- Image lightbox.
- Form validation.
- Navigation links.
- Responsive layout.
- Mobile display.
- JavaScript functionality.

### Part 3 Changelog

**JavaScript**
- Added JavaScript functionality to improve website interaction.
- Added service filtering using the search field.
- Added an image lightbox to display gallery images.
- Added validation to the enquiry form.
- Added validation to the contact form.
- Added form response messages.

**SEO**
- Added page-specific titles and meta descriptions.
- Improved image alternative text.
- Added robots.txt.
- Added sitemap.xml.

**Forms**
- Improved the enquiry form with service selection and date input.
- Added contact message type selection.
- Added client-side validation.
- Added an email preparation function for contact messages.

**Documentation**
- Updated the README to include Part 3 information.
- Added a Part 3 changelog.
- Updated the references section.

### References

The Independent Institute of Education (IIE). (2026). *Web Development (Introduction): WEDE5020/p/w Module Manual*. First Edition: 2012. The Independent Institute of Education (Pty) Ltd.

Mozilla Developer Network (MDN) Web Docs. (n.d.). *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript

Mozilla Developer Network (MDN) Web Docs. (n.d.). *HTML Forms*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms

Mozilla Developer Network (MDN) Web Docs. (n.d.). *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation

Mozilla Developer Network (MDN) Web Docs. (n.d.). *SEO basics*. Available at: https://developer.mozilla.org/en-US/docs/Glossary/SEO

Google Search Central. (n.d.). *Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
