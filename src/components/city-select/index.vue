<template>
  <a-spin :spinning="loading" wrapperClassName="city-select-row">
    <a-select
      class="item"
      labelInValue
      v-model:value="state.province"
      showSearch
      @select="selectProvinceItem"
    >
      <a-select-option v-for="item in localProvince" :key="item.id">
        {{ item.name }}
      </a-select-option>
    </a-select>
    <a-select
      class="item"
      :disabled="!state.province"
      v-model:value="state.city"
      labelInValue
      showSearch
      @select="selectCityItem"
    >
      <a-select-option v-for="item in loadedCity" :key="item.id">
        {{ item.name }}
      </a-select-option>
    </a-select>
  </a-spin>
</template>
<script>
import { toRaw, defineComponent, computed, reactive } from 'vue';
// @ts-ignore
import localProvince from './geographic/province.json'; // @ts-ignore

import localCity from './geographic/city.json'; // const nullSelectItem: LabeledValue = {
//   label: '',
//   value: '',
//   key: '',
// };

export default defineComponent({
  name: 'CitySelect',
  props: {
    province: {
      type: Array,
      default: () => undefined,
    },
    city: {
      type: Array,
      default: () => undefined,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change'],

  setup(props, { emit }) {
    const state = reactive({
      province: undefined,
      city: undefined,
    });
    const loadedCity = computed(() => {
      return (state.province && localCity[state.province.key]) || [];
    });

    const selectProvinceItem = () => {
      state.city = undefined;
      emit('change', toRaw(state));
    };

    const selectCityItem = () => {
      emit('change', toRaw(state));
    };

    return {
      state,
      localProvince,
      loadedCity,
      selectProvinceItem,
      selectCityItem,
    };
  }, // components: {
  //   [Select.name]: Select,
  //   [Select.Option.name]: Select.Option,
  //   [Select.OptGroup.name]: Select.OptGroup,
  //   [Spin.name]: Select,
  // },
});
</script>

<style lang="less" scoped>
@import '~ant-design-vue/es/style/themes/default.less';

.city-select-row {
  .item {
    width: 50%;
    max-width: 220px;
  }
  .item:first-child {
    width: ~'calc(50% - 8px)';
    margin-right: 8px;
  }
}

@media screen and (max-width: @screen-sm) {
  .item:first-child {
    margin: 0;
    margin-bottom: 8px;
  }
}
</style>
