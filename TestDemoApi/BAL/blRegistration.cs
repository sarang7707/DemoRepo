using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestDemoApi.BAL
{
    
    public class blRegistration
    {
        TestDemoEntities entity = new TestDemoEntities();
        public void InsertRegistration(tblRegistration reg)
        {
            entity.tblRegistrations.Add(reg);
            entity.SaveChanges();
        }
        public tblRegistration checkLoginDetails(string email,string password)
        {
            tblRegistration loginDetails = (from x in entity.tblRegistrations
                                where x.Email == email && x.Password == password
                                select x).FirstOrDefault();
            return loginDetails;
        }
        public tblRegistration getData(int id)
        {
            tblRegistration data = (from x in entity.tblRegistrations
                                    where x.Id == id
                                    select x).FirstOrDefault();
            return data;
        }
    }
}