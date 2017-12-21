# botnik-txts
> `txts` for use with Botnik

## Overview

Repo to store some `txt` file for using with [Botnik Predictive Writer app](http://botnik.org/apps/writer/). I will probably use this for lyric writing inspiration.

After that I may look at writing some (probably [React](https://reactjs.org/)...) frontend application to create/manage `txt` files in this repository and to decide which files to combine together into a single file for use with Botnik Predictive Writer.

## Scripts
#### Overview
In addition to simple storing `txt` files to use with Botnik Predictive Writer, I've written ~~some~~ (more coming soon!) a [Node.js](https://nodejs.org/) script for processing the `txt` files.

#### Descriptions

##### `concatenateAll`
This script concatenates every `.txt` file (excluding files with the same name as their directories for future reasons...) in the `/txt` folder into a single file: `txt/txt.txt`.

```
npm run concatenateAll
```

Or select the `concatenateAll` task from the task list provided when you run [`ntl`](https://www.npmjs.com/package/ntl).

#### Modules used
* [directory-tree](https://www.npmjs.com/package/directory-tree)
* [merge-files](https://www.npmjs.com/package/merge-files)
