import { defineStore } from "pinia";

export const isLoadStore =defineStore('isload',{
    state:()=>({
        value:false,
    }),

    actions:{
        toggleStatus() {
         this.value = !this.value
        }
    }
})