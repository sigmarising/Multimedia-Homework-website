<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="1">个人介绍</el-menu-item>
            <el-submenu index="2">
                <template slot="title">课程实验信息</template>
                <el-menu-item index="2-1">实验1 - 音频采集与处理</el-menu-item>
                <el-menu-item index="2-2">实验2 - 图像处理</el-menu-item>
                <el-menu-item index="2-3">实验3 - 动画制作</el-menu-item>
                <el-menu-item index="2-4">实验4 - 网站制作</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">FTP</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import store from '@/store.js'

export default {
    name: 'Menu',
    data() {
        return {
            activeIndex: '1'
        }
    },
    created() {
        switch (this.$route.path) {
            case '/':
                this.activeIndex = '1';
                break;
            case '/aboutme':
                this.activeIndex = '1';
                break;
            case '/proj1':
                this.activeIndex = '2-1';
                break;
            case '/proj2':
                this.activeIndex = '2-2';
                break;
            case '/proj3':
                this.activeIndex = '2-3';
                break;
            case '/proj4':
                this.activeIndex = '2-4';
                break;
            case '/ftp':
                this.activeIndex = '3';
                break;
        }
    },
    methods: {
        // eslint-disable-next-line
        handleSelect(key, keyPath) {
            store.commit('change_view', { to: key.toString() });
        }
    }

}
</script>