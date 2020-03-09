<template>
    <div class="add_username">
        <el-card>
            <el-form :model="formData" label-position="left" label-width="110px" style="width: 46%">
                <el-form-item label="头像">
                    <add-user-admin v-model="formData.avatar"/>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="职位">
                    <el-input v-model="formData.job"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="formData.sex" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="formData.phone"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleClick">提交</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import AddUserAdmin from '@/components/uploadAvatar'

    export default {
        name: "index",
        data() {
            return {
                formData: {
                    avatar: '',    //用户头像
                    username: '',  //用户姓名
                    job: '',   //用户职位
                    sex: '',   //用户性别
                    phone: ''  //用户联系方式
                },
                options: [  //用户性别选择输入框数据
                    {
                        label: '男',
                        value: 0
                    },
                    {
                        label: '女',
                        value: 1
                    }
                ]
            }
        },
        components: {
            AddUserAdmin
        },
        methods: {
            // 正常情况下
            // handleClick() {
            //     this.$axios.post('接口',this.formData).then(res => {
            //         if(res.code == 200) {
            //             this.$message.success('添加管理员成功,正在跳转管理员列表页')
            //             setTimeout(()=> {
            //                 this.$router.push('/layout/useradmin')
            //             },1000)
            //         }
            //     })
            // }
        }
    }
</script>

<style scoped>

</style>