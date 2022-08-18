const ContactModel = require("../../models/Contact");
class ContactController {
  static contact = (req, res) => {
    res.render("admin/Contact/createcontact");
  };

  static InsertContact = async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      const result = new ContactModel({
        name: name,
        phone: phone,
        email: email,
        message: message,
      });
      //saving data
      await result.save();
      res.redirect("/contact");
    } catch (err) {
        console.log(err);
      }
    };
    // DisplayContact
    static DisplayContact = async (req, res) => {
      try {
        const result = await ContactModel.find();
        console.log(result);
        res.render("admin/Contact/displaycontact", { data: result });
      } catch (err) {
        console.log(err);
      }
    };
  static DeleteContact = async (req, res) => {
      // console.log(req.params.id);
      //  console.log(req.body);
  
      try {
        //console.log(req.params.id);
        const result = await ContactModel.findByIdAndDelete(req.params.id);
        //  console.log(result);
        res.redirect("/contactdisplay");
        // ye render m path sahi daalna h
      } catch (err) {
        console.log(err);
      }

    };
    static ViewContact = async (req, res) => {
      try {
        const result = await ContactModel.findById(req.params.id);
        console.log(result);
        res.render("admin/Contact/a", { data: result });
      } catch (err) {
        console.log(err);
      }
    };

  }
  
  module.exports = ContactController;