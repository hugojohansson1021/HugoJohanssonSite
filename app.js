
console.log('Script loaded');

////MOBILE NAV BAR
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar')

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click',mobileMenu);


// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#tjanster-page');
    const servicesMenu = document.querySelector('#priser-page');
    const kontaktaMenu = document.querySelector('#kontakta-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
      aboutMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      servicesMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 3000) {
      servicesMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    }else if (window.innerWidth > 960 && scrollPos < 3000) {
      kontaktaMenu.classList.add('highlight');
      servicesMenu.classList.remove('highlight');
      return;
    }
  
    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
    }
  };
  
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);
  
  //  Close mobile Menu when clicking on a menu item
  const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);
  
  




  /// discord api element 
// Discord API element

// Define the WEBHOOK_URL at the top of your script
const WEBHOOK_URL = "https://discord.com/api/webhooks/1170204381573038190/vrFb4wk-g8T5U5sNC5SUSrAk9zXaenZ2YvBAiiys6mytJ98-PlxztS1Nzn92auWQgRhu";

// Rest of your JavaScript code...
document.addEventListener('DOMContentLoaded', (event) => {
  const sendMessageButton = document.getElementById('sendMessage');
  const messageInput = document.getElementById('messageInput');

  messageInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Förhindra standardbeteende så som att skicka ett formulär
      sendDiscordMessage(messageInput.value); // Skicka meddelandet
    }
  });

  sendMessageButton.addEventListener('click', function() {
    sendDiscordMessage(messageInput.value);
  });
});

function sendDiscordMessage(message) {
  // Kontrollera att meddelandet inte bara är whitespace
  if (!message.trim()) {
    alert('Vänligen skriv ett meddelande.');
    return;
  }

  // Din webhook URL
  const WEBHOOK_URL = "https://discord.com/api/webhooks/...";
  
  // Använd WEBHOOK_URL i din fetch-anrop
  fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: message
    }),
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    console.log('Success:', data);
    document.getElementById('messageInput').value = ''; // Rensa inputfältet
    alert('Meddelande skickat till Hugos mobil'); // Visa bekräftelse
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('Det gick inte att skicka meddelandet.'); // Visa felmeddelande
  });
}



// Rest of your JavaScript code...

// Define your sendDiscordMessage function
function sendDiscordMessage(message) {
  // Define the WEBHOOK_URL inside the function
  const WEBHOOK_URL = "https://discord.com/api/webhooks/1170204381573038190/vrFb4wk-g8T5U5sNC5SUSrAk9zXaenZ2YvBAiiys6mytJ98-PlxztS1Nzn92auWQgRhu";

  // Use the WEBHOOK_URL in your fetch call
  fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          content: message
      }),
  })
  .then(response => {
      if (response.ok) {
          if(response.status === 204) {
              return; // No content to parse, so we just return immediately
          }
          return response.json(); // Otherwise, we parse the JSON
      }
      throw new Error('Network response was not ok.');
  })
  .then(data => {
      if (data) {
          console.log('Success:', data);
      }
      document.getElementById('messageInput').value = ''; // Clear the input field immediately
      alert('Meddelande skickat till Hugos mobil'); // Show alert after clearing the input
  })
  .catch((error) => {
      console.error('Error:', error);
      alert('Det gick inte att skicka meddelandet.'); // Show error alert to the user
  });
}



// Hämta alla priser_card-element
const priserCards = document.querySelectorAll('.priser_card');

// Lägg till klickhändelser för varje priser_card
priserCards.forEach(card => {
    card.addEventListener('click', () => {
        // Hämta URL från data-attributet
        const url = card.getAttribute('data-url');
        
        // Öppna länken i en ny flik
        window.open(url, '_blank');
    });
});
