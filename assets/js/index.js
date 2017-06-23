function initCharts() {
  let charts = [chart1, chart2, chart3];

  for (let i = 0; i < charts.length; i++) {
    // Animate on draw
    charts[i].on('draw', function (data) {
      if (data.type === 'bar') {
        data.element.animate({
          x2: {
            dur: 1000,
            from: data.x1,
            to: data.x2,
            easing: Chartist.Svg.Easing.easeOutQuint
          },
          opacity: {
            dur: 1000,
            from: 0,
            to: 1,
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
        data.element.attr({
          style: 'stroke: hsl(' + Math.floor(Chartist.getMultiValue(data.value.x) / 100 * 100) + ', 50%, 50%);'
        });
      }
    });
  }
}

function resetCharts() {
  chart1.update({
    labels: ["Anger", "Disgust", "Fear", "Joy", "Sadness", ""],
    series: [[0, 0, 0, 0, 0, 0]]
  });

  chart2.update({
    labels: ["Tentative", "Confident", "Analytical", ""],
    series: [[0, 0, 0, 0]]
  });

  chart3.update({
    labels: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism", ""],
    series: [[0, 0, 0, 0, 0, 0]]
  });
}

function submitText() {
  const form = document.querySelector('#input-text-form');
  const inputText = document.querySelector('#input-text');
  resetCharts();
  getToneResults(inputText.value);
};

function clientInputCheck() {

}

function getToneResults(text) {
  $.ajax({
    type: 'POST',
    url: '/watson/tone',
    data: { text: text },
    success: function (data) {
      console.log(data);
      updateCharts(data);
    },
    error: function (error) {
      console.log(error)
    }
  });
}

function updateCharts(data) {
  chart1.update(data["emotion_tone"]);
  chart2.update(data["language_tone"]);
  chart3.update(data["social_tone"]);
}