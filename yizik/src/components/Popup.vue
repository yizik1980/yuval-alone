
<template>
  <div class="popup">
    <div class="backtap"></div>
    <div class="main">
      <InputField [name]="fullName" />
      <InputField [name]="city" />
      <InputField [name]="place" />
    </div>
  </div>
</template>
<script>
import InputField from "./InputField.vue";
export default {
  name: "Popup",
  components: {
    InputField,
  },
  mounted() {},
};
</script>