# Libo Qiao — Academic Website

An English-only responsive academic website based on the November 2026 CV. Built with plain HTML, CSS, and JavaScript; no dependencies or build step.

## Preview locally

Open index.html directly, or run this command in the site folder:

```sh
python3 -m http.server 8765
```

Visit http://localhost:8765. Press Ctrl+C to stop the server.

## Publish with Netlify Drop

1. Sign in to Netlify and open https://app.netlify.com/drop.
2. Unzip the download. Drag the personal-website folder containing index.html, styles.css, and script.js into the drop zone.
3. Open the assigned site URL. A custom domain is optional.
4. For future updates, upload the updated folder to the existing site's Deploys page.

Official documentation: https://docs.netlify.com/deploy/create-deploys/

## Publish with GitHub Pages

1. Create a public repository named YOUR-USERNAME.github.io, replacing YOUR-USERNAME with your exact GitHub username.
2. Upload this folder's contents to the repository root: index.html must be at the top level, not inside another folder. Include the empty .nojekyll file when using Git.
3. Open Settings → Pages. Set Source to Deploy from a branch, select main and /(root), then Save.
4. Wait for the deployment to finish and open https://YOUR-USERNAME.github.io.
5. Future commits to main will trigger updates.

Official documentation: https://docs.github.com/en/pages/quickstart

## Editing

- index.html: biography, research, publications, education, skills, and contact information.
- styles.css: colors, typography, and responsive layouts.
- script.js: publication filters, mobile menu, and email copying.

Update filter counts when adding or removing publications. Publication statuses reflect the supplied November 2026 CV and have not been externally reverified. Unspecified degrees, dates, DOI links, and repository links have not been invented.

Only the work email and city are included. The original CV, phone number, birth date, detailed address, are not bundled. Submitted and in-preparation manuscript titles remain visible as supplied in the CV.

The site uses no tracking, remote fonts, or third-party scripts. The SVG research network is a conceptual illustration, not scientific data. Email copying requires browser clipboard support; a mailto link remains available.

## Academic layout update

The site now opens with a personal biography and affiliation summary, followed by three selected publications, a filterable list of all six works, research interests, education, and skills. The content structure takes inspiration from al-folio and the personal introduction approach of Simplefolio; implementation remains standalone HTML/CSS/JavaScript. No source code from those templates was copied.

## November 2026 CV update

Updated the post-GWAS paper to a bioRxiv preprint with its supplied DOI; the hematopoiesis manuscript to Submitted; and the Moesin paper to Published online November 24, 2026 with its supplied DOI. The filters distinguish three published papers, one preprint, and two ongoing manuscripts. DOI links are transcribed from the CV; no external verification is implied. Research card statuses are updated to match.

## CAPTAIN publication

Added CAPTAIN to published works; it appears last in the full list and is excluded from selected works. Citation metadata and author order verified against https://www.nature.com/articles/s41467-026-72882-y and https://pubmed.ncbi.nlm.nih.gov/42098152/. Libo Qiao is listed as a coauthor, without a co-first-author marker. Current counts: 7 total, 3 selected, 4 published, 1 preprint, 2 ongoing.

## Portrait and color

Primary accent: #32A9FE. The user-provided graduation portrait is included at assets/libo-qiao.jpg and displayed at its original aspect ratio.
