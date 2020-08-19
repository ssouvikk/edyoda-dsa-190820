const BracketPair ={
    '(':')',
    '{':'}',
    '[':']'
}

checkParenthesis = (input) => {
    const stack = [];
    for (let i = 0; i < input.length; i++) {
        const val = input[i]
        if(val=='('||val=='{'||val=='[')        stack.push(val)
        else if (val==')'||val=='}'||val==']')  {
            if(stack.length==0)                 return i+1 
            if(val!=BracketPair[stack.pop()])   return i+1
        }
    }
    return stack.length==0? 'Success' : input.indexOf(stack[0])+1
}

// console.log(checkParenthesis('(12(}}}}'));
// console.log(checkParenthesis('54)'));
// console.log(checkParenthesis('654('));
// console.log(checkParenthesis('(3654))'));