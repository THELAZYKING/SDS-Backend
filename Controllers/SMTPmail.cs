using SDS_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Text;

namespace SDS_Backend.Controllers
{
    public class SMTPmail
    {
        readonly string to = "16ucs198@lnmiit.ac.in"; //To address    
        readonly string from = "pareektarunsss@gmail.com"; //From address 
        SmtpClient client = new SmtpClient("smtp.gmail.com", 587); //Gmail smtp 
        MailMessage message;
        public SMTPmail(SoftwareDownload softwareDownload)
        {
            message = new MailMessage(to, from);
            string mailbody = "New Software Download request is generated with details as:" + "\n\tEmployee Code: " + softwareDownload.Employee_Code + "\n\tSoftware Name: " + softwareDownload.Software_Name + "\n\tSoftware Version: " + softwareDownload.Software_Version + "\n\tTags: " + softwareDownload.Tags + "\n\tEmployee Request time: " + softwareDownload.Employee_Request_Time;
            message.Subject = "New Software Download Request";
            message.Body = mailbody;
            message.BodyEncoding = Encoding.UTF8;
            message.IsBodyHtml = false;
               
            System.Net.NetworkCredential basicCredential1 = new
            System.Net.NetworkCredential("pareektarunsss@gmail.com", "Tarunss11@");

            client.EnableSsl = true;
            client.UseDefaultCredentials = true;
            client.Credentials = basicCredential1;
        }
        public void Send()
        {
            try
            {
                client.Send(message);
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
