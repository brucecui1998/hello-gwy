document.addEventListener('DOMContentLoaded', () => {
    const questionTypeButton = document.getElementById('question-type-button');
    const questionList = document.getElementById('question-list');
    const dropdownMenu = document.getElementById('dropdown-menu');
  
    questionTypeButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
    });
  
    dropdownMenu.addEventListener('click', (event) => {
      const selectedType = event.target.textContent;
      questionTypeButton.textContent = selectedType;
      dropdownMenu.classList.remove('show');
      questionList.innerHTML = ''; // 清空现有题目列表
  
      if (selectedType) {
        // 根据选中的题单类型显示相应的题目列表
        const questions = getQuestionsByType(selectedType);
        questions.forEach(question => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>状态</td>
            <td>${question.title}</td>
            <td>题解</td>
            <td>通过率</td>
            <td>难度</td>
            <td>出现频率</td>
          `;
          questionList.appendChild(row);
        });
      }
    });
  
    function getQuestionsByType(type) {
      // 模拟题目数据，根据实际情况替换
      const allQuestions = {
        '资料分析': [
          { title: '资料分析题目1' },
          { title: '资料分析题目2' }
        ],
        '判断推理': [
          { title: '判断推理题目1' },
          { title: '判断推理题目2' }
        ],
        '常识': [
          { title: '常识题目1' },
          { title: '常识题目2' }
        ],
        '言语理解与表达': [
          { title: '言语理解与表达题目1' },
          { title: '言语理解与表达题目2' }
        ],
        '数量关系': [
          { title: '数量关系题目1' },
          { title: '数量关系题目2' }
        ]
      };
  
      return allQuestions[type] || [];
    }
  });
  