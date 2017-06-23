'use-strict'

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var creds = require('../config/watson_creds');

exports.get_watson_home = function (req, res, next) {
  let files = ["/public/it_stood_motionless.txt", "public/purpose.txt"]
  res.render('index', {
    files: files
  });
}

exports.analyze_tone = function (req, res, next) {
  let tone_analyzer = new ToneAnalyzerV3({
    username: creds.tone_username,
    password: creds.tone_password,
    version_date: '2016-05-19'
  });

  let jsonStr = {
    text: req.body.text
  }

  let params = {
    text: JSON.stringify(jsonStr)
  };

  tone_analyzer.tone(params, function (error, data) {
    if (error)
      console.log('error:', error);
    else
      res.send(prepToneResults(data));
  });
}

function prepToneResults(data) {
  let toneResults = {};
  let tones = data.document_tone.tone_categories;
  // organize data for chartist on the front end
  let updateData = {
    labels: [],
    series: [[]]
  };
  for (let i = 0; i < tones.length; i++) {
    for (let k = 0; k < tones[i].tones.length; k++) {
      let buff = tones[i].tones;
      // Change "Emotional Range" to "Neuroticism"
      if (buff[k].tone_name === "Emotional Range")
        updateData.labels.push("Neuroticism");
      else
        updateData.labels.push(buff[k].tone_name);
      updateData.series[0].push(buff[k].score * 100);
    }
    updateData.labels.push("");
    updateData.series[0].push(0);
    toneResults[tones[i].category_id] = updateData;
    // clear updateData for next category
    updateData = {
      labels: [],
      series: [[]]
    }
  }
  return toneResults;
}