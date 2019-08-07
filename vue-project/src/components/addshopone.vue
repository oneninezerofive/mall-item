<template>
  <div>
    <el-card shadow="never" class="box-card" style="width:800px;margin:20px auto;padding:35px">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="填写商品信息"></el-step>
        <el-step title="填写商品促销"></el-step>
        <el-step title="填写商品属性"></el-step>
        <el-step title="选择商品关联"></el-step>
      </el-steps>
      <el-form
        ref="formInline"
        :model="formInline"
        v-if="active === 0"
        style="margin-top:50px;width:600px"
        :rules="rules"
      >
        <el-form-item label="商品分类：" label-width="120px" prop="sort" :hide-required-asterisk="true">
          <el-cascader v-model="formInline.sort" :options="options1" clearable size="small"></el-cascader>
        </el-form-item>
        <el-form-item label="商品名称：" prop="title" label-width="120px">
          <el-input v-model="formInline.title" size="small"></el-input>
        </el-form-item>
        <el-form-item label="副标题：" prop="futitle" label-width="120px">
          <el-input v-model="formInline.futitle" size="small"></el-input>
        </el-form-item>
        <el-form-item label="商品品牌：" prop="brand" label-width="120px">
          <el-select v-model="formInline.brand" placeholder="请选择品牌" size="small">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品介绍：" label-width="120px">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="formInline.textarea"></el-input>
        </el-form-item>
        <el-form-item label="商品货号：" label-width="120px">
          <el-input v-model="input" size="small"></el-input>
        </el-form-item>
        <el-form-item label="商品售价：" label-width="120px">
          <el-input v-model="input" size="small"></el-input>
        </el-form-item>
        <el-form-item label="市场价：" label-width="120px">
          <el-input v-model="input" size="small"></el-input>
        </el-form-item>
        <el-form-item label="商品库存：" label-width="120px">
          <el-input v-model="input" size="small"></el-input>
        </el-form-item>
        <el-form-item label="计量单位：" label-width="120px">
          <el-input v-model="input" size="small"></el-input>
        </el-form-item>
        <el-form-item label="商品重量：" label-width="120px">
          <el-input v-model="input" style="width:300px" size="small"></el-input>
          <span style="margin-left:20px">克</span>
        </el-form-item>
        <el-form-item label="排序" label-width="120px">
          <el-input v-model="input" size="small"></el-input>
        </el-form-item>
        <el-form-item label-width="120px" style="text-align:center">
          <el-button type="primary" @click="next('formInline')" size="small">下一步，填写商品促销</el-button>
        </el-form-item>
      </el-form>
      <el-form
        ref="formInline"
        :model="formInline"
        :rules="rules"
        v-else-if="active === 1"
        style="margin-top:50px;width:600px"
      >
        <el-form-item label="赠送积分：" label-width="120px">
          <el-input v-model="input" size="small"></el-input>
        </el-form-item>
        <el-form-item label="赠送成长值：" label-width="120px">
          <el-input v-model="input" size="small"></el-input>
        </el-form-item>
        <el-form-item label="积分购买限制：" label-width="120px">
          <el-input v-model="input" size="small"></el-input>
        </el-form-item>
        <el-form-item label="预告商品：" label-width="120px">
          <el-switch v-model="value1"></el-switch>
        </el-form-item>
        <el-form-item label="商品上架：" label-width="120px">
          <el-switch v-model="value2"></el-switch>
        </el-form-item>
        <el-form-item label="商品推荐：" label-width="120px">
          <span style="margin-right: 10px;">新品</span>
          <el-switch v-model="value3"></el-switch>
          <span style="margin:0 10px;">推荐</span>
          <el-switch v-model="value4"></el-switch>
        </el-form-item>
        <el-form-item label="服务保证：" label-width="120px">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="无忧退货"></el-checkbox>
            <el-checkbox label="快速退款"></el-checkbox>
            <el-checkbox label="免费包邮"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="详细页标题：" label-width="120px">
          <el-input v-model="input" size="small"></el-input>
        </el-form-item>
        <el-form-item label="详细页描述：" label-width="120px">
          <el-input v-model="input" size="small"></el-input>
        </el-form-item>
        <el-form-item label="商品关键字：" label-width="120px">
          <el-input v-model="input" size="small"></el-input>
        </el-form-item>
        <el-form-item label="商品备注：" label-width="120px">
          <el-input type="textarea" :rows="2"></el-input>
        </el-form-item>
        <el-form-item label="选择优惠方式：" label-width="120px">
          <el-button plain size="mini">无优惠</el-button>
          <el-button plain size="mini">特惠促销</el-button>
          <el-button plain size="mini">会员价格</el-button>
          <el-button plain size="mini">阶梯价格</el-button>
          <el-button plain size="mini">满减价格</el-button>
        </el-form-item>
        <el-form-item label-width="120px" style="text-align:center">
          <el-button plain @click="prev" size="small">上一步，填写商品信息</el-button>
          <el-button type="primary" @click="next('formInline')" size="small">下一步，填写商品促销</el-button>
        </el-form-item>
      </el-form>
      <el-form
        ref="formInline"
        :model="formInline"
        :rules="rules"
        v-else-if="active === 2"
        style="margin-top:50px;width:600px"
      >
        <el-form-item label="属性类型：" label-width="120px">
          <el-cascader v-model="formInline.leixing" :options="options3" clearable size="small"></el-cascader>
        </el-form-item>
        <el-form-item label="商品规格：" label-width="120px">
          <el-input v-model="input" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="商品参数：" label-width="120px">
          <el-input v-model="input" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label-width="120px" style="text-align:center">
          <el-button plain @click="prev" size="small">上一步，填写商品促销</el-button>
          <el-button type="primary" @click="next('formInline')" size="small">下一步，填写商品关联</el-button>
        </el-form-item>
      </el-form>
      <el-form
        ref="formInline"
        :model="formInline"
        :rules="rules"
        v-else
        style="margin-top:50px;width:680px"
      >
        <el-form-item label-width="120px" label="关联专题：">
          <el-transfer
            size="small"
            filterable
            :titles="['待选择', '已选择']"
            :filter-method="filterMethod"
            filter-placeholder="请输入专题名称"
            v-model="value"
            :data="data"
          ></el-transfer>
        </el-form-item>
        <el-form-item label-width="120px" style="text-align:center">
          <el-button plain @click="prev" size="small">上一步，填写商品属性</el-button>
          <el-button type="primary" @click="dialogVisible = true" size="small">完成，提交商品</el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <span>添加成功</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogVisible = false">
                <el-link :underline="false" href="#/listshop">确定</el-link>
              </el-button>
            </span>
          </el-dialog>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    const generateData = _ => {
      const data = [];
      const cities = [
        "储鲜冷冻灵活变，多门无霜更贴心",
        "想喝健康水，就用304不锈钢热水壶",
        "你尽情赖床！早餐“煲”在它身上",
        "小白变大厨，微波炉为实力加持",
        "十秒鲜榨，冬日把爱浓缩成杯果汁",
        "赖床无罪，香酥面包营养又便捷",
        "夹心饼干，予多重滋味交织舌尖"
      ];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          cities: cities[index]
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.cities.indexOf(query) > -1;
      },
      rules: {
        sort: [
          { required: true, message: "请选择商品分类", trigger: "change" }
        ],
        title: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        futitle: [{ required: true, message: "请输入副标题", trigger: "blur" }],
        brand: [
          { required: true, message: "请选择商品品牌", trigger: "change" }
        ]
      },
      value1: false,
      value2: false,
      value3: false,
      value4: false,
      checkList: [],
      dialogVisible: false,
      formInline: {
        search: "",
        title: "",
        futitle: "",
        number: "",
        sort: "",
        brand: "",
        state: "",
        status: "",
        textarea: "",
        leixing: ""
      },
      options1: [
        {
          label: "服装",
          value: "服装",
          children: [
            {
              value: "外套",
              label: "外套"
            },
            {
              value: "T恤",
              label: "T恤"
            },
            {
              value: "休闲裤",
              label: "休闲裤"
            },
            {
              value: "牛仔裤",
              label: "牛仔裤"
            },
            {
              value: "chenshan",
              label: "衬衫"
            },
            {
              value: "男鞋",
              label: "男鞋"
            }
          ]
        },
        {
          value: "手机数码",
          label: "手机数码",
          children: [
            {
              value: "手机通讯",
              label: "手机通讯"
            },
            {
              value: "手机配件",
              label: "手机配件"
            },
            {
              value: "摄影摄像",
              label: "摄影摄像"
            },
            {
              value: "影音娱乐",
              label: "影音娱乐"
            },
            {
              value: "数码配件",
              label: "数码配件"
            },
            {
              value: "设备",
              label: "智能设备"
            }
          ]
        },
        {
          value: "家用电器",
          label: "家用电器",
          children: [
            {
              value: "电视",
              label: "电视"
            },
            {
              value: "空调",
              label: "空调"
            },
            {
              value: "洗衣机",
              label: "洗衣机"
            },
            {
              value: "冰箱",
              label: "冰箱"
            },
            {
              value: "厨卫大电",
              label: "厨卫大电"
            },
            {
              value: "厨房小电",
              label: "厨房小电"
            },
            {
              value: "生活电器",
              label: "生活电器"
            },
            {
              value: "个护健康",
              label: "个护健康"
            }
          ]
        },
        {
          value: "家具家装",
          label: "家具家装",
          children: [
            {
              value: "厨房卫浴",
              label: "厨房卫浴"
            },
            {
              value: "灯饰照明",
              label: "灯饰照明"
            },
            {
              value: "五金工具",
              label: "五金工具"
            },
            {
              value: "我是家具",
              label: "卧室家具"
            },
            {
              value: "客厅家具",
              label: "客厅家具"
            }
          ]
        },
        {
          value: "汽车用品",
          label: "汽车用品",
          children: [
            {
              value: "全新整车",
              label: "全新整车"
            },
            {
              value: "车载电器",
              label: "车载电器"
            },
            {
              value: "维修保养",
              label: "维修保养"
            },
            {
              value: "汽车装饰",
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
          label: "服装-T恤",
          value: "服装-T恤"
        },
        {
          label: "服装-裤装",
          value: "服装-裤装"
        },
        {
          label: "手机数码-手机通讯",
          value: "手机数码-手机通讯"
        },
        {
          label: "配件",
          value: "配件"
        },
        {
          label: "居家",
          value: "居家"
        },
        {
          label: "洗护",
          value: "洗护"
        },
        {
          label: "测试分类",
          value: "测试分类"
        }
      ],
      active: 0,
      input: ""
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    next(formName) {
      console.log(this.formInline);
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (this.active <= 3) {
            this.active++;
          }
          if (this.active == 4) {
            await this.$axios
              .get(
                "http://localhost:3000/addshop?brand=" +
                  this.formInline.brand +
                  "&title=" +
                  this.formInline.title
              )
              .then(async function(data) {
                if (data.status == 200) {
                  this.dialogVisible = true;
                }
              });
          }
        }
      });
    },
    prev() {
      if (this.active > 0) {
        this.active--;
      }
    }
  }
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

