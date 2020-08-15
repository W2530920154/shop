<template>
  <div class="type-nav">
    <div class="container" @click="toSearch">
      <div @mouseleave="outDiv" @mouseenter="isShow = true">
        <h2 class="all">全部商品分类</h2>
        <transition name="show">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2">
              <div
                class="item"
                @mouseenter="showClass(index)"
                :class="{ item_on: couIndex === index }"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
              >
                <h3>
                  <!-- 最后使用的方式是通过事件委派完成对事件的分发 -->
                  <a
                    href="javascript:;"
                    :data-category1id="c1.categoryId"
                    :data-categoryname="c1.categoryName"
                    >{{ c1.categoryName }}</a
                  >
                  <!-- 使用声明式导肮会创建一个组件对象，会造成内存过大 -->
                  <!-- <router-link
                  :to="{
                    name: 'Search',
                    query: {
                      category1Id: c1.categoryId,
                      categoryName: c1.categoryName,
                    },
                  }"
                  >{{ c1.categoryName }}</router-link
                > -->
                  <!-- 使用编程式导航虽然会比声明式导航内存消耗小一些但是会生成多个函数 -->
                  <!-- <a
                  href="Javascript:;"
                  @click="
                    $router.push({
                      name: 'Search',
                      query: {
                        category1Id: c1.categoryId,
                        categoryName: c1.categoryName,
                      },
                    })
                  "
                  >{{ c1.categoryName }}</a
                > -->
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <a
                        href="javascript:;"
                        :data-category2id="c2.categoryId"
                        :data-categoryname="c2.categoryName"
                        >{{ c2.categoryName }}</a
                      >
                      <!-- <a
                      href="Javascript:;"
                      @click="
                        $router.push({
                          name: 'Search',
                          query: {
                            category1Id: c2.categoryId,
                            categoryName: c2.categoryName,
                          },
                        })
                      "
                      >{{ c2.categoryName }}</a
                    > -->
                      <!-- <router-link
                      :to="{
                        name: 'Search',
                        query: {
                          category1Id: c2.categoryId,
                          categoryName: c2.categoryName,
                        },
                      }"
                      >{{ c2.categoryName }}</router-link
                    > -->
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            href="javascript:;"
                            :data-category3id="c3.categoryId"
                            :data-categoryname="c3.categoryName"
                            >{{ c3.categoryName }}</a
                          >
                          <!-- <a
                          href="Javascript:;"
                          @click="
                            $router.push({
                              name: 'Search',
                              query: {
                                category1Id: c3.categoryId,
                                categoryName: c3.categoryName,
                              },
                            })
                          "
                          >{{ c3.categoryName }}</a
                        > -->
                          <!-- <router-link
                          :to="{
                            name: 'Search',
                            query: {
                              category1Id: c3.categoryId,
                              categoryName: c3.categoryName,
                            },
                          }"
                          >{{ c3.categoryName }}</router-link
                        > -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      couIndex: -1,
      isShow: true,
    };
  },
  mounted() {
    if (this.$route.path !== "/home") {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  },
  methods: {
    showClass: throttle(
      function(index) {
        this.couIndex = index;
      },
      30,
      { trailing: false }
    ),
    toSearch(event) {
      console.log(event);
      let data = event.target.dataset;
      let { categoryname, category1id, category2id, category3id } = data;
      if (categoryname) {
        let localtion = {
          name: "Search",
        };
        let query = {
          categoryName: categoryname,
        };
        if (category1id) {
          query.category1Id = category1id;
          localtion.query = query;
        } else if (category2id) {
          query.category2Id = category2id;
          localtion.query = query;
        } else {
          query.category3Id = category3id;
          localtion.query = query;
        }
        if (this.$route.params) {
          localtion.params = this.$route.params;
        }
        this.$router.push(localtion);
      }
    },
    outDiv() {
      this.couIndex = -1;
      if (this.$route.path !== "/home") {
        this.isShow = false;
      }
    },
  },
  computed: {
    //...mapState(['categoryList']) 当status第一层数据时可以使用数组，
    //当使用了modules时，各个子模板status数据会成为一个属性对象，所以展开mapStatus数据时使用对象形式展开
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      &.show-enter {
        opacity: 0;
        height: 0;
      }
      &.show-enter-to {
        opacity: 1;
        height: 461px;
      }
      &.show-enter-active {
        transition: all 0.5s ease;
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 615px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: hotpink;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
