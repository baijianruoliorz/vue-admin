<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />

    <el-tree
      ref="tree2"
      :data="data2"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />

  </div>
</template>

<script>
  import subject from "../../../api/edu/subject";
  export default {

    data() {
      return {
        filterText: '',
        data2: [],  //返回所有分类的数据
        defaultProps: {
          children: 'children',
          label: 'title' //数据分类名称的名字 ，必须要改，，不然不显示的。。
        }
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val)
      }
    },
    created() {
      this.getAllSubjectList()
    },

    methods: {
      getAllSubjectList(){
        subject.getSubjectList()
        .then(response=>{
          this.data2=response.data.list
        })
      },
      filterNode(value, data) {
        if (!value) return true
        //注意这里也改成了title...检索功能实现，改成不区分大小写就是全部改成一种类型。。
        return data.title.toLowerCase().indexOf(value) !== -1
      }
    }
  }
</script>

