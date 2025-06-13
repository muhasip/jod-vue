import  Button  from '../components/Button.vue';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'danger'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }
  }
};

export const Primary = {
  render: (args) => ({
    components: { JButton: Button },
    setup() {
      return { args };
    },
    template: '<JButton v-bind="args">Primary Button</JButton>'
  }),
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false
  }
};

export const Secondary = {
  render: (args) => ({
    components: { JButton: Button },
    setup() {
      return { args };
    },
    template: '<JButton v-bind="args">Secondary Button</JButton>'
  }),
  args: {
    variant: 'secondary',
    size: 'medium',
    disabled: false
  }
};

export const Disabled = {
  render: (args) => ({
    components: { JButton: Button },
    setup() {
      return { args };
    },
    template: '<JButton v-bind="args">Disabled Button</JButton>'
  }),
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: true
  }
};
