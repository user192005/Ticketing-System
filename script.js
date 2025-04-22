function showDetails(title, description, price, image) {
    // Set the modal content
    document.getElementById('ticketTitle').textContent = title;
    document.getElementById('ticketDescription').textContent = description;
    document.getElementById('ticketPrice').textContent = price;
    
    // Display the modal
    document.getElementById('ticketModal').style.display = 'flex';
  }
  
  function closeModal() {
    // Hide the modal when the close button is clicked
    document.getElementById('ticketModal').style.display = 'none';
  }
  
  function bookTicket() {
    // Simulate a booking confirmation
    alert('Ticket booked successfully!');
    closeModal();

  }
  function add_to_cart(){
    alert('Added To Cart')
  }
  
  