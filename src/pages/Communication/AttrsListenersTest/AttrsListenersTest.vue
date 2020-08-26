<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <el-button type="primary" icon="el-icon-plus">添加</el-button>
    <el-button type="danger" icon="el-icon-delete">删除</el-button>
    <el-button type="warning" icon="el-icon-edit">修改</el-button>
    <br />
    <HintButton title="添加" type="primary" icon="el-icon-plus"></HintButton>
    <HintButton title="删除" type="danger" icon="el-icon-delete"></HintButton>
    <HintButton title="修改" type="warning" icon="el-icon-edit"></HintButton>
  </div>
</template>

<script type="text/ecmascript-6">
import HintButton from "./HintButton"
export default {
  name: 'AttrsListenersTest',
  methods: {

  },
  components:{
    HintButton
  }
}
</script>
