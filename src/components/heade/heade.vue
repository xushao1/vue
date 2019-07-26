<template>
    <div id="heade">
        <div class="head">
            <div class="head-info flex ">
                <div class="img" ><img :src="sell.avatar" alt=""></div>
                <div class="info flex-f1 flex flex-vertical flex-jube">
                    <h3 class="title"><span></span>{{sell.name}}</h3>
                    <p class="description">{{sell.description}} / {{sell.deliveryTime}}分钟送达 </p>
                    <div class="supports" v-if="sell.supports">
                        <div class="support-l"><span :class="['icon',iconClass[0]]"></span> {{ sell.supports[0].description }}</div>
                        <div class="support-r" @click="showDialog">{{ sell.supports.length }}个 <i class="icon icon-keyboard_arrow_right"></i></div>
                    </div>
                </div>
            </div>
            <div class="head-notice flex flex-jube flex-itce">
                <span class="icon icon-bulletin"></span>
                <p class="flex-f1 bulletin"> {{sell.bulletin}}</p>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="nav">
            <ul class="flex flex-juar">
                <li v-for="(text,index) in navText" :key="index" :class="{active: navActive == index}" v-on:click="navClick(index)">{{text}}</li>
            </ul>
        </div>

        <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
        <div class="dialog flex flex-vertical flex-jube" v-show="isShowDialog">
            <h3>{{sell.name}}</h3>
            <div class="star"><star :starSize="24" :starScore="sell.foodScore" v-if="sell.foodScore"></star></div>
            <div class="support">
                <h4 class="title"><span class="line"></span><span class="text">优惠信息</span><span class="line"></span></h4>
                <div class="content">
                    <ul>
                        <li v-for="(text,index) in sell.supports" :key="index"><span :class="['icon',iconClass[index % 3]]"></span>{{text.description}}<span></span></li>
                    </ul>
                </div>
            </div>
            <div class="notice flex-f1">
                <h4 class="title"><span class="line"></span><span class="text">商家公告</span><span class="line"></span></h4>
                <div class="content">
                    <p>{{sell.bulletin}}</p>
                </div>
            </div>
            <div class="close" @click="closeDialog"><i class="icon-close"></i></div>
        </div>
        </transition>
    </div>
</template>

<script>
    // vuex
    // import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    import { mapGetters } from 'vuex';

    import star from '../star/star';
    export default {
        name: "heade",
        data() {
            return {
                // sell: {},
                iconClass: ['icon-decrease', 'icon-discount', 'icon-guarantee', 'icon-invoice', 'icon-special'],
                navText: ['商品','评价','商家'],
                navActive: 0,
                isShowDialog: false,
            }
        },
        components: {
            star
        },
        created () {
            // vuex store 中获取数据
            // this.sell = this.$store.getters.gettreSeller;

        },
        methods: {
            navClick (index) {
                if(index == this.navActive) return;

                this.navActive = index;
            },
            showDialog () {
                this.isShowDialog = true;
            },
            closeDialog () {
                this.isShowDialog = false;
            }
        },
        computed: {
            ...mapGetters('sellInfo', {
                sell: 'gettreSeller'
            })
        }
    }
</script>

<style scoped lang="less">
    @primaryColor: #fff;

    .bgc(@alpha: 0.5) {
        background-color: rgba(7, 17, 27, @alpha);
    }
    .color(@alpha: 0.5){ color: rgba(7, 17, 27, @alpha); }
    span.icon {
        width: 12px;
        height: 12px;
        display: inline-block;
        vertical-align: top;
        &.icon-decrease {
            background: url("./decrease_2@3x.png") no-repeat center center;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
        }
        &.icon-discount {
            background: url("./discount_2@3x.png") no-repeat center center;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
        }
        &.icon-guarantee {
            background: url("./guarantee_2@3x.png") no-repeat center center;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
        }
        &.icon-invoice {
            background: url("./invoice_2@3x.png") no-repeat center center;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
        }
        &.icon-special {
            background: url("./special_2@3x.png") no-repeat center center;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
        }
        &.icon-bulletin {
            background: url("./bulletin@3x.png") no-repeat center center;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
        }
    }



    #heade {
        color: @primaryColor;

        .head {
            background-color: #fff;
            .bgc(0.5);

            .head-info {
                padding: 24px 12px 18px 24px;

                .img {
                    margin-right: 16px;
                    img {
                        width: 64px;
                        height: 64px;
                        -webkit-border-radius: 4px;
                        -moz-border-radius: 4px;
                        border-radius: 4px;
                    }
                }

                .info {
                    padding: 2px 0;
                    h3 {
                        font-size: 16px;
                        font-weight: bold;
                        line-height: 18px;
                        span {
                            display: inline-block;
                            height: 20px;
                            width: 36px;
                            margin-right: 6px;
                            background: url("./brand@3x.png") no-repeat center center;
                            -webkit-background-size: auto 100%;
                            background-size: auto 100%;
                            vertical-align: top;
                        }
                    }
                    .description {
                        font-size: 12px;
                        font-weight: 200;
                        line-height: 12px;

                    }
                    .supports {
                        font-size: 10px;
                        font-weight: 200;
                        line-height: 12px;
                        position: relative;
                        .support-r {
                            .bgc(0.2);
                            padding: 6px 12px;
                            -webkit-border-radius: 16px;
                            -moz-border-radius: 16px;
                            border-radius: 16px;
                            line-height: 24px;
                            position: absolute;
                            right: 0;
                            bottom: -10px;
                        }
                    }
                }

            }
            .head-notice {
                height: 28px;
                line-height: 28px;
                .bgc(0.2);
                padding: 0 12px;
                .icon-bulletin {
                    width: 20px;
                    height: 12px;
                    /*margin-right: 4px;*/
                }

                .bulletin {
                    font-size: 10px;
                    padding: 0 4px;
                    /*line-height: 14px;*/
                    height: 28px;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                }
            }
        }
        .nav {
            border-bottom: 1px solid rgba(7, 17, 27, 0.1);
            height: 40px;
            line-height: 40px;

            li {
                -webkit-flex: 1; -ms-flex: 1; flex: 1;
                font-size: 14px;
                color: rgb(77,28,93);
                text-align: center;
                transition: all 0.5s ease;
                &.active {
                    color: rgb(240,20,20);
                }
            }
        }
        .dialog {
            .bgc(0.85);
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            padding: 64px 36px 32px;
            text-align: center;
            z-index: 2;
            h3 {
                font-size: 16px;
                line-height: 16px;
                font-weight: bold;
                margin-bottom: 16px;
            }
            .title {
                display: -webkit-box;	display: -webkit-flex;	display: flex;
                -webkit-align-items: center; -ms-align-items: center; align-items: center;
                margin-bottom: 24px;
                margin-top: 28px;
                span {
                    &.text {
                        font-size: 14px;
                        font-weight: bold;
                        line-height: 14px;
                        padding: 0 12px;
                    }
                    &.line {
                        -webkit-flex: 1; -ms-flex: 1; flex: 1;
                        border: 1px solid rgba(255,255,255,0.2);
                    }
                }
            }
            .content {
                padding: 0 12px;
                text-align: left;
                li {
                    font-size: 12px;
                    font-weight: 200;
                    line-height: 12px;
                    margin-bottom: 12px;
                    span.icon {
                        margin-right: 6px;
                    }
                }
                p {
                    font-size: 12px;
                    line-height: 2;
                    font-weight: 200;
                }
            }
            .close {
                color: rgba(255,255,255,.5);
                font-size: 32px;
            }
        }
    }
</style>