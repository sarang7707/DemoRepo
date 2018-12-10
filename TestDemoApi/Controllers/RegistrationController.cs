using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using TestDemoApi.BAL;

namespace TestDemoApi.Controllers
{
    public class RegistrationController : ApiController
    {
        blRegistration blr = new blRegistration();
        public bool InsertRegistrtion(tblRegistration reg)
        {
            if(reg != null)
            {
                blr.InsertRegistration(reg);
                return true;
            }
            return false;
        }
        public tblRegistration GetDetails(int id)
        {
            var identityClaims = (ClaimsIdentity)User.Identity;
            IEnumerable<Claim> claims = identityClaims.Claims;
            tblRegistration model = blr.getData(id);
            return model;
        }
    }
}
