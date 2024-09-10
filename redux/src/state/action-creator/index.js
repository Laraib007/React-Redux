export const deposotemoney =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type: "deposite",
            payload: amount
        })
    }
}
