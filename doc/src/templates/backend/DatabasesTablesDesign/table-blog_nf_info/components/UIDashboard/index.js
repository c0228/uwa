import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, RichTextEditor, Form, Icon  } from "e-ui-react";

export const UIDashboard = ()=>{
 const [ content, setContent ] = useState("");

 const PostFeed = async ()=>{
    const postData = {
        location: 'folder',
        fileName: 'hello.php',
        content: content
    }
    const headers = { 'Content-Type': 'text/html' };
    const response = await axios.post('http://localhost/git-projects/rw/e-bkd-ph/controllers/module.starter.blog.php', 
    postData, { headers });
    console.log(response.data);
 };
 
 return (<Card padding={15}>
    <Form name="summerNoteForm" btnSubmit={{
        label: (<><b>Post</b> <Icon type="FontAwesome" name="fa fa-send" /></>),
        btnType: "primary"
    }} onSubmit={()=>PostFeed()}>
    <RichTextEditor name="summernote" placeholder="Write your Story" height={120} 
        value={content} onChange={setContent} />
    </Form>
 </Card>);
};