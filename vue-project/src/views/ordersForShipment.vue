<template>
  <section>
    <section data-v-0ef526f4 class="app-main">
      <div class="app-container">
        <div class="el-card operate-container is-never-shadow">
          <!---->
          <div class="el-card__body">
            <i class="el-icon-tickets"></i>
            <span>发货列表</span>
          </div>
        </div>
        <div class="table-container">
          <div
            class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition"
            style="width: 100%;"
          >
            <div class="hidden-columns">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="el-table__header-wrapper">
              <table
                cellspacing="0"
                cellpadding="0"
                border="0"
                class="el-table__header"
                style="width: 1340px;"
              >
                <colgroup>
                  <col name="el-table_81_column_620" width="180" />
                  <col name="el-table_81_column_621" width="180" />
                  <col name="el-table_81_column_622" width="160" />
                  <col name="el-table_81_column_623" width="160" />
                  <col name="el-table_81_column_624" width="320" />
                  <col name="el-table_81_column_625" width="160" />
                  <col name="el-table_81_column_626" width="180" />
                  <col name="gutter" width="0" />
                </colgroup>
                <!-- 表格标题 -->
                <thead class="has-gutter">
                  <tr class>
                    <th colspan="1" rowspan="1" class="el-table_81_column_620 is-center is-leaf">
                      <div class="cell">订单编号</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_81_column_621 is-center is-leaf">
                      <div class="cell">收货人</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_81_column_622 is-center is-leaf">
                      <div class="cell">手机号码</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_81_column_623 is-center is-leaf">
                      <div class="cell">邮政编码</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_81_column_624 is-center is-leaf">
                      <div class="cell">收货地址</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_81_column_625 is-center is-leaf">
                      <div class="cell">配送方式</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_81_column_626 is-center is-leaf">
                      <div class="cell">物流单号</div>
                    </th>
                    <th class="gutter" style="width: 0px; display: none;"></th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="el-table__body-wrapper is-scrolling-none">
              <table
                cellspacing="0"
                cellpadding="0"
                border="0"
                class="el-table__body"
                style="width: 1340px;"
              >
                <colgroup>
                  <col name="el-table_81_column_620" width="180" />
                  <col name="el-table_81_column_621" width="180" />
                  <col name="el-table_81_column_622" width="160" />
                  <col name="el-table_81_column_623" width="160" />
                  <col name="el-table_81_column_624" width="320" />
                  <col name="el-table_81_column_625" width="160" />
                  <col name="el-table_81_column_626" width="180" />
                </colgroup>
                <tbody>
                  <tr class="el-table__row">
                    <td class="el-table_81_column_620 is-center">
                      <div v-text="orderDetails.number1" class="cell">201809150102000002</div>
                    </td>
                    <td class="el-table_81_column_621 is-center">
                      <div v-text="orderDetails.consigneeInformation[0]" class="cell">大梨</div>
                    </td>
                    <td class="el-table_81_column_622 is-center">
                      <div v-text="orderDetails.consigneeInformation[1]" class="cell">18033441849</div>
                    </td>
                    <td class="el-table_81_column_623 is-center">
                      <div v-text="orderDetails.consigneeInformation[2]" class="cell">518000</div>
                    </td>
                    <td class="el-table_81_column_624 is-center">
                      <div v-text="orderDetails.consigneeInformation[3]" class="cell">广东省深圳市福田区东晓街道</div>
                    </td>
                    <td class="el-table_81_column_625 is-center">
                      <div class="cell">
                        <div class="el-select el-select--small">
                          <!---->
                          <el-select
                            style="font-size:15px"
                            clearable
                            v-model="value"
                            placeholder="请选择快递公司"
                          >
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </div>
                      </div>
                    </td>
                    <td class="el-table_81_column_626 is-center">
                      <div class="cell">
                        <div class="el-input el-input--small">
                          <!---->
                          <input
                            type="text"
                            v-model="express"
                            autocomplete="off"
                            class="el-input__inner"
                          />
                          <!---->
                          <!---->
                          <!---->
                        </div>
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
          </div>
          <div style="margin-top: 15px; text-align: center;">
            <button @click="toorderlist" type="button" class="el-button el-button--default">
              <!---->
              <!---->
              <span>取消</span>
            </button>
            <button
              @click="shipment(orderDetails._id)"
              type="button"
              class="el-button el-button--primary"
            >
              <!---->
              <!---->
              <span>确定</span>
            </button>
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
      //获取到对应的订单信息存放地
      orderDetails: null,
      express: "",
      focus: false,
      options: [
        {
          value: "顺丰快递",
          label: "顺丰快递"
        },
        {
          value: "申通快递",
          label: "申通快递"
        },
        {
          value: "圆通快递",
          label: "圆通快递"
        },
        {
          value: "天天快递",
          label: "天天快递"
        },
        {
          value: "韵达快递",
          label: "韵达快递"
        }
      ],
      value: "",
      express: ""
    };
  },

  async created() {
    //根据订单号，查询订单信息
    const id = this.$route.params.id;
    const order = await this.$axios(
      "http://localhost:3000/getorder/id?orderID=" + id
    );
    console.log(order.data[0]);
    this.orderDetails = order.data[0];
  },
  methods: {
    //点击取消，放回订单列表页
    toorderlist() {
      this.$router.push({
        name: "OL"
      });
    },

    //点击确认提交快递单号，快递公司，和确认信息
    shipment(id) {
      this.$axios(
        `http://localhost:3000/updata?modeOfDistribution=${this.value}&trackingNumber=${this.express}&_id=${id}`
      ).then(result => {
        console.log(result.data);
        if (result.data == "ok") {
          this.$router.push({
            name : 'OL'
          });
        }
      });

      // this.$router.push({
      //   name: "OL"
      // });
    }
  }
};
</script>