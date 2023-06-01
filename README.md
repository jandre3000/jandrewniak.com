# Jan Drewniak's personal site

A standard Jekyll build, because I've spent enough time browsing static
site generators to know that it doesn't matter.

## Quickstart

```
docker compose up
```

That'll run the default jekyll docker image with livereloading, incremental builds and drafts.

## Deployment

Hosted on Github pages. Deploys from the **main branch** so any new changes are deployed automatically when pushing changes to Github. There is no Travis CI build step yet, only the default Github Jekyll configuration is used (as provided by the docker container).

