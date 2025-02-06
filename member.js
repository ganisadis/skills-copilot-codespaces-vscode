function skillsMember() {
  const member = document.getElementById('member');
  const memberSkills = document.getElementById('member-skills');
  member.addEventListener('click', () => {
    if (memberSkills.style.display === 'none') {
      memberSkills.style.display = 'block';
    } else {
      memberSkills.style.display = 'none';
    }
  });
}