<template>
  <div class="popup" :class="{show:show}" >
    <div class="back-tap" :class="{show:show}"></div>
    <div class="main">
      <InputField inputName="fullName" />
      <InputField inputName="city" />
      <InputField inputName="place" />
    </div>
  </div>
</template>
<script>
import InputField from "./InputField.vue";
export default {
  name: "Popup",
  props:{
    show:Boolean
  },
  components: {
    InputField,
  },
  mounted() {

  },
};
</script>
<style>
.popup{
  display: none;
}
.popup.show {
  border-radius: 1px;
  max-width: 39%;
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  margin: 8% auto 0;
  padding: 1%;
  box-shadow: 1px 2px 3px 0px rgba(2, 2, 2, 0.64);
  background: rgb(23, 161, 207);
  display: block;
}
.popup p:last-of-type {
  margin-bottom: 1%;
}
.popup .close {
  transition: all 200ms;
  font-size: 1em;
  font-weight: 800;
  text-decoration: none;
  color: #333;
  font-family: "Adequate-ExtraLight";
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 0px;
  background: rgba(23, 161, 207, 0.9);
  padding: 4px 9px;
  right: -1px;
  z-index: 11;
}
.popup .close:hover,
.inner-popup .close:hover {
  color: #fff;
}
.popup > .content {
  max-height: 30%;
  text-align: center;
  color: #fff;
  padding: 1%;
  box-shadow: 0.1px 0.1px 0.1px 0.1px #fff;
}
.back-tap { position: fixed }
 .back-tap.open { height: 100%; width: 100%; top: 0; left: 0; z-index: 0; }
</style>
