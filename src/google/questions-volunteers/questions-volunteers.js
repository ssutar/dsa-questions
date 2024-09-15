/**
 * questions[
{id:1, tags: ["MAC", "VSCODE"]},
{id:2, tags: ["PY", "AI"]}
{id:3, tags: ["JAVA", "OS"]}
{id:4, tags: ["PY", "NW"]}
]

Volunteer[
{id: "1", tags:["PY",""NW], name: "A"},
{id: "2", tags:["AI"], name: "B"},
{id: "3", tags:["JAVA","NW], name: "C"},
{id: "4", tags:["JAVA","NW"], name: "D"}
]

Assign question to volunteers such that each question is assigned to at most one volunteer based on tags match.
One volunteer can take at most one question and maximise the question assigned to volunteer.

for this example
A can take question 4(PY match)
B can take question 2(AI match)
C can take question 3(Java match)
Question one no one can take as not match.
 */

function questionsVolunteers(questions, volunteers) {
  const assignments = {};

  function isTagMatching(question, volunteer) {
    for (let t of question.tags) {
      if (volunteer.tags.includes(t)) {
        return true;
      }
    }
    return false;
  }

  function traverse(question, visited) {
    for (let volunteer of volunteers) {
      if (isTagMatching(question, volunteer) && !visited[volunteer.id]) {
        visited[volunteer.id] = true;
        if (
          !assignments[volunteer.name] ||
          traverse(assignments[volunteer.name], visited)
        ) {
          assignments[volunteer.name] = question;
          return true;
        }
      }
    }
    return false;
  }

  for (let question of questions) {
    traverse(question, {});
  }

  return assignments;
}

console.log(
  questionsVolunteers(
    [
      { id: 1, tags: ['MAC', 'VSCODE'] },
      { id: 2, tags: ['PY', 'AI'] },
      { id: 3, tags: ['JAVA', 'OS'] },
      { id: 4, tags: ['PY', 'NW'] },
    ],
    [
      { id: '1', tags: ['PY', 'NW'], name: 'A' },
      { id: '2', tags: ['AI'], name: 'B' },
      { id: '3', tags: ['JAVA', 'NW'], name: 'C' },
      { id: '4', tags: ['JAVA', 'NW'], name: 'D' },
    ]
  )
);
