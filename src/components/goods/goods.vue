<template>
    <div class="flex goods" v-if="goods">

        <div id="list" class="goods-l" >

            <ul>
                <li v-for="(good,index) in goods" v-bind:key="index">
                    <a class="list-group-item" :href="'#list-item-' + index" :class="{active: index == 0}">
                        <p><span><span class="icon" :class="{icon1 : good.type != -1 }" v-if="good.type != -1"></span>{{good.name}}</span></p>
                    </a>
                </li>
            </ul>
        </div>

        <div  data-spy="scroll" data-target="#list" data-offset="0" class="goods-r flex-f1">

            <div :id="'list-item-' + index " v-for="(good,index) in goods" v-bind:key="index">
                <h4>{{good.name}}</h4>
                <div class="list-item-list">

                        <router-link :to="{name: 'goodsDetail', query:{id: item.id} }" class="list-item-detail " v-for="(item,index) in good.foods" :key="index">
                        <div class="img" ><img :src="item.image" alt=""></div>
                        <div class="info">
                            <h5 class="title">{{item.name}}</h5>
                            <p class="description" v-if="item.description">{{item.description}}</p>
                            <p class="description" ><span class="s1">月售{{item.sellCount}}份</span><span class="s2">好评率{{item.rating}}%</span></p>
                            <div class="supports" >
                                <div class="support-l"><span class="nowPrice"><em>￥</em>{{item.price}}</span><del class="oldPrice" v-if="item.oldPrice"><em>￥</em>{{item.oldPrice}}</del></div>
                                <div class="support-r"><add-subtract :goodInfo="item" ></add-subtract></div>
                            </div>
                        </div>
                        </router-link>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import $ from '../../../node_modules/jquery/dist/jquery';
    // import '../../../node_modules/popper.js/dist/popper';
    import '../../../node_modules/bootstrap/dist/js/bootstrap';
    // import '../../../node_modules/bootstrap/js/dist/util';

    // import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

    // import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {
        name: "goods",
        data () {
            return {
                // goods: JSON.parse(localStorage.getItem('goods'))
            }
        },
        created () {
            // console.log(this.goods);
        },
        computed: {
            ...mapGetters('sellInfo', {
                goods: 'getterGoods'
            })
        },

        mounted () {
            setTimeout(() => {
                // console.log(this.goods);
                // console.log(this.goods[0].foods[0].id);
                // console.log(typeof this.goods[0].foods[0].id);
            //     if(this.goods) {
            //         if(JSON.parse(localStorage.getItem('goods'))) return;
            //         localStorage.setItem('goods', JSON.stringify(this.goods));
            //     }
            //
            },3000);

            // console.log(this.$refs.goods);
            // console.log($('.goods') == this.$refs.goods);


            this.$nextTick(() => {
                $('.goods').scrollspy({ target: '#list' });
                // console.log($('.goods'));
                // console.log(this.goods);
            });

        },
        methods: {

        }

    }
</script>

<style scoped lang="less">
    .ofy {
        height: 100%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .bgc(@alpha: 0.5) {
        background-color: rgba(7, 17, 27, @alpha);
    }

    .bdc(@alpha) {
        border-color: rgba(7,17,27,@alpha);
    }
    .bdn {
        border: none;
    }
    .goods {
        position: relative;
        .ofy;
    }
    @primaryColor: rgba(7,17,27,0.8);
    .goods-l {
        width: 80px;
        background-color: #f3f5f7;
        .ofy;
        li {

            &:first-child {
                p {.bdn}
            }

            a {
                display: block;
                padding: 0 12px;
                height: 54px;
                margin-top: -1px;
                transition: all 1s ease;
                &.active {

                    background-color: #fff;
                    p {
                        z-index: 2;
                        border-color: transparent;
                        border-bottom: 1px solid #fff;
                        span {
                            font-weight: bold;
                        }
                    }
                }
            }
            p {
                display: block;
                height: 100%;
                transition: all 1s ease;
                border-top: 1px solid ;
                .bdc(0.1);
                border-bottom: 1px solid transparent;
                display: -webkit-box;	display: -webkit-flex;	display: flex;
                -webkit-align-items: center; -ms-align-items: center; align-items: center;

                font-size: 12px;
                line-height: 14px;
                font-weight: 200;
                color: @primaryColor;
                position: relative;
                span.icon {
                    width: 12px;
                    height: 12px;
                    display: inline-block;
                    &.icon1 {
                        background: url("./special_3@3x.png") no-repeat center center;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                        margin-right: 4px;
                        vertical-align: top;
                    }
                }

            }
        }
        
    }
    .goods-r {
        .ofy;
        h4 {
            background-color: #f3f5f7;
            line-height: 26px;
            border-left: 2px solid #d9dde1;
            padding-left: 12px;
            color: rgb(147,153,159);
            font-size: 12px;
        }
        .list-item-list {
            padding: 0 18px;
        }

        .list-item-detail {
            padding: 18px 0;
            border-top: 1px solid;
            .bdc(0.1);

            display: -webkit-box;	display: -webkit-flex;	display: flex;
            -webkit-align-items: center; -ms-align-items: center; align-items: center;

            &:first-child {
                .bdn();
            }
            .img {
                margin-right: 10px;
                img {
                    width: 64px;
                    height: 64px;
                    -webkit-border-radius: 4px;
                    -moz-border-radius: 4px;
                    border-radius: 4px;
                }
            }

            .info {
                min-height: 66px;

                padding: 2px 0;
                -webkit-flex: 1; -ms-flex: 1; flex: 1;
                display: -webkit-box;	display: -webkit-flex;	display: flex;
                -webkit-box-orient: vertical;-webkit-flex-flow: column;flex-flow: column;
                -webkit-justify-content: space-between; -ms-justify-content: space-between; justify-content: space-between;

                h5 {
                    font-size: 14px;
                    /*font-weight: bold;*/
                    line-height: 14px;
                    margin-bottom: 2px;
                    color: rgb(7,17,27);
                }
                .description {
                    font-size: 12px;
                    font-weight: 200;
                    line-height: 14px;
                    color: rgb(147,153,159);
                    margin: 4px 0;
                    span {
                        display: inline-block;
                        &.s1 {
                            margin-right: 12px;
                        }
                    }
                }
                .supports {
                    font-size: 10px;
                    font-weight: 200;
                    line-height: 14px;
                    position: relative;
                    .support-l {
                        font-size: 10px;
                        color: rgb(147,153,159);
                        em {
                            font-weight: normal;
                            font-size: 10px;
                            display: inline-block;
                            margin-right: 2px;
                        }
                        .nowPrice {
                            font-size: 14px;
                            line-height: 24px;
                            font-weight: 700;
                            color: rgb(240,20,20);
                            display: inline-block;
                            margin-right: 8px;
                        }
                        .oldPrice {
                            /*text-decoration: underline;*/
                        }
                    }
                    .support-r {
                        line-height: 20px;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                    }
                }
            }

        }
    }
</style>