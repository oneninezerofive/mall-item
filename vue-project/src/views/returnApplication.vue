<template>
  <section data-v-0ef526f4 class="app-main">
    <div data-v-4c7852dc class="app-container">
      <div data-v-4c7852dc class="el-card filter-container is-never-shadow">
        <!---->
        <div class="el-card__body">
          <div data-v-4c7852dc>
            <i data-v-4c7852dc class="el-icon-search"></i>
            <span data-v-4c7852dc>筛选搜索</span>
            <button
              data-v-4c7852dc
              type="button"
              class="el-button el-button--primary el-button--small"
              style="float: right;"
            >
              <!---->
              <!---->
              <span>查询搜索</span>
            </button>
            <button
              data-v-4c7852dc
              type="button"
              class="el-button el-button--default el-button--small"
              style="float: right; margin-right: 15px;"
            >
              <!---->
              <!---->
              <span>重置</span>
            </button>
          </div>
          <div data-v-4c7852dc style="margin-top: 15px;">
            <form data-v-4c7852dc class="el-form el-form--inline">
              <div data-v-4c7852dc class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px;">输入搜索：</label>
                <div class="el-form-item__content">
                  <div data-v-4c7852dc class="input-width el-input el-input--small">
                    <!---->
                    <input
                      type="text"
                      autocomplete="off"
                      placeholder="服务单号"
                      class="el-input__inner"
                    />
                    <!---->
                    <!---->
                    <!---->
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-4c7852dc class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px;">处理状态：</label>
                <div class="el-form-item__content">
                  <div data-v-4c7852dc class="el-select input-width el-select--small">
                    <!---->
                    <div class="el-input el-input--small el-input--suffix">
                      <!---->
                      <input
                        type="text"
                        autocomplete="off"
                        placeholder="全部"
                        readonly="readonly"
                        class="el-input__inner"
                      />
                      <!---->
                      <span class="el-input__suffix">
                        <span class="el-input__suffix-inner">
                          <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                          <!---->
                        </span>
                        <!---->
                      </span>
                      <!---->
                    </div>
                    <div
                      class="el-select-dropdown el-popper"
                      style="display: none; min-width: 203px;"
                    >
                      <div class="el-scrollbar" style>
                        <div
                          class="el-select-dropdown__wrap el-scrollbar__wrap"
                          style="margin-bottom: -17px; margin-right: -17px;"
                        >
                          <ul class="el-scrollbar__view el-select-dropdown__list">
                            <!---->
                            <li data-v-4c7852dc class="el-select-dropdown__item">
                              <span>待处理</span>
                            </li>
                            <li data-v-4c7852dc class="el-select-dropdown__item">
                              <span>退货中</span>
                            </li>
                            <li data-v-4c7852dc class="el-select-dropdown__item">
                              <span>已完成</span>
                            </li>
                            <li data-v-4c7852dc class="el-select-dropdown__item">
                              <span>已拒绝</span>
                            </li>
                          </ul>
                        </div>
                        <div class="el-scrollbar__bar is-horizontal">
                          <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                        </div>
                        <div class="el-scrollbar__bar is-vertical">
                          <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                        </div>
                      </div>
                      <!---->
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-4c7852dc class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px;">申请时间：</label>
                <div class="el-form-item__content">
                  <div
                    data-v-4c7852dc
                    class="el-date-editor input-width el-input el-input--small el-input--prefix el-input--suffix el-date-editor--date"
                  >
                    <!---->
                    <input
                      type="text"
                      autocomplete="off"
                      name
                      placeholder="请选择时间"
                      class="el-input__inner"
                    />
                    <span class="el-input__prefix">
                      <i class="el-input__icon el-icon-date"></i>
                      <!---->
                    </span>
                    <span class="el-input__suffix">
                      <span class="el-input__suffix-inner">
                        <i class="el-input__icon"></i>
                        <!---->
                      </span>
                      <!---->
                    </span>
                    <!---->
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-4c7852dc class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px;">操作人员：</label>
                <div class="el-form-item__content">
                  <div data-v-4c7852dc class="input-width el-input el-input--small">
                    <!---->
                    <input type="text" autocomplete="off" placeholder="全部" class="el-input__inner" />
                    <!---->
                    <!---->
                    <!---->
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-4c7852dc class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px;">处理时间：</label>
                <div class="el-form-item__content">
                  <div
                    data-v-4c7852dc
                    class="el-date-editor input-width el-input el-input--small el-input--prefix el-input--suffix el-date-editor--date"
                  >
                    <!---->
                    <input
                      type="text"
                      autocomplete="off"
                      name
                      placeholder="请选择时间"
                      class="el-input__inner"
                    />
                    <span class="el-input__prefix">
                      <i class="el-input__icon el-icon-date"></i>
                      <!---->
                    </span>
                    <span class="el-input__suffix">
                      <span class="el-input__suffix-inner">
                        <i class="el-input__icon"></i>
                        <!---->
                      </span>
                      <!---->
                    </span>
                    <!---->
                  </div>
                  <!---->
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div data-v-4c7852dc class="el-card operate-container is-never-shadow">
        <!---->
        <div class="el-card__body">
          <i data-v-4c7852dc class="el-icon-tickets"></i>
          <span data-v-4c7852dc>数据列表</span>
        </div>
      </div>
      <div data-v-4c7852dc class="table-container">
        <div
          data-v-4c7852dc
          class="el-table el-table--fit el-table--border el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition"
          style="width: 100%;"
        >
          <div class="hidden-columns">
            <div data-v-4c7852dc></div>
            <div data-v-4c7852dc></div>
            <div data-v-4c7852dc></div>
            <div data-v-4c7852dc></div>
            <div data-v-4c7852dc></div>
            <div data-v-4c7852dc></div>
            <div data-v-4c7852dc></div>
            <div data-v-4c7852dc></div>
          </div>
          <div class="el-table__header-wrapper">
            <table
              cellspacing="0"
              cellpadding="0"
              border="0"
              class="el-table__header"
              style="width: 1220px;"
            >
              <colgroup>
                <col name="el-table_52_column_355" width="60" />
                <col name="el-table_52_column_356" width="180" />
                <col name="el-table_52_column_357" width="180" />
                <col name="el-table_52_column_358" width="80" />
                <col name="el-table_52_column_359" width="180" />
                <col name="el-table_52_column_360" width="180" />
                <col name="el-table_52_column_361" width="180" />
                <col name="el-table_52_column_362" width="180" />
                <col name="gutter" width="0" />
              </colgroup>
              <thead class="has-gutter">
                <tr class>
                  <th
                    colspan="1"
                    rowspan="1"
                    class="el-table_52_column_355 is-center el-table-column--selection is-leaf"
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
                  <th colspan="1" rowspan="1" class="el-table_52_column_356 is-center is-leaf">
                    <div class="cell">服务单号</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_52_column_357 is-center is-leaf">
                    <div class="cell">申请时间</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_52_column_358 is-center is-leaf">
                    <div class="cell">用户账号</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_52_column_359 is-center is-leaf">
                    <div class="cell">退款金额</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_52_column_360 is-center is-leaf">
                    <div class="cell">申请状态</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_52_column_361 is-center is-leaf">
                    <div class="cell">处理时间</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_52_column_362 is-center is-leaf">
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
              style="width: 1220px;"
            >
              <colgroup>
                <col name="el-table_52_column_355" width="60" />
                <col name="el-table_52_column_356" width="180" />
                <col name="el-table_52_column_357" width="180" />
                <col name="el-table_52_column_358" width="80" />
                <col name="el-table_52_column_359" width="180" />
                <col name="el-table_52_column_360" width="180" />
                <col name="el-table_52_column_361" width="180" />
                <col name="el-table_52_column_362" width="180" />
              </colgroup>
              <tbody>
                <tr class="el-table__row">
                  <td class="el-table_52_column_355 is-center el-table-column--selection">
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
                  <td class="el-table_52_column_356 is-center">
                    <div class="cell">3</div>
                  </td>
                  <td class="el-table_52_column_357 is-center">
                    <div class="cell">2018-10-17 14:34:57</div>
                  </td>
                  <td class="el-table_52_column_358 is-center">
                    <div class="cell">test</div>
                  </td>
                  <td class="el-table_52_column_359 is-center">
                    <div class="cell">￥3585.98</div>
                  </td>
                  <td class="el-table_52_column_360 is-center">
                    <div class="cell">待处理</div>
                  </td>
                  <td class="el-table_52_column_361 is-center">
                    <div class="cell">N/A</div>
                  </td>
                  <td class="el-table_52_column_362 is-center">
                    <div class="cell">
                      <button
                        data-v-4c7852dc
                        type="button"
                        class="el-button el-button--default el-button--mini"
                      >
                        <!---->
                        <!---->
                        <span>查看详情</span>
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
      <div data-v-4c7852dc class="batch-operate-container">
        <div data-v-4c7852dc class="el-select el-select--small">
          <!---->
          <div class="el-input el-input--small el-input--suffix">
            <!---->
            <input
              type="text"
              autocomplete="off"
              placeholder="批量操作"
              readonly="readonly"
              class="el-input__inner"
            />
            <!---->
            <span class="el-input__suffix">
              <span class="el-input__suffix-inner">
                <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                <!---->
              </span>
              <!---->
            </span>
            <!---->
          </div>
          <div class="el-select-dropdown el-popper" style="display: none; min-width: 205px;">
            <div class="el-scrollbar" style>
              <div
                class="el-select-dropdown__wrap el-scrollbar__wrap"
                style="margin-bottom: -17px; margin-right: -17px;"
              >
                <ul class="el-scrollbar__view el-select-dropdown__list">
                  <!---->
                  <li data-v-4c7852dc class="el-select-dropdown__item selected">
                    <span>批量删除</span>
                  </li>
                </ul>
              </div>
              <div class="el-scrollbar__bar is-horizontal">
                <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
              </div>
              <div class="el-scrollbar__bar is-vertical">
                <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <button
          data-v-4c7852dc
          type="button"
          class="el-button search-button el-button--primary el-button--small"
          style="margin-left: 20px;"
        >
          <!---->
          <!---->
          <span>确定</span>
        </button>
      </div>
      <div data-v-4c7852dc class="pagination-container">
        <div data-v-4c7852dc class="el-pagination is-background">
          <span class="el-pagination__total">共 21 条</span>
          <span class="el-pagination__sizes">
            <div class="el-select">
              <!---->
              <div class="el-input el-input--suffix">
                <!---->
                <input
                  type="text"
                  autocomplete="off"
                  placeholder="请选择"
                  readonly="readonly"
                  class="el-input__inner"
                />
                <!---->
                <span class="el-input__suffix">
                  <span class="el-input__suffix-inner">
                    <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                    <!---->
                  </span>
                  <!---->
                </span>
                <!---->
              </div>
              <div class="el-select-dropdown el-popper" style="display: none; min-width: 110px;">
                <div class="el-scrollbar" style>
                  <div
                    class="el-select-dropdown__wrap el-scrollbar__wrap"
                    style="margin-bottom: -17px; margin-right: -17px;"
                  >
                    <ul class="el-scrollbar__view el-select-dropdown__list">
                      <!---->
                      <li class="el-select-dropdown__item">
                        <span>5条/页</span>
                      </li>
                      <li class="el-select-dropdown__item selected">
                        <span>10条/页</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>15条/页</span>
                      </li>
                    </ul>
                  </div>
                  <div class="el-scrollbar__bar is-horizontal">
                    <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                  </div>
                  <div class="el-scrollbar__bar is-vertical">
                    <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                  </div>
                </div>
                <!---->
              </div>
            </div>
          </span>
          <button type="button" disabled="disabled" class="btn-prev">
            <i class="el-icon el-icon-arrow-left"></i>
          </button>
          <ul class="el-pager">
            <li class="number active">1</li>
            <!---->
            <li class="number">2</li>
            <!---->
            <li class="number">3</li>
          </ul>
          <button type="button" class="btn-next">
            <i class="el-icon el-icon-arrow-right"></i>
          </button>
          <span class="el-pagination__jump">
            前往
            <div class="el-input el-pagination__editor is-in-pagination">
              <!---->
              <input type="number" autocomplete="off" min="1" class="el-input__inner" max="3" />
              <!---->
              <!---->
              <!---->
            </div>页
          </span>
        </div>
      </div>
    </div>
  </section>
</template>