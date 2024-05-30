import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { DiBitbucket, DiCodeigniter } from "react-icons/di";
import { HiMap, HiLocationMarker, HiLibrary } from "react-icons/hi";
import { SiAirplayaudio } from "react-icons/si";





function TimeLineVertical() {
    return(
        <div className="TestingSuppot_head" id="Testing_Support">
        <span className="testingsupport_heading">How Our Testing Support Works?</span><br></br>
            <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"   
                contentStyle={{ background: 'rgb(255 255 255)', color: '#000', border: '1px solid gainsboro' }}     
                contentArrowStyle={{ borderRight: '7px solid rgb(209 209 209)' }}
                iconStyle={{ background: 'rgb(242 242 242)', color: '#14457B' }}
                // icon={<DiBitbucket />}
                icon={<img src="/images/assesment.svg" alt="assesment"  style={{padding: '14px'}}/>}
                >  
                  
                    <h3 className="vertical-timeline-element-title">Assessment of Testing Requirements</h3>     
                    <p> 
                    Our experts analyze your device and its intended market to determine the specific testing requirements.        
                    </p>
                    </VerticalTimelineElement> 


                <VerticalTimelineElement
                className="vertical-timeline-element--work"       
                contentStyle={{ background: 'rgb(255 255 255)', color: '#000', border: '1px solid gainsboro' }}     
                contentArrowStyle={{ borderRight: '7px solid rgb(209 209 209)' }}
                iconStyle={{ background: 'rgb(242 242 242)', color: '#14457B' }}
                icon={<img src="/images/laboratory.svg" alt="laboratory"  style={{padding: '14px'}}/>}
                >  
                  
                    <h3 className="vertical-timeline-element-title">Laboratory Selection</h3>     
                    <p> 
                    Our experts analyze your device and its intended 
                    market to determine the specific 
                    testing requirements.     
                    </p>


                </VerticalTimelineElement> 


                <VerticalTimelineElement
                className="vertical-timeline-element--work"       
                contentStyle={{ background: 'rgb(255 255 255)', color: '#000', border: '1px solid gainsboro' }}     
                contentArrowStyle={{ borderRight: '7px solid rgb(209 209 209)' }}
                iconStyle={{ background: 'rgb(242 242 242)', color: '#14457B' }}
                icon={<img src="/images/document.svg" alt="doc"  style={{padding: '14px'}}/>}
                >  
                  
                    <h3 className="vertical-timeline-element-title">Coordination and Documentation</h3>     
                    <p> 
                    Based on your device's characteristics and the target 
                    markets, we select the most appropriate testing 
                    laboratory from our network.   
                    </p>
                    </VerticalTimelineElement> 
                        
                <VerticalTimelineElement
                className="vertical-timeline-element--work"       
                contentStyle={{ background: 'rgb(255 255 255)', color: '#000', border: '1px solid gainsboro' }}  
                contentArrowStyle={{ borderRight: '7px solid rgb(209 209 209)' }}
                iconStyle={{ background: 'rgb(242 242 242)', color: '#14457B' }}
                icon={<img src="/images/fllowup.svg" alt="followup"  style={{padding: '14px'}}/>}
                >

                    <h3 className="vertical-timeline-element-title">Communication and Follow-up</h3>     
                    <p> 
                    We handle all the necessary paperwork, including test 
                    requests, specifications, and documentation required 
                    by the testing laboratory.
                    </p>
                    </VerticalTimelineElement> 
  
                <VerticalTimelineElement
                className="vertical-timeline-element--work"       
                contentStyle={{ background: 'rgb(255 255 255)', color: '#000', border: '1px solid gainsboro' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(209 209 209)' }}
                iconStyle={{ background: 'rgb(242 242 242)', color: '#14457B' }}
                icon={<img src="/images/analysis.svg" alt="analysis"  style={{padding: '14px'}}/>}
                >  
                  
                    <h3 className="vertical-timeline-element-title">Test Result Analysis</h3>     
                    <p> 
                    We serve as your point of contact with the laboratory, 
                    facilitating clear communication, addressing any 
                    queries, and providing regular updates on the testing progress.        
                    </p>
                    </VerticalTimelineElement> 

                <VerticalTimelineElement
                className="vertical-timeline-element--work"       
                contentStyle={{ background: 'rgb(255 255 255)', color: '#000', border: '1px solid gainsboro' }}  
                contentArrowStyle={{ borderRight: '7px solid rgb(209 209 209)' }}
                iconStyle={{ background: 'rgb(242 242 242)', color: '#14457B' }}
                icon={<img src="/images/customer-support.svg" alt="suports"  style={{padding: '14px'}}/>}
                >  
                  
                    <h3 className="vertical-timeline-element-title">Further Support</h3>     
                    <p> 
                    Once the testing is completed, our team 
                    thoroughly reviews the test reports and assists 
                    you in interpreting the results.      
                    </p>
                    </VerticalTimelineElement> 

                    <div className="timeline-separator"></div>

                
            </VerticalTimeline>
          
     </div>

        </div>
    );
}

export default TimeLineVertical; 

