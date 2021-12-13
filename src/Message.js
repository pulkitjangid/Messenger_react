import {  Card, CardContent, Typography } from '@material-ui/core'
import React, { Fragment , forwardRef} from 'react'
import './Message.css'

const Message = forwardRef(({ message , username}, ref) => {

    const isUser = username === message.username;
    return (
        <Fragment>
            <Card ref={ref} className={`message ${isUser && 'message__user'}`}>
                <CardContent className={isUser ? 'message__userCard' : 'message__guestCard'}>
                    <Typography
                        color="white"
                        varient="h5"
                        component="h2"
                    >
                    {!isUser && `${message.username || 'Unknown User'} : `}{message.message}
                    </Typography>

                </CardContent>
                {/* <CardActions> 
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>

        </Fragment>
    )
})

export default Message
