<template>
  <section data-v-0ef526f4 class="app-main">
    <div data-v-dbd3fea4 class="detail-container">
      <!-- 订单进度条 -->
      <div data-v-dbd3fea4>
        <div data-v-dbd3fea4 class="el-steps el-steps--horizontal">
          <div
            data-v-dbd3fea4
            class="el-step is-horizontal is-center"
            style="flex-basis: 20%; margin-right: 0px;"
          >
            <div class="el-step__head is-success">
              <div class="el-step__line" style="margin-right: 0px;">
                <i
                  class="el-step__line-inner"
                  style="transition-delay: 0ms; border-width: 0px; width: 0%;"
                ></i>
              </div>
              <div class="el-step__icon is-text">
                <i class="el-step__icon-inner is-status el-icon-check"></i>
              </div>
            </div>
            <div class="el-step__main">
              <div class="el-step__title is-success">提交订单</div>
              <div class="el-step__description is-success">2018-09-15 12:24:27</div>
            </div>
          </div>
          <div
            data-v-dbd3fea4
            class="el-step is-horizontal is-center"
            style="flex-basis: 20%; margin-right: 0px;"
          >
            <div class="el-step__head is-process">
              <div class="el-step__line" style="margin-right: 0px;">
                <i
                  class="el-step__line-inner"
                  style="transition-delay: -150ms; border-width: 0px; width: 0%;"
                ></i>
              </div>
              <div class="el-step__icon is-text">
                <!---->
                <div class="el-step__icon-inner">2</div>
              </div>
            </div>
            <div class="el-step__main">
              <div class="el-step__title is-process">支付订单</div>
              <div class="el-step__description is-process"></div>
            </div>
          </div>
          <div
            data-v-dbd3fea4
            class="el-step is-horizontal is-center"
            style="flex-basis: 20%; margin-right: 0px;"
          >
            <div class="el-step__head is-wait">
              <div class="el-step__line" style="margin-right: 0px;">
                <i
                  class="el-step__line-inner"
                  style="transition-delay: -300ms; border-width: 0px; width: 0%;"
                ></i>
              </div>
              <div class="el-step__icon is-text">
                <!---->
                <div class="el-step__icon-inner">3</div>
              </div>
            </div>
            <div class="el-step__main">
              <div class="el-step__title is-wait">平台发货</div>
              <div class="el-step__description is-wait"></div>
            </div>
          </div>
          <div
            data-v-dbd3fea4
            class="el-step is-horizontal is-center"
            style="flex-basis: 20%; margin-right: 0px;"
          >
            <div class="el-step__head is-wait">
              <div class="el-step__line" style="margin-right: 0px;">
                <i
                  class="el-step__line-inner"
                  style="transition-delay: -450ms; border-width: 0px; width: 0%;"
                ></i>
              </div>
              <div class="el-step__icon is-text">
                <!---->
                <div class="el-step__icon-inner">4</div>
              </div>
            </div>
            <div class="el-step__main">
              <div class="el-step__title is-wait">确认收货</div>
              <div class="el-step__description is-wait"></div>
            </div>
          </div>
          <div
            data-v-dbd3fea4
            class="el-step is-horizontal is-center"
            style="flex-basis: 20%; max-width: 20%;"
          >
            <div class="el-step__head is-wait">
              <div class="el-step__line">
                <i class="el-step__line-inner"></i>
              </div>
              <div class="el-step__icon is-text">
                <!---->
                <div class="el-step__icon-inner">5</div>
              </div>
            </div>
            <div class="el-step__main">
              <div class="el-step__title is-wait">完成评价</div>
              <div class="el-step__description is-wait"></div>
            </div>
          </div>
        </div>
      </div>
      <div data-v-dbd3fea4 class="el-card is-never-shadow" style="margin-top: 15px;">
        <!---->
        <div class="el-card__body">
          <!-- 订单状态 -->
          <div data-v-dbd3fea4 class="operate-container">
            <i data-v-dbd3fea4 class="el-icon-warning color-danger" style="margin-left: 20px;"></i>
            <span data-v-dbd3fea4 class="color-danger">当前订单状态：已关闭</span>
            <div data-v-dbd3fea4 class="operate-button-container" style="display: none;">
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>修改收货人信息</span>
              </button>
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>修改商品信息</span>
              </button>
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>修改费用信息</span>
              </button>
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>发送站内信</span>
              </button>
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>关闭订单</span>
              </button>
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>备注订单</span>
              </button>
            </div>
            <div data-v-dbd3fea4 class="operate-button-container" style="display: none;">
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>修改收货人信息</span>
              </button>
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>发送站内信</span>
              </button>
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>取消订单</span>
              </button>
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>备注订单</span>
              </button>
            </div>
            <div data-v-dbd3fea4 class="operate-button-container" style="display: none;">
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>订单跟踪</span>
              </button>
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>发送站内信</span>
              </button>
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>备注订单</span>
              </button>
            </div>
            <div data-v-dbd3fea4 class="operate-button-container" style>
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>删除订单</span>
              </button>
              <button
                data-v-dbd3fea4
                type="button"
                class="el-button el-button--default el-button--mini"
              >
                <!---->
                <!---->
                <span>备注订单</span>
              </button>
            </div>
          </div>
          <div data-v-dbd3fea4 style="margin-top: 20px;">
            <svg
              data-v-81d70f2a
              data-v-dbd3fea4
              aria-hidden="true"
              class="svg-icon"
              style="color: rgb(96, 98, 102);"
            >
              <use data-v-81d70f2a xlink:href="#icon-marker" />
            </svg>
            <span data-v-dbd3fea4 class="font-small">基本信息</span>
          </div>
          <div data-v-dbd3fea4 class="table-layout">
            <div data-v-dbd3fea4 class="el-row">
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-4">订单编号</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-4">发货单流水号</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-4">用户账号</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-4">支付方式</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-4">订单来源</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-4">订单类型</div>
            </div>
            <div data-v-dbd3fea4 class="el-row">
              <div
                data-v-dbd3fea4
                v-html="orderDetails.number1"
                class="table-cell el-col el-col-4"
              >201809150101000001</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.InvoiceSerialNumber ? orderDetails.InvoiceSerialNumber : '暂无'"
                class="table-cell el-col el-col-4"
              >暂无</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.accountName"
                class="table-cell el-col el-col-4"
              >test</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.PaymentMethod ? orderDetails.PaymentMethod : '未支付'"
                class="table-cell el-col el-col-4"
              >未支付</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.orderFrom"
                class="table-cell el-col el-col-4"
              >APP订单</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.orderType"
                class="table-cell el-col el-col-4"
              >正常订单</div>
            </div>
            <div data-v-dbd3fea4 class="el-row">
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-4">配送方式</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-4">物流单号</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-4">自动确认收货时间</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-4">订单可得优币</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-4">订单可得成长值</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-4">活动信息</div>
            </div>
            <div data-v-dbd3fea4 class="el-row">
              <div
                data-v-dbd3fea4
                v-html="orderDetails.modeOfDistribution"
                class="table-cell el-col el-col-4"
              >暂无</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.trackingNumber"
                class="table-cell el-col el-col-4"
              >暂无</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.autoAffirmTime"
                class="table-cell el-col el-col-4"
              >15天</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.youBi"
                class="table-cell el-col el-col-4"
              >13284</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.growthValue"
                class="table-cell el-col el-col-4"
              >13284</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.activityInformation"
                class="table-cell el-col el-col-4"
              >
                <span data-v-dbd3fea4>
                  <div
                    role="tooltip"
                    id="el-popover-8254"
                    aria-hidden="true"
                    class="el-popover el-popper el-popover--plain"
                    tabindex="0"
                    style="width: 200px; display: none;"
                  >
                    <div class="el-popover__title">活动信息</div>单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠
                  </div>
                  <span
                    data-v-dbd3fea4
                    class="el-popover__reference"
                    aria-describedby="el-popover-8254"
                    tabindex="0"
                  >单品促销,打折优...</span>
                </span>
              </div>
            </div>
          </div>
          <div data-v-dbd3fea4 style="margin-top: 20px;">
            <svg
              data-v-81d70f2a
              data-v-dbd3fea4
              aria-hidden="true"
              class="svg-icon"
              style="color: rgb(96, 98, 102);"
            >
              <use data-v-81d70f2a xlink:href="#icon-marker" />
            </svg>
            <span data-v-dbd3fea4 class="font-small">收货人信息</span>
          </div>
          <div data-v-dbd3fea4 class="table-layout">
            <div data-v-dbd3fea4 class="el-row">
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-6">收货人</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-6">手机号码</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-6">邮政编码</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-6">收货地址</div>
            </div>
            <div data-v-dbd3fea4 class="el-row">
              <div
                data-v-dbd3fea4
                v-html="orderDetails.consigneeInformation[0]"
                class="table-cell el-col el-col-6"
              >大梨</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.consigneeInformation[1]"
                class="table-cell el-col el-col-6"
              >18033441849</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.consigneeInformation[2]"
                class="table-cell el-col el-col-6"
              >518000</div>
              <div
                data-v-dbd3fea4
                v-html="orderDetails.consigneeInformation[3]"
                class="table-cell el-col el-col-6"
              >江苏省 常州市 天宁区 东晓街道</div>
            </div>
          </div>
          <div data-v-dbd3fea4 style="margin-top: 20px;">
            <svg
              data-v-81d70f2a
              data-v-dbd3fea4
              aria-hidden="true"
              class="svg-icon"
              style="color: rgb(96, 98, 102);"
            >
              <use data-v-81d70f2a xlink:href="#icon-marker" />
            </svg>
            <span data-v-dbd3fea4 class="font-small">商品信息</span>
          </div>
          <div
            data-v-dbd3fea4
            class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition"
            style="width: 100%; margin-top: 20px;"
          >
            <div class="hidden-columns">
              <div data-v-dbd3fea4></div>
              <div data-v-dbd3fea4></div>
              <div data-v-dbd3fea4></div>
              <div data-v-dbd3fea4></div>
              <div data-v-dbd3fea4></div>
              <div data-v-dbd3fea4></div>
            </div>
            <div class="el-table__header-wrapper">
              <table
                cellspacing="0"
                cellpadding="0"
                border="0"
                class="el-table__header"
                style="width: 834px;"
              >
                <colgroup>
                  <col name="el-table_1_column_1" width="120" />
                  <col name="el-table_1_column_2" width="234" />
                  <col name="el-table_1_column_3" width="120" />
                  <col name="el-table_1_column_4" width="120" />
                  <col name="el-table_1_column_5" width="120" />
                  <col name="el-table_1_column_6" width="120" />
                  <col name="gutter" width="0" />
                </colgroup>
                <thead class="has-gutter">
                  <tr class>
                    <th colspan="1" rowspan="1" class="el-table_1_column_1 is-center is-leaf">
                      <div class="cell">商品图片</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_2 is-center is-leaf">
                      <div class="cell">商品名称</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_3 is-center is-leaf">
                      <div class="cell">价格/货号</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_4 is-center is-leaf">
                      <div class="cell">属性</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_5 is-center is-leaf">
                      <div class="cell">数量</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_6 is-center is-leaf">
                      <div class="cell">小计</div>
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
                style="width: 834px;"
              >
                <colgroup>
                  <col name="el-table_1_column_1" width="120" />
                  <col name="el-table_1_column_2" width="234" />
                  <col name="el-table_1_column_3" width="120" />
                  <col name="el-table_1_column_4" width="120" />
                  <col name="el-table_1_column_5" width="120" />
                  <col name="el-table_1_column_6" width="120" />
                </colgroup>
                <tbody>
                  <tr
                    v-for="(item , index) in orderDetails.goodInformation"
                    :key="index"
                    class="el-table__row"
                  >
                    <td class="el-table_1_column_1 is-center">
                      <div class="cell">
                        <img data-v-dbd3fea4 :src="item.imgurl" style="height: 80px;" />
                      </div>
                    </td>
                    <td class="el-table_1_column_2 is-center">
                      <div class="cell">
                        <p v-html="item.goodType" data-v-dbd3fea4>华为 HUAWEI P20</p>
                        <p v-html="'品牌：'+item.goodBrand" data-v-dbd3fea4>品牌：华为</p>
                      </div>
                    </td>
                    <td class="el-table_1_column_3 is-center">
                      <div class="cell">
                        <p v-html="'价格：￥' + item.goodPrice" data-v-dbd3fea4>价格：￥3788</p>
                        <p v-html="'货号：' + item.goodID" data-v-dbd3fea4>货号：6946605</p>
                      </div>
                    </td>
                    <td class="el-table_1_column_4 is-center">
                      <div
                        v-html="`颜色:${item.goodColor};容量:${item.memoryCapacity}G;`"
                        class="cell"
                      >颜色:金色;容量:16G;</div>
                    </td>
                    <td class="el-table_1_column_5 is-center">
                      <div v-html="item.goodCounst" class="cell">1</div>
                    </td>
                    <td class="el-table_1_column_6 is-center">
                      <div v-html="`￥${item.goodPrice * item.goodCounst}`" class="cell">￥3788</div>
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
          <div data-v-dbd3fea4 style="float: right; margin: 20px;">
            合计：
            <span v-html="`￥${total.totalPrice}`" data-v-dbd3fea4 class="color-danger">￥18732</span>
          </div>
          <div data-v-dbd3fea4 style="margin-top: 60px;">
            <svg
              data-v-81d70f2a
              data-v-dbd3fea4
              aria-hidden="true"
              class="svg-icon"
              style="color: rgb(96, 98, 102);"
            >
              <use data-v-81d70f2a xlink:href="#icon-marker" />
            </svg>
            <span data-v-dbd3fea4 class="font-small">费用信息</span>
          </div>
          <div data-v-dbd3fea4 class="table-layout">
            <div data-v-dbd3fea4 class="el-row">
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-6">商品合计</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-6">运费</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-6">优惠券</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-6">积分抵扣</div>
            </div>
            <div data-v-dbd3fea4 class="el-row">
              <div
                v-html="`￥${total.totalPrice}`"
                data-v-dbd3fea4
                class="table-cell el-col el-col-6"
              >￥18732</div>
              <div v-html="`￥${total.freight}`" data-v-dbd3fea4 class="table-cell el-col el-col-6">￥20</div>
              <div v-html="`-￥${total.discountCoupon}`" data-v-dbd3fea4 class="table-cell el-col el-col-6">-￥10</div>
              <div v-html="`-￥${total.PointsDeduction}`" data-v-dbd3fea4 class="table-cell el-col el-col-6">-￥0</div>
            </div>
            <div data-v-dbd3fea4 class="el-row">
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-6">活动优惠</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-6">折扣金额</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-6">订单总金额</div>
              <div data-v-dbd3fea4 class="table-cell-title el-col el-col-6">应付款金额</div>
            </div>
            <div data-v-dbd3fea4 class="el-row">
              <div v-html="`-￥${total.PreferentialActivities}`" data-v-dbd3fea4 class="table-cell el-col el-col-6">-￥2344.25</div>
              <div v-html="`-￥${total.discountAmount}`" data-v-dbd3fea4 class="table-cell el-col el-col-6">-￥10</div>
              <div data-v-dbd3fea4 class="table-cell el-col el-col-6">
                <span v-html="`￥${total.totalAmountOfTheOrder}`" data-v-dbd3fea4 class="color-danger">￥18752</span>
              </div>
              <div data-v-dbd3fea4 class="table-cell el-col el-col-6">
                <span v-html="`￥${total.AmountPayable}`" data-v-dbd3fea4 class="color-danger">￥16387.75</span>
              </div>
            </div>
          </div>
          <div data-v-dbd3fea4 style="margin-top: 20px;">
            <svg
              data-v-81d70f2a
              data-v-dbd3fea4
              aria-hidden="true"
              class="svg-icon"
              style="color: rgb(96, 98, 102);"
            >
              <use data-v-81d70f2a xlink:href="#icon-marker" />
            </svg>
            <span data-v-dbd3fea4 class="font-small">操作信息</span>
          </div>
          <div
            data-v-dbd3fea4
            class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition"
            style="margin-top: 20px; width: 100%;"
          >
            <div class="hidden-columns">
              <div data-v-dbd3fea4></div>
              <div data-v-dbd3fea4></div>
              <div data-v-dbd3fea4></div>
              <div data-v-dbd3fea4></div>
              <div data-v-dbd3fea4></div>
              <div data-v-dbd3fea4></div>
            </div>
            <div class="el-table__header-wrapper">
              <table
                cellspacing="0"
                cellpadding="0"
                border="0"
                class="el-table__header"
                style="width: 834px;"
              >
                <colgroup>
                  <col name="el-table_2_column_7" width="120" />
                  <col name="el-table_2_column_8" width="160" />
                  <col name="el-table_2_column_9" width="120" />
                  <col name="el-table_2_column_10" width="120" />
                  <col name="el-table_2_column_11" width="120" />
                  <col name="el-table_2_column_12" width="194" />
                  <col name="gutter" width="0" />
                </colgroup>
                <thead class="has-gutter">
                  <tr class>
                    <th colspan="1" rowspan="1" class="el-table_2_column_7 is-center is-leaf">
                      <div class="cell">操作者</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_2_column_8 is-center is-leaf">
                      <div class="cell">操作时间</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_2_column_9 is-center is-leaf">
                      <div class="cell">订单状态</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_2_column_10 is-center is-leaf">
                      <div class="cell">付款状态</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_2_column_11 is-center is-leaf">
                      <div class="cell">发货状态</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_2_column_12 is-center is-leaf">
                      <div class="cell">备注</div>
                    </th>
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
                style="width: 834px;"
              >
                <colgroup>
                  <col name="el-table_2_column_7" width="120" />
                  <col name="el-table_2_column_8" width="160" />
                  <col name="el-table_2_column_9" width="120" />
                  <col name="el-table_2_column_10" width="120" />
                  <col name="el-table_2_column_11" width="120" />
                  <col name="el-table_2_column_12" width="194" span="2" />
                </colgroup>
                <tbody>
                  <tr v-for="(item,index) in orderDetails.operatingInformation" :key="index" class="el-table__row">
                    <td class="el-table_2_column_7 is-center">
                      <div v-text="item.handlers" class="cell">后台管理员</div>
                    </td>
                    <td class="el-table_2_column_8 is-center">
                      <div class="cell">{{item.handlersTime | filterTime}}</div>
                    </td>
                    <td class="el-table_2_column_9 is-center">
                      <div v-text="item.orderStatus" class="cell">已关闭</div>
                    </td>
                    <td class="el-table_2_column_10 is-center">
                      <div v-text="item.paymentStatus" class="cell">已退款</div>
                    </td>
                    <td class="el-table_2_column_11 is-center">
                      <div v-text="item.shipmentsStatus" class="cell">已发货</div>
                    </td>
                    <td class="el-table_2_column_12 is-center">
                      <div v-text="item.remarksremark" class="cell">订单关闭:买家退货</div>
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
        </div>
      </div>
      
      
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      orderDetails: null
    };
  },
  async created() {
    const id = this.$route.params.id;
    // console.log(id);
    const order = await this.$axios(
      "http://localhost:3000/getorder/id?orderID=" + id
    );
    console.log(order.data[0]);
    this.orderDetails = order.data[0];
  },
  methods: {},

  filters : {
    //将格林尼治时间转年月日，时分秒
    filterTime(time){
      const time1 = new Date(time);
      const year = time1.getFullYear();
      const month = time1.getMonth() + 1;
      const data = time1.getDate();
      const hours = time1.getHours();
      const Minutes = time1.getMinutes();
      const Seconds = time1.getSeconds()
      return `${year}年${month}月${data}日 ${hours}:${Minutes}:${Seconds}`
    }
  },

  computed: {
    //计算订单里所有商品的总价
    total() {
      var totalPrice = 0;
      var freight = 0
      var discountCoupon = 0;
      var PointsDeduction = 0;
      var PreferentialActivities = 0;
      var discountAmount = 0;
      this.orderDetails.goodInformation.forEach(element => {
        //计算总价price
        totalPrice += element.goodCounst * element.goodPrice;
        //计算总运费freight
        freight += element.freight * 1;
        //计算使用的总优惠券discountCoupon
        discountCoupon += element.discountCoupon * 1;
        //计算总的积分抵扣PointsDeduction
        PointsDeduction += element.PointsDeduction * 1;
        //计算总的活动优惠PreferentialActivities
        PreferentialActivities += element.PreferentialActivities * 1;
        //计算总的折扣金额discountAmount
        discountAmount += element.discountAmount * 1;
      });
    
      //订单总价totalAmountOfTheOrder = 运费 + 总价
      var totalAmountOfTheOrder = freight + totalPrice * 1;

      //实付总价 Amount payable = 订单总价 - 优惠券 - 积分抵扣 - 活动优惠 - 折扣金额
      var AmountPayable = totalAmountOfTheOrder - discountCoupon - PointsDeduction - PreferentialActivities - discountAmount;

      return {
        totalPrice,
        freight,
        discountCoupon,
        PointsDeduction,
        PreferentialActivities,
        discountAmount,
        totalAmountOfTheOrder,
        AmountPayable
      };
    }
    //计算商品的总运费
  }
};
</script>