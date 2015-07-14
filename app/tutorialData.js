var tutorialData = [{
  id: 1,
  title: 'Q1',
  question: 'First, we will need the sky. What color would you like the sky to be?',
  answerOptions: ['lightblue', 'dodgerblue', 'pink', 'mediumpurple',
    'darkslateblue'
  ],
  selectedAnswer: '',
  editorCSS: '.sky {background-color:lightblue, width: 100%, height: 400px}',
  editorHTML: '<div class="sky"></div>',
  questionPosition: 1,
  nextQuestionId: 2
}, {
  id: 2,
  title: 'Q2',
  content: 'Next, we will need the ground',
  editorCSS: '.ground {background-color:brown, width: 100%, height: 400px}',
  editorHTML: '<div class="ground"></div>',
  questionPosition: 2,
  nextQuestionId: 3
}, ];
