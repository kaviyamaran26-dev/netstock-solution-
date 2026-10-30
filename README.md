# Netstock Solutions frontend

This is a dependency-free, static HTML/CSS/JavaScript recreation. It does not include a backend or a form submission service.

## Run locally

From this folder, run in PowerShell:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\serve.ps1
```

Then open <http://localhost:8000/>. Press Ctrl+C in that PowerShell window to stop the preview server.

## Pages reviewed

- `/` — homepage sections in order: Hero; About us: We Help By Expert Retail Stock Audit Solutions; Our Story (legacy duplicate retained from the source markup); Audit Process; Our Goals; Expert Retail Stock Audit Solutions & Key Services; Why Choose Netstock Solutions?; Begin Your Audit Journey; footer.
- `/about-us/` — Our Vission, Extraordinary Experience, Our Core Values, and Begin Your Audit Journey.
- `/services/` — Our Services, Audit Process, expertise details, Benefits of Stock Audit, and enrollment callout.
- `/contact-us/` — contact information and the message form.

## Source review notes

The homepage was reviewed from top to bottom. Its section inventory records the observed order and content:

1. **Hero** — “Welcome to Netstock Solutions”; “Expert Retail Stock Audit Solutions”; “Learn More” links to `/about-us/#about-us`; background uses `hero image.jpg`.
2. **About us** — “We Help By Expert Retail Stock Audit Solutions”; three paragraphs; four outcome bullets; “Know More” links to `/about-us/#about-us`; source image alt is “13” and the supplied `about us image.jpg` is used in this section.
3. **Our Story** — Mr. Shammun’s background, retail stock auditing experience, expertise/innovation/reliability lists, and the original concluding paragraph. The source also contains an Our Story variant hidden at all device breakpoints; the existing recreation is retained rather than deleting it.
4. **Audit Process** — original stock audit overview; “Know More” links to `/services/#audit_services`; four process cards: Planning and preparation, Data analysis and discrepancy identification, Physical inventory counting, and Recommendations for improvement.
5. **Our Goals** — six original goal cards: Mission Statement, Delivering Exceptional Service, Empowering Retailers, Driving Business Success, Commitment to Excellence, and Empowering Retailers.
6. **Expert Retail Stock Audit Solutions & Key Services** — original five service entries and “Know More” link to `/services/#key_service`; uses the supplied `scanning image.jpg`.
7. **Why Choose Netstock Solutions?** — intro and six original feature cards: Unmatched Expertise, Tailored Solutions, Cost-Effective Solutions, Maximize Efficiency, Minimize Risk, and Enhance Decision-Making, with their original supporting lists.
8. **Begin Your Audit Journey** — original enrollment text and “Get Quote” link to `/contact-us/#contact_us`.
9. **Footer** — Quick Link, Our Capability, Contact Info, social links, and copyright.

The Audit Process cards and Our Goals cards use only the copy observed in the live homepage. Their visual card treatment does not add claims or change the content.

- The About Us navigation includes a `#Mission` destination, but the live page content did not expose a matching section. The navigation item is retained without inventing mission copy.
- The live Services page references `1-2.jpg` and `6.jpg`; these files were not present in the supplied project folder, so they were not replaced with unrelated images.
- The source social links point to `#`; those placeholder destinations are preserved.
- The source header's “GET A QUOTE” link had an empty URL. It is connected here to the Contact Us page, consistent with the site's other quote links.
- The contact form validates in the browser, but does not send data. After submission, it explicitly directs visitors to the published phone number and email address.
