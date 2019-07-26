<template>
    <div :class="'star'+ starSize" v-if="starScore" >
        <span class="star" :class="type" v-for="(type,index) in starType" :key="index"></span>
    </div>
</template>

<script>
    export default {
        name: "star",
        props: ['starSize', 'starScore'],
        data () {
            return {
                starType: [],
            }
        },
        created () {
            // console.log(this.starSize);
            // console.log(this.starScore);
            //    4.6
            // this.$nextTick(() => {
                let integer = Math.floor(this.starScore);
                // if (integer > 5) integer = 5;
                integer = integer > 5 ? 5 : integer;
                let decimal = Math.round((this.starScore - integer) * 10);
                // console.log(integer);
                // console.log(decimal);
                for (let i = 0; i < integer; i++) {
                    this.starType.push('starOn');
                }
                if(decimal >= 3 && decimal <= 8) {
                    this.starType.push('starHalf');
                }
                let offNum = 5 - this.starType.length;
                for (let i = 0; i < offNum; i++) {
                    this.starType.push('starOff');
                }
                // console.log(this.starType);
            // });

        }

    }
</script>

<style scoped lang="less">
    .starSize(@size: 24px) {
        width: @size;
        height: @size;
        margin: 0 @size / 3;

    }
    .startype(@type: off) {
        background: url("./star48_@{type}@3x.png") no-repeat center center;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }

    .star {
        display: inline-block;
    }
    .star24 .star{
        .starSize(24px);
    }
    .star18 .star{
        .starSize(18px);
    }
    .starOn {
        .startype(on);
    }
    .starOff {
        .startype(off);
    }
    .starHalf {
        .startype(half);
    }



</style>