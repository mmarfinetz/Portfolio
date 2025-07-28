# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static resume website project featuring multiple resume formats:
- **index.html**: Windows 97-themed interactive resume with modal project details
- **Mitchell_Marfinetz_Resume_Optimized.md**: Markdown resume optimized for AI Safety research positions
- **PDF files**: Traditional resume formats

## Project Structure

- `index.html` - Main interactive resume webpage
- `Mitchell_Marfinetz_Resume_Optimized.md` - Markdown resume format
- `*.pdf` - Resume PDF files
- Missing files referenced in HTML:
  - `styles.css` - Windows 97 themed CSS styling
  - `script.js` - Modal functionality and interactivity

## Development Commands

This is a static website project with no build system. To work with it:

**Local Development:**
- Open `index.html` directly in a browser, or
- Use a simple HTTP server: `python -m http.server 8000` or `npx serve .`

**Missing Dependencies:**
- CSS file (`styles.css`) needs to be created for Windows 97 styling
- JavaScript file (`script.js`) needs to be created for modal functionality

## Key Features

**Interactive Resume (index.html):**
- Windows 97-style UI with title bar and window chrome
- Modal popups for detailed project information
- Clickable project links that trigger `openProject()` function
- Course projects from MIT, academic work, and GitHub projects
- Skills, experience, and education sections

**Content Management:**
- Project details stored in modal divs within HTML
- Two distinct resume versions for different audiences:
  - General tech/crypto resume (HTML)
  - AI Safety research focused resume (Markdown)

## Architecture Notes

- Pure client-side static website
- No framework dependencies or build process
- Modal system requires JavaScript event handlers
- Responsive design intended but CSS file missing
- All styling and interactivity depends on missing external files

## Common Tasks

**To make the website functional:**
1. Create `styles.css` with Windows 97 theme styling
2. Create `script.js` with modal open/close functions
3. Implement responsive design for mobile devices

**To update resume content:**
- Edit HTML directly for interactive version
- Update markdown file for AI Safety focused version
- Regenerate PDF files as needed

**To add new projects:**
- Add project link in main content area
- Create corresponding modal div with project details
- Ensure `onclick` handlers match modal IDs