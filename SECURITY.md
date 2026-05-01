# Security Policy

## Nature of the Project

Orbit Background Kit is a **pure frontend** component. It:

- Runs entirely in the browser
- Makes **zero** network requests
- Collects **zero** data
- Uses **no** external resources (no fonts, images, CDNs)
- Sets **no** cookies
- Has **no** backend server

The entire component is a single JavaScript file (`dist/orbit-bg.iife.js`) that registers a Web Component using the browser's native Custom Elements API.

## Scope

Because this project is purely static frontend code with no server, API, or data handling, traditional server-side vulnerabilities (SQL injection, XSS via server, SSRF, etc.) do not apply.

### What could go wrong

- **Supply chain**: If someone compromises the GitHub repo or jsDelivr cache, they could inject malicious code. Mitigation: pin versions with `@v0.1.0` instead of `@latest`.
- **DOM injection**: The component uses Shadow DOM for style isolation. It does not use `innerHTML` with user-provided content (attribute values are set via `setAttribute`, not injected as HTML).

## Reporting a Vulnerability

If you find a security issue:

1. **Do NOT open a public issue**
2. Email: [your-email@example.com] (replace with your contact)
3. Or DM via GitHub

We'll respond within 72 hours.

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.2.x   | ✅ |
| 0.1.x   | ✅ |
| < 0.1   | ❌ |
