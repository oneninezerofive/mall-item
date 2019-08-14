<template>
  <div style="width:97%;padding:20px">
    <el-card shadow="never" class="box-card">
      <div>
        <i style="float:left" class="el-icon-search"></i>
        <span style="float:left;line-height:1">筛选搜索</span>
        <button
          type="button"
          class="el-button el-button--primary el-button--small"
          style="float: right;"
          @click="search"
        >
          <span>查询结果</span>
        </button>
        <button
          type="button"
          class="el-button el-button--default el-button--small"
          style="float: right; margin-right: 15px;"
        >
          <span>重置</span>
        </button>
      </div>
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        style="margin-top:15px;clear:both"
      >
        <el-form-item style="line-height:1" label="输入搜索：" label-width="140px">
          <el-input v-model="formInline.search" placeholder="商品名称" size="small"></el-input>
        </el-form-item>
        <el-form-item style="line-height:1" label="商品货号：" label-width="140px">
          <el-input v-model="formInline.number" placeholder="商品货号" size="small"></el-input>
        </el-form-item>
        <el-form-item style="line-height:1" label="商品分类：" label-width="140px">
          <el-cascader v-model="formInline.sort" :options="options1" clearable size="small"></el-cascader>
        </el-form-item>
        <el-form-item style="line-height:1" label="商品品牌：" label-width="140px">
          <el-select v-model="formInline.brand" placeholder="请选择品牌" size="small">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="line-height:1" label="上架状态：" label-width="140px">
          <el-select v-model="formInline.state" placeholder="全部" size="small">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="line-height:1" label="审核状态：" label-width="140px">
          <el-select v-model="formInline.status" placeholder="全部" size="small">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card" shadow="never" style="margin-top:20px">
      <div class="clearfix">
        <i style="float:left" class="el-icon-tickets"></i>
        <span style="float:left;line-height:1">数据列表</span>
        <el-button plain style="float:right" size="mini">
          <el-link :underline="false" href="#/addshop">添加</el-link>
        </el-button>
      </div>
    </el-card>
    <el-table
      border
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%;margin-top:20px"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="57" align="center"></el-table-column>
      <el-table-column type="index" label="编号" width="100" align="center"></el-table-column>
      <el-table-column label="商品图片" width="110" align="center">
        <template slot-scope="scope">
          <el-image style="width:80px" :src="scope.row.url"></el-image>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" width="83" align="center">
        <template slot-scope="scope">
          <p>{{scope.row.mingchen1}}</p>
          <p>{{scope.row.mingchen2}}</p>
        </template>
      </el-table-column>
      <el-table-column label="价格/货号" width="110" align="center">
        <template slot-scope="scope">
          <p>{{scope.row.price}}</p>
          <p>{{scope.row.huohao}}</p>
        </template>
      </el-table-column>
      <el-table-column label="标签" width="130" align="center">
        <template slot-scope="scope">
          <p>
            <span>上架：</span>
            <el-switch v-model="scope.row.putaway"></el-switch>
          </p>
          <p>
            <span>新品：</span>
            <el-switch v-model="scope.row.new_prodce"></el-switch>
          </p>
          <p>
            <span>推荐：</span>
            <el-switch v-model="scope.row.recommend"></el-switch>
          </p>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" width="90" align="center"></el-table-column>
      <el-table-column label="SKU库存" width="95" align="center">
        <template>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
        </template>
      </el-table-column>
      <el-table-column prop="sales" label="销量" width="90" align="center"></el-table-column>
      <el-table-column label="审核状态" width="95" align="center">
        <template slot-scope="scope">
          <p>{{scope.row.check}}</p>
          <el-button type="text">审核详情</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <p>
            <el-button size="small">查看</el-button>
            <el-button size="small">编辑</el-button>
          </p>
          <p>
            <el-button size="small">日志</el-button>
            <el-button size="small" type="danger" @click="del(scope.row._id,scope.$index)">删除</el-button>
          </p>
        </template>
      </el-table-column>
    </el-table>
    <el-select  v-model="value" placeholder="批量操作" style="margin-top:20px;float:left" size="small">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button @click="change" type="primary" size="small" style="margin: 20px 160px 0 0px;">确定</el-button>
    <el-pagination
      style="float:right;margin-top:20px"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pages"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="alldata.length"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      pagesnum: 5,
      pages: [5, 10, 15],
      alldata: [],
      currentPage: 1,
      formInline: {
        search: "",
        number: "",
        sort: "",
        brand: "",
        state: "",
        status: ""
      },
      options: [
        {
          value: "0",
          label: "商品上架"
        },
        {
          value: "1",
          label: "商品下架"
        },
        {
          value: "2",
          label: "设为推荐"
        },
        {
          value: "3",
          label: "取消推荐"
        },
        {
          value: "4",
          label: "设为新品"
        },
        {
          value: "5",
          label: "取消新品"
        },
        {
          value: "6",
          label: "转移到分类"
        },
        {
          value: "7",
          label: "移入回收站"
        }
      ],
      options1: [
        {
          label: "服装",
          value: "cloth",
          children: [
            {
              value: "waitao",
              label: "外套"
            },
            {
              value: "Txu",
              label: "T恤"
            },
            {
              value: "xiuxianku",
              label: "休闲裤"
            },
            {
              value: "niuzaiku",
              label: "牛仔裤"
            },
            {
              value: "chenshan",
              label: "衬衫"
            },
            {
              value: "nanxie",
              label: "男鞋"
            }
          ]
        },
        {
          value: "shoujishuma",
          label: "手机数码",
          children: [
            {
              value: "tongxun",
              label: "手机通讯"
            },
            {
              value: "peijian",
              label: "手机配件"
            },
            {
              value: "sheying",
              label: "摄影摄像"
            },
            {
              value: "yule",
              label: "影音娱乐"
            },
            {
              value: "shuma",
              label: "数码配件"
            },
            {
              value: "shebei",
              label: "智能设备"
            }
          ]
        },
        {
          value: "dianqi",
          label: "家用电器",
          children: [
            {
              value: "dianshi",
              label: "电视"
            },
            {
              value: "kongtiao",
              label: "空调"
            },
            {
              value: "xiyiji",
              label: "洗衣机"
            },
            {
              value: "bingxiang",
              label: "冰箱"
            },
            {
              value: "dadian",
              label: "厨卫大电"
            },
            {
              value: "xiaodian",
              label: "厨房小电"
            },
            {
              value: "shenghuo",
              label: "生活电器"
            },
            {
              value: "jiankang",
              label: "个护健康"
            }
          ]
        },
        {
          value: "jiazhuang",
          label: "家具家装",
          children: [
            {
              value: "yuwei",
              label: "厨房卫浴"
            },
            {
              value: "dengshi",
              label: "灯饰照明"
            },
            {
              value: "wujin",
              label: "五金工具"
            },
            {
              value: "woshi",
              label: "卧室家具"
            },
            {
              value: "keting",
              label: "客厅家具"
            }
          ]
        },
        {
          value: "qiche",
          label: "汽车用品",
          children: [
            {
              value: "zhengche",
              label: "全新整车"
            },
            {
              value: "chezai",
              label: "车载电器"
            },
            {
              value: "wujin",
              label: "维修保养"
            },
            {
              value: "zhuangshi",
              label: "汽车装饰"
            }
          ]
        }
      ],
      options2: [
        {
          label: "小米",
          value: "xiaomi"
        },
        {
          label: "七匹狼",
          value: "qipilang"
        },
        {
          label: "海澜之家",
          value: "hailan"
        },
        {
          label: "苹果",
          value: "pingguo"
        },
        {
          label: "三星",
          value: "sanxing"
        },
        {
          label: "华为",
          value: "huawei"
        },
        {
          label: "格力",
          value: "geli"
        },
        {
          label: "方太",
          value: "fantai"
        },
        {
          label: "万和",
          value: "wanhe"
        },
        {
          label: "OPPO",
          value: "oppo"
        },
        {
          label: "NIKE",
          value: "nike"
        }
      ],
      options3: [
        {
          label: "上架",
          value: "shangjia"
        },
        {
          label: "下架",
          value: "xiajia"
        }
      ],
      options4: [
        {
          label: "审核通过",
          value: "tongguo"
        },
        {
          label: "未审核",
          value: "weishenhe"
        }
      ],
      tableData: []
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      this.pagesnum = val;
      this.tableData = this.alldata.slice(
        (this.currentPage - 1) * this.pagesnum,
        this.pagesnum * this.currentPage
      );
    },
    handleCurrentChange(val) {
      this.tableData = this.alldata.slice(
        (val - 1) * this.pagesnum,
        this.pagesnum * val
      );
    },
    async del(val, index) {
      var _this = this;
      await this.$axios
        .get("http://localhost:3000/delshop?_id=" + val)
        .then(async function(data) {
          if (data.status == 200) {
            _this.alldata.splice(index - 1, 1);
            _this.tableData = _this.alldata.slice(
              (_this.currentPage - 1) * _this.pagesnum,
              _this.pagesnum * _this.currentPage
            );
          }
        });
    },
    async search() {
      let data = await this.$axios.get(
        "http://localhost:3000/selectshop?mingchen1=" +
          this.formInline.search +
          "&mingchen2=" +
          this.formInline.brand +
          "&putaway=" +
          this.formInline.state
      );
      this.formInline.search = this.formInline.brand = this.formInline.state =
        "";
      this.alldata = data.data;
      this.tableData = this.alldata.slice(
        (this.currentPage - 1) * this.pagesnum,
        this.pagesnum * this.currentPage
      );
    },
    change() {
      let val = this.value;
      console.log(val);
      if (val == "0") {
        this.tableData.forEach(item => {
          item.putaway = true;
        });
      }
      if (val == "1") {
        this.tableData.forEach(item => {
          item.putaway = false;
        });
      }
      if (val == "4") {
        this.tableData.forEach(item => {
          item.new_prodce = true;
        });
      }
      if (val == "5") {
        this.tableData.forEach(item => {
          item.new_prodce = false;
        });
      }
      if (val == "2") {
        this.tableData.forEach(item => {
          item.recommend = true;
        });
      }
      if (val == "3") {
        this.tableData.forEach(item => {
          item.recommend = false;
        });
      }
    }
  },
  async created() {
    let data = await this.$axios.get("http://localhost:3000/findlist");
    this.alldata = data.data;
    this.tableData = this.alldata.slice(
      (this.currentPage - 1) * this.pagesnum,
      this.pagesnum * this.currentPage
    );
  }
};
</script>
