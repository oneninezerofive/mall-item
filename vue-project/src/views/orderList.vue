<template>
  <section>
    <section data-v-0ef526f4 class="app-main">
      <div data-v-ebcc336a class="app-container">
        <div data-v-ebcc336a class="el-card filter-container is-never-shadow">
          <!---->
          <div class="el-card__body">
            <div data-v-ebcc336a>
              <i data-v-ebcc336a class="el-icon-search"></i>
              <span data-v-ebcc336a>筛选搜索</span>
              <button
                data-v-ebcc336a
                type="button"
                class="el-button el-button--primary el-button--small"
                style="float: right;"
              >
                <!---->
                <!---->
                <span>查询搜索</span>
              </button>
              <button
                data-v-ebcc336a
                type="button"
                class="el-button el-button--default el-button--small"
                style="float: right; margin-right: 15px;"
              >
                <!---->
                <!---->
                <span>重置</span>
              </button>
            </div>
            <div data-v-ebcc336a style="margin-top: 15px;">
              <form data-v-ebcc336a class="el-form el-form--inline">
                <div data-v-ebcc336a class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">输入搜索：</label>
                  <el-input v-model="expressnum" placeholder="输入订单号" style="width:203px;"></el-input>
                </div>
                <div data-v-ebcc336a class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">收货人：</label>
                  <div class="el-form-item__content">
                    <div data-v-ebcc336a class="input-width el-input el-input--small">
                      <!---->
                      <input
                        style="width:220px;height:40px"
                        type="text"
                        autocomplete="off"
                        placeholder="收货人姓名/手机号码"
                        class="el-input__inner"
                        v-model="nameOrTel"
                      />
                      <!---->
                      <!---->
                      <!---->
                    </div>
                    <!---->
                  </div>
                </div>
                <div data-v-ebcc336a class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;margin-left:13px">提交时间：</label>
                  <el-date-picker
                    v-model="selecTime"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </div>
                <div data-v-ebcc336a class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">订单状态：</label>
                  <div class="el-form-item__content">
                    <div data-v-ebcc336a class="el-select input-width el-select--small">
                      <el-select v-model="orderStutus" placeholder="请选择">
                        <el-option
                          v-for="item in Stutus"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                    <!---->
                  </div>
                </div>
                <div data-v-ebcc336a class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">订单分类：</label>
                  <el-select v-model="ordertype" placeholder="请选择">
                    <el-option
                      v-for="item in type"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div data-v-ebcc336a class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">订单来源：</label>
                  <el-select v-model="orderform" placeholder="请选择">
                    <el-option
                      v-for="item in form"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div data-v-ebcc336a class="el-card operate-container is-never-shadow">
          <!---->
          <div class="el-card__body">
            <i data-v-ebcc336a class="el-icon-tickets"></i>
            <span data-v-ebcc336a>数据列表</span>
          </div>
        </div>
        <div data-v-ebcc336a class="table-container">
          <div
            data-v-ebcc336a
            class="el-table el-table--fit el-table--border el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition"
            style="width: 100%;"
          >
            <div class="hidden-columns">
              <div data-v-ebcc336a></div>
              <div data-v-ebcc336a></div>
              <div data-v-ebcc336a></div>
              <div data-v-ebcc336a></div>
              <div data-v-ebcc336a></div>
              <div data-v-ebcc336a></div>
              <div data-v-ebcc336a></div>
              <div data-v-ebcc336a></div>
              <div data-v-ebcc336a></div>
              <div data-v-ebcc336a></div>
            </div>
            <div class="el-table__header-wrapper">
              <table
                cellspacing="0"
                cellpadding="0"
                border="0"
                class="el-table__header"
                style="width: 1260px;"
              >
                <colgroup>
                  <col name="el-table_48_column_344" width="60" />
                  <col name="el-table_48_column_345" width="80" />
                  <col name="el-table_48_column_346" width="180" />
                  <col name="el-table_48_column_347" width="180" />
                  <col name="el-table_48_column_348" width="80" />
                  <col name="el-table_48_column_349" width="120" />
                  <col name="el-table_48_column_350" width="120" />
                  <col name="el-table_48_column_351" width="120" />
                  <col name="el-table_48_column_352" width="120" />
                  <col name="el-table_48_column_353" width="200" />
                  <col name="gutter" width="0" />
                </colgroup>
                <thead class="has-gutter">
                  <tr class>
                    <th
                      colspan="1"
                      rowspan="1"
                      class="el-table_48_column_344 is-center el-table-column--selection is-leaf"
                    >
                      <div class="cell">
                        <label role="checkbox" class="el-checkbox">
                          <span aria-checked="mixed" class="el-checkbox__input">
                            <span class="el-checkbox__inner"></span>
                            <input
                              type="checkbox"
                              aria-hidden="true"
                              class="el-checkbox__original"
                              value
                            />
                          </span>
                          <!---->
                        </label>
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_48_column_345 is-center is-leaf">
                      <div class="cell">编号</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_48_column_346 is-center is-leaf">
                      <div class="cell">订单编号</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_48_column_347 is-center is-leaf">
                      <div class="cell">提交时间</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_48_column_348 is-center is-leaf">
                      <div class="cell">用户账号</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_48_column_349 is-center is-leaf">
                      <div class="cell">订单金额</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_48_column_350 is-center is-leaf">
                      <div class="cell">支付方式</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_48_column_351 is-center is-leaf">
                      <div class="cell">订单来源</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_48_column_352 is-center is-leaf">
                      <div class="cell">订单状态</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_48_column_353 is-center is-leaf">
                      <div class="cell">操作</div>
                    </th>
                    <th class="gutter" style="width: 0px; display: none;"></th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="el-table__body-wrapper is-scrolling-left">
              <table
                cellspacing="0"
                cellpadding="0"
                border="0"
                class="el-table__body"
                style="width: 1260px;"
              >
                <colgroup>
                  <col name="el-table_48_column_344" width="60" />
                  <col name="el-table_48_column_345" width="80" />
                  <col name="el-table_48_column_346" width="180" />
                  <col name="el-table_48_column_347" width="180" />
                  <col name="el-table_48_column_348" width="80" />
                  <col name="el-table_48_column_349" width="120" />
                  <col name="el-table_48_column_350" width="120" />
                  <col name="el-table_48_column_351" width="120" />
                  <col name="el-table_48_column_352" width="120" />
                  <col name="el-table_48_column_353" width="200" />
                </colgroup>
                <tbody>
                  <tr v-for="(item,index) in order" :key="index" class="el-table__row">
                    <td class="el-table_48_column_344 is-center el-table-column--selection">
                      <div class="cell">
                        <label role="checkbox" class="el-checkbox">
                          <span aria-checked="mixed" class="el-checkbox__input">
                            <span class="el-checkbox__inner"></span>
                            <input
                              type="checkbox"
                              aria-hidden="true"
                              class="el-checkbox__original"
                              value
                            />
                          </span>
                          <!---->
                        </label>
                      </div>
                    </td>
                    <td class="el-table_48_column_345 is-center">
                      <div v-html="item.number1" class="cell"></div>
                    </td>
                    <td class="el-table_48_column_346 is-center">
                      <div v-html="item.orderID" class="cell">201809150101000001</div>
                    </td>
                    <td class="el-table_48_column_347 is-center">
                      <div class="cell">{{item.submitTime | filterTime}}</div>
                    </td>
                    <td class="el-table_48_column_348 is-center">
                      <div v-html="item.accountName" class="cell">test</div>
                    </td>
                    <td class="el-table_48_column_349 is-center">
                      <div class="cell">￥18732</div>
                    </td>
                    <td class="el-table_48_column_350 is-center">
                      <div v-text="item.PaymentMethod" class="cell">未支付</div>
                    </td>
                    <td class="el-table_48_column_351 is-center">
                      <div v-html="item.orderFrom" class="cell">APP订单</div>
                    </td>
                    <td class="el-table_48_column_352 is-center">
                      <div v-text="item.orderStatus" class="cell">已关闭</div>
                    </td>
                    <td class="el-table_48_column_353 is-center">
                      <div class="cell">
                        <button
                          data-v-ebcc336a
                          type="button"
                          class="el-button el-button--default el-button--mini"
                          @click="toOrderDetails(item.orderID)"
                        >
                          <!---->
                          <!---->
                          <span>查看订单</span>
                        </button>
                        <button
                          v-show=" item.orderStatus === '已关闭'"
                          data-v-ebcc336a
                          type="button"
                          class="el-button el-button--default el-button--mini"
                        >
                          <!---->
                          <!---->
                          <span>关闭订单</span>
                        </button>
                        <!-- 点击发货按钮，跳到发货页面 -->
                        <button
                          v-show=" item.orderStatus === '待发货'"
                          data-v-ebcc336a
                          type="button"
                          class="el-button el-button--default el-button--mini"
                          @click="toShipment(item.orderID)"
                        >
                          <!---->
                          <!---->
                          <span>订单发货</span>
                        </button>
                        <button
                          v-show=" item.orderStatus === '已发货' || item.orderStatus === '已完成'"
                          data-v-ebcc336a
                          type="button"
                          class="el-button el-button--default el-button--mini"
                        >
                          <!---->
                          <!---->
                          <span>订单跟踪</span>
                        </button>
                        <button
                          v-show=" item.orderStatus === '已关闭'"
                          data-v-ebcc336a
                          type="button"
                          class="el-button el-button--danger el-button--mini"
                        >
                          <!---->
                          <!---->
                          <span :orderId="item.orderID">删除订单</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <!---->
                </tbody>
              </table>
              <!---->
              <!---->
            </div>
            <!---->
            <!---->
            <!---->
            <!---->
            <div class="el-table__column-resize-proxy" style="display: none;"></div>
            <div class="el-loading-mask" style="display: none;">
              <div class="el-loading-spinner">
                <svg viewBox="25 25 50 50" class="circular">
                  <circle cx="50" cy="50" r="20" fill="none" class="path" />
                </svg>
                <!---->
              </div>
            </div>
          </div>
        </div>
        <div data-v-ebcc336a class="batch-operate-container">
          <el-select v-model="orderhandler" placeholder="请选择">
            <el-option
              v-for="item in handler"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <button
            data-v-ebcc336a
            type="button"
            class="el-button search-button el-button--primary el-button--small"
            style="margin-left: 20px;"
          >
            <!---->
            <!---->
            <span>确定</span>
          </button>
        </div>
        <div data-v-ebcc336a class="pagination-container">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[5, 10, 15]"
              :page-size="3"
              layout="total, sizes, prev, pager, next, jumper"
              :total="pages.totallPages">
            </el-pagination>
        </div>
        <div data-v-ebcc336a class="el-dialog__wrapper" style="display: none;">
          <div class="el-dialog" style="width: 30%; margin-top: 15vh;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">关闭订单</span>
              <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
            </div>
            <!---->
            <div class="el-dialog__footer">
              <span data-v-ebcc336a class="dialog-footer">
                <button data-v-ebcc336a type="button" class="el-button el-button--default">
                  <!---->
                  <!---->
                  <span>取 消</span>
                </button>
                <button data-v-ebcc336a type="button" class="el-button el-button--primary">
                  <!---->
                  <!---->
                  <span>确 定</span>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div data-v-ebcc336a class="el-dialog__wrapper" style="display: none;">
          <div class="el-dialog" style="width: 40%; margin-top: 15vh;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">订单跟踪</span>
              <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
            </div>
            <!---->
            <!---->
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      //用于渲染页面的数据，
      order: [],
      //输入快递单号
      expressnum: '',
      //输入的手机号码和用户名
      nameOrTel : '',
      //选择日期的数据
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        selecTime: '',
        //订单的状态
        Stutus: [
          {
          value: '待付款',
          label: '待付款'
        }, {
          value: '待发货',
          label: '待发货'
        }, {
          value: '已发货',
          label: '已发货'
        }, {
          value: '已完成',
          label: '已完成'
        }, {
          value: '已关闭',
          label: '已关闭'
        }],
        orderStutus : '',
        
        //订单分类数据
         type: [{
          value: '正常订单',
          label: '正常订单'
        }, {
          value: '秒杀订单',
          label: '秒杀订单'
        }],
        ordertype : '',


         //订单来源
         form: [{
          value: 'APP订单',
          label: 'APP订单'
        }, {
          value: 'PC订单',
          label: 'PC订单'
        }],
        orderform : '',

        
         //订单批量操作
         handler: [{
          value: '关闭订单',
          label: '关闭订单'
        }, {
          value: '删除订单',
          label: '删除订单'
        }, {
          value: '批量发货',
          label: '批量发货'
        }],
        orderhandler : '',

        //总页数pages
        limitPage : 5,
        //当前的页码
        currentPage4: 0
    };
  },
  async created() {
    //发现ajax请求，从数据库拿到所有的订单信息
    const order = await this.$axios("http://localhost:3000/getorder");
    this.order = order.data;
  },

  computed: {
    pages() {
      //订单的总条数
      var strip = this.order.length;
      //订单的总页数
      var totallPages = Math.ceil(strip / this.limitPage);

      return {
        strip,
        totallPages
      }
    }
  },

  filters: {
    //将格林尼治时间转年月日，时分秒
    filterTime(time) {
      const time1 = new Date(time);
      const year = time1.getFullYear();
      const month = time1.getMonth() + 1;
      const data = time1.getDate();
      const hours = time1.getHours();
      const Minutes = time1.getMinutes();
      const Seconds = time1.getSeconds();
      return `${year}-${month}-${data}  ${hours}:${Minutes}:${Seconds}`;
    }
  },
  
  methods: {
    toOrderDetails(id) {
      this.$router.push({
        name: "OD",
        params: { id }
      });
    },
    //跳到发货页面
    toShipment(id) {
      this.$router.push({
        name: "OFS",
        params: { id }
      });
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style scoped>
</style>
