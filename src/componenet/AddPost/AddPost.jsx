import React, { useState  } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal'; 
import Input from "../Ui/Input/Input";
import "./AddPost.css"
import { SettingsInputAntennaTwoTone, Tune } from "@mui/icons-material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const AddPost = () => {
    const [open, setOpen] = useState(false);
    const [fill, setFill] = useState();
    const handleOpen = () => {
      state.form.name.value = ""
      state.form.family.value = ""
      state.form.description.value = ""     
      state.form.name.valid = false
      state.form.family.valid = false
      state.form.description.valid = false
      state.form.name.used = false
      state.form.family.used = false
      state.form.description.used = false
      setFill()
      setOpen(true)
    };
    const handleClose = () => setOpen(false);
    
    const  [state , setState] = useState({
      form : {
        name : {
          elementType : "input",
          elementConfig : {
            type : "text",
            placeholder : "Name"
          },
          value : "",
          validation:{
            required : true
          },
          valid : false,
          used : false
        },
        family : {
          elementType : "input",
          elementConfig : {
            type : "text",
            placeholder : "family"
          },
          value : "",
          validation:{
            required : true,
          },
          valid : false,
          used : false
        },
        description : {
          elementType : "input",
          elementConfig : {
            type : "text",
            placeholder : "Description"
          },
          value : "",
          validation:{
            required : true
          },
          valid : false,
          used : false
        }
      }
    })

    const checkValidation = (value , rules) =>{
      let isValid =false
      if(rules.required) {
        isValid = value.trim() !== ''
      }
      return isValid
    }
    const inputChangeHandler = (e , inputElement) => {
      const updatedForm = {
        ...state.form
      }
      const updatedElement = {
        ...updatedForm[inputElement]
      }
      updatedElement.value = e.target.value
      updatedElement.valid =  checkValidation(
        updatedElement.value ,
        updatedElement.validation
        ) 
        updatedElement.used = true
      updatedForm[inputElement] = updatedElement 
      setState({form :updatedForm}) 

    }
    const submitHandler = (e) => {
      e.preventDefault()
      const formData = {}
      for(let item in state.form){
        formData[item] = state.form[item].value
        if(state.form.name.valid && state.form.family.valid && state.form.description.valid){
          handleClose()
        }else if(state.form[item].value == ""){
          state.form[item].valid = false
          state.form[item].used = true
          const fill = (
            <p>Please fill inputs</p>
          )
          setFill(fill)
          }
      }
    }
    const elementArray = []
    for(let item in state.form) {
      elementArray.push({
        id : item,
        config : state.form[item]
      })
    }
    return (
        <div>
          <Button onClick={handleOpen}className="addButton" variant="outlined">create a new post</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                <div>
                    <h4 className="modalTitle">NEW POST</h4>
                    <form >
                    {
                      elementArray.map((item) => {
                        return(
                          <Input
                          key = {item.id}
                          elementType = {item.config.elementType}
                          elementConfig = {item.config.elementConfig}
                          value = {item.config.value}
                          inValid = {!item.config.valid}
                          used = {item.config.used}
                          change={(e) =>inputChangeHandler(e, item.id )}
                          />
                        )
                      })
                    }
                    <div className="fill">
                      {fill}
                    </div>
                    <div className="buttonStyle">
                    <Button onClick={submitHandler} variant="contained">Add Post</Button>
                    </div>
                    </form>
                </div>
            </Box>
          </Modal>
        </div>
      );
}

export default AddPost