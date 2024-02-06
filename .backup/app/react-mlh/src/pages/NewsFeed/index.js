import React from "react";
import { Menu, Select, Button  } from "e-ui-react";
import './index.css';

const NewsFeed = ()=>{
 return (<div>
    <div align="right">
        <Button type="primary" label="Post a NewsFeed" size={11} />
        <Select
         value="MinLocation"
         placeholder="Select your Location"
         options={[{ id: 'light', label: 'MinLocation', value: 'MinLocation' },
         { id: 'dark', label: 'Location', value: 'Location' },
         { id: 'dark', label: 'State', value: 'State' },
         { id: 'dark', label: 'National', value: 'National' },
         { id: 'dark', label: 'International', value: 'International' }
        ]}
         className="navbar-layout"
         width="130"
         fontSize="12"
         onChange={(event) => {
         }}
      />
        </div>
     <Menu minValues={2} type="tab" list={[{ id:"home", label:"Global", component:(<div>Home Content</div>) },
            { id:"topic1", label:"National", component:(<div>Menu #1 Content</div>) },
            { id:"topic2", label:"State", component:(<div>Menu #2 Content</div>) },
            { id:"topic3", label:"Location", component:(<div>Menu #2 Content</div>) },
            { id:"topic4", label:"MinLocation", component:(<div>Menu #2 Content</div>) }
        ]} />
 </div>);
};

export default NewsFeed;