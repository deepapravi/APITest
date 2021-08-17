import supertest from 'supertest'
const request=supertest('https://reqres.in/api/');
import {expect} from 'chai';

describe.skip('Users',()=>{

    it('GET/users',async()=>{
     await request.get('users').then((res)=>{
     expect(res.body.data).to.not.be.empty;
     });

    });

    it('GET/users/id',async()=>{
      await request.get('users/1').then((res)=>{
        expect(res.body.data.id).to.be.eq(1);
        });
   
       });

          it('GET/users with query',async() => {
        //const url=`users/1?page=5&gender=Female&status=Active`;
          const url=`users`;
          await request.get(url).then((res) => {
            expect(res.body.data).to.not.be.empty;
            console.log(res.body.data);
            res.body.data.forEach((data) =>{
             // expect(data.gender).to.eq('Female');
              expect(data.id).to.not.be.null;
            });
          });
        });
    });


    
