
import { React, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PrivatePageLink from '../../Header/DropdownContainer/PrivatePageLink';
import Footer from '../../Footer/Footer';
import { TableFooter } from '@mui/material';
import Modals from '../../Header/DropdownContainer/Modals';
import styled from 'styled-components';
import { Routes, Route, useNavigate, Link, Navigate } from 'react-router-dom';
import Minutes from '../Minutes';
import { FaQuoteLeft, FaQuoteRight, FaRegCalendarCheck } from 'react-icons/fa'

const Oct2022Meeting = () => {
  return (
    <div className='relative h-100vh'>
      {<PrivatePageLink mode={Modals} className='fixed top-0' />}
      <Container className='fluid text-dark ' style={{ minHeight: '100vh', height: 'auto' }}>
        <Container>
          <ROW className='main-row'>
            <div className='col col-sm-12 col-md-12 col-lg-7'>
              <TextPage className='jumbotron p-5 relative top-20 bottom-20 pb-10 text-justify'>

                <h2><strong> October Minutes of the Meeting</strong></h2>
                <p><b>Date:</b> 9/10/2022</p>

                <p><strong>Members Present:</strong> Kingsley Agoha, Austine Okeagu, Chuks Ogujawa, Charles Obodoechina, Francis Udoku, Emeka Onwunzo, Emmanuel </p>
                <p><strong>Absentees:</strong> Chijioke, Ugo, Chidi, Edozie, Chidiebere and Billy</p>

                <p><strong>Proceedings:</strong> Meeting was called to order at 5pm. The open prayer was said Emeka Onwunzo. The minutes of the meeting were taken by the chairman and previous minutes were also read him. Motion to approve the minutes was made by francis, seconded by Kingsley. 
                </p>
               <h4>Agenda 1</h4>

                <p>
                <strong className='text-primary'>Charity status update: </strong>Francis updated the members following a discussion at Mr Gabriel's that the constitution had been circulated as agreed and members had acknowledged receipt, and had also promised to provide feedback shortly. Although no feedback has yet been recevied but he believes that the work is in progress. Francis also said that he has been extremely busy working on our website, so he has not been able to devote enough time to the application project.
                </p>
                <p>
                Kingley expressed gratitude to Francis for all his work. He noted that the first step in implementing the status application should be to sign up on the Irish charity regulator's website. Secondly, the executive committee should be responsible for filling out the form - to avoid further delays. Chuck also said it's critical that the executive gets involved in filling out the application if we want to reach our goal. The Chairman also approved the idea, assuring members that an executive meeting would be convened as soon as possible to address the issue once and for all.
                </p>

                <p>
                <h4>Agenda 2</h4>
                <strong className='text-primary'>Financial and bank signatories:</strong> Chairman asked Chuck and Francis if Ugo had communicated with them regarding the bank and financial signatories as discussed in the last meeting. Chuck replied no. It was decided that Francis and Emeka would accompany Chuck to the bank to resolve the signatory's issue.
                </p>
          
                <p>
                <h4>Agenda 3</h4>
                <strong className='text-primary'>End of year/Welcome Party:</strong> The chairman asked for an update regarding the end of year party, as well as our ideas for the welcome party for Father Ohara. Emeka believes that the welcome party is a worthwhile idea because the Rev father did a good job. However, he was concerned about funding and the venue, unsure of how they could be handled. In view of funding, Chuks asked if there would be a mandatory contribution in addition to our normal contribution or would our usual approach apply? Francis noted that we might get some support from people when the event approaches. Chuk advised that we should work with what we have, and external support would be a plus.
                </p>
                <p>
                Francis pointed out that choosing a venue around the Ballybofey/Stranorlar area would be strategic as it would encourage the friends and family of Father Ohara to attend the program. Emeka warned that we might not be allowed to bring our food or decorate the venue as we wish. Emmanuel strongly advised that the venue should be arranged first, and the theme <b><i>welcome party</i></b> should be replaced by an <b><i>appreciation party</i></b>. In the end, it was decided that we should maintain our usual fund-raising method and a contribution of 100 euros should be made by each member towards the event. Also, Francis and Emeka were directed to find a venue and report back to the group at the next meeting. In addition, <b><i>End of Year /Appreciation Party</i></b> was chosen as the theme of the event instead of <i><b>End of Year/welcome Party.</b></i>
                </p>
                <p>
                Furthermore, Emeka noted that we are unsure which member of the executive is the financial secretarY- emphasising that the end of the year is fast approaching, and it's critical that we have an annual financial statement for informed decision-making. He complained that some people had not paid their dues and other contributions that needed to be recorded. Chairman acknowledged the point and expressed concerns about Ugo's refusal to fulfill his obligations - stressing that he was elected to serve in the position and he is expected to execute his duties as assigned. However, he promised to speak to Ugo before the next meeting
                </p>
                
               <p> <strong className='text-primary'>Matters Arising:</strong> In relation to Jerry Obi's one-year memorial service, Kingsley informed the association that the family has invited us to attend. The date is 19th Nov, 2022, time is from 6:30pm and venue is Letterkenny Christian Fellowship, Bonagee Road, Bonagee Hall, Letterkenny, Co. Donegal. He encouraged those who could attend to do so as part of our own responsibilities to support his family. In addition, two new members, Emeka Chime and Chinedu Ewo, both from Enugu state were welcomed to the family.
                </p>
          
                <p><strong>Finance: </strong>
                The sum of €70 was collected for dues and €70 was spent for refreshments
              The motion for adjournment was moved by chuks, seconded by Vc at 7:45pm.  
              The next meeting is scheduled for Nov 13th, 2022 at Elder Billys 
              The closing prayer was said by Emmanuel. 
                </p>
         
                <Container>
              <Row className='d-flex justify-content-center align-items-center'><strong>A summary of the Dues</strong></Row>
              <Row>
                <Col>   <table>
              <thead>
                <tr>
                <th scope="col">Names</th>
                <th scope="col">Dues</th>

                </tr>
              </thead>
              <tbody>
              <tr>
                <td>Emeka</td>
                <td>€10 </td>
             
             </tr>
              <tr>
                <td>Austine</td>
                <td>€10 </td>
               
             </tr>
              <tr>
                <td>Chuks</td>
                <td>€10 </td>
              
             </tr>
              <tr>
                <td>Kingsley</td>
                <td>€10 </td>
             </tr>
              <tr>
                <td>Francis</td>
                <td>€10 </td>
             </tr>
              <tr>
                <td>Charley</td>
                <td>€10 </td>
             </tr>
              <tr>
                <td>Emmanuel</td>
                <td>€10 </td>
             </tr>
             <tr>
    <th colspan="2">Total: 70 euros</th>
  </tr>
             </tbody>
              </table> 
              </Col>
              </Row>
            </Container>
             

              
              </TextPage>
            </div>
            <div className='col col-sm-12 col-md-12 col-lg-5 Columns relative top-32'>
              <h3 className='d-flex w-100'>
                <span><FaRegCalendarCheck className='mt-1 mx-1 me-2 text-red-700' />
                </span>Meeting Minutes by Date</h3>
              <p className='relative top-12 left-2 grid grid-cols-1 gap-3 button-page'>



                <BUTTON as={Link} to='/Feb2022Meeting'
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes of the Meeting for Feb | 13/02/2022</BUTTON>

                <BUTTON as={Link} to='/Match2022Meeting'
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes of the Meeting for March | 13/05/2022</BUTTON>

                <BUTTON as={Link} to='/April2022Meeting'
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes of the Meeting for April | 10/05/2022</BUTTON>

                <BUTTON as={Link} to='/May2022Meeting'
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes of the Meeting for May | 8/05/2022</BUTTON>

                  <BUTTON as={Link} to='/June2022Meeting' 
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                    Minutes of the Meeting for June | 12/05/2022</BUTTON>

                <BUTTON as={Link} to='/Sept2022Meeting'
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes of the Meeting for Sept | 18/05/2022</BUTTON>

                  <BUTTON as={Link} to='Oct2019Meeting'
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes of the Meeting for Oct | 13/10/2019</BUTTON>

                <BUTTON className='constution shadow-none border-none outline-line px-5 py-2 text-decoration-none text-light '
                  as={Link} to='/Minutes'>
                  Click to navigate Back to the Constitution Page</BUTTON>
              </p>
            </div>
            <Row>
              <>
              </>
            </Row>
          </ROW>

        </Container>
      </Container>
      {<Footer />}
    </div>



  )
}

export default Oct2022Meeting

const ROW = styled(Row)`
position:relative;
min-height:80vh;
height:auto;
@media(max-width:992px){
  margin-bottom:15rem !important;

}
`
const TextPage = styled.div`
min-height:100vh !important;
height:auto;
padding-right:2rem !important;
margin-bottom:5rem !important;
@media(max-width:992px){
  padding-right:2rem !important;
}
`
const BUTTON = styled(Button)`
border-radius: 10px !important;
:not(.constution){background-color: #1c1cf0  !important;
border: 0px solid;


}

@media(max-width:996px){
  background-color: #E40078 !important;
  font-weight:700 !important;
  width:auto !important;
  padding:auto !important;
}
@media(max-width:786px){
span{
  display:none !important;
}
}
`