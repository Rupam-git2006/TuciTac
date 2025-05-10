  
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Logout functionality
        const logoutBtn = document.getElementById('logoutBtn');
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Logout Successfully!!');
             window.location.href = 'login.html';
        });

        // Export button functionality
        const exportBtn = document.getElementById('exportBtn');
        exportBtn.addEventListener('click', () => {
           
        });
     