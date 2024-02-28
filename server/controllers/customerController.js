




exports.homepage = async (req, res) => {



 const locals = {
    title: 'NodeJs',
      description: 'FREE nodejs user management system'
  }
  res.render('index',locals);
}
exports.addCustomer = async (req, res) => {



  const locals = {
     title: 'add',
       description: 'FREE nodejs user management system'
   }
   res.render('customer/add',locals);
 }