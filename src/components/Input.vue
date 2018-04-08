<template>
    <div class="input-row">
        <div>
            <label :for="input.name">{{input.text}}</label> 
            <slot></slot>
        </div>                           
        <input :type="input.type" :name="input.name" >
    </div>
</template>

<script>
    export default {
        props: ['input']
    }
</script>

<style scoped>
.input-row {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin: 12px 0;
}
.input-row label {
    font-size: 14px;
    font-weight: bold;
    color: rgb(43,140,255);
    /* align-self: flex-start; */
}
.input-row input {
    /* width: 80%; */
    box-sizing: border-box;
    padding: 8px 16px;
    height: 48px;
    line-height: 1;
    font-size: 18px;
    margin-top: 8px;
    border-radius: 2px;
    outline: none;
    border: 2.5px solid rgba(43,140,255,1);
} 
.input-row input:focus {
    border: 2.5px solid blue;
}
</style>