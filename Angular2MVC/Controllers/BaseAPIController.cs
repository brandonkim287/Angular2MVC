using Angular2MVC.DBContext;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace Angular2MVC.Controllers
{
    public class BaseAPIController : ApiController
    {
        protected readonly UserDBEntities UserDB = new UserDBEntities();

        //method is taking any kind of class object, creating the HTTP Response object with OK HttpStatusCode 
        //and serializing the object to JSON string by calling the JsonConvert method from Newtonsoft.json library
        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }
    }
}
