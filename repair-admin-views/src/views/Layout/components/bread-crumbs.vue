<template>
    <el-breadcrumb>
        <el-breadcrumb-item v-for="(item,index) in routes" :key="index" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "bread-crumbs",
        computed: {
            routes() {
                if (this.$router.path == '/layout/index') {
                    return this.$route.matched
                } else {
                    return [
                        {
                            meta: {
                                title: '首页'
                            },
                            path: '/layout/index'
                        },
                        ...this.$route.matched
                    ]
                }

            }
        },
        created() {
            console.log(this.$route.matched)
        }
    }
</script>

<style scoped>

</style>