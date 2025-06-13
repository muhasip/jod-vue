import Button from './components/Button.vue';
import Input from './components/Input.vue';

export { Button as JButton, Input as JInput };


export default {
  install(app) {
    app.component('JButton', Button);
    app.component('JInput', Input);
  }
};
