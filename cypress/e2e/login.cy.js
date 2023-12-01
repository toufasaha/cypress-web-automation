import LoginPage from "../../Pages/LoginPage.cy";
import Appointment from "../../Pages/AppointmentPage.cy";

describe('login suite', () => {
   const loginPage = new LoginPage();
   const appointment = new Appointment();

     it("Testing with invalid credentials", () => {
     loginPage.login("standard_user", "secret_sauce");
    
     })

   it("Testing with valid credentials", () => {
     loginPage.login("John Doe", "ThisIsNotAPassword");
     appointment.appointment();
   })

   

  })

  
  
