<script>
export default{
  name: 'AppLoader',
};
</script>

<template>
<div class="loader">
    <div class="d-flex  h-100 justify-content-center align-items-center">
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</div>


</template>

<style lang="scss" scoped>
    .loader{
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;

        .spinner-border{
            width: 150px;
            height: 150px;
        }
    }
</style>