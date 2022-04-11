(function() {
  const questions = document.querySelectorAll('.question');
  let openedTab = null;
  questions.forEach(question => {
      question.addEventListener('click', handleQuestionClick)
  })
  
  function handleQuestionClick(e) {
      if(openedTab) {
          closeTab(openedTab);
          flipArrow(openedTab);
          if(openedTab === e.target) {
              openedTab = null;
          }
          else {
              openTab(e.target);
              flipArrow(e.target);
              openedTab = e.target;
          }
      }
      else {
          openTab(e.target);
          flipArrow(e.target);
          openedTab = e.target;
      }
  }
  
  function openTab(question) {
      let answer = question.nextElementSibling;
      console.log('open this');
      console.log(answer);
      answer.classList.remove('collapse');
      answer.classList.add('collapsing');
      answer.classList.add('show');
      setTimeout(() => {
          answer.classList.remove('collapsing');
      }, 500);
  }
  
  function closeTab(question) {
      let answer = question.nextElementSibling;
      console.log('close this');
      console.log(answer);
      answer.classList.remove('show');
      answer.classList.add('collapsing');
      answer.classList.add('collapse');
      setTimeout(() => {
          answer.classList.remove('collapsing');
      }, 500);
  }
  
  function flipArrow(question) {
      console.log('flip arrow');
      question.classList.toggle('flip');
  }
})();