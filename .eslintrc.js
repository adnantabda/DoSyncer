module.exports = {
    env: {
        es6: true
    } ,          
        parserOptions: {
        sourceType: 'module',
        },
        rules :{
        strict: ["error" , "global"], 
        'func-style' : ["erro" , "expression"], 
        'no-new-func': "error",
        'no-param-reassign':"error", 
        'prefer-arrow-callback': 'error', 
        'arrow-parens': ['error' , 'always '], 
        'arrow-body-style' : ['error' , 'as-needed'], 
        'new-cap' : 'error' ,
        'no-invalid-this': 'error', 
        'prefer-const' : 'error'
        }
}