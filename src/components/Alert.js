import React from 'react'

function alert(props) {
    const capitalize  = (word) =>   //just to make first letter of our alert capital
    {
        const letter = word.toLowerCase();
        return letter.charAt(0).toUpperCase() + letter.slice(0);
    }
  return (
    <div style={{height: '10vh'}}>
{  props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>! {props.alert.msg} 
  </div>}
    </div>
  
  )
}

export default alert
