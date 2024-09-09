import React from "react";
import { FileDropperAndViewer } from './FileDropper/index.js';
import { ImageDropperAndViewer } from './ImageDropper/index.js';

export const FileUpload = ({ name, type, label, height, autoSubmit, backend, validation, afterUploadSuccess })=>{
 return (<><div>
 {type==='fileDropper' && <FileDropperAndViewer name={name} label={label} height={height} 
    autoSubmit={autoSubmit} backend={backend} validation={validation} afterUploadSuccess={afterUploadSuccess} />}
 {type==='imageDropper' && <ImageDropperAndViewer name={name} label={label} height={height} 
    autoSubmit={autoSubmit} backend={backend} validation={validation} afterUploadSuccess={afterUploadSuccess} />}
</div></>);
};