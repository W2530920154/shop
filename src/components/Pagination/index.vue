<template>
  <div class="pagination">
    <button :disabled="pageNo === 1" @click="changePageNum(pageNo - 1)">
      上一页
    </button>
    <button v-if="startEnd.start > 1" @click="changePageNum(1)">1</button>
    <button v-if="startEnd.start >= 2">···</button>

    <button
      v-for="pages in startEnd.end"
      :key="pages"
      v-if="pages >= startEnd.start"
      :class="{ active: pageNo === pages }"
      @click="changePageNum(pages)"
    >
      {{ pages }}
    </button>

    <button v-if="startEnd.end < totalPages - 1">···</button>
    <button v-if="startEnd.end < totalPages" @click="changePageNum(totalPages)">
      {{ totalPages }}
    </button>
    <button
      :disabled="pageNo === totalPages"
      @click="changePageNum(pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageNo: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
    },
    pageNum: {
      type: Number,
    },
    changePageNum: {
      type: Function,
    },
  },
  name: "Pagination",
  computed: {
    totalPages() {
      // 取出总数量和每页记录数     36 / 5  ==> 8页
      const { total, pageSize } = this;
      if (total <= 0 || pageSize <= 0) return 0;

      return Math.ceil(total / pageSize); // 需要向上取整
    },
    startEnd() {
      let start,
        end,
        flag = 0;
      const { totalPages, pageNo, pageSize, pageNum } = this;

      if (pageNum >= totalPages) {
        start = 1;
        end = totalPages;
      } else {
        start = pageNo - Math.floor(pageNum / 2);
        end = pageNo + Math.floor(pageNum / 2);
        if (start < 1) {
          flag = 1 - start;
          start += flag;
          end += flag;
        }
        if (end > totalPages) {
          flag = totalPages - end;
          start += flag;
          end += flag;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
