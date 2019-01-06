<template>
    <div id="app">
        <el-container>
            <el-header>
                <!-- 导航栏 Menu -->
                <Menu></Menu>
            </el-header>
            <el-main>
                <!-- vue router 渲染位置 -->
                <transition
                    name="slide-fade"
                >
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Menu from '@/components/menu.vue'
import store from '@/store.js'

export default {
    name: 'app',
    components: {
        Menu,
    },
    computed: {
        route_link() {
            return store.state.view_id;
        }
    },
    watch: {
        route_link(new_route) {
            switch (new_route) {
                case '1':
                    this.$router.push('aboutme');
                    break;
                case '2-1':
                    this.$router.push('proj1');
                    break;
                case '2-2':
                    this.$router.push('proj2');
                    break;
                case '2-3':
                    this.$router.push('proj3');
                    break;
                case '2-4':
                    this.$router.push('proj4');
                    break;
                case '3':
                    this.$router.push('ftp');
                    break;
            }
        }
    }
}
</script>

<style>
.slide-fade-enter-active {
    transition: all 1.2s ease;
}
.slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
}
body {
    font-family: 'PingFang SC'
}
</style>
