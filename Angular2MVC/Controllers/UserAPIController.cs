using Angular2MVC.DBContext;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace Angular2MVC.Controllers
{   //inherits BaseAPIController to use UserDB object and ToJson method to convert User entity into JSON string
    //and saving it in HTTP response msg 
    public class UserAPIController : BaseAPIController
    {
        //Load all users from database and return the HTTP Response Message containing Users entity converted to JSON string
        public HttpResponseMessage Get()
        {
            return ToJson(UserDB.TblUsers.AsEnumerable());
        }
        public HttpResponseMessage Get(int id)
        {
            return ToJson(UserDB.TblUsers.AsEnumerable().FirstOrDefault(u => u.Id == id));
        }
        //Take the User information from front end and save it to database. Return 1 for successfully saved.
        public HttpResponseMessage Post([FromBody]TblUser value)
        {
            UserDB.TblUsers.Add(value);             
            return ToJson(UserDB.SaveChanges());
        }
        //Take the existing user id and updated information and update it to database. Return 1 for successfully updated.
        public HttpResponseMessage Put(int id, [FromBody]TblUser value)
        {
            UserDB.Entry(value).State = EntityState.Modified;
            return ToJson(UserDB.SaveChanges());
        }
        //Take existing user id, load the user by id and delete it. Return 1 for successfully deleted.
        public HttpResponseMessage Delete(int id)
        {
            UserDB.TblUsers.Remove(UserDB.TblUsers.FirstOrDefault(x => x.Id == id));
            return ToJson(UserDB.SaveChanges());
        }
    }
}
