<template>
    <div class="flex flex-jube flex-itce">
        <transition-group enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight" class="flex flex-jube flex-itce">
            <span class="subtract" @click="subtract" v-show="num" :key="0"><i class="icon-remove_circle_outline"></i></span>
            <span class="num" v-show="num" :key="1">{{num}}</span>
        </transition-group>
        <span class="add" @click="add"><i class="icon-add_circle"></i></span>
    </div>
</template>

<script>
    export default {
        name: "addSubtract",
        data () {
            return {
                num: 1
            }
        },
        methods: {
            add () {
                this.num ++;
            },
            subtract () {
                if(this.num == 0) return;
                this.num --;
            }
        }

    }
</script>

<style scoped lang="less">
    div {
        width: 80px;}
span {
    font-size: 24px;
    color: rgb(0,160,220);
    text-align: center;
    height: auto !important;
    &.num {
        width: 30px;
        font-size: 10px;
        color: rgb(147,153,159);

    }
}
</style>