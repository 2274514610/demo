<template>
    <div class="user_admin_box">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>管理员列表</span>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="avatar"
                        label="用户头像"
                        width="200">
                    <template slot-scope="scope">
                        <img :src="scope.row.avatar" alt="" class="avatar_item">
                    </template>
                </el-table-column>
                <el-table-column
                        prop="username"
                        label="姓名"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="phone"
                        label="电话号码"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="job"
                        label="职位"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="sex"
                        label="性别"
                        width="300">
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="200">
                    <template slot-scope="scope">
                        <el-button type="danger" size="mini" @click="change_delete(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

    </div>
</template>

<script>
    const data = [
        {
            id: 1,
            phone: 1111111,
            avatar: 'http://img5.imgtn.bdimg.com/it/u=3396066127,2278714904&fm=26&gp=0.jpg',
            job: '水电主管',
            sex: '1',
            username: '张三',
        },
        {
            id: 2,
            phone: 2222222,
            avatar: 'http://file02.16sucai.com/d/file/2014/0917/7320101193eef1b6ab3e0a6d52313949.jpg',
            job: '设备主管',
            sex: '1',
            username: '李四',
        },
        {
            id: 3,
            phone: 3333333,
            avatar: 'http://www.taopic.com/uploads/allimg/140318/240402-14031PQ14899.jpg',
            job: '前端工程师',
            sex: '1',
            username: '王五',
        },
        {
            id: 6,
            phone: 66666666,
            avatar: 'http://img4.imgtn.bdimg.com/it/u=2101958770,1232807682&fm=26&gp=0.jpg',
            job: '汽修主管',
            sex: '1',
            username: '麻子',
        },
        {
            id: 5,
            phone: 5555555,
            avatar: 'http://image.biaobaiju.com/uploads/20191105/11/1572925743-JGQfvVlgwp.jpg',
            job: '挖掘机主管',
            sex: '1',
            username: '赵六',
        },
    ];
    export default {
        name: "index",
        data() {
            return {
                tableData: data,   //表格数据
            }
        },
        methods: {
            //获取数据的方法
            getData () {
                this.$axios.get('接口').then(res=> {
                    this.tableData = res.data
                })
            },
            //简洁版
            change_delete(id) {
                this.tableData.map((item, index) => {
                    if (item.id === id) {
                        this.tableData.splice(index, 1)
                    }
                })
            },
            //正常情况下
            change_delete_normal(id) {
                this.$confirm('此操作将删除管理员, 确定要继续吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(()=> {
                    //在axios中封装全局的报错方法
                    this.$axios.delete('接口').then(res => {
                        if(res.data.code == 200) {
                            this.$message.success('删除管理员操作成功')
                        }
                    });
                    // 删除成功后，我们要重现调取获取数据的方法，来进行页面的更新
                    this.getData();
                })
                // this.$axios.delete()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .avatar_item {
        width: 90px;
        height: 90px;
        display: block;
    }
    .clearfix {
        span {
            font-weight: 400;
            font-size: 24px;
        }
    }
</style>