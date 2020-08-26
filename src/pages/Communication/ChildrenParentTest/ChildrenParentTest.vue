<template>
  <div>
    <h2>BABA有存款: {{ money }}</h2>
    <button @click="getMoneyBySon">找小明借钱100</button><br />
    <button @click="getMoneyByDau">找小红借钱150</button><br />
    <button>找所有孩子借钱200</button><br />

    <br />
    <Son ref="son" />

    <br />
    <Daughter ref="dau" />
  </div>
</template>

<script>
import Son from "./Son";
import Daughter from "./Daughter";

export default {
  name: "ChildrenParentTest",
  data() {
    return {
      money: 1000,
    };
  },

  methods: {
    getMoneyBySon() {
      this.$refs.son.money -= 100;
      this.money += 100;
    },
    getMoneyByDau() {
      this.$refs.dau.money -= 150;
      this.money += 150;
    },
  },

  components: {
    Son,
    Daughter,
  },
};
</script>

<style></style>
