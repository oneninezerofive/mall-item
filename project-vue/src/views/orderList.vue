<template>
  <section style="width:97%">
    <section data-v-0ef526f4 class="app-main">
      <div data-v-ebcc336a class="app-container">
        <div data-v-ebcc336a class="el-card filter-container is-never-shadow">
          <!---->
          <div class="el-card__body">
            <div data-v-ebcc336a>
              <i style="float:left;" data-v-ebcc336a class="el-icon-search"></i>
              <span style="float:left;line-height:1.5;" data-v-ebcc336a>筛选搜索</span>
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
            <div data-v-ebcc336a style="margin-top: 45px;clear:both;">
              <form data-v-ebcc336a class="el-form el-form--inline">
                <div style="line-height:0.5" data-v-ebcc336a class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">输入搜索：</label>
                  <el-input v-model="expressnum" placeholder="输入订单号" style="width:203px;"></el-input>
                </div>
                <div style="line-height:0.5" data-v-ebcc336a class="el-form-item el-form-item--small">
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
                    </div>
                  </div>
                </div>
                <div style="line-height:0.5" data-v-ebcc336a class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;margin-left:13px">提交时间：</label>
                  <el-date-picker v-model="selecTime" type="date" placeholder="选择日期"></el-date-picker>
                </div>
                <div style="line-height:0.5" data-v-ebcc336a class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">订单状态：</label>
                  <div class="el-form-item__content">
                    <div data-v-ebcc336a class="el-select input-width el-select--small">
                      <el-select v-model="orderStutus" placeholder="请选择">
                        <el-option
                          v-for="item in Stutus"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                    <!---->
                  </div>
                </div>
                <div style="line-height:0.5" data-v-ebcc336a class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">订单分类：</label>
                  <el-select v-model="ordertype" placeholder="请选择">
                    <el-option
                      v-for="item in type"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
                <div style="line-height:0.5" data-v-ebcc336a class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">订单来源：</label>
                  <el-select v-model="orderform" placeholder="请选择">
                    <el-option
                      v-for="item in form"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
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
        <el-table
          ref="multipleTable"
          :data="order"
          tooltip-effect="dark"
          style="width: 100%"
          :border="true"
          @selection-change="handleSelectionChange"
        >
          <el-table-column align="center" type="selection" width="55"></el-table-column>
          <el-table-column align="center" label="编号" prop="number1" width="120">
            <!-- <template slot-scope="scope">{{ scope.row.number1 }}</template> -->
          </el-table-column>
          <el-table-column align="center" label="订单编号" prop="InvoiceSerialNumber" width="120">
            <!-- <template slot-scope="scope">{{ scope.row.InvoiceSerialNumber }}</template> -->
          </el-table-column>
          <el-table-column align="center" label="提交时间" width="120">
            <template slot-scope="scope">{{ scope.row.submitTime | filterTime}}</template>
          </el-table-column>
          <el-table-column align="center" prop="accountName" label="用户账号" show-overflow-tooltip>
            <!-- <template slot-scope="scope">{{ scope.row.accountName }}</template> -->
          </el-table-column>
          <el-table-column align="center" label="订单金额" prop="orderTotalPrice" width="120">
            <!-- <template slot-scope="scope">{{ scope.row.orderTotalPrice }}</template> -->
          </el-table-column>
          <el-table-column align="center" label="支付方式" prop="PaymentMethod" width="120">
            <!-- <template slot-scope="scope">{{ scope.row.PaymentMethod }}</template> -->
          </el-table-column>
          <el-table-column align="center" label="订单来源" prop="orderFrom" width="120">
            <!-- <template slot-scope="scope">{{ scope.row.orderFrom }}</template> -->
          </el-table-column>
          <el-table-column align="center" label="订单状态" prop="orderStatus" width="120">
            <!-- <template slot-scope="scope">{{ scope.row.orderStatus }}</template> -->
          </el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <el-row id="button" slot-scope="scope">
              <el-button @click="toOrderDetails(scope.row.orderID)">查看订单</el-button>
              <el-button v-if="scope.row.orderStatus == '待发货'">订单发货</el-button>
              <el-button
                v-if="scope.row.orderStatus == '已发货' || scope.row.orderStatus == '已完成'"
              >订单跟踪</el-button>
              <el-button v-if="scope.row.orderStatus == '已关闭'" type="danger">删除订单</el-button>
            </el-row>
          </el-table-column>
        </el-table>
        <div style="float:left;line-height:1" data-v-ebcc336a class="batch-operate-container">
          <!-- 删除，关闭，发货订单 -->
          <el-select  v-model="orderhandler" placeholder="请选择">
            <el-option
              v-for="item in handler"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              size="small"
            ></el-option>
          </el-select>
          <button
            data-v-ebcc336a
            type="button"
            class="el-button search-button el-button--primary el-button--small"
            style="margin-left: 20px;"
            @click="onhandler"
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
            :page-sizes="[ 10, 15]"
            :page-size="page_size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="strip"
          ></el-pagination>
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
      expressnum: "",
      //输入的手机号码和用户名
      nameOrTel: "",
      //选择日期的数据
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      selecTime: "",
      //订单的状态
      Stutus: [
        {
          value: "待付款",
          label: "待付款"
        },
        {
          value: "待发货",
          label: "待发货"
        },
        {
          value: "已发货",
          label: "已发货"
        },
        {
          value: "已完成",
          label: "已完成"
        },
        {
          value: "已关闭",
          label: "已关闭"
        }
      ],
      orderStutus: "",

      //订单分类数据
      type: [
        {
          value: "正常订单",
          label: "正常订单"
        },
        {
          value: "秒杀订单",
          label: "秒杀订单"
        }
      ],
      ordertype: "",

      //订单来源
      form: [
        {
          value: "APP订单",
          label: "APP订单"
        },
        {
          value: "PC订单",
          label: "PC订单"
        }
      ],
      orderform: "",

      //订单批量操作
      handler: [
        {
          value: "关闭订单",
          label: "关闭订单"
        },
        {
          value: "删除订单",
          label: "删除订单"
        },
        {
          value: "批量发货",
          label: "批量发货"
        }
      ],

      //对订单进行删除，关闭，批量发货
      orderhandler: "",

      indexhandler: '',

      //订单的总条数
      strip: 0,

      //总的页数
      totallPages: 0,

      //前往第几页的码
      currentPage4: 1,

      //一页的显示的订单条数
      page_size: 5,

      //起始条数index
      index: 1
    };
  },

  created() {
    this.getOrder();
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
    async getOrder(url) {
      //发现ajax请求，从数据库拿到所有的订单信息
      const order = await this.$axios(
        "http://localhost:3000/getorder?index=" +
          this.index +
          "&conust=" +
          this.page_size
      );
      // console.log(order.data);
      this.order = order.data.limitData;
      console.log(order);
      //订单的总条数
      this.strip = order.data.strip;
      //总的页数
      this.totallPages = order.data.totalPage;
    },

    onhandler() {
      if (this.orderhandler) {
        if (this.indexhandler) {
          // this.$axios()
        } else {
          this.$message.error("请选择要操作的订单!!");
        }
      } else {
        this.$message.error("请选择操作的方式!!");
      }
    },

    handleSelectionChange(selectArr) {
      console.log("handleSelectionChange", selectArr);
      if (Boolean(selectArr.join(""))) {
        selectArr.forEach(element => {
          this.indexhandler.push(element._id);
        });
      }
    },

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
      // console.log(`每页 ${val} 条`);
      this.page_size = val;
      this.getOrder();
    },

    handleCurrentChange(val) {
      // console.log(`当前是 ${val} 页`);
      this.index = val;
      this.getOrder();
    }
  }
};
</script>
<style  scoped>
.el-main{
  line-height: 1.5 !important;
}
#button button {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  padding: 0;
  font-size: 12px;
}
</style>

