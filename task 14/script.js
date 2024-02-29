document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const fields = form.querySelectorAll('input[type="text"], input[type="email"]');
    
    for (let field of fields) {
      const savedValue = localStorage.getItem(field.id);
      if (savedValue !== null) {
        field.value = savedValue;
      }
    }
    
    function throttle(func, limit) {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }
    function clearLocalStorage() {
        localStorage.clear();
      }
      document.getElementById('clearButton').addEventListener('click', function() {
        clearLocalStorage();
      });
      
    const saveToLocalStorage = throttle(function() {
      for (let field of fields) {
        localStorage.setItem(field.id, field.value);
      }
    }, 1000);
  
    form.addEventListener('input', saveToLocalStorage);
    
  });
  