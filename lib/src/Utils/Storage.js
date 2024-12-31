// Function to read a cookie
export const ViewCookie = (name) => {
 const cookieName = `${encodeURIComponent(name)}=`;
 const cookieArray = document.cookie.split(';');

 for (let i = 0; i < cookieArray.length; i++) {
  let cookie = cookieArray[i];
  while (cookie.charAt(0) === ' ') {
   cookie = cookie.substring(1);
  }
  if (cookie.indexOf(cookieName) === 0) {
   return decodeURIComponent(cookie.substring(cookieName.length));
  }
 }
 return null;
};

// Function to delete a cookie
export const DeleteCookie = (name) => {
 const cookieValue = `${encodeURIComponent(name)}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
 document.cookie = cookieValue;
};

// Function to set a cookie with expiry time in minutes
export const SetCookie = (name, value, minutes) => {
 const expires = new Date();
 expires.setTime(expires.getTime() + minutes * 60 * 1000);
 const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
 document.cookie = cookieValue;
};

// Function to update a cookie with a new value
export const UpdateCookie = (name, newValue, minutes) => {
 if (getCookie(name)) {
  setCookie(name, newValue, minutes);
  console.log(`Cookie '${name}' updated.`);
 } else {
  console.log(`Cookie '${name}' does not exist.`);
 }
};
