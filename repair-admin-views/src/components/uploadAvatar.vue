<template>
    <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :data=uploadData
            list-type="picture-card"
            :on-success="UploadSuccess">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i class="el-icon-plus"></i>
    </el-upload>
</template>

<script>
    import axios from 'axios'  //因为是请求别的站的地址，需要用没有经过封装的axios
    export default {
        name: "uploadAvatar",
        props: {
          value: String
        },
        data() {
            return {
                imageUrl: '',   //图片上传到七牛云成功后，图片的地址
                uploadData: {  //图片上传到七牛云，需要携带七牛云提供的token
                    token: ''
                },
            }
        },
        created() {
          // this.getToken();
        },
        methods: {
            getToken() {  //获得token
                axios.get('接口').then(res => {
                    this.uploadData.token = res.data.data;
                })
            },
            UploadSuccess(res) {
                this.imageUrl = res.data.data;
                this.$emit('input',this.imageUrl)
            }
        },
        watch: {
            value: {
                immediate: true,
                handler(val) {
                    this.imageUrl = val;
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>