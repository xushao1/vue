<template>
    <div class="ratingCom">
        <div class="rating-t flex">
            <div class="rating-average">
                <p class="p1">{{seller.foodScore}}</p>
                <p class="p2">综合评分</p>
                <p class="p3">高于周边商家{{seller.rankRate}}%</p>
            </div>
            <div class="rating-star flex-f1 flex flex-vertical flex-jube">
                <p class="p1">食物评分 <span class="star"><star :starSize="12" :starScore="seller.score" v-if="seller.score"></star>{{seller.score}}</span></p>
                <p class="p2">服务态度 <span class="star"><star :starSize="12" :starScore="seller.serviceScore" v-if="seller.serviceScore"></star>{{seller.serviceScore}}</span></p>
                <p class="p3">送达时间 <span class="deliverTime">{{seller.deliveryTime}}分钟</span></p>
            </div>
        </div>
        <div class="rating-b">
            <rating-component :ratingsInfo="rating"></rating-component>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    //引入组件
    import ratingComponent from './ratingComponent/ratingComponent.vue';

    export default {
        name: "rating",
        data () {
            return {
                // ratings: []
                picked: false
            }
        },
        components: {
            ratingComponent
        },
        watch: {
            // picked(now,old) {
            //     console.log(now);
            // }
        },
        computed: {
            ...mapGetters('sellInfo', {
                rating : 'getterRatings',
                seller: 'getterSeller'
            }),
        },
        mounted () {
            setTimeout( () => {
                // console.log( this.ratings );
                // console.log( this.seller );


            },3000);
        },
    }
</script>

<style scoped lang="less">
    @primaryColor: #e6e7e8;
    @firstColor: rgb(7,17,27);
    @secondColor: rgb(147,153,159);
    @thirdColor: rgb(255,153,0);
    @fourthColor: #00a0dc;
    @fifthColor: #ccecf8;

    .bdt {
        border-top: 2px solid @primaryColor;
    }
    .bdb {
        border-bottom: 2px solid @primaryColor;
    }

    .ratingCom {
        background-color: #f3f5f7;
    }
    .rating-t {
        background-color: #fff;
        .bdb();
        margin-bottom: 16px;
        padding: 18px 0;
        p {
            font-size: 12px;
            color: @firstColor;
            line-height: 20px;
        }
        .rating-average {
            text-align: center;
            padding: 0 24px;
            .p1 {
                font-size: 24px;
                line-height: 28px;
                color: @thirdColor;
            }
            .p3 {
                color: @secondColor;
                font-size: 10px;
            }
        }
        .rating-star {
            border-left: 1px solid @primaryColor;
            padding: 0 24px;
            .star {
                color: @thirdColor;
            }
            .deliverTime {
                color: @secondColor;
                display: inline-block;
                margin-left: 6px;
            }
        }
    }
    .rating-b {
        .bdt();
        background-color: #fff;
    }
</style>