export const commonRule = {
  name: [
    {
      required: true,
      message: '请填写姓名',
      type: 'string',
      trigger: 'blur',
    },
  ],
  idNo: [
    {
      required: true,
      message: '请填写身份证号码',
      type: 'string',
      trigger: 'blur',
      validator: (rule, value) => {
        console.log(value);
        if (value.length < 18) {
          return Promise.reject('Age must be greater than 18');
        } else {
          return Promise.resolve();
        }
      },
    },
  ],
  phone: [
    {
      required: true,
      message: '请填写手机号',
      type: 'string',
      trigger: 'blur',
    },
  ],
  temperature: [
    {
      required: false,
      message: '请填写体温',
      type: 'string',
      trigger: 'blur',
    },
  ],
  externalCauses: [
    {
      required: true,
      message: '请选择在外事由',
      type: 'number',
      trigger: 'blur',
    },
  ],
  comeDate: [
    {
      required: true,
      message: '请选择返程日期',
      type: 'string',
      trigger: 'change',
    },
  ],
  comeWay: [
    {
      required: true,
      message: '请填写返程方式',
      type: 'string',
      trigger: 'blur',
    },
  ],
  firstCheck: [
    {
      required: true,
      message: '请选择第一次核酸检测结果',
      type: 'number',
      trigger: 'blur',
    },
  ],
  firstCheckDate: [
    {
      required: true,
      message: '请选择第一次核酸检测日期',
      type: 'string',
      trigger: 'change',
    },
  ],
  secondCheck: [
    {
      required: true,
      message: '请选择第二次核酸检测结果',
      type: 'number',
      trigger: 'blur',
    },
  ],
  secondCheckDate: [
    {
      required: true,
      message: '请选择第二次核酸检测日期',
      type: 'string',
      trigger: 'change',
    },
  ],
  healthCode: [
    {
      required: true,
      message: '请选择您的健康码状态',
      type: 'number',
      trigger: 'change',
    },
  ],
  vaccination: [
    {
      required: true,
      message: '请选择您的疫苗接种情况',
      type: 'number',
      trigger: 'change',
    },
  ],
};
