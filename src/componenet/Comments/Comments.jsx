import React, { useEffect, useState } from "react";
import axios from "axios"
import { Container , Button} from "@mui/material";
import "./Comments.css"
import { useParams } from "react-router-dom";

const Comments = () => {
    const [comment , setComment] = useState()
    const [commentId , setCommentId] = useState([])
    const {id} = useParams()
    useEffect(() => {
        axios
        .get("http://localhost:3000/Comment")
        .then((res) => {
            setComment(res.data)
            const idC = res.data.filter((item) => {
                return item.commentId == id
            })
            // commentId.push(idC)
            setCommentId(idC)
        })
    },[setComment , setCommentId])
    console.log(commentId)
    return(
        <div className="commentBox">
            {
                comment && commentId ? (
                commentId.map((item) => {
                    
                    return(
                    <Container>
                        <div className="commentBoxB">
                        <span>
                            <img className="commentImg" src={item.image} />
                            <span className="commentName">{item.name}</span>
                        </span>
                        <div className="commentTexBox">{item.description}</div>
                        <div className="commentLine">
                            <span></span>
                        </div>
                        </div>
                    </Container>
                    )
                })
                ) : <h3 className="noComment">No Comment</h3>
            }
        </div>
    )
}

export default Comments