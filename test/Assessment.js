
import request from '../config/common';
import {expect} from 'chai';
//import org from '../config/testdata';

import organisation from '../config/testdata';
//import result  from '../config/testdata';



let TOKEN=process.env.USER_TOKEN;
 

describe('ReportTest',()=>{
 
/*org.then((result)=>{
  result.rows.forEach((element)=>{
     
    let orgId=element.organisation_id;
    
    //console.log(orgId);*/
    organisation.forEach((organisation)=>{

      let orgId=organisation.org;
    let AssessmentId,ClassId;
     it(`GET/assessmentservice for org-${orgId}`, async ()=>{
        console.log(`Running Test for org -${orgId}`)
          await request
         .get(`/Assessment/${orgId}?yearCodes=6&pupilOption=false&keyStageCode=2`)
         .disableTLSCerts()
         .set('authorization',`Bearer ${TOKEN}`)
         .then((res)=>{
          expect(res.statusCode).to.be.eq(200);
          AssessmentId=res.body.assessments[0].assessmentId;
          ClassId=res.body.assessments[0].schoolClasses[0].schoolClassId;
          })
      }).timeout(10000);
    
       it(`GET/SummaryReport for org-${orgId}`,async()=>{
         if(AssessmentId) 
         {
        await request
        .get(`/Summary/${orgId}?AssessmentId=${AssessmentId}&YearCodes=6&ClassIds=${ClassId}&IndicatorIds=14&IndicatorIds=13&IndicatorIds=31&IndicatorIds=12&IndicatorIds=9&IndicatorIds=4&IndicatorIds=1&IndicatorIds=10&IndicatorIds=5&IndicatorIds=15&IndicatorIds=11&IndicatorIds=7&IndicatorIds=8&IndicatorIds=2&IndicatorIds=6&IndicatorIds=3&KeyStage=2`)
        .disableTLSCerts()
        .set('authorization',`Bearer ${TOKEN}`)
        .then((res)=>{
         expect(res.statusCode).to.be.eq(200);
               });
         }
        else{
              throw new Error(`AssessmentId is invalid - ${AssessmentId} for org-${orgId} `);
  
            }
       
      }).timeout(10000);;
      
      it(`GET/ClassesReport for org-${orgId}`,async()=>{
        if(AssessmentId) 
        {
       await request
       .get(`/Class/${orgId}?AssessmentId=${AssessmentId}&YearCodes=6&ClassIds=${ClassId}&IndicatorIds=14&IndicatorIds=13&IndicatorIds=31&IndicatorIds=12&IndicatorIds=9&IndicatorIds=4&IndicatorIds=1&IndicatorIds=10&IndicatorIds=5&IndicatorIds=15&IndicatorIds=11&IndicatorIds=7&IndicatorIds=8&IndicatorIds=2&IndicatorIds=6&IndicatorIds=3&KeyStage=2`)
       .disableTLSCerts()
       .set('authorization',`Bearer ${TOKEN}`)
       .then((res)=>{
        expect(res.statusCode).to.be.eq(200);
              });
        }
       else{
             throw new Error(`AssessmentId is invalid - ${AssessmentId} for org-${orgId}`);
  
           }
      
      });
  
  
     it(`GET/PupilgroupsReport for org-${orgId}`,async()=>{
      if(AssessmentId) 
      {
     await request
     .get(`/PupilGroup/${orgId}?AssessmentId=${AssessmentId}&YearCodes=6&ClassIds=${ClassId}&IndicatorIds=14&IndicatorIds=13&IndicatorIds=31&IndicatorIds=12&IndicatorIds=9&IndicatorIds=4&IndicatorIds=1&IndicatorIds=10&IndicatorIds=5&IndicatorIds=15&IndicatorIds=11&IndicatorIds=7&IndicatorIds=8&IndicatorIds=2&IndicatorIds=6&IndicatorIds=3&KeyStage=2`)
     .disableTLSCerts()
      .set('authorization',`Bearer ${TOKEN}`)
     .then((res)=>{
      expect(res.statusCode).to.be.eq(200);
            });
      }
     else{
           throw new Error(`AssessmentId is invalid - ${AssessmentId} for org-${orgId}`);
  
         }
    
     });
  
     it(`GET/PupilListReport for org-${orgId}`,async()=>{
      if(AssessmentId) 
      {
     await request
     .get(`/PupilList/${orgId}?AssessmentId=${AssessmentId}&YearCodes=6&ClassIds=${ClassId}&IndicatorIds=14&IndicatorIds=13&IndicatorIds=31&IndicatorIds=12&IndicatorIds=9&IndicatorIds=4&IndicatorIds=1&IndicatorIds=10&IndicatorIds=5&IndicatorIds=15&IndicatorIds=11&IndicatorIds=7&IndicatorIds=8&IndicatorIds=2&IndicatorIds=6&IndicatorIds=3&KeyStage=2`)
     .disableTLSCerts()
     .set('authorization',`Bearer ${TOKEN}`)
     .then((res)=>{
      expect(res.statusCode).to.be.eq(200);
            });
      }
     else{
           throw new Error(`AssessmentId is invalid - ${AssessmentId}for org-${orgId}`);
  
         }
    
   }).timeout(10000);
  
  });
  
}).timeout(10000)
 
