<template>
    <div class="layout_box">
        <header class="header_box">
            <bread-crumbs class="bread_crumbs"/>
            <h1>郑州轻工业学院维修系统</h1>
        </header>
        <div class="slide_box">
            <side-bar/>
        </div>
        <div class="main_box">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import BreadCrumbs from './components/bread-crumbs'
    import SideBar from './components/side-bar'

    export default {
        name: "index",
        components: {
            SideBar,
            BreadCrumbs
        }
    }
</script>

<style lang="scss" scoped>
    .layout_box {
        h1 {
            padding: 15px 0;
        }

        .header_box {
            padding-left: 200px;
            text-align: center;
            border-bottom: 1px solid #eee;
            position: relative;

            .bread_crumbs {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                line-height: 66px;
                padding-left: 220px;
            }
        }

        .slide_box {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            width: 200px;
            background: #304156;
            padding-top: 50px;
        }

        .main_box {
            padding: 15px 0 0 200px;
        }
    }
</style>