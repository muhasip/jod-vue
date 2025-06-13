<template>
  <button
    :class="[
      'jod-button',
      `jod-button--${variant}`,
      `jod-button--${size}`,
      { 'jod-button--disabled': disabled }
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot>Default Button</slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);
</script>

<style scoped>
.jod-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.jod-button--primary {
  background-color: #2563eb;
  color: white;
  border: 1px solid #2563eb;
}

.jod-button--primary:hover:not(.jod-button--disabled) {
  background-color: #1d4ed8;
}

.jod-button--secondary {
  background-color: #6b7280;
  color: white;
  border: 1px solid #6b7280;
}

.jod-button--secondary:hover:not(.jod-button--disabled) {
  background-color: #4b5563;
}

.jod-button--danger {
  background-color: #dc2626;
  color: white;
  border: 1px solid #dc2626;
}

.jod-button--danger:hover:not(.jod-button--disabled) {
  background-color: #b91c1c;
}

.jod-button--small {
  font-size: 12px;
  padding: 6px 12px;
}

.jod-button--medium {
  font-size: 14px;
  padding: 8px 16px;
}

.jod-button--large {
  font-size: 16px;
  padding: 10px 20px;
}

.jod-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
