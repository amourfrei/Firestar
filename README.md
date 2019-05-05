# Firestar

- Install dependencies
```
npm install
```

- Compiles and hot-reloads for development
```
npm run serve

```

function handleCustomException(){
  Raven.captureException(err);
  Raven.showReportDialog();
}