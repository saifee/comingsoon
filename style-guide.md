/* Importing the Josefin Sans font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap');

:root {
  /* Primary Colors */
  --desaturated-red: hsl(0, 36%, 70%);
  --soft-red: hsl(0, 93%, 68%);

  /* Neutral Colors */
  --dark-grayish-red: hsl(0, 6%, 24%);

  /* Gradients */
  --gradient-1: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
  --gradient-2: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));

  /* Typography */
  --body-font-size: 16px;
  --font-family: 'Josefin Sans', sans-serif;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
}

body {
  font-family: var(--font-family);
  font-size: var(--body-font-size);
  color: var(--dark-grayish-red);
  background: var(--gradient-1);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Responsive Design */
@media (max-width: 375px) {
  body {
    padding: 20px;
  }
}

@media (min-width: 1440px) {
  body {
    padding: 40px;
  }
}

/* Example Classes */
.primary-button {
  background-color: var(--soft-red);
  color: white;
  font-weight: var(--font-weight-bold);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.primary-button:hover {
  background-color: var(--desaturated-red);
}

.header {
  text-align: center;
  background: var(--gradient-2);
  padding: 20px;
}

.header h1 {
  font-weight: var(--font-weight-bold);
}

/* Ensure content is responsive */
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 320px) {
  .container {
    padding: 0 10px;
  }
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
}

.card h2 {
  font-weight: var(--font-weight-regular);
}

.card p {
  font-weight: var(--font-weight-light);
}
