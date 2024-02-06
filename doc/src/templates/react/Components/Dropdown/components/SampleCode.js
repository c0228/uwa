import React, { useState } from "react";
import { Dropdown } from 'e-ui-react';

export const SampleNote1 = () =>{
const [ dropdownValue, setDropdownValue ] = useState("");
const menuOptions = [{ header :"Andhra Pradesh", 
                       options:[{ label:"Amaravathi", value:"Amaravathi" },
                                { label:"Vishakapatnam", value:"Vishakapatnam" }] 
                      },
                      { header :"Arunachal Pradesh", 
                        options:[{ label:"Itanagar", value:"Itanagar" }] 
                      },
                      { header :"Assam", 
                        options:[{ label:"Dispur", value:"Dispur" },
                                { label:"Guwahati", value:"Guwahati" },
                                { label:"Silchar", value:"Silchar" },
                                { label:"Dibrugarh", value:"Dibrugarh" },
                                { label:"Nagaon", value:"Nagaon" }]
                      },
                      { header :"Bihar", 
                        options:[{ label:"Patna", value:"Patna" },
                                { label:"Gaya", value:"Gaya" },
                                { label:"Bhagalpur", value:"Bhagalpur" },
                                { label:"Muzaffarpur", value:"Muzaffarpur" },
                                { label:"Biharsharif", value:"Biharsharif" }]
                      },
                      { header :"Chhattisgarh", 
                        options:[{ label:"Naya Raipur", value:"Naya Raipur" },
                                { label:"Bhilai Nagar", value:"Bhilai Nagar" },
                                { label:"Korba", value:"Korba" },
                                { label:"Bilaspur", value:"Bilaspur" }]
                      },
                      { header :"Goa", 
                        options:[{ label:"Panaji", value:"Panaji" }]
                      },
                      { header :"Gujarat", 
                        options:[{ label:"Ahmedabad", value:"Ahmedabad" },
                                { label:"Surat", value:"Surat" },
                                { label:"Vadodara", value:"Vadodara" },
                                { label:"Rajkot", value:"Rajkot" },
                                { label:"Bhavnagar", value:"Bhavnagar" }]
                      }, 
                      { header :"Haryana", 
                      options:[{ label:"Faridabad", value:"Faridabad" },
                              { label:"Gurgaon", value:"Gurgaon" },
                              { label:"Rohtak", value:"Rohtak" },
                              { label:"Hisar", value:"Hisar" },
                              { label:"Panipat", value:"Panipat" }]
                      },
                      { header :"Himachal Pradesh", 
                        options:[{ label:"Shimla", value:"Shimla" }]
                      },
                      { header :"Jharkhand", 
                        options:[{ label:"Dhanbad", value:"Dhanbad" },
                                { label:"Ranchi", value:"Ranchi" },
                                { label:"Jamshedpur", value:"Jamshedpur" },
                                { label:"Bokaro Steel", value:"Bokaro Steel" },
                                { label:"Mango", value:"Mango" }]
                      },
                      { header :"Karnataka", 
                        options:[{ label:"Bangalore", value:"Bangalore" },
                                { label:"Hubli and Dharwad", value:"Hubli and Dharwad" },
                                { label:"Mysore", value:"Mysore" },
                                { label:"Gulbarga", value:"Gulbarga" },
                                { label:"Belgaum", value:"Belgaum" }]
                      },
                      { header :"Kerala", 
                        options:[{ label:"Trivandrum", value:"Trivandrum" },
                                { label:"Kochi", value:"Kochi" },
                                { label:"Kozhikode", value:"Kozhikode" },
                                { label:"Kollam", value:"Kollam" },
                                { label:"Thrissur", value:"Thrissur" }]
                      },
                      { header :"Madhya Pradesh", 
                        options:[{ label:"Indore", value:"Indore" },
                                { label:"Bhopal", value:"Bhopal" },
                                { label:"Jabalpur", value:"Jabalpur" },
                                { label:"Gwalior", value:"Gwalior" },
                                { label:"Ujjain", value:"Ujjain" }]
                      },
                      { header :"Maharashtra", 
                        options:[{ label:"Mumbai", value:"Mumbai" },
                                { label:"Pune", value:"Pune" },
                                { label:"Nagpur", value:"Nagpur" },
                                { label:"Thane", value:"Thane" },
                                { label:"Pimpri and Chinchwad", value:"Pimpri and Chinchwad" }]
                      },
                      { header :"Manipur", 
                        options:[{ label:"Imphal", value:"Imphal" }]
                      },
                      { header :"Meghalaya", 
                        options:[{ label:"Shillong", value:"Shillong" }]
                      },
                      { header :"Mizoram", 
                        options:[{ label:"Aizawl", value:"Aizawl" }]
                      },
                      { header :"Nagaland", 
                        options:[{ label:"Kohima", value:"Kohima" },
                                { label:"Dimapur", value:"Dimapur" }]
                      },
                      { header :"Odisha", 
                        options:[{ label:"Bhubaneswar", value:"Bhubaneswar" },
                                { label:"Cuttack", value:"Cuttack" },
                                { label:"Brahmapur Town", value:"Brahmapur Town" },
                                { label:"Raurkela", value:"Raurkela" },
                                { label:"Puri Town", value:"Puri Town" }]
                      },
                      { header :"Punjab", 
                        options:[{ label:"Chandigarh", value:"Chandigarh" },
                                { label:"Ludhiana", value:"Ludhiana" },
                                { label:"Amritsar", value:"Amritsar" },
                                { label:"Jalandhar", value:"Jalandhar" },
                                { label:"Patiala", value:"Patiala" },
                                { label:"Bathinda", value:"Bathinda" }]
                      },
                      { header :"Rajasthan", 
                        options:[{ label:"Jaipur", value:"Jaipur" },
                                { label:"Jodhpur", value:"Jodhpur" },
                                { label:"Kota", value:"Kota" },
                                { label:"Bikaner", value:"Bikaner" },
                                { label:"Ajmer", value:"Ajmer" }]
                      }, 
                      { header :"Sikkim", 
                        options:[{ label:"Gangtok", value:"Gangtok" }]
                      },
                      { header :"Tamil Nadu", 
                        options:[{ label:"Chennai", value:"Chennai" },
                                { label:"Coimbatore", value:"Coimbatore" },
                                { label:"Madurai", value:"Madurai" },
                                { label:"Tiruchirappalli", value:"Tiruchirappalli" },
                                { label:"Salem", value:"Salem" }]
                      },
                      { header :"Telangana", 
                        options:[{ label:"Hyderabad", value:"Hyderabad" }]
                      },
                      { header :"Tripura", 
                        options:[{ label:"Agartala", value:"Agartala" }]
                      },
                      { header :"Uttar Pradesh", 
                        options:[{ label:"Lucknow", value:"Lucknow" },
                                { label:"Kanpur", value:"Kanpur" },
                                { label:"Ghaziabad", value:"Ghaziabad" },
                                { label:"Agra", value:"Agra" },
                                { label:"Meerut", value:"Meerut" }]
                      },
                      { header :"Uttarakhand", 
                        options:[{ label:"Dehradun", value:"Dehradun" },
                                { label:"Haridwar", value:"Haridwar" },
                                { label:"Haldwani and Kathgodam", value:"Haldwani and Kathgodam" },
                                { label:"Rudrapur", value:"Rudrapur" }]
                      },
                      { header :"West Bengal", 
                        options:[{ label:"Kolkata", value:"Kolkata" },
                                { label:"Haora", value:"Haora" },
                                { label:"Durgapur", value:"Durgapur" },
                                { label:"Asansol", value:"Asansol" },
                                { label:"Siliguri", value:"Siliguri" }]
                      }
]; 

 return (<>
<Dropdown  width="300px" placeholder="Select your Dropdown" menu={menuOptions} value={dropdownValue} 
    onChange={(result)=>setDropdownValue(result?.value)}
    container={{
      searchLabel: "Search a Location"
    }} />
  <div className="mtop10p mbot10p"><b>Selected Value:</b> {dropdownValue}</div>
  </>);
};

export const SampleNote2 = () =>{
const [ dropdownValue, setDropdownValue ] = useState("");
const menuOptions = [{ header :"Andhra Pradesh", 
                       options:[{ label:"Amaravathi", value:"Amaravathi" },
                                { label:"Vishakapatnam", value:"Vishakapatnam" }] 
                      },
                      { header :"Arunachal Pradesh", 
                        options:[{ label:"Itanagar", value:"Itanagar" }] 
                      },
                      { header :"Assam", 
                        options:[{ label:"Dispur", value:"Dispur" },
                                { label:"Guwahati", value:"Guwahati" },
                                { label:"Silchar", value:"Silchar" },
                                { label:"Dibrugarh", value:"Dibrugarh" },
                                { label:"Nagaon", value:"Nagaon" }]
                      },
                      { header :"Bihar", 
                        options:[{ label:"Patna", value:"Patna" },
                                { label:"Gaya", value:"Gaya" },
                                { label:"Bhagalpur", value:"Bhagalpur" },
                                { label:"Muzaffarpur", value:"Muzaffarpur" },
                                { label:"Biharsharif", value:"Biharsharif" }]
                      },
                      { header :"Chhattisgarh", 
                        options:[{ label:"Naya Raipur", value:"Naya Raipur" },
                                { label:"Bhilai Nagar", value:"Bhilai Nagar" },
                                { label:"Korba", value:"Korba" },
                                { label:"Bilaspur", value:"Bilaspur" }]
                      },
                      { header :"Goa", 
                        options:[{ label:"Panaji", value:"Panaji" }]
                      },
                      { header :"Gujarat", 
                        options:[{ label:"Ahmedabad", value:"Ahmedabad" },
                                { label:"Surat", value:"Surat" },
                                { label:"Vadodara", value:"Vadodara" },
                                { label:"Rajkot", value:"Rajkot" },
                                { label:"Bhavnagar", value:"Bhavnagar" }]
                      }, 
                      { header :"Haryana", 
                      options:[{ label:"Faridabad", value:"Faridabad" },
                              { label:"Gurgaon", value:"Gurgaon" },
                              { label:"Rohtak", value:"Rohtak" },
                              { label:"Hisar", value:"Hisar" },
                              { label:"Panipat", value:"Panipat" }]
                      },
                      { header :"Himachal Pradesh", 
                        options:[{ label:"Shimla", value:"Shimla" }]
                      },
                      { header :"Jharkhand", 
                        options:[{ label:"Dhanbad", value:"Dhanbad" },
                                { label:"Ranchi", value:"Ranchi" },
                                { label:"Jamshedpur", value:"Jamshedpur" },
                                { label:"Bokaro Steel", value:"Bokaro Steel" },
                                { label:"Mango", value:"Mango" }]
                      },
                      { header :"Karnataka", 
                        options:[{ label:"Bangalore", value:"Bangalore" },
                                { label:"Hubli and Dharwad", value:"Hubli and Dharwad" },
                                { label:"Mysore", value:"Mysore" },
                                { label:"Gulbarga", value:"Gulbarga" },
                                { label:"Belgaum", value:"Belgaum" }]
                      },
                      { header :"Kerala", 
                        options:[{ label:"Trivandrum", value:"Trivandrum" },
                                { label:"Kochi", value:"Kochi" },
                                { label:"Kozhikode", value:"Kozhikode" },
                                { label:"Kollam", value:"Kollam" },
                                { label:"Thrissur", value:"Thrissur" }]
                      },
                      { header :"Madhya Pradesh", 
                        options:[{ label:"Indore", value:"Indore" },
                                { label:"Bhopal", value:"Bhopal" },
                                { label:"Jabalpur", value:"Jabalpur" },
                                { label:"Gwalior", value:"Gwalior" },
                                { label:"Ujjain", value:"Ujjain" }]
                      },
                      { header :"Maharashtra", 
                        options:[{ label:"Mumbai", value:"Mumbai" },
                                { label:"Pune", value:"Pune" },
                                { label:"Nagpur", value:"Nagpur" },
                                { label:"Thane", value:"Thane" },
                                { label:"Pimpri and Chinchwad", value:"Pimpri and Chinchwad" }]
                      },
                      { header :"Manipur", 
                        options:[{ label:"Imphal", value:"Imphal" }]
                      },
                      { header :"Meghalaya", 
                        options:[{ label:"Shillong", value:"Shillong" }]
                      },
                      { header :"Mizoram", 
                        options:[{ label:"Aizawl", value:"Aizawl" }]
                      },
                      { header :"Nagaland", 
                        options:[{ label:"Kohima", value:"Kohima" },
                                { label:"Dimapur", value:"Dimapur" }]
                      },
                      { header :"Odisha", 
                        options:[{ label:"Bhubaneswar", value:"Bhubaneswar" },
                                { label:"Cuttack", value:"Cuttack" },
                                { label:"Brahmapur Town", value:"Brahmapur Town" },
                                { label:"Raurkela", value:"Raurkela" },
                                { label:"Puri Town", value:"Puri Town" }]
                      },
                      { header :"Punjab", 
                        options:[{ label:"Chandigarh", value:"Chandigarh" },
                                { label:"Ludhiana", value:"Ludhiana" },
                                { label:"Amritsar", value:"Amritsar" },
                                { label:"Jalandhar", value:"Jalandhar" },
                                { label:"Patiala", value:"Patiala" },
                                { label:"Bathinda", value:"Bathinda" }]
                      },
                      { header :"Rajasthan", 
                        options:[{ label:"Jaipur", value:"Jaipur" },
                                { label:"Jodhpur", value:"Jodhpur" },
                                { label:"Kota", value:"Kota" },
                                { label:"Bikaner", value:"Bikaner" },
                                { label:"Ajmer", value:"Ajmer" }]
                      }, 
                      { header :"Sikkim", 
                        options:[{ label:"Gangtok", value:"Gangtok" }]
                      },
                      { header :"Tamil Nadu", 
                        options:[{ label:"Chennai", value:"Chennai" },
                                { label:"Coimbatore", value:"Coimbatore" },
                                { label:"Madurai", value:"Madurai" },
                                { label:"Tiruchirappalli", value:"Tiruchirappalli" },
                                { label:"Salem", value:"Salem" }]
                      },
                      { header :"Telangana", 
                        options:[{ label:"Hyderabad", value:"Hyderabad" }]
                      },
                      { header :"Tripura", 
                        options:[{ label:"Agartala", value:"Agartala" }]
                      },
                      { header :"Uttar Pradesh", 
                        options:[{ label:"Lucknow", value:"Lucknow" },
                                { label:"Kanpur", value:"Kanpur" },
                                { label:"Ghaziabad", value:"Ghaziabad" },
                                { label:"Agra", value:"Agra" },
                                { label:"Meerut", value:"Meerut" }]
                      },
                      { header :"Uttarakhand", 
                        options:[{ label:"Dehradun", value:"Dehradun" },
                                { label:"Haridwar", value:"Haridwar" },
                                { label:"Haldwani and Kathgodam", value:"Haldwani and Kathgodam" },
                                { label:"Rudrapur", value:"Rudrapur" }]
                      },
                      { header :"West Bengal", 
                        options:[{ label:"Kolkata", value:"Kolkata" },
                                { label:"Haora", value:"Haora" },
                                { label:"Durgapur", value:"Durgapur" },
                                { label:"Asansol", value:"Asansol" },
                                { label:"Siliguri", value:"Siliguri" }]
                      }
];

  return (<>
<Dropdown width="300px" type="multiple" placeholder="Select your Dropdown" menu={menuOptions} layout="top" value={dropdownValue} 
  onChange={(result)=>setDropdownValue(result?.value)}
  container={{
    searchLabel: "Search a Location" 
  }} />
    <div className="mtop10p mbot10p"><b>Selected Value:</b> {dropdownValue}</div>
   </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;