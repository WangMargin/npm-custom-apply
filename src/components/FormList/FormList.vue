<template>
  <div class="form-list">
    <a-form layout="horizontal" >
      <a-form-list label="label">
        <a-input v-model:value="state.form.inputVal" />
        df
        df
         dfa
         dfs
      </a-form-list>
    </a-form>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup () {
        const state = reactive({
            form: {
                inputVal: ''
            }
        });
        return {
            state
        };
    }
};

</script>

<style lang="less" scoped>
  .form-list {
    background: red;
    padding: 10px;
    .list {
      background: #2c3e50;
    }
  }
</style>
