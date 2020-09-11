const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Ijgvjodg77!",
    database: "employee_trackerdb"
  });

  // connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    employeePrompt();
  });
//Command line application that allows the user to Add department, roles, and employees.
        //View departments and employees
        //update employee roles

        function employeePrompt() {
            inquirer.prompt([{
                type: "list",
                message: "What would you like to do?",
                name: "start",
                choices: [ 
                    "Add department",
                    "Add role",
                    "Add employee",
                    "View all departments",
                    "View all employees",
                    "Update employee roles"
            ]
            }
            ]).then(function (userInput) {
                switch (userInput.start) {
                case "Add department":
                    addDepartment();
                break;

                case "Add role":
                    addRole();
                break;

                case "Add employee":
                    addEmployee();
                break;

                case "View all departments":
                    viewDepartment();
                break;

                case "View all employees":
                    viewEmployees();
                break;

                case "Update employee roles":
                    updateRoles();
                break;
                }

                
            })
        }

        const addDepartment = () => {
            
        }
        const addRole = () => {
            let query = "SELECT * FROM department;"
            let roles = [];
            connection.query(query, function (err, res) {
                console.log(res);
                if (err) return err;
                let deptChoice = res.map(({ id, name}) => ({
                    name: name,
                    value: id
                }))
                roles.push(deptChoice)
                
            })
            inquirer.prompt([
                {
                    type: "input",
                    name: "Title",
                    message: "Enter employee title:"
                },
                {
                    type: "input",
                    name: "Salary",
                    message: "Enter salary",
                },
                {
                    type: "list",
                    name: "Dept_ID",
                    message: "Select Department:",
                    choices: roles,
                }
            ])
        }
        const addEmployee = () => {

        }
        const viewDepartment = () => {
            connection.query("SELECT * FROM employee_tracker.department;", function (
                err,
                results
            ) {
                for(var i=0; i < results.length; i++) {
                console.table([
                    {
                        Id: results[i].id,
                        Deparment: results[i].name
                    }
                ]);
            }
                if (err) throw err;
            })
        }
        
        const viewEmployees = () => {
            connetion.query("SELECT * FROM employee_tracker.department;", function (
                err,
                results
            ) {
                for(var i=0; i < results.length; i++) {
                    console.table([
                    {
                        Id: results[i].id,
                        Title: results[i].title,
                        Salary: results[i].salary,
                        Department_ID: results[i].department_id
                    }
                ])
            }
            if (err) throw err;
            })
        }

        const updateRoles = () => {
            
        }