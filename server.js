const express = require('express');
const port = 3075;
const app = express();
app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('Hello, Server!');
});
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});



  const cron = require('node-cron');

  const task = cron.schedule('* * * * *', () => {
      console.log("Задача выполняется каждую минуту");

  task.start();
  console.log("Задача cron запущена");
  
  setTimeout(() => {
      task.stop();
      console.log("Задача cron остановлена");
  }, 30000);
  });
  
 
  

  let TaskRun = false;

  const Task = () => {
      if (TaskRun = false) {
          console.log("Задача уже выполняется, новую задачу нельзя запустить.");
      }
    
     
     else if  (TaskRun = true) {
        console.log("Запуск задачи"); 
      }
    }
  
  







