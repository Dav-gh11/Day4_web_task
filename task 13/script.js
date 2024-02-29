const tabContent = {
    tab1: "Content for About",
    tab2: "Content for Tools",
    tab3: "Content for Support"
  };
  
  function handleTabClick(event) {
    const tabId = event.target.getAttribute('data-tab');
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active');
    });
    event.target.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(tabId).innerHTML = tabContent[tabId];
    document.getElementById(tabId).classList.add('active');
  }
  
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', handleTabClick);
  });
  
  document.getElementById('tab1').innerHTML = tabContent.tab1;
  document.querySelector('[data-tab="tab1"]').classList.add('active');
  document.getElementById('tab1').classList.add('active');
  