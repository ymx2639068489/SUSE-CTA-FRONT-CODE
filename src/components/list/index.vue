<template>
  <div>
    <!-- stripe -->
    <el-table
      :data="props.list"
      style="width: 100%"
      :stripe="isStripe === false ? false : true"
      :height="props.height"
      :max-height="props.maxHeight"
      :row-class-name="rowClassName"
      @selection-change="(v: any[]) => emit('selectionChange', v)"
    >
      <el-table-column
        v-for="(item, idx) in props.select"
        :render-header="item.header"
        :key="idx" 
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :fixed="item.fixed"
        align="center"
      />
      <slot></slot>
    </el-table>
    <pager-cpm
      v-if="props.isPage"
      :page="props.page"
      :total-number="props.totalNumber"
      :is_pc="is_pc"
      @page-change="pageChange"
      @size-change="sizeChange"
    />
  </div>
</template>
<script setup lang="ts">
// import { ListSelectDto } from '@/dto/common';
import { ListSelectDto } from '../../dto/common';
import PagerCpm from './pager.vue'
const props = defineProps<{
  list: any,
  select: ListSelectDto[],
  totalNumber?: number,
  page?: number,
  isPage?: boolean,
  maxHeight?: string,
  rowClassName?: any,
  isStripe?: boolean,
  is_pc?: boolean,
  height?: number,
}>()
const emit = defineEmits(['pageChange', 'sizeChange', 'selectionChange'])
function pageChange(n: number) {
  emit('pageChange', n)
}
function sizeChange(n: number) {
  emit('sizeChange', n)
}
</script>
<style scoped>

</style>