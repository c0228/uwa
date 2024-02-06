import React from "react";
import { Form, Select, Dropdown, Card } from "e-ui-react";
import StaticProfileForm from "@Pages/Home/static-data/static-profile-form.json";

const ProfileSearchForm = ()=>{

    const GenderField = ()=>{
        return (<>
          <Select
              name="Gender"
              label="Gender"
              placeholder="Select Gender"
              options={StaticProfileForm?.gender}
              className="navbar-layout"
              width="100%"
              fontSize="12" 
              validation={{
                  required:{
                      value: true,
                      errorMessage:"This is a Mandatory Field"
                  }
              }}
           />
        </>);
       };
      
       const MartialStatusField = ()=>{
          return (<Dropdown name="MartialStatus" type="multiple" label="Martial Status" placeholder="Select Martial Status" 
              menu={StaticProfileForm?.martialStatus} 
              validation={{
                  required:{
                      value: true,
                      errorMessage:"This is a Mandatory Field"
                  }
              }}
              container={{
                searchLabel:"Search Martial Status"
              }}
          />);
       };
      
       const MotherTongueField = ()=>{
          return (<Dropdown name="MotherTongue" type="multiple" label="Mother Tongue" placeholder="Select Mother Tongue" 
              menu={StaticProfileForm?.motherTongue} 
              validation={{
                  required:{
                      value: true,
                      errorMessage:"This is a Mandatory Field"
                  }
              }}
              container={{
                searchLabel:"Search Mother Tongue"
              }}
          />);
       };
      
       const OccupationStatusField = ()=>{
          return (<Dropdown name="OccupationStatus" type="multiple" label="Occupation Status" placeholder="Select Occupation Status" 
              menu={StaticProfileForm?.occupationStatus} 
              validation={{
                  required:{
                      value: true,
                      errorMessage:"This is a Mandatory Field"
                  }
              }}
              container={{
                searchLabel:"Search Occupation Status"
              }}
          />);
       };
      
       const ProfessionField = ()=>{
          return (<Dropdown name="Profession" type="multiple" label="Profession" placeholder="Select Profession" 
              menu={StaticProfileForm?.profession} 
              validation={{
                  required:{
                      value: true,
                      errorMessage:"This is a Mandatory Field"
                  }
              }}
              container={{
                searchLabel:"Search Profession"
              }}
          />);
       };
  
      return (<>
          <Card padding={15}>
             <div align="center"><b>FIND YOUR DESIRED PROFILE</b></div>
             <Form name="registerForm" btnSubmit={{
                 align:'center',
                 btnType:'primary',
                 label:'Search Profiles',
                 size: 11
             }}
             btnReset={{
                 btnType:'danger',
                 label:'Reset',
                 size: 11
             }}
             onSubmit={async(form, isValidForm, triggerReset)=>{
                 // 
     
                // triggerReset();
             }}
             onReset={async()=>{
                
             }}
             >
             <div className="mtop15p"><GenderField /></div>
             <div className="mtop15p"><MartialStatusField /></div>
             <div className="mtop15p"><MotherTongueField /></div>
             <div align="center" className="mtop15p"><b>LIVELIHOOD</b></div>
             <div className="mtop15p"><OccupationStatusField /></div>
             <div className="mtop15p"><ProfessionField /></div>
             </Form>
         </Card>
      </>);
   };
export default ProfileSearchForm;