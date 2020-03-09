<template>
    <div>
        <el-submenu v-if="opt.children&&!opt.hidden" index="998">
            <template slot="title">{{opt.meta.title}}</template>
            <side-bar-item v-for="(item,index) in opt.children"  :key="index" :opt="item"
                           :parent-url="opt.path"></side-bar-item>
        </el-submenu>
        <el-menu-item v-if="!opt.children&&!opt.hidden"  :index="itemIndex">
        {{opt.meta.title}}
        </el-menu-item>
    </div>
</template>

<script>
    export default {
        name: "side-bar-item",
        props: {
            opt: Object,
            parentUrl: String
        },
        computed: {
            itemIndex() {
                if(this.parentUrl) {
                    return this.parentUrl + '/' + this.opt.path
                }else {
                    return this.opt.path
                }
            }
        }
    }
</script>

<style scoped>

</style>