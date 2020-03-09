<template>
    <el-menu mode="vertical" background-color="#304156" text-color="#f1f1f1" :router="true">
       <side-bar-item v-for="(item,index) in routes" :key="index" :opt="item" />
    </el-menu>
</template>

<script>
    import SideBarItem from './side-bar-item'
    export default {
        name: "slider-bar",
        components: {
            SideBarItem
        },
        computed: {
            routes () {
                return this.$router.options.routes
            }
        },
        created() {
            // console.log(this.$router.options.routes)
        }
    }
</script>

<style lang="scss" scoped>
.el-menu {
    border-right: none;
}
</style>