
<template>
  <div class="jod-input-wrapper">
    <slot name="prefix" />
    <input
      :class="[
        'jod-input',
        `jod-input--${variant}`,
        `jod-input--${size}`,
        { 'jod-input--disabled': disabled }
      ]"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    />
    <slot name="suffix" />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'password', 'email', 'number'].includes(value)
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'outline', 'filled'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['update:modelValue', 'change']);
</script>

<style scoped>
.jod-input-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.jod-input {
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.2s ease;
}

.jod-input--default {
  border: 1px solid #d1d5db;
  background-color: #ffffff;
}

.jod-input--default:focus {
  border-color: #2563eb;
  outline: none;
}

.jod-input--outline {
  border: 1px solid #6b7280;
  background-color: transparent;
}

.jod-input--outline:focus {
  border-color: #2563eb;
  outline: none;
}

.jod-input--filled {
  border: none;
  background-color: #f3f4f6;
}

.jod-input--filled:focus {
  background-color: #e5e7eb;
  outline: none;
}

.jod-input--small {
  font-size: 12px;
  padding: 6px;
}

.jod-input--medium {
  font-size: 14px;
  padding: 8px;
}

.jod-input--large {
  font-size: 16px;
  padding: 10px;
}

.jod-input--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
