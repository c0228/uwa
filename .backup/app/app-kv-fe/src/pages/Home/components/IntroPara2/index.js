import React from 'react';
import { ContainerFluid, Row, Col, Icon } from 'e-ui-react';

const IntroPara2 = ()=>{
 return (<div style={{ marginBottom:'60px', padding:'5%' }}>
  <ContainerFluid>
    <Row>
        <Col xl={12}>
            <div>
                <div align="center"><h3><b>Discover Our Services - Find Your Perfect Match with Ease</b></h3></div>
            </div>
        </Col>
        <Col xl={12}>
            <div style={{ fontSize:'18px', paddingTop:'1.5%', paddingLeft: '15%', paddingRight:'15%', paddingBottom: '1.5%' }}>
            At <b>Kalyanaveena.com</b>, we are dedicated to providing you with a range of exceptional services that will simplify and enhance your journey towards finding your perfect match. Our comprehensive offerings ensure that you have the tools and support you need to make meaningful connections. Here's how we can assist you:
            </div>
        </Col>
    </Row>
    <Row>
        <Col xl={4} style={{ marginTop:'4%' }}>
            <div align="center">
                <Icon type="FontAwesome" name="fa-pencil" size="65"  style={{ color:'#630062', width:'100px', height:'100px', paddingTop: '15px', border:'2px solid #630062', borderRadius:'50%' }}/>
                <h4 style={{ marginTop:'25px',  color:'#630062' }}><b>Personalized Profile Creation</b></h4>
            </div>
            <div align="center" style={{ fontSize:'18px', marginTop:'15px' }}>
            We believe that a well-crafted profile is the key to attracting compatible partners. Our intuitive profile creation 
            process allows you to showcase your personality, interests, and aspirations effectively. Our tips and guidance will 
            help you highlight your best qualities, increasing your chances of finding a like-minded individual.
            </div>
        </Col>
        <Col xl={4} style={{ marginTop:'4%' }}>
            <div align="center">
                <Icon type="FontAwesome" name="fa-search" size="55"  style={{ color:'#630062', width:'100px', height:'100px', paddingTop: '15px', border:'2px solid #630062', borderRadius:'50%' }}/>
                <h4 style={{ marginTop:'25px', color:'#630062' }}><b>Advanced Search and Matching</b></h4>
            </div>
            <div align="center" style={{ fontSize:'18px', marginTop:'15px' }}>
            Our advanced search and matching algorithms empower you to refine your search and find potential partners who align 
            with your preferences. Whether you have specific criteria in mind or want to explore different options, our smart 
            matching system will provide you with accurate and relevant results, saving you time and effort.
            </div>
        </Col>
        <Col xl={4} style={{ marginTop:'4%' }}>
            <div align="center">
                <Icon type="FontAwesome" name="fa-lock" size="80"  style={{ color:'#630062', width:'100px', height:'100px', paddingTop: '6px', border:'2px solid #630062', borderRadius:'50%' }}/>
                <h4 style={{ marginTop:'25px', color:'#630062' }}><b>Secure Communication</b></h4>
            </div>
            <div align="center" style={{ fontSize:'18px', marginTop:'15px' }}>
            We prioritize your safety and privacy. Our secure messaging system enables you to connect with other members while 
            ensuring your personal information remains confidential. You can engage in meaningful conversations, get to know 
            each other better, and build a strong foundation for a potential relationship within a secure environment.
            </div>
        </Col>
        <Col xl={4} style={{ marginTop:'4%' }}>
            <div align="center">
                <Icon type="FontAwesome" name="fa-check-circle" size="80"  style={{ color:'#630062', width:'100px', height:'100px', paddingTop: '6px', border:'2px solid #630062', borderRadius:'50%' }}/>
                <h4 style={{ marginTop:'25px', color:'#630062' }}><b>Verified Profiles</b></h4>
            </div>
            <div align="center" style={{ fontSize:'18px', marginTop:'15px' }}>
            We understand the importance of trust when it comes to online matchmaking. To maintain the authenticity of our 
            platform, we verify each profile before it goes live. This process ensures that you are interacting with genuine 
            individuals who are genuinely interested in finding a life partner.
            </div>
        </Col>
        <Col xl={4} style={{ marginTop:'4%' }}>
            <div align="center">
                <Icon type="FontAwesome" name="fa-life-ring" size="80"  style={{ color:'#630062', width:'100px', height:'100px', paddingTop: '6px', border:'2px solid #630062', borderRadius:'50%' }}/>
                <h4 style={{ marginTop:'25px', color:'#630062' }}><b>Expert Advice and Support</b></h4>
            </div>
            <div align="center" style={{ fontSize:'18px', marginTop:'15px' }}>
            Our team of relationship experts is here to guide you throughout your journey. From providing dating tips and 
            advice to offering personalized matchmaking recommendations, we are committed to helping you navigate the 
            complexities of finding love and building a lasting relationship.
            </div>
        </Col>
        <Col xl={4} style={{ marginTop:'4%' }}>
            <div align="center">
                <Icon type="FontAwesome" name="fa-users" size="55"  style={{ color:'#630062', width:'100px', height:'100px', paddingTop: '18.5px', border:'2px solid #630062', borderRadius:'50%' }}/>
                <h4 style={{ marginTop:'25px', color:'#630062' }}><b>Events and Meetups</b></h4>
            </div>
            <div align="center" style={{ fontSize:'18px', marginTop:'15px' }}>
            We believe in the power of real-life connections. Our platform offers a range of events and meetups where you 
            can interact with other like-minded individuals in a relaxed and enjoyable setting. These gatherings provide 
            an opportunity to expand your social circle and meet potential partners face-to-face.
            </div>
        </Col>
    </Row>
    <Row>
        <Col xl={12} xxl={12} style={{ marginTop:'60px', fontSize:'18px' }}>
            <div align="center">
                Join <b>Kalyanaveena.com</b> today and take advantage of our exceptional services to discover your perfect match. 
                Start your journey towards a meaningful and fulfilling relationship with us.
            </div>
        </Col>
    </Row>
  </ContainerFluid>
 </div>);
};

export default IntroPara2;

