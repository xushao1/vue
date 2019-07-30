<template>
    <div class="sellInfo" v-if="sell">
        <div class="section section1">
            <div class="sect1-t bdb flex flex-jube">
                <div class="title">
                    <h4>{{sell.name}}</h4>
                    <div class="flex starBox"><star starSize="15" :starScore="sell.score" v-if="sell.score"></star><p>({{sell.ratingCount}})</p><p>月售{{sell.sellCount}}单</p></div>
                </div>

                <div class="collect" @click="collect = !collect" :class="{'active':collect}">
                    <p><i class="icon icon-favorite"></i></p>
                    <p class="text">{{collect ? '已收藏' : '收藏'}}</p>
                </div>

            </div>
            <div class="sect1-b flex">
                <div class="sect1-b-item1">
                    <p class="p1">起送价</p>
                    <p class="p2">{{sell.minPrice}}<span>元</span></p>
                </div>
                <div class="sect1-b-item2">
                    <p class="p1">商家配送</p>
                    <p class="p2">{{sell.deliveryPrice}}<span>元</span></p>
                </div>
                <div class="sect1-b-item3">
                    <p class="p1">平均配送时间</p>
                    <p class="p2">{{sell.deliveryTime}}<span>分钟</span></p>
                </div>
            </div>
        </div>
        <div class="section section2">
            <h4>公告与活动</h4>
            <p>{{sell.bulletin}}</p>
            <ul>
                <li v-for="(text,index) in sell.supports" :key="index"><span :class="['icon',iconClass[index % 3]]"></span>{{text.description}}<span></span></li>
            </ul>
        </div>
        <div class="section section3">
            <h4>商家实景</h4>
            <div class="img flex ">
<!--                <img :src="img" alt="" v-for="(img,index) in sell.pics" :key="index">-->
                <vue-preview :slides="imgs" @close="handleClose" v-if="imgs"></vue-preview>
            </div>
        </div>
        <div class="section section4">
            <h4>商家信息</h4>
            <ul>
                <li v-for="(info,index) in sell.infos" :key="index">{{info}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {  mapGetters } from 'vuex';
    export default {
        name: "sellInfo",
        data () {
            return {
                collect: false,
                iconClass: ['icon-decrease', 'icon-discount', 'icon-guarantee', 'icon-invoice', 'icon-special'],
                // imgs: []
            }
        },
        computed: {
            ...mapGetters('sellInfo', {
                sell: 'getterSeller'
            }),
            imgs () {
                let pics = this.sell.pics;
                // console.log(pics);
                let imgs = [];
                if (pics) {
                    pics.forEach( (pic) => {
                        imgs.push({
                            src: pic,
                            msrc: pic,
                            alt: 'picture1',
                            title: 'Image Caption 1',
                            w: 180,
                            h: 180
                        });
                    });
                }

                // for (let i = 0; i < pics.length; i++) {
                //     imgs.push({
                //         src: pics[i],
                //         msrc: pics[i],
                //         alt: 'picture1',
                //         title: 'Image Caption 1',
                //         w: 300,
                //         h: 300
                //     });
                // }

                return imgs;
            }
        },
        mounted () {
            // setTimeout(() => {
            //     console.log(this.sell);
            // },2000);
        },
        methods: {
            handleClose () {
                // console.log('close ');
            }
        }
    }
</script>

<style lang="less">
    .my-gallery {
        height: 90px;
        overflow-x: scroll;
        display: -webkit-box;	display: -webkit-flex;	display: flex;
        &::-webkit-scrollbar {
             display: none;
         }
        img {
            width: 120px;
            height: 90px;
            margin-right: 6px;
        }
    }
</style>
<style scoped lang="less">
    @primaryColor: rgb(7,17,27);
    @firstColor: rgb(77,85,93);
    @secondColor: rgb(147,153,159);

    span.icon {
        width: 16px;
        height: 16px;
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
    .sellInfo {
        background-color: #f3f5f7;
    }
    .bdb {
        border-bottom: 1px solid rgba(7,17,27,0.1);
    }
.section {
    background-color: #fff;
    border-top: 2px solid #e6e7e8;
    border-bottom: 2px solid #e6e7e8;
    margin-bottom: 16px;
    padding: 18px;
    h4 {
        font-size: 14px;
        color: @primaryColor;
        line-height: 14px;
        font-weight: 600;
        margin-bottom: 8px;
    }
    .sect1-t {
        padding-bottom: 8px;
        .starBox {
            font-size: 10px;
            color: @firstColor;
            line-height: 18px;

            .star {
                position: relative;
                top: 2px;
            }
            p {
                margin: 0 8px;
                line-height: 18px;
            }
        }
        .collect {
            width: 45px;
            text-align: center;
            p.text {
                font-size: 10px;
                color: @firstColor;
                /*line-height: 10px;*/
            }
            i.icon {
                font-size: 24px;
                line-height: 24px;
                color: @firstColor;
            }

            &.active {
                i.icon {
                    color: red;
                }
            }
        }

    }
    &.section1 {
        border-top: none;
    }
    .sect1-b {
        padding-top: 18px;
        text-align: center;
        div {
            -webkit-flex: 1; -ms-flex: 1; flex: 1;
            border-right: 1px solid rgba(7,17,27,0.1);
            &.sect1-b-item3 {
                border: none;
            }
        }
        p.p1 {
            font-size: 10px;
            color: @secondColor;
            line-height: 10px;
            margin-bottom: 4px;
        }
        p.p2 {
            font-size: 24px;
            font-weight: 200;
            color: @primaryColor;
            line-height: 24px;
            span {
                font-size: 10px;
            }
        }
    }
    &.section2 {
        padding-bottom: 0;
        p {
            font-size: 12px;
            font-weight: 200;
            line-height: 24px;
            color: rgb(240,20,20);
            margin-bottom: 16px;
        }
        li {
            padding: 16px 12px;
            font-size: 12px;
            font-weight: 200;
            line-height: 16px;
            color: @primaryColor;
            border-top: 1px solid rgba(7,17,27,0.1);
            span.icon {
                margin-right: 6px;
            }
        }
    }
    &.section3 {
        h4 {
            margin-bottom: 12px;
        }
        .img {
            height: 90px;
            overflow-x: scroll;
            &::-webkit-scrollbar {
                display: none;
            }
        }
        img {
            width: 120px;
            height: 90px;
            margin-right: 6px;
        }
    }
    &.section4 {
        padding-bottom: 0;
        h4 {
            margin-bottom: 12px;
        }
        li {
            padding: 16px 12px;
            font-size: 12px;
            font-weight: 200;
            line-height: 16px;
            color: @primaryColor;
            border-top: 1px solid rgba(7,17,27,0.1);
        }
    }
}
</style>