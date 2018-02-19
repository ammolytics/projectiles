[![Build Status](https://travis-ci.org/ammolytics/projectiles.svg?branch=develop)](https://travis-ci.org/ammolytics/projectiles)

# Open Source Projectile Dataset

A community-maintained dataset of ammunition projectile (bullet) information for use by developers, engineers, data scientists, and anyone who might find it useful.

# Status

This project is a **work-in-progress**.

**Contributions are very welcome, and encouraged!**

# Installation

## NodeJS

```
npm install projectiles
```
or
```
yarn add projectiles
```

## Python

**Coming soon**


# Usage

The following code snippets demonstrate the basics of how to use this library and access the dataset. The goal is merely to provide a thin wrapper around the data to make it quickly and easily accessible in each supported language. A very basic and flat format is intentionally provided, since the specific structure and format will depend on the use-case. As a best-practice, developers are encouraged to restructure the data in their own build process to match the needs of their applications (into a hash table, for example).

## NodeJS

```
const projectiles = require('projectiles');

// Get a list of all supported companies.
const companies = projectiles.companies;

// Get a list of all projectiles.
const bullets = projectiles.projectiles;

// Get a list of projectiles for one supported company.
const barnes = projectiles.barnes;
```

## Python

**Coming soon**


# Related projects

You may also be interested in the following projects.

* [cartridges](https://www.npmjs.com/package/cartridges): Open source dataset of all known ammunition cartridges
* [ammunition](https://www.npmjs.com/package/ammunition): Modern cartridges drawn to spec with D3


# References

* [Barnes](http://www.barnesbullets.com/bullets/)
* [Berger](http://www.bergerbullets.com/products/all-bullets/)
* [Hornady](https://www.hornady.com/bullets/)
* [Lapua](http://www.lapua.com/en/reloading-components/bullets.html)
* [Sierra](https://www.sierrabullets.com/resources/ballistic-coefficients/)
* [Speer](https://www.speer-ammo.com/bullets/)
