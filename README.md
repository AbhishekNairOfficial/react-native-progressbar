# React Native Progress Bar

This is a simple component used to generate a progress bar for your react-native application.

---

## Installation

1. Use npm or yarn to add to your project.

     ```js
     yarn add rn-progress-bar
     ```

     or

     ```js
     npm i rn-progress-bar
     ```

2. Import into the required file:

     ```js
    import ProgressBar from 'rn-progress-bar';
     ```

---

## Styling

For styling, you can pass any style object as props, and it will override the default styles of the component.

```js
const styles = StyleSheet.create({
  progressBar: {
    height: 12,
    borderRadius: 5
  }
});

<ProgressBar
  style={styles.progressBar}
  primary='#f00'
  secondary='#fff'
  percentage={75}
/>
```
