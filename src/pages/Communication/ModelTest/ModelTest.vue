<template>
  <div>
    <h2>深入v-model</h2>

    <input type="text" v-model="msg" />
    <span>七夕{{ msg }}</span>
    <br />
    <input type="text" :value="msg" @input="msg = $event.target.value" />
    <br />
    <!-- <CustomInput :value='msg' @input="msg = $event"></CustomInput> -->
     <CustomInput v-model="msg"></CustomInput>
  </div>

</template>

<script type="text/ecmascript-6">
import CustomInput from './CustomInput.vue'
export default {
  name: 'ModelTest',
  data() {
    return {
      msg:''
    }
  },components: {
    CustomInput
  },

}
</script>
