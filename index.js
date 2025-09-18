var http = require("http");
const employees = require("./Employee");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    }

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Welcome to Lab Exercise 03</h1>");
    } 
    if (req.url === '/employee') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(employees));
    }

    if (req.url === '/employee/names') {
        res.setHeader('Content-Type', 'application/json');
        const employeeNames = employees.map(emp => `${emp.firstName} ${emp.lastName}`).sort();
        res.end(JSON.stringify(employeeNames));
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
        }

    if (req.url === '/employee/totalsalary') {
        res.setHeader('Content-Type', 'application/json');
        const totalSalary = employees.reduce((acc, emp) => acc + emp.Salary, 0);
        res.end(JSON.stringify({ total_salary: totalSalary }));
            //e.g. { "total_salary" : 100 }  
    }

    res.statusCode = 404;
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})