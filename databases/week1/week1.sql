use hyf19;

-- 1. Find out how many tasks are in the task table --
 SELECT COUNT(id) AScountALLTask FROM task;
-- Result: 35 --

-- 2. Find out how many tasks in the task table do not have a valid due date --
 SELECT COUNT(id) AScount FROM task WHERE due_date IS NULL;
-- Reslut: 8 -- 

-- 3. Find all the tasks that are marked as done -- 
 SELECT task.title, status.id FROM task INNER JOIN status ON status.id = task.status_id WHERE status.name="done";
-- Result: 12 rows returned--

-- 4. Find all the tasks that are not marked as done--
 SELECT task.title, status.id FROM task INNER JOIN status ON status.id = task.status_id WHERE NOT status.name="done";

-- 5. Get all the tasks, sorted with the most recently created first--
 SELECT * FROM task ORDER BY created DESC;
-- Result : recently created 2017-10-30 09:47:00 --

-- 6. Get the single most recently created task--
 SELECT *FROM task ORDER BY created DESC LIMIT 1; 
 -- Result: most recently created 2017-10-30 09:47:00--
   
-- 7. Get the title and due date of all tasks where the title or description contains database--
 SELECT title, due_date from task  WHERE title LIKE "%database%" OR description LIKE "%database%";
    
-- 8. Get the title and status (as text) of all tasks -- 
 SELECT task.title, status.name FROM task INNER JOIN status ON task.status_id = status.id;
   
-- 9. Get the name of each status, along with a count of how many tasks have that status--
 SELECT status.name, count(task.status_id) AS count FROM task INNER JOIN status ON status.id = task.status_id GROUP BY status.name;
-- Result :  Not started: 8, In progress: 15, Done: 12--

-- 10. Get the names of all statuses, sorted by the status with most tasks first--
SELECT status.name, 
    count(*)AS task_count
    FROM task
    INNER JOIN status ON status.id = task.status_id
    GROUP BY status.id -- it's good to use primary key GROUP BY status.id instead of status.name
    ORDER BY task_count DESC;
-- result: In progress: 15, Done: 12, Not started: 8 
