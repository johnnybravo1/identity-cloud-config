 if (newObject.password != oldObject.password) {

    data = {
        "url": "https://ptsv3.com/t/pushtest/",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Accept-Language": "en-US"
        },
        "body": JSON.stringify(object._id)
    };


   var response = openidm.action("external/rest", "call", data);
  
  logger.info("xxxx Response code is: " + response.code);
  logger.info("xxxx Response body is: " + response.body);
  logger.info("xxxx oldpass= " + oldObject.password + " newpass= " + newObject.password);
  
  if (response.code != "200") {
  logger.info("xxxx Bad response!! Code: " + response.code);
}
  }
  

