import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import img from '../components/images/calculator.jpg'
import img1 from '../components/images/BMI calculator.jpg'
import img2 from '../components/images/zudio.jpg'
import img3 from '../components/images/luminar.jpg'
import { Card, Col, Row } from 'react-bootstrap';
import './Home.css'

function Header() {
    

  return (
    <div>
      <div className='d-flex'>
        <MDBNavbar light bgColor='secondary '>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <i class="fa-solid fa-address-card fa-spin fs-2 me-3"></i>
            <h3 className=''style={{textShadow:'2px 2px 1px brown'}}>Personal Info</h3>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <MDBNavbar light bgColor='secondary ' style={{paddingLeft:'385px'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='.home' style={{textShadow:'2px 2px 1px brown'}}>Home</MDBNavbarBrand>
          <MDBNavbarBrand href='#about' style={{textShadow:'2px 2px 1px brown'}}>About</MDBNavbarBrand>
          <MDBNavbarBrand href='#project' style={{textShadow:'2px 2px 1px brown'}}>Projects</MDBNavbarBrand>
          <MDBNavbarBrand href='#skill' style={{textShadow:'2px 2px 1px brown'}}>Skills</MDBNavbarBrand>
          <MDBNavbarBrand href='#contact' style={{textShadow:'2px 2px 1px brown'}}>Contact Me</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

    </div>
    <div className="container">
    <div className="home  text-center p-5 w-75 ps-5 ms-5 ">
      <h4>Hii All ...</h4>
      <h2> Safna Here ...Iam a Web Developer</h2> 
      
      <p> Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>
    </div>
  </div>

  <div className=" container" id='about'>
          <h1 className='text-danger text-center mt-5'>About Me</h1>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 border shadow mt-4 bg-light p-4" style={{height:'460px'}}>
            <Card className='p-4' >
      <Card.Body className='bg-light '>
        
        <Card.Subtitle className="mb-2 text-dark p-3">ME(A)RN STACK DEVELOPER</Card.Subtitle>
        <Card.Text className='p-4'>
          My name Safna moe ps from Ernakulam.  <br />Iam completed my graduation in Mathematics with computer application from MG university.Currently  i am a mearn stack developer working as an intern in Luminar Techno lab . And also a dedicated person with a mission to bring digital ideas to reality.
        </Card.Text>
        <Card.Link href="https://github.com/SAFNAMOLEPS" className='ms-5'><i className="fa-brands fa-github fa-bounce fs-2" style={{color: "#e17f7f"}}></i></Card.Link>
        <Card.Link className='ms-5' href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><i class="fa-brands fa-linkedin fa-bounce fs-2" style={{color: "#e17f7f"}}></i></Card.Link>
      </Card.Body>
    </Card>
            </div>
            <div className="col-3"></div>
          </div>
        </div>

        <div className='prj m-5 'id='project'>
        <h1 className='p-5 text-center text-danger'>Recent Projects</h1>
        <div className='d-flex'>
        <MDBCard style={{ maxWidth: '50%'}} className=' border  shadow'>
      <MDBRow className='' style={{height:'200px'}}>
        <MDBCol md='6 bg-image hover-zoom '>
          <MDBCardImage src={img} alt='...'   style={{height:'200px', width:'300px'}}/>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCardBody>
            <MDBCardTitle>Calculator</MDBCardTitle>
            <MDBCardText>
              This is a simple calculator able to addion, subtraction, division and multiplication.Is created using <span>html</span>,<span>css</span> ,<span>Bootstrap</span>, <span>Javascript</span>.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <MDBCard style={{ maxWidth: '50%'}} className=' border'>
      <MDBRow className='' style={{height:'200px'}}>
      <MDBCol md='6 bg-image hover-zoom'>
          <MDBCardImage src={img1} alt='...'   style={{height:'200px', width:'300px'}}/>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCardBody>
            <MDBCardTitle>BMI calculator</MDBCardTitle>
            <MDBCardText>
              This is a  website of BMI Calculator created using <span>HTML</span>,<span>css</span>, <span>Bootstrap</span> and <span>Javascript</span>.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        
      </MDBRow>
    </MDBCard>
        </div>
        <div className='d-flex'>
        <MDBCard style={{ maxWidth: '50%'}} className='  border'>
      <MDBRow className='' style={{height:'200px'}}>
        <MDBCol md='6'>
          <MDBCardBody>
            <MDBCardTitle>Zudio Clone</MDBCardTitle>
            <MDBCardText>
              This is my first clone website of famous ZUDIO, which includes latest trends and collections of youth. <span>HTML</span>, <span>CSS</span> and <span>Bootstrap</span> makes the website more colourful.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='6 bg-image hover-zoom'>
          <MDBCardImage src={img2} alt='...'   style={{height:'200px', width:'300px'}}/>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <MDBCard style={{ maxWidth: '50%'}} className=' border'>
      <MDBRow className='' style={{height:'200px'}}>
        <MDBCol md='6'>
          <MDBCardBody>
            <MDBCardTitle>Luminar Clone</MDBCardTitle>
            <MDBCardText>
              This is my another clone website of LUMINAR TECHNOLAB , includes the details of courses . <span>html</span>,<span>css</span>, <span>Bootstrap</span> used for creating this clone site.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='6 bg-image hover-zoom'>
          <MDBCardImage src={img3} alt='...'   style={{height:'200px', width:'300px'}}/>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <div>
      
    </div>
    
        </div>
        
        
    </div>
    <div id='skill'>
    <h1 className='text-center text-danger'>MY SKILLS</h1>
            <marquee >
              <Row>
                <Col>
                <Card  style={{ width: '25rem' }} className='my-5'>
      
      <Card.Body className='p-3'>
        
        <ul class="list-group list-group-light">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img src="https://codybonney.com/images/16x9/tags/html.png" alt="" style={{width: "100px", height: "100px"}}
        class="rounded-circle" />
      <div class="ms-5">
        <h3 class="fw-bold mb-1">HTML</h3>
        
      </div>
    </div>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png" class="rounded-circle" alt=""
        style={{width: "100px", height: "100px"}} />
      <div class="ms-5">
        <h3 class="fw-bold mb-1">CSS</h3>
        
      </div>
    </div>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img src="https://image.pngaaa.com/770/3801770-middle.png" class="rounded-circle" alt=""
        style={{width: "100px", height:" 100px"}} />
      <div class="ms-5">
        <h3 class="fw-bold mb-1">BOOTSTRAP</h3>
        
      </div>
    </div>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img src="https://th.bing.com/th/id/OIP.YPYdVAg5ieRspLI6HIpmDQHaIB?rs=1&pid=ImgDetMain" class="rounded-circle" alt=""
        style={{width: "100px", height:" 100px"}} />
      <div class="ms-5">
        <h3 class="fw-bold mb-1">JAVASCRIPT</h3>
        
      </div>
    </div>
    </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img src="https://tse2.mm.bing.net/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain" class="rounded-circle" alt=""
        style={{width: "100px", height:" 100px"}} />
      <div class="ms-5">
        <h3 class="fw-bold mb-1">REACT</h3>
        
      </div>
    </div>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img src="https://technologypoint.in/wp-content/uploads/2021/06/MongoDB-sm-logo.gif" class="rounded-circle" alt=""
        style={{width: "100px", height:" 100px"}} />
      <div class="ms-5">
        <h3 class="fw-bold mb-1">MONGODB</h3>
        
      </div>
    </div>
    
  </li>
 
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img src="https://tse1.mm.bing.net/th/id/OIP.Tf4BFI6846neirVSebC0vAAAAA?rs=1&pid=ImgDetMain" class="rounded-circle" alt=""
        style={{width: "100px", height:" 100px"}} />
      <div class="ms-5">
        <h3 class="fw-bold mb-1">NODE JS</h3>
        
      </div>
    </div>
    
  </li>
</ul>
      </Card.Body>
      </Card>
                </Col>
                
              </Row>
            </marquee>
    </div>

    
    <div className="container w-25 text-align-start" id='contact'>
        <h1 className='mb-5 text-danger'>Get in touch with me....</h1>
            <form className=''>
            <MDBInput label='Name' id='formControlDefault' type='text' />
      <br />
      <MDBInput label='Place' id='formControlDefault' type='text' />
      <br />
      <MDBInput label='Mail Id' id='formControlDefault' type='email' />
      <br />
      <MDBTextArea label='Drop any Suggesttion' id='formControlDefault' type='text' />
      <br />
      <div className='mb-5'>
        <button className='btn btn-danger btn-sm'>submit</button>
      </div>
            </form>
        </div>
</div>
  )
}

export default Header