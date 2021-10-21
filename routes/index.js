var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

router.post('/story', function(req, res, next) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})









function getStory(formData){
  if (formData.storyChoice ==="1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2"){
    return generateStory2(formData);
  } else if (formData.storyChoice === "3"){
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `Twas a dark and stormy ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}! I could hear the storms above us, they were really ${formData.adjective2}. I just wanted to go to ${formData.noun2} but my Mom said no. I just stayed home and started to ${formData.verb2}.`
}

function generateStory2(formData){
  return `Twas a cold and wintery ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}! I started to ${formData.verb2} in the snow. After I got bored, i went to my house and it was really ${formData.adjective2}. For a while, we sat in my house but then we went to ${formData.noun2}.`
}

function generateStory3(formData){
  return `Twas a rainy and cold ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}! It was so cold that I started to ${formData.noun2}. I ${formData.verb2} to my house for shelter. When I got in my house, it felt so ${formData.adjective2}.`
}
