export const UrlParams = () =>{
    const baseUrl = window.location.protocol+'//'+window.location.host+'/';
    const basePath = window.location.href.replaceAll(baseUrl,'').replaceAll('#','');
    const basePrefix = () =>basePath.split('/').map((data)=>'..').join('/');
    return { baseUrl:baseUrl, basePath: basePath, basePrefix: basePrefix() };
};

export const UUID = ()=>{
 let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 let result = '';
 for (let i = 16; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
 return result;
};