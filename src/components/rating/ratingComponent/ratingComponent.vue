<template>
    <div>
        <div class="rating-btn" v-if="ratings">
            <div class="rating-btn-t"><span class="btn1">全部 {{totalNum}}</span><span class="btn2">满意 {{goodNum}}</span><span class="btn3"> 不满意 {{totalNum - goodNum}}</span></div>
            <div class="rating-btn-b"><label class="flex flex-itce"><i class="icon icon-check_circle" :class="{active: picked}"></i><input type="checkbox" v-model="picked" value="active"> <span>只看有内容的评价</span></label> </div>
        </div>
        <div class="rating-list" v-if="ratings">
            <div class="rating flex " v-for="(item,index) in ratings" :key="index">
                <div class="rating-avatar"><img :src="item.avatar" alt=""></div>
                <div class="rating-detail flex-f1">
                    <div class="username flex flex-jube"><div class="name">{{item.username}}</div><div class="time">{{item.rateTime | moment}}</div></div>
                    <div class="star"><star :starSize="9" :starScore="item.score"></star> <span v-if="item.deliveryTime">{{item.deliveryTime}} 分钟送达 </span></div>
                    <div class="ratingText">{{item.text ? item.text : '该用户没有评论！'}}</div>
                    <div class="recommend">
                        <span><i class="icon" :class="[{'icon-thumb_down':item.rateType , 'icon-thumb_up':!item.rateType }]"></i></span>
                        <span v-if="item.recommend">
                            <span  v-for="(recom,index) in item.recommend" :key="index"  class="recom">{{recom}}</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ratingComponent",
        props: ['ratingsInfo'],
        data () {
            return {
                picked: false,
                // totalNum: 0,
                // goodNum: 0
            }
        },
        computed: {
            ratings () {
                // console.log();
                let newRating = [];
                if(this.picked) {
                    this.ratingsInfo.forEach( item => {
                        if(item.text) {
                            newRating.push(item);
                        }
                    });
                    return newRating;
                }
                return this.ratingsInfo;
            },
            totalNum () {
                return this.ratingsInfo.length;
            },
            goodNum () {
                let num = 0;
                // console.log(this.ratingsInfo);
                if(this.ratingsInfo) {
                    this.ratingsInfo.forEach( item => {
                        if(item.rateType == 0) {
                            num ++;
                        }
                    });
                }

                return num;
            }
        },
        created () {

            // if(this.ratingsInfo) {
            //     this.totalNum = this.ratingsInfo.length;
            //     let goodNum =  () => {
            //         console.log(this.ratingsInfo);
            //         let num = 0;
            //         // console.log(this.ratingsInfo);
            //         if(this.ratingsInfo) {
            //             this.ratingsInfo.forEach( item => {
            //                 if(item.rateType == 0) {
            //                     num ++;
            //                 }
            //             });
            //         }
            //         return num;
            //     }
            //     this.goodNum = goodNum();
            // }


        }
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


    .rating-btn {
        padding: 0 18px;
        .bdb();

        .rating-btn-t {
            padding: 18px 0;
            border-bottom: 1px solid @primaryColor;
            span {
                display: inline-block;
                line-height: 26px;
                font-size: 12px;
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 4px;
                color: #4d555d;
                padding: 0 10px;
                margin-right: 6px;
                &.btn1 {
                    color: #fff;
                    background-color: @fourthColor;
                }
                &.btn2 {
                    background-color: @fifthColor;
                }
                &.btn3 {
                    background-color: #e9ebec;
                }
            }

        }
        .rating-btn-b {
            padding: 18px 0;
            font-size: 14px;
            line-height: 20px;
            color: #93999f;

            input {
                display: none;
            }
            .icon {
                font-size: 20px;
                display: inline-block;
                margin-right: 6px;
                /*color: #93999f;*/
                &.active {
                    color:  @fourthColor;
                }
            }
        }
    }
    .rating-list {
        padding: 0 18px;
        .rating {
            padding: 18px 0;
            border-bottom: 1px solid @primaryColor;
            .rating-avatar {
                margin-right: 12px;
                img {
                    width: 28px;
                    height: 28px;
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    border-radius: 50%;
                }
            }
            .rating-detail {
                font-size: 10px;
                color: @secondColor;
                line-height: 12px;
                .username {
                    .name {
                        color: @firstColor;}
                }
                .star {
                    margin: 2px 0 5px;
                }
                .ratingText {
                    font-size: 12px;
                    color: @firstColor;
                    line-height: 18px;
                }
                .recommend {
                    margin-top: 4px;
                    .icon {
                        font-size: 12px;
                        line-height: 16px;
                        color: rgb(183,167,191);
                        &.icon-thumb_up {
                            color: @fourthColor;
                        }
                    }
                    span.recom {
                        border: 1px solid rgba(7,17,27,0.1);
                        padding: 0 6px;
                        -webkit-border-radius: 2px;
                        -moz-border-radius: 2px;
                        border-radius: 2px;
                        font-size: 8px;
                        line-height: 18px;
                        color: @secondColor;
                        display: inline-block;
                        margin: 2px 4px;
                    }
                }
            }

        }
    }
</style>