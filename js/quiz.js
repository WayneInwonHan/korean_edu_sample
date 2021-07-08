$('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': '다음 중 옳은 표현은?',
        'options': [
          '아버지가 방에 들어가신다',
          '아버지 가방에 들어가신다'
        ],
        'correctIndex': 0,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Umm.. I guess you didn\'t study at all..'
      },
      {
        'q': '다음 중 과 "I\'m terribly sleepy" 가장 유사한 표현은?',
        'options': [
          '나는 지금 내가 코드인지 코드가 나인지 모르겠다',
          '나는 지금 힘이 넘쳐 밤을 샐 수 있겠다',
          '나는 지금 졸려서 고개가 의자 옆으로 넘어간다'
        ],
        'correctIndex': 2,
        'correctResponse': 'Zzz.. I\'m still alive',
        'incorrectResponse': 'Zzz.. I\'m still alive'
      },
      {
        'q': '아래 중 옳은 표현은',
        'options': [
          '나는 지금 배가 고프다',
          '나는 고프다 배가 지금'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct! Gimme some food!',
        'incorrectResponse': 'Incorrect! Gimme some food!'
      },
      {
        'q': '정답인 듯하면서 정답이 아닌 것 같으면서 정답인 것은?',
        'options': [
          '정댭',
          '졍답',
          '정답'
        ],
        'correctIndex': 2,
        'correctResponse': '정답',
        'incorrectResponse': '정답'
      }
    ]
  });