body {
  background-color: #000;
  font-family: Arial, sans-serif;
  color: white;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-container {
  background-color: #ffc107;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  width: 90%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: white;
}

label {
  display: block;
  margin-top: 15px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
}

textarea {
  height: 100px;
  resize: none;
}

button {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background-color: white;
  color: #ffc107;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #f0f0f0;
}