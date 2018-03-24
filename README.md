# GDevelop website

This is the repository for the new website for **[GDevelop](https://gdevelop-app.com)**, the open source game creator requiring no programming skills.

Any contribution, design or wording enhancements is welcome! Open issues if you having anything to say or, even better, submit a pull request. You can also discuss with the community on **[GDevelop forums](http://forum.compilgames.net)**.

If you want to **translate the website to your language**, just go on [the Crowdin translation project](https://crowdin.com/project/gdevelop-website)!

## Development

Ensure you have [Node.js](https://nodejs.org) installed. The website is based on [Gatsby.js](https://www.gatsbyjs.org/).

Translations are stored into *i18n* directory, in plain JSON files.

### Installation

Clone the repository and install dependencies:

    npm install # or yarn install

### Workflow

For development with changes watch and hot reloading, run:

    npm run develop

### Updating translations

 * Update *i18n/catalog.json* by running `npm run extract-translations`.
 * The *catalog.json* should then be uploaded to the [the Crowdin translation project](https://crowdin.com/project/gdevelop-website) by the project administrator.
 * To update the translations, build the project on the Crowdin page, download the archive and replace *.json* files in *locale* directory by the ones contained in the archive.

### Deployment

Deployment is done by Netlify (running `gulp` and deploying `public` folder) after any commit on `master`.

## License

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

GDevelop is under the MIT license: check out the [GDevelop repository](https://github.com/4ian/GD) for more information on how to contribute to the software.
