<template>
    <div class="input-row">
        <div>
            <label :for="input.name">{{input.text}}</label> 
            <slot></slot>
        </div>                           
        <input :type="input.type"
                ref="input" 
                :value="value" 
                @input="$emit('input',$event.target.value)">
    </div>
</template>

<script>
    export default {
        props: ['input','value'],
        data() {
            return {
                name: ''
            }
        }
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
    color: rgb(76,98,252);
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
    border: 2.5px solid rgb(76,98,252);
} 
.input-row input:focus {
    border: 2.5px solid rgba(43,140,255,1);
}
</style>