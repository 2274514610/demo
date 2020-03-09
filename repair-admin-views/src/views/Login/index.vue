<template>
    <div class="login_wrapper">
        <div class="login_box">
            <h1>后台管理系统</h1>
            <el-form>
                <el-form-item label="用户名" style="color: #fff">
                    <el-input v-model="formData.username"/>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formData.password"/>
                </el-form-item>
                <div class="btn_wrapper">
                    <el-button class="btn" type="primary" size="medium" @click="Jump_page">立即登录</el-button>
                </div>

                <div class="test_vuex">
                    用户名:{{username}}
                </div>
                <div class="test_input">
                    <input type="text" v-model="formData.username">
                </div>
                <div class="test_vuex">
                    <el-button type="primary" @click="handChange">修改用户名</el-button>
                    <el-button type="primary" @click="handChange2">异步修改用户名</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    // import {Input, Form, FormItem, Button} from 'element-ui'
    import store from '@/store'
    import {mapState} from 'vuex'

    export default {
        name: "index",
        data() {
            return {
                formData: {
                    username: '',
                }
            }
        },
        // components: {
        //     Input,
        //     Form,
        //     FormItem,
        //     Button
        // },
        // computed: {
        //     username: () => store.state.userNameData.name,
        // },
        computed: mapState({
            username: () => store.state.userNameData.name
        }),
        methods: {
            Jump_page() {
                this.$router.push('/layout')
            },
            handChange() {
                this.$store.commit('HAND_CHANGE', this.formData.username)
            },
            handChange2() {
                setTimeout(() => {
                    this.$store.dispatch('hand_change_username', this.formData.username);
                }, 3000)
            }
        }
    }
</script>

<style lang="scss" scoped src="./index.scss">

</style>