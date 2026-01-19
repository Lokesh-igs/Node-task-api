Step 1:
 npm install 
Step:2
Run using this command : node index.js


Steps to test the apis using postman

1.To get the list of tasks

    Method:Get
    URL:http://localhost:4200/tasks
    
2.To create the task
  title is required 
  priority should be this three cate only :low or medium or high
  description is optional
  completed is a bollean which will be false as default when create

    Method:Post 
    URL:http://localhost:4200/tasks
    Body:{
        "title": "Learn Node 4",
        "priority": "high"
        }
    Response:{
    "id": 4,
    "title": "Learn Node 4",
    "description": "",
    "completed": false,
    "priority": "high"
}

3.To get particular task based on id 
    Method:Get
    URL:http://localhost:4200/tasks/1
    response:particular obj will be list

4.To update the task as completed
    Method:Put
    Body:{
    "completed": true
    }
    URL:http://localhost:4200/tasks/1
    response:{
    "id": 3,
    "title": "Learn Node 3",
    "description": "",
    "completed": true,
    "priority": "high"
    }
5.To delete the task which we created

    Method:delete
    URL:http://localhost:4200/tasks/1
    Response:success response

6.To filter the completed task list based on true or false 

    Method:get
    URL:http://localhost:4200/tasks?completed=false


