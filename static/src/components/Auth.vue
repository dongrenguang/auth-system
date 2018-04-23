<template>
    <div class="">
        {{ msg }}
        {{ count }}
    </div>
</template>

<script>
export default {
    props: {
        msg: String
    },
    data() {
        return {
            count: 0
        };
    }

};
</script>

<style scoped>

</style>
