import React from 'react'

export const Button = () => {
    
  return (
    <div>
        <buttons
        Text = {{text1:"Log in", text2:"Sign up", tex3:"Find your Box", text4: "Try it for Yourself", text5: "Follow us on Instagram"}}
        />
    </div>
  )
}

const buttons = ({Text}) => {
    const {text1, text2,text3,text4,text5} = Text;
    return(
        <div>
            <Button>{text1}</Button>
        </div>
    )
}
