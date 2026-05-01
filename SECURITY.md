# Security Policy

Orbit Background Kit is a static frontend library. It has no backend, no database, no analytics, no tracking script, no upload feature, and no intentional network requests.

## Supported Version

| Version | Supported |
| --- | --- |
| `0.1.0` | Yes |

## Reporting a Vulnerability

Please report security issues through GitHub Issues:

https://github.com/w0nderful666/orbit-bg-kit/issues

Include:

- A clear description of the issue.
- A minimal HTML reproduction if possible.
- Browser and operating system information.

## Expected Security Surface

- The component renders inside Shadow DOM.
- User-provided attributes are treated as plain text or validated values.
- No HTML from attributes is injected into the page.
- No data is sent to any server by the component.

If you self-host the script, your own hosting and CDN configuration remain your responsibility.
