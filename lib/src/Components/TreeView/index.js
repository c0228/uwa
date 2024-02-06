import React, { useState, useEffect } from "react";
import { GetChildrenIds  } from "e-ui-react";
import "./index.css";

export const TreeView = ({ id, data, checked, settings, defaultFileSelect })=>{
  console.log('settings', settings);
  const [ treeFiles, setTreeFiles ] = useState(data);

  const onFilesClick=(selectFile)=>{
    const parentId = "treeViewerComponent-"+id;
    const selectedFile = "treeViewerComponent-"+selectFile;
    if(selectedFile!==undefined){
      const childElements = GetChildrenIds(parentId);
      console.log('parentId', parentId);
      console.log('childElements', childElements);
      document.getElementById(parentId)?.classList.add('treeViewerComponent-show');
      childElements?.forEach(function(childId) {
        const treeChildId= childId?.replace('treeViewerComponent-','');
        console.log('childId',childId,'treeChildId', treeChildId);
       if(childId===selectedFile){   
         document.getElementById(id)?.querySelector("#" + selectFile)?.classList.add('bold');
         document.getElementById(parentId)?.querySelector("#" + childId)?.classList.remove('treeViewerComponent-hide');
         document.getElementById(parentId)?.querySelector("#" + childId)?.classList.add('treeViewerComponent-show');
       } else {
         document.getElementById(id)?.querySelector("#" + treeChildId)?.classList.remove('bold')
         document.getElementById(parentId)?.querySelector("#" + childId)?.classList.remove('treeViewerComponent-show');
         document.getElementById(parentId)?.querySelector("#" + childId)?.classList.add('treeViewerComponent-hide');
       }
     });
   }
  };
  useEffect(()=>{
    console.log('useEffect',treeFiles);
    onFilesClick(defaultFileSelect);
  },[treeFiles]);

  const View = (files)=>{

    const handleFolderClick=(targetId)=>{

      const updateFiles =(files)=> files?.map((file)=>{
        // console.log(targetId, 'beforeFile', file);
        if(file?.id===targetId){
          file.open = !file?.open;
         
        }
        else if(file?.children?.length>0){
          file.children = updateFiles(file.children);
        }
        // console.log(targetId, 'afterFile', file);
        return file;
      });

    //  console.log('actualFiles', files);
      const data = updateFiles(treeFiles);
    //  console.log('updateFile', data);
      setTreeFiles(data);
    };

    const handleCheckBox=(targetId)=>{
      const updateFiles =(files, status)=> files?.map((file)=>{
        // console.log(file?.id, 'targetId',targetId, 'status', status);
         if(file?.id===targetId || status === true){
          if(file.checked===undefined){
            file.checked = true;
          } else {
             file.checked = (!file.checked);
          }
          if(file?.children?.length>0){
            file.children = updateFiles(file.children, true);
          }
        } else if(file?.children?.length>0){
          file.children = updateFiles(file.children, false);
        }
        // console.log(targetId, 'afterFile', file);
        return file;
      });

     // console.log('actualFiles[handleCheckBox]', files);
      const data = updateFiles(treeFiles, false);
    //  console.log('updateFile', data);
      setTreeFiles(data);
    };

    const GetFileFormat = (fileName, settings)=>{
      let fileExtension = fileName.substring(fileName.lastIndexOf('.'));
      let color = (settings?.[fileExtension]!==undefined)?(settings?.[fileExtension]):
              (settings?.["default"]!==undefined)?settings?.["default"]:'#000';
      console.log('settings',settings,'fileExtension',fileExtension,'settings?.[fileExtension]', settings?.[fileExtension],'color', color);
      if(fileExtension==='.wav' || fileExtension==='.mp3'){
          return (<i className="fa fa-file-audio-o" style={{ color:color }}></i>);
      } else if(fileExtension==='.php' || fileExtension==='.xml' || fileExtension==='.html' || fileExtension==='.json'){
          return (<i className="fa fa-file-code-o" style={{ color:color }}></i>);
      } else if(fileExtension==='.zip' || fileExtension==='.rar'){
          return (<i className="fa fa-archive-o" style={{ color:color }}></i>);
      } else if(fileExtension==='.xls' || fileExtension==='.xlsx'){
          return (<i className="fa fa-excel-o" style={{ color:color }}></i>);
      } else if(fileExtension==='.png' || fileExtension==='.jpg'){
          return (<i className="fa fa-image-o" style={{ color:color }}></i>);
      } else if(fileExtension==='.pdf'){
          return (<i className="fa fa-pdf-o" style={{ color:color }}></i>);
      } else if(fileExtension==='.ppt'){
          return (<i className="fa fa-powerpoint-o" style={{ color:color }}></i>);
      } else if(fileExtension==='.mp4' || fileExtension==='.mkv'){
          return (<i className="fa fa-video-o" style={{ color:color }}></i>);
      } else if(fileExtension==='.docx' || fileExtension==='.txt'){
          return (<i className="fa fa-word-o" style={{ color:color }}></i>);
      } else {
          return (<i className="fa fa-file-text-o" style={{ color:color }}></i>);
      }
    };

    return (<ul id={id} className="tree">
      {files?.map((file, index)=>{
        if(file?.type==='folder'){
          return (<li key={index} className="treeContent" id={file?.id}>
            <div style={{ padding:'2px', cursor:'pointer' }}>
              <i className={(file?.open)?"fa fa-caret-down":"fa fa-caret-right"}
              onClick={()=>handleFolderClick(file?.id)}></i>
              {checked && (<>&nbsp; <input type="checkbox" style={{width:'11px', height:'11px' }} 
              onClick={()=>handleCheckBox(file?.id)} checked={(file?.checked)?true:false} /></>)}
               &nbsp;
              <span  style={{ marginLeft:'4px' }} onClick={()=>handleFolderClick(file?.id)}>
                <i className={(file?.open)?"fa fa-folder-open":"fa fa-folder"} 
                style={{ color: (settings?.["folder"]!==undefined)?settings?.["folder"]:
                  (settings?.["default"]!==undefined)?settings?.["default"]:'#000' }}></i> &nbsp;
                 {file?.name}</span>
            </div>
          <div className={(file?.open)?"open":"close"}> {View(file?.children)}</div>
          </li>);
        } else if(file?.type==='file') {
           return (<li  key={index} className="treeContent">
            <div style={{ padding:'2px', marginLeft:'9px' }}>
            {checked && (<span style={{ marginLeft:'2px' }}><input type="checkbox" style={{width:'11px', height:'11px' }} 
             checked={(file?.checked)?true:false} />&nbsp;</span>)}
            <span id={file?.id} style={{ marginLeft:'4px', cursor:'pointer' }} onClick={()=>{ onFilesClick(file?.id) }}> {GetFileFormat(file?.name, settings)}&nbsp; {file?.name}</span>
            </div>
            </li>);
        } else {
           return <></>;
        }
      })}
    </ul>);
  };

  return (
    <div>
      {View(treeFiles)}
    </div>
    );
};