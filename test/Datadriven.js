import request from '../config/common';
import {expect} from 'chai';

//const client=require('./database');
 
    

  //  const org=query();
   

    let TOKEN=process.env.USER_TOKEN;
describe.only('ReportTest',()=>{

let organisation=[
  { org:57372,
    result:true
  } ,
  {
    org:30238,
    result:true
  }
]



organisation.forEach((organisation)=>{

    let AssessmentId,ClassId;
    let orgId=organisation.org;
    it('GET/assessmentservice', async ()=>{

        await request
       .get(`/Assessment/${orgId}?yearCodes=6&pupilOption=false&keyStageCode=2`)
       .disableTLSCerts()
       .set('authorization',`Bearer ${TOKEN}`)
       .then((res)=>{
        expect(res.statusCode).to.be.eq(200);
        console.log(`Test passed for org -${orgId}`);
        AssessmentId=res.body.assessments[0].assessmentId;
        ClassId=res.body.assessments[0].schoolClasses[0].schoolClassId;
        });

    });
})

});
