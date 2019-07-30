<template>
    <div v-if="food" class="food">
        <mt-header title="商品详情" fixed>
            <router-link to="/" slot="left">
<!--                <mt-button icon="icon-arrow_lift">返回</mt-button>-->
                <span><i class="icon icon-arrow_lift"></i>返回</span>
            </router-link>
        </mt-header>
        <div class="section section1">
            <div class="img"><img :src="food.image" alt=""></div>
            <div class="title">
                <h3>{{food.name}}</h3>
                <p>月售{{food.sellCount}}份   好评率{{food.rating}}%</p>
            </div>
            <div class="addCart flex flex-jube">
                <div class="price"><span class="new"><em>￥</em>{{food.price}}</span><span class="old" v-if="food.oldPrice"><em>￥</em>{{food.oldPrice}}</span> </div>
                <div class="btn"><button @click.stop="addCart">加入购物车</button></div>
            </div>
        </div>
        <div class="section section2">
            <h3>商品介绍</h3>
            <p>{{food.info}}</p>
        </div>
        <div class="section section3">
            <rating-component v-bind:ratingsInfo="food.ratings"></rating-component>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    import ratingComponent from '../../rating/ratingComponent/ratingComponent';

    export default {
        name: "goodsDetail",
        data () {
            return {
                food: []
            }
        },
        components: {
            ratingComponent
        },
        computed: {
            ...mapGetters( 'sellInfo', {
                goods: 'getterGoods'
            })
        },
        created () {
            let id = this.$route.query.id;
            // console.log(id);
            // setTimeout( () => {
                if(this.goods) {
                    // console.log(this.goods);
                    for (let i = 0; i < this.goods.length; i++ ){
                        for (let j = 0; j < this.goods[i].foods.length; j++) {
                            if(id == this.goods[i].foods[j].id) {
                                this.food = this.goods[i].foods[j];
                            }
                        }
                    }
                }
                // console.log(this.food);
            // },2000);


        },
        methods: {
            ...mapActions('cart', {
                addInfo: 'addInfo'
            }),
            addCart () {
                // console.log(11);
                this.addInfo(this.food);
            },

        }

    }
</script>

<style scoped lang="less">
    .food {
        background-color: #f3f5f7;
    }
    .section {
        background-color: #fff;
        margin-bottom: 16px;
        &.section3{
            margin-bottom: 0;
        }
    }
    h3 {
        font-size: 14px;
        color: rgb(7,17,27);
        line-height: 14px;
        margin-bottom: 8px;
    }
    p {
        font-size: 12px;
        font-weight: 200;
        color: rgb(77,85,93);
        line-height: 24px;
    }
.section1 {
    .img {
        width: 100%;
        img {
            width: 100%;
        }
    }
    .title {
        padding:18px;

        h3 {
            font-weight: 700;
        }
    }
    .addCart {
        padding: 0 18px 18px;
        .price {

            em {
                font-size: 10px;
                font-weight: normal;
                line-height: 24px;
            }
            span.new {
                font-size: 14px;
                color: rgb(240,20,20);
                font-weight: bold;
                display: inline-block;
                margin-right: 6px;
            }
            span.old {
                font-size: 10px;
                color: rgb(147,153,159);
                text-decoration:line-through;
            }
        }
        .btn{
            button {
                line-height: 24px;
                background-color: rgb(0,160,220);
                padding: 0 12px;
                -webkit-border-radius: 12px;
                -moz-border-radius: 12px;
                border-radius: 12px;
                font-size: 12px;
                color: #fff;
                outline: none;
            }
        }
    }
}
    .section2 {
        padding: 18px;
    }
</style>