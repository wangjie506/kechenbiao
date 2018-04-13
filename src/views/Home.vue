<template>
<div class="home">
<el-button type="success" v-if="'1'==$route.params.id" @click="date">+</el-button>
<el-dialog title="修改" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="第几节课" :label-width="formLabelWidth">
        <el-select v-model="form.di" placeholder="请选择">
          <el-option label="第一" value="name1"></el-option>
          <el-option label="第二" value="name2"></el-option>
          <el-option label="第三" value="name3"></el-option>
          <el-option label="第四" value="name4"></el-option>
          <el-option label="第五" value="name5"></el-option>
          <el-option label="第六" value="name6"></el-option>
          <el-option label="第七" value="name7"></el-option>
          <el-option label="第八" value="name8"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="星期" :label-width="formLabelWidth">
        <el-select v-model="form.uid" placeholder="请选择">
          <el-option label="星期一" value="星期一"></el-option>
          <el-option label="星期二" value="星期二"></el-option>
          <el-option label="星期三" value="星期三"></el-option>
          <el-option label="星期四" value="星期四"></el-option>
          <el-option label="星期五" value="星期五"></el-option>
          <el-option label="星期六" value="星期六"></el-option>
          <el-option label="星期日" value="星期日"></el-option>
          
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="add">确 定</el-button>
    </div>
  </el-dialog>

  <el-table
    :data="tableData4"
    max-height="800">
    <el-table-column
      fixed
      prop="uid"
      label="星期"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name1"
      label="第一节课"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name2"
      label="第二节课"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name3"
      label="第三节课"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name4"
      label="第四节课"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name4"
      label="第四节课"
      width="80">
    </el-table-column>
    <el-table-column
      prop="wu"
      label="午休时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name5"
      label="第五节课"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name6"
      label="第六节课"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name7"
      label="第七节课"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name8"
      label="第八节课"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name9"
      label="自习课"
      width="150">
    </el-table-column>
  </el-table>


</div>
</template>

<script>

export default {
    data() {
      return {
        tableData4: [],
        dialogFormVisible:false,
        formLabelWidth:"120px",
        form:{
          di:"",
          uid:""
        }
      }
    },
    watch:{
     '$route'(){
       this.Ajax()
     }
   },
    created(){
      this.Ajax()
    },
    methods:{

      Ajax(){
        this.$http.post('http://localhost:8000',{status:this.$route.params.id},{emulateJSON:true}).then(e=>this.tableData4=e.body)
      },
      deleteRow(e){
        this.$http.post('http://localhost:8000/del',{id:e.id},{emulateJSON:true}).then(e=>e.id=e.body)
        var _index = this.tableData4.indexOf(e)
        this.tableData4.splice(_index,1)
      },
      tan(){
        this.dialogFormVisible=true;
      },

       add(e){
        this.dialogFormVisible=false;
        this.$http.post('http://localhost:8000/add',this.form,{emulateJSON:true}).then(function(){
          this.Ajax()
        });
        
      },
  

 date() {
        this.dialogFormVisible2 = true
        this.$http.post('http://localhost:3000/data', {}, {
          emulateJSON: true
        }).then(e => this.data = e.body)
      },
      updateRow() {
        this.dialogFormVisible2 = false
        this.$http.post('http://localhost:3000/update', {
          week: this.form2.week,
          uid: this.form2.id,
          sty: this.form2.sty
        }, {
          emulateJSON: true
        }).then(function () {
          this.l()
          this.form2 = {}
          this.$message({
            message: '更改成功',
            type: 'success'
          });
        })
      }
    }
  }
</script>


