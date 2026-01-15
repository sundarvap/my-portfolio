 // Simple JavaScript for smooth scrolling
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href'))
                    .scrollIntoView({ behavior: 'smooth' });
            });
        });
		
		function addRecommendation() {
			const text = document.getElementById("rec-text").value.trim();
			const author = document.getElementById("rec-author").value.trim();

			if (text === "" || author === "") {
				alert("Please enter both recommendation and name.");
				return;
			}

			// Show confirmation popup before adding
			const isConfirmed = confirm("Are you sure you want to submit this recommendation?");
			if (!isConfirmed) {
				return; // User cancelled submission
			}

			// Create new recommendation card
			const recCard = document.createElement("div");
			recCard.className = "recommendation-card";

			recCard.innerHTML = `
				<p>“${text}”</p>
				<span>– ${author}</span>
			`;

			// Append to existing list (does NOT replace)
			document.getElementById("recommendations").appendChild(recCard);

			// Clear inputs
			document.getElementById("rec-text").value = "";
			document.getElementById("rec-author").value = "";

			// Success message
			alert("Recommendation submitted successfully!");
		}