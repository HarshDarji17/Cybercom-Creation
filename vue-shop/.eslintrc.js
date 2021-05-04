// import { useCssModule } from "@vue/runtime-dom";

module.exports = {
    root:true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential","@vue/prettier"],
    rules:{
        // "no-console":process.env.NODE_ENV === "prodction",
        // "no-debugger" :process.env.NODE_ENV === "prodction"
        
    },
    parserOptions: {
        parser:"babel-eslint"
    }
};