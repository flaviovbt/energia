<template>
    <div class="footer">
        <a href="#"><img src="../assets/unicamp.png" alt="unicamp"></a>
        <a href="#"><img src="../assets/ft.png" alt="ft"></a>
        <a href="#"><img class="ult" src="../assets/git.png" alt="git"></a>
    </div>
</template>

<style scoped>
    .footer{
        background-color: #77AD78;
        height: 7vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    img{
        height: 2em;
        margin-right: 2em;
    }

    .ult{
        margin-right: 5vw;
    }
</style>

<script scoped>
    export default{
        name: 'FooterComponent',
    }
</script>