
import Input from '../components/Input.vue';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'select', options: ['text', 'password', 'email', 'number'] }
    },
    variant: {
      control: { type: 'select', options: ['default', 'outline', 'filled'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    modelValue: { control: 'text' },
    onChange: { action: 'changed' }
  }
};

export const Default = {
  render: (args) => ({
    components: { JInput: Input },
    setup() {
      return { args };
    },
    template: '<JInput v-bind="args" v-model="args.modelValue" />'
  }),
  args: {
    type: 'text',
    variant: 'default',
    size: 'medium',
    placeholder: 'Enter text',
    disabled: false,
    modelValue: ''
  }
};

export const Outline = {
  render: (args) => ({
    components: { JInput: Input },
    setup() {
      return { args };
    },
    template: '<JInput v-bind="args" v-model="args.modelValue" />'
  }),
  args: {
    type: 'text',
    variant: 'outline',
    size: 'medium',
    placeholder: 'Enter text',
    disabled: false,
    modelValue: ''
  }
};

export const Disabled = {
  render: (args) => ({
    components: { JInput: Input },
    setup() {
      return { args };
    },
    template: '<JInput v-bind="args" v-model="args.modelValue" />'
  }),
  args: {
    type: 'text',
    variant: 'default',
    size: 'medium',
    placeholder: 'Disabled input',
    disabled: true,
    modelValue: ''
  }
};

export const WithPrefix = {
  render: (args) => ({
    components: { JInput: Input },
    setup() {
      return { args };
    },
    template: `
      <JInput v-bind="args" v-model="args.modelValue">
        <template #prefix>
          <span>🔍</span>
        </template>
      </JInput>
    `
  }),
  args: {
    type: 'text',
    variant: 'default',
    size: 'medium',
    placeholder: 'Search...',
    disabled: false,
    modelValue: ''
  }
};
