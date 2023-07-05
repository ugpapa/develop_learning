// Declare a variable 'logged' without initializing it
let logged;

// Define a function 'sendAnalytics' that takes a string 'data' as an argument 
// and logs it to the console. After logging, it sets the 'logged' variable to true.
function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
}

// Call the 'sendAnalytics' function with 'The data' as its argument
sendAnalytics('The data');
