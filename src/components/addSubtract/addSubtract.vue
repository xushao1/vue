<template>
    <div class="flex flex-jube flex-itce addSubtract">
        <transition-group enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight" class="flex flex-jube flex-itce">
            <span class="subtract" @click.prevent="subtract" v-show="num" :key="0"><i class="icon-remove_circle_outline"></i></span>
            <span class="num" v-show="num" :key="1">{{num}}</span>
        </transition-group>
        <span class="add" v-on:click.prevent="add"><i class="icon-add_circle"></i></span>

    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: "addSubtract",
        data () {
            return {
                // num: 0,
                // cartList: []

            }
        },
        props: [
            'goodInfo'
        ],
        watch: {
            // cartList: list => {
            //     // console.log(this.id);
            //     console.log(this.cartList);
            //     console.log(list);
            //     // return list;
            // },

            // cartList: {
            //     handler: val =>  {
            //         console.log('加减组件----------');
            //         // console.log(val);
            //         // return 111;
            //     },
            //     deep: true
            // }
        },
        computed: {
            ...mapGetters('cart', {
                cartList: 'getterCartList'
            }),
            num: {
                get: function () {
                    let n = 0;
                    for (let i = 0; i < this.cartList.length; i++) {
                        if(this.goodInfo.id === this.cartList[i].id) {
                            n = this.cartList[i].num;
                        }
                    }
                    return n;
                }
            }
        },
        methods: {
            add (e) {
                console.log(e);
                // e.stopPropagation();
                // e.stopPropagation()
                // let _this = this;
                // this.num ++;
                // this.good['cartNum'] = this.num;
                // console.log(this.good);
                // console.log(this.goodInfo);
                //向vuex 中传递
                this.addInfo(this.goodInfo);
                // console.log(_this.cartList);
                // console.log(_this.id);
                // console.log(_this.id == _this.cartList[0].id);
                // for (let i = 0; i < _this.cartList.length; i++) {
                //     if(_this.goodInfo.id == _this.cartList[i].id) {
                //         // console.log('num-------------');
                //         _this.num = _this.cartList[i].num;
                //         break;
                //     }
                // }
                // console.log(this.$store.getters['cart/getterCartList'][0].id == this.id);


            },
            subtract () {
                // if(this.num == 0) return;
                // let _this = this;
                // this.num ++;
                // this.good['cartNum'] = this.num;
                // console.log(this.good);
                //向vuex 中传递
                this.removeInfo(this.goodInfo);
                // console.log(_this.cartList);
                // console.log(_this.id);
                // console.log(_this.id == _this.cartList[0].id);
                // for (let i = 0; i < _this.cartList.length; i++) {
                //     if(_this.goodInfo.id == _this.cartList[i].id) {
                //         // console.log('num-------------');
                //         _this.num = _this.cartList[i].num;
                //         break;
                //     }
                // }

            },
            ...mapActions('cart', [
                'addInfo',
                'removeInfo'
            ])
        },

    }
</script>

<style scoped lang="less">

    div.addSubtract {
        width: 70px;
        position: relative;
    }
span {
    font-size: 24px;
    color: rgb(0,160,220);
    text-align: center;
    height: auto !important;
    &.num {
        width: 20px;
        font-size: 10px;
        color: rgb(147,153,159);

    }
}
</style>