/* Background and general styling */
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #1e3c72, #2a5298);
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

/* Wrapper to center content */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

/* Canvas styling */
canvas {
    border: 3px solid white;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.3);
    background-color: black;
}

/* Back link styling */
.back-link {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    background: #ff9800;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s;
}

.back-link:hover {
    background: #e68900;
}
