# React Native Progress Bar

This is a simple component used to generate a progress bar for your react-native application.

---

## Installation

1. Use npm or yarn to add to your project.
     > `yarn add rn-progress-bar` or `npm i rn-progress-bar`
2. Import into the required file:
     >  `import ProgressBar from 'rn-progress-bar';`

---

## Styling

For styling, you can pass any style object as props, and it will override the default styles of the component.

```js
const styles = StyleSheet.create({
  progressBar: {
    height: 12,
    primaryColor: '#ccc'
  }
});

<ProgressBar style={styles.progressBar} />
```
